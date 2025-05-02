# Navigation System Components

This folder contains modular components for the site's navigation system, designed to be flexible, maintainable, and to avoid duplication.

## Component Structure

- `NavigationBar.tsx` - Main container component that assembles all navigation elements
- `Logo.tsx` - Site logo and name component
- `MainNav.tsx` - Primary navigation links with dropdowns
- `AuthButtons.tsx` - Login and Sign Up buttons
- `CartButton.tsx` - Shopping cart button with dropdown cart preview
- `MobileMenu.tsx` - Mobile responsive menu and navigation drawer

## Component Relationship

```
NavigationBar
├── Logo
├── MainNav (desktop only)
│   ├── Home link
│   ├── Pricing dropdown
│   ├── Templates dropdown
│   └── About/Contact links
├── AuthButtons
├── CartButton
└── MobileMenu (mobile only)
    ├── Logo
    ├── Mobile nav links
    └── Mobile auth buttons
```

## Usage

The `NavigationBar` component is used in the root layout and automatically handles responsive behavior. Individual components should not be used directly in pages.

## Design Principles

1. **Separation of Concerns**: Each component has a single responsibility
2. **No Duplication**: Shared functionality is extracted to dedicated components
3. **Responsive Design**: Components adapt to different screen sizes
4. **Clear Documentation**: Each component has JSDoc comments explaining its purpose and usage 