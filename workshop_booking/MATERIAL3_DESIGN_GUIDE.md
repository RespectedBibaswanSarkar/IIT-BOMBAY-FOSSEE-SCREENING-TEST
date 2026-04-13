# Material 3 Design System - FOSSEE Workshops

## Overview
This project has been upgraded to Material Design 3, Google's latest design system. Material 3 provides:
- Modern, clean visual hierarchy
- Improved typography and spacing
- Color system with semantic naming
- Smooth animations and transitions
- Better accessibility
- Responsive design patterns

## Color Palette

### Primary Colors
- **Primary**: `#006a4e` (Deep green) - Used for main actions and highlights
- **On Primary**: `#ffffff` (White) - Text/icons on primary background
- **Primary Container**: `#7ff8d3` (Light green) - Background for secondary information
- **On Primary Container**: `#00210e` (Dark) - Text on primary container

### Secondary Colors
- **Secondary**: `#4e6555` (Sage green) - For less prominent actions
- **Secondary Container**: `#d0ecd8` (Light sage)

### Neutral Colors
- **Surface**: `#fffbfe` (Off-white) - Main background
- **On Surface**: `#1c1b1f` (Dark) - Primary text color
- **On Surface Variant**: `#49454e` (Gray) - Secondary text
- **Outline**: `#79747e` (Light gray) - Borders and dividers
- **Error**: `#b3261e` (Red) - Error states

## Typography System

### Heading Sizes
- **Display Large**: 57px (for hero sections)
- **Display Medium**: 45px
- **Display Small**: 36px
- **Headline Large**: 32px (main titles)
- **Headline Medium**: 28px
- **Headline Small**: 24px
- **Title Large**: 22px (card titles)
- **Title Medium**: 16px (section titles)
- **Title Small**: 14px (subsections)

### Body Text
- **Body Large**: 16px (main content)
- **Body Medium**: 14px (secondary content)
- **Body Small**: 12px (captions)

### Labels
- **Label Large**: 14px (buttons, form labels)
- **Label Medium**: 12px
- **Label Small**: 11px (tags, badges)

## Components

### Buttons

#### Filled Button (Primary Action)
```html
<button class="btn btn-primary">Sign In</button>
```
- Background: Primary color
- Text: On Primary color
- Use for: Main actions, submissions

#### Outlined Button (Secondary Action)
```html
<button class="btn btn-outline-primary">Learn More</button>
```
- Border: Primary color
- Background: Transparent
- Use for: Alternative actions

#### Secondary Button
```html
<button class="btn btn-secondary">Save</button>
```
- Background: Secondary color
- Use for: Less prominent actions

### Cards

#### Basic Card
```html
<div class="card">
    <div class="card-header">
        <h3 class="card-title">Card Title</h3>
    </div>
    <div class="card-body">
        Card content goes here
    </div>
</div>
```

Features:
- Rounded corners (16px)
- Subtle shadow on hover
- Smooth elevation transitions
- Outlined variant with border

### Forms

#### Form Input
```html
<div class="form-group">
    <label class="form-label">Username</label>
    <input type="text" class="form-control" placeholder="Enter username">
</div>
```

Features:
- Material 3 borders and focus states
- Icon support with spacing
- Error message support
- Help text display

### Alerts

#### Alert Component
```html
<div class="alert alert-success">
    <strong>Success!</strong> Your changes have been saved.
    <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
</div>
```

Available types:
- `alert-success` - Green, for successful actions
- `alert-danger` - Red, for errors
- `alert-warning` - Yellow, for warnings
- `alert-info` - Blue, for information

### Navigation Bar

Features:
- Surface-colored background with subtle border
- Icon + text navigation items
- Hover effects with primary color
- Active state with bottom border
- User dropdown menu
- Responsive mobile menu

## Layout Patterns

### Content Areas
```html
<div class="base-content">
    <!-- 6rem top padding for navbar -->
    <!-- 8rem bottom padding for footer -->
    <div class="container">
        <!-- Main content here -->
    </div>
</div>
```

### Spacing Utilities
- `gap-1`: 0.5rem
- `gap-2`: 1rem
- `gap-3`: 1.5rem
- `gap-4`: 2rem

### Rounded Corners
- `rounded-xs`: 4px
- `rounded-sm`: 8px
- `rounded-md`: 12px
- `rounded-lg`: 16px
- `rounded-xl`: 24px

### Shadows
- `shadow-1`: Level 1 (subtle)
- `shadow-2`: Level 2 (normal)
- `shadow-3`: Level 3 (elevated)
- `shadow-4`: Level 4 (prominent)
- `shadow-5`: Level 5 (maximum)

## Animation & Motion

All transitions use: `cubic-bezier(0.4, 0, 0.2, 1)` (Material easing)
Common durations:
- 200ms - Quick transitions (hover states, focus)
- 400ms - Standard transitions (navigation)
- 600ms - Slower transitions (modals, overlays)

## Icons

The design system uses Material Icons throughout:
- Navigation icons (home, menu, settings)
- Action icons (add, edit, delete, search)
- Social icons (person, mail, phone)
- Status icons (check, error, warning, info)

```html
<span class="material-icons">home</span>
```

Icon sizes:
- 18px - With text labels
- 24px - Standalone
- 14px - In badges/tags

## Accessibility

### Color Contrast
All text meets WCAG AA standards:
- Normal text: 4.5:1 contrast ratio
- Large text: 3:1 contrast ratio

### Keyboard Navigation
- Tab order is logical
- All interactive elements are keyboard accessible
- Focus indicators are visible

### Screen Readers
- Semantic HTML used throughout
- ARIA labels where needed
- Alt text for images

## Responsive Design

### Breakpoints
- Mobile: < 480px
- Tablet: 480px - 768px
- Desktop: 768px - 1024px
- Wide: > 1024px

### Mobile Optimizations
- Stack layouts vertically
- Touch-friendly button sizes (44px minimum)
- Larger tap targets
- Simplified navigation

## CSS Variables

All colors and typography are defined as CSS variables in `material3.css`:

```css
--md-sys-color-primary: #006a4e
--md-sys-color-on-primary: #ffffff
--md-sys-typescale-body-large-size: 16px
--md-sys-elevation-level1: box-shadow (shadow 1)
```

To customize the theme, update these variables in the `:root` selector.

## Template Usage

### Basic Template Structure
```html
{% extends 'workshop_app/base.html' %}

{% block title %}
    Page Title
{% endblock %}

{% block content %}
    <div class="container">
        <h1>Welcome</h1>
        <div class="card">
            <div class="card-header">
                <h2 class="card-title">Content</h2>
            </div>
            <div class="card-body">
                <!-- Your content here -->
            </div>
        </div>
    </div>
{% endblock %}
```

## Migration from Bootstrap 4

Key changes:
- `mr-auto` → `me-auto`
- `my-2` → `my-2` (same, but uses Material 3 space scale)
- `navbar-dark` → removed (navbar uses Material 3 styling)
- `btn-outline-*` → now uses Material 3 outline style
- `card` → enhanced with Material 3 shadows and hover effects

## Best Practices

1. **Use Semantic HTML**: Proper heading hierarchy (h1 → h6)
2. **Spacing**: Follow Material 3 spacing scale (4px base unit)
3. **Icons**: Use Material Icons consistently
4. **Colors**: Use CSS variables, don't hardcode colors
5. **Typography**: Limit to 2-3 font sizes per page
6. **Elevation**: Use shadows to show depth, not borders
7. **Motion**: Keep animations under 400ms for quick feedback
8. **Responsive**: Design mobile-first, enhance for larger screens

## Resources

- Material Design 3 Guidelines: https://m3.material.io
- Material Icons: https://fonts.google.com/icons
- Roboto Font: https://fonts.google.com/specimen/Roboto
- CSS Variables Reference: See material3.css root selector

## Support

For questions or customizations, refer to the Material Design 3 documentation
or update the CSS variables in `workshop_app/static/workshop_app/css/material3.css`
