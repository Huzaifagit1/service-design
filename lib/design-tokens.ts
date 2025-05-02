/**
 * Design Tokens - Centralized management of colors, spacing, and other design values
 * 
 * This file provides a single source of truth for design tokens used throughout the application.
 * Use these tokens instead of hardcoded values to maintain consistency.
 */

/**
 * Color tokens - Use these references instead of hardcoded color values
 */
export const colors = {
  // Brand colors - mapped to CSS variables defined in globals.css
  brand: {
    primary: 'hsl(var(--primary))',
    secondary: 'hsl(var(--secondary))',
    accent: 'hsl(var(--accent))',
    muted: 'hsl(var(--muted))',
    background: 'hsl(var(--background))',
    foreground: 'hsl(var(--foreground))',
    card: 'hsl(var(--card))',
    cardForeground: 'hsl(var(--card-foreground))',
    border: 'hsl(var(--border))',
    input: 'hsl(var(--input))',
    ring: 'hsl(var(--ring))',
  },

  // Status colors for indicators, alerts, badges
  status: {
    success: 'hsl(var(--success))',
    error: 'hsl(var(--destructive))',
    warning: 'hsl(var(--warning))',
    info: 'hsl(210, 100%, 50%)',
  },

  // Payment provider colors
  providers: {
    stripe: {
      light: '#6772e5',
      dark: '#5469d4',
    },
    paypal: {
      light: '#0070ba',
      dark: '#003087',
    },
  },

  // Chart and data visualization colors
  chart: {
    blue: '#3366CC',
    green: '#2A9D8F',
    red: '#E63946',
    gray: '#94a3b8',
    purple: '#8884d8',
    // Default palette for charts
    palette: [
      '#3366CC',
      '#2A9D8F',
      '#E63946',
      '#94a3b8',
      '#8884d8',
    ],
  },

  // Industry specific theme colors
  industry: {
    plumbing: {
      from: 'hsl(214, 100%, 60%)',
      to: 'hsl(0, 0%, 40%)',
    },
    beauty: {
      from: 'hsl(326, 100%, 60%)',
      to: 'hsl(270, 100%, 60%)',
    },
    cleaning: {
      from: 'hsl(214, 100%, 60%)',
      to: 'hsl(142, 76%, 36%)',
    },
    electrical: {
      from: 'hsl(38, 100%, 50%)',
      to: 'hsl(25, 100%, 50%)',
    },
    servicesPro: {
      from: 'hsl(255, 100%, 60%)',
      to: 'hsl(214, 100%, 70%)',
    },
  },
};

/**
 * Semantic color aliases - provides meaning-specific color references
 */
export const semanticColors = {
  // Text colors
  text: {
    primary: colors.brand.foreground,
    secondary: 'hsl(var(--muted-foreground))',
    success: colors.status.success,
    error: colors.status.error,
    warning: colors.status.warning,
    info: colors.status.info,
  },
  
  // Background colors
  background: {
    page: colors.brand.background,
    card: colors.brand.card,
    input: colors.brand.input,
    success: 'hsl(142, 76%, 95%)', // Light green background for success states
    error: 'hsl(0, 84%, 95%)',      // Light red background for error states
    warning: 'hsl(38, 92%, 95%)',   // Light yellow background for warning states
    info: 'hsl(210, 100%, 95%)',    // Light blue background for info states
  },
  
  // Border colors
  border: {
    default: colors.brand.border,
    focus: colors.brand.ring,
    success: colors.status.success,
    error: colors.status.error,
    warning: colors.status.warning,
  },
};

/**
 * Helper to generate color classes for different states
 */
export function getStatusColorClass(status: 'success' | 'error' | 'warning' | 'info' | 'pending' | 'default') {
  switch (status) {
    case 'success':
      return 'bg-green-100 text-green-800 dark:bg-green-800/20 dark:text-green-400';
    case 'error':
      return 'bg-red-100 text-red-800 dark:bg-red-800/20 dark:text-red-400';
    case 'warning':
      return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-800/20 dark:text-yellow-400';
    case 'info':
      return 'bg-blue-100 text-blue-800 dark:bg-blue-800/20 dark:text-blue-400';
    case 'pending':
      return 'bg-gray-100 text-gray-800 dark:bg-gray-800/20 dark:text-gray-400';
    default:
      return 'bg-gray-100 text-gray-800 dark:bg-gray-800/20 dark:text-gray-400';
  }
}

/**
 * Helper to get industry gradient classes
 */
export function getIndustryGradientClass(industry: 'plumbing' | 'beauty' | 'cleaning' | 'electrical' | 'servicesPro') {
  switch (industry) {
    case 'plumbing':
      return 'from-blue-500 to-gray-600';
    case 'beauty':
      return 'from-pink-500 to-purple-600';
    case 'cleaning':
      return 'from-blue-400 to-green-500';
    case 'electrical':
      return 'from-yellow-400 to-orange-500';
    case 'servicesPro':
      return 'from-indigo-500 to-blue-700';
    default:
      return 'from-primary to-secondary';
  }
}

/**
 * Shadow tokens
 */
export const shadows = {
  sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
  DEFAULT: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
  md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
  lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
  xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
  '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
  inner: 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',
  glow: '0 0 15px rgba(255, 255, 255, 0.2)',
  'glow-primary': '0 0 15px rgba(var(--primary), 0.2)',
}; 