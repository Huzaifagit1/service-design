-- Execute this in the Supabase SQL Editor

-- Create a user_roles table if it doesn't exist
CREATE TABLE IF NOT EXISTS user_roles (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL UNIQUE,
  description TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Insert base roles if they don't exist
INSERT INTO user_roles (name, description)
VALUES 
  ('admin', 'Administrator with full access'),
  ('customer', 'Regular customer account')
ON CONFLICT (name) DO NOTHING;

-- Create a user_role_assignments table for many-to-many relationship
CREATE TABLE IF NOT EXISTS user_role_assignments (
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  role_id INTEGER NOT NULL REFERENCES user_roles(id) ON DELETE CASCADE,
  assigned_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  PRIMARY KEY (user_id, role_id)
);

-- Function to handle new user creation and role assignment
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  -- Assign default customer role if not already assigned
  INSERT INTO public.user_role_assignments (user_id, role_id)
  VALUES (new.id, (SELECT id FROM public.user_roles WHERE name = 'customer'))
  ON CONFLICT (user_id, role_id) DO NOTHING;
  
  RETURN new;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Trigger for new user sign-ups
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE PROCEDURE public.handle_new_user();

-- Create function to get user role
CREATE OR REPLACE FUNCTION public.get_user_role(user_id UUID)
RETURNS TEXT AS $$
DECLARE
  role_name TEXT;
BEGIN
  SELECT r.name INTO role_name
  FROM user_roles r
  JOIN user_role_assignments a ON r.id = a.role_id
  WHERE a.user_id = $1
  ORDER BY r.id ASC
  LIMIT 1;
  
  RETURN COALESCE(role_name, 'customer');
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create function to check if authenticated user is an admin
CREATE OR REPLACE FUNCTION public.is_admin()
RETURNS BOOLEAN AS $$
BEGIN
  RETURN public.get_user_role(auth.uid()) = 'admin';
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Add RLS policies to protect role tables
ALTER TABLE user_roles ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_role_assignments ENABLE ROW LEVEL SECURITY;

-- Create policies for admin access to roles
CREATE POLICY "Anyone can view roles" 
  ON user_roles FOR SELECT 
  USING (true);

CREATE POLICY "Only admins can manage roles" 
  ON user_roles FOR ALL
  USING (public.is_admin());

-- Policies for role assignments
CREATE POLICY "Only admins can view role assignments" 
  ON user_role_assignments FOR SELECT
  USING (public.is_admin());

CREATE POLICY "Only admins can manage role assignments" 
  ON user_role_assignments FOR ALL
  USING (public.is_admin());

-- Create additional policies for the existing tables to allow admin access

-- Assign admin role to current user (uncomment and use for the first admin)
-- INSERT INTO user_role_assignments (user_id, role_id) 
-- VALUES (auth.uid(), (SELECT id FROM user_roles WHERE name = 'admin'))
-- ON CONFLICT (user_id, role_id) DO NOTHING;

-- Grant anon and authenticated roles access to the functions
GRANT EXECUTE ON FUNCTION public.get_user_role(UUID) TO anon, authenticated;
GRANT EXECUTE ON FUNCTION public.is_admin() TO anon, authenticated;

-- Function to set up MCP access for the current session
CREATE OR REPLACE FUNCTION public.setup_mcp_access()
RETURNS BOOLEAN AS $$
BEGIN
  -- This function can be called to enable MCP access for the current session
  -- It doesn't need to do anything specific, just needs to exist and be callable
  RETURN true;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Grant execute permission on the MCP access function
GRANT EXECUTE ON FUNCTION public.setup_mcp_access() TO anon, authenticated;

-- Create policy to allow MCP to read all tables
ALTER TABLE IF EXISTS customers ENABLE ROW LEVEL SECURITY;
CREATE POLICY IF NOT EXISTS "MCP can read customers" ON customers FOR SELECT USING (true);

ALTER TABLE IF EXISTS orders ENABLE ROW LEVEL SECURITY;
CREATE POLICY IF NOT EXISTS "MCP can read orders" ON orders FOR SELECT USING (true);

ALTER TABLE IF EXISTS packages ENABLE ROW LEVEL SECURITY;
CREATE POLICY IF NOT EXISTS "MCP can read packages" ON packages FOR SELECT USING (true);

ALTER TABLE IF EXISTS package_features ENABLE ROW LEVEL SECURITY;
CREATE POLICY IF NOT EXISTS "MCP can read package_features" ON package_features FOR SELECT USING (true);

ALTER TABLE IF EXISTS invoices ENABLE ROW LEVEL SECURITY;
CREATE POLICY IF NOT EXISTS "MCP can read invoices" ON invoices FOR SELECT USING (true);

ALTER TABLE IF EXISTS websites ENABLE ROW LEVEL SECURITY;
CREATE POLICY IF NOT EXISTS "MCP can read websites" ON websites FOR SELECT USING (true);

ALTER TABLE IF EXISTS templates ENABLE ROW LEVEL SECURITY;
CREATE POLICY IF NOT EXISTS "MCP can read templates" ON templates FOR SELECT USING (true);

ALTER TABLE IF EXISTS pages ENABLE ROW LEVEL SECURITY;
CREATE POLICY IF NOT EXISTS "MCP can read pages" ON pages FOR SELECT USING (true);

ALTER TABLE IF EXISTS media_library ENABLE ROW LEVEL SECURITY;
CREATE POLICY IF NOT EXISTS "MCP can read media_library" ON media_library FOR SELECT USING (true);

ALTER TABLE IF EXISTS services ENABLE ROW LEVEL SECURITY;
CREATE POLICY IF NOT EXISTS "MCP can read services" ON services FOR SELECT USING (true);

ALTER TABLE IF EXISTS availability ENABLE ROW LEVEL SECURITY;
CREATE POLICY IF NOT EXISTS "MCP can read availability" ON availability FOR SELECT USING (true);

ALTER TABLE IF EXISTS bookings ENABLE ROW LEVEL SECURITY;
CREATE POLICY IF NOT EXISTS "MCP can read bookings" ON bookings FOR SELECT USING (true);

ALTER TABLE IF EXISTS subscriptions ENABLE ROW LEVEL SECURITY;
CREATE POLICY IF NOT EXISTS "MCP can read subscriptions" ON subscriptions FOR SELECT USING (true);