# Material 3 Quick Reference - FOSSEE Workshops

## CSS Classes Cheat Sheet

### Buttons
```html
<btn class="btn btn-primary">Primary</button>
<button class="btn btn-secondary">Secondary</button>
<button class="btn btn-outline-primary">Outlined</button>
```

### Cards
```html
<div class="card shadow-2">
    <div class="card-header">
        <h3 class="card-title">Title</h3>
    </div>
    <div class="card-body">Content</div>
</div>
```

### Forms
```html
<div class="form-group mb-3">
    <label class="form-label">Label</label>
    <input type="text" class="form-control" placeholder="Enter text">
</div>
```

### Alerts
```html
<div class="alert alert-success alert-dismissible fade show">
    <span class="material-icons">check_circle</span>
    Success message
    <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
</div>

<!-- Types: success, danger, warning, info -->
```

### Badges
```html
<span class="badge badge-primary">Primary</span>
<span class="badge badge-success">Success</span>
<span class="badge badge-danger">Danger</span>
```

### Shadows
```html
<div class="shadow-1">Subtle</div>
<div class="shadow-2">Normal</div>
<div class="shadow-3">Elevated</div>
<div class="shadow-4">Prominent</div>
<div class="shadow-5">Maximum</div>
```

### Spacing
```html
<!-- Margins: my-1, my-2, my-3, my-4, my-5 -->
<!-- Padding: px-2, py-3, p-4 -->
<!-- Gap: gap-1, gap-2, gap-3, gap-4 -->

<div class="my-3 px-2">Content with spacing</div>
```

### Text Colors
```html
<p class="text-primary">Primary text</p>
<p class="text-secondary">Secondary text</p>
<p class="text-error">Error text</p>
<p class="text-tertiary">Tertiary text</p>
```

### Background Colors
```html
<div class="bg-primary">Primary background</div>
<div class="bg-primary-container">Primary container</div>
<div class="bg-surface">Surface background</div>
```

### Rounded Corners
```html
<div class="rounded-xs">4px radius</div>
<div class="rounded-sm">8px radius</div>
<div class="rounded-md">12px radius</div>
<div class="rounded-lg">16px radius</div>
<div class="rounded-xl">24px radius</div>
```

## Common Patterns

### Login Form
```html
{% extends 'workshop_app/base.html' %}

{% block content %}
<div class="container my-5">
    <div class="row justify-content-center">
        <div class="col-md-4">
            <div class="card shadow-3">
                <div class="card-header">
                    <h2 class="card-title">Sign In</h2>
                </div>
                <div class="card-body">
                    <form method="post">
                        {% csrf_token %}
                        <div class="form-group mb-3">
                            <label class="form-label">Username</label>
                            <input class="form-control" type="text" name="username">
                        </div>
                        <div class="form-group mb-3">
                            <label class="form-label">Password</label>
                            <input class="form-control" type="password" name="password">
                        </div>
                        <button type="submit" class="btn btn-primary w-100">Sign In</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
{% endblock %}
```

### Data Table
```html
<div class="table-responsive">
    <table class="table">
        <thead>
            <tr>
                <th>Column 1</th>
                <th>Column 2</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            {% for item in items %}
            <tr>
                <td>{{ item.field1 }}</td>
                <td>{{ item.field2 }}</td>
                <td>
                    <button class="btn btn-primary btn-sm">Edit</button>
                </td>
            </tr>
            {% endfor %}
        </tbody>
    </table>
</div>
```

### Status Badge
```html
{% if workshop.is_active %}
    <span class="badge badge-success">
        <span class="material-icons">check</span>
        Active
    </span>
{% else %}
    <span class="badge badge-danger">
        <span class="material-icons">close</span>
        Inactive
    </span>
{% endif %}
```

### Empty State
```html
<div class="text-center py-5">
    <span class="material-icons" style="font-size: 64px; color: var(--md-sys-color-outline);">
        inbox
    </span>
    <h3 class="mt-3">No items found</h3>
    <p class="text-muted">There are no items to display</p>
    <a href="#" class="btn btn-primary mt-3">Create Item</a>
</div>
```

### Card List
```html
<div class="row">
    {% for item in items %}
    <div class="col-md-6 col-lg-4 mb-4">
        <div class="card shadow-2">
            <div class="card-header">
                <h5 class="card-title">{{ item.title }}</h5>
            </div>
            <div class="card-body">
                <p class="card-text">{{ item.description }}</p>
                <button class="btn btn-primary">View</button>
            </div>
        </div>
    </div>
    {% endfor %}
</div>
```

## Material Icons

### Common Icons
```html
<!-- Navigation -->
<span class="material-icons">home</span>
<span class="material-icons">menu</span>
<span class="material-icons">settings</span>
<span class="material-icons">logout</span>

<!-- Actions -->
<span class="material-icons">add</span>
<span class="material-icons">edit</span>
<span class="material-icons">delete</span>
<span class="material-icons">search</span>

<!-- Forms/Auth -->
<span class="material-icons">person</span>
<span class="material-icons">email</span>
<span class="material-icons">lock</span>
<span class="material-icons">visibility</span>

<!-- Status -->
<span class="material-icons">check_circle</span>
<span class="material-icons">error</span>
<span class="material-icons">warning</span>
<span class="material-icons">info</span>

<!-- UI Elements -->
<span class="material-icons">arrow_back</span>
<span class="material-icons">arrow_forward</span>
<span class="material-icons">expand_more</span>
<span class="material-icons">close</span>
```

## Color Tokens

### Primary Colors
```css
--md-sys-color-primary: #006a4e
--md-sys-color-on-primary: #ffffff
--md-sys-color-primary-container: #7ff8d3
--md-sys-color-on-primary-container: #00210e
```

### Neutral Colors
```css
--md-sys-color-background: #fffbfe
--md-sys-color-on-background: #1c1b1f
--md-sys-color-surface: #fffbfe
--md-sys-color-on-surface: #1c1b1f
--md-sys-color-outline: #79747e
--md-sys-color-outline-variant: #cac7d0
```

## Font Sizes

```css
Display Large:     57px (--md-sys-typescale-display-large-size)
Display Medium:    45px
Display Small:     36px
Headline Large:    32px
Headline Medium:   28px
Headline Small:    24px
Title Large:       22px
Title Medium:      16px
Title Small:       14px
Body Large:        16px
Body Medium:       14px
Body Small:        12px
Label Large:       14px
Label Medium:      12px
Label Small:       11px
```

## Responsive Breakpoints

```css
Mobile:    < 480px (default)
Tablet:    480px - 768px
Desktop:   768px - 1024px
Wide:      > 1024px
```

## Using in Django Templates

### Basic Template Structure
```html
{% extends 'workshop_app/base.html' %}
{% load static %}

{% block title %}Page Title{% endblock %}

{% block content %}
<div class="container my-5">
    <!-- Your content here -->
</div>
{% endblock %}
```

### With Errors/Messages
```html
{% if messages %}
    {% for message in messages %}
    <div class="alert alert-{{ message.tags }} alert-dismissible fade show">
        {{ message }}
        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    </div>
    {% endfor %}
{% endif %}

{% if form.errors %}
    {% for field in form %}
        {% for error in field.errors %}
        <div class="alert alert-danger">{{ error }}</div>
        {% endfor %}
    {% endfor %}
{% endif %}
```

### Form with Material 3 Styling
```html
<form method="post">
    {% csrf_token %}
    
    {% for field in form %}
        <div class="form-group mb-3">
            {{ field.label_tag }}
            {{ field }}
            {% if field.errors %}
                <div class="invalid-feedback d-block">
                    {% for error in field.errors %}
                        {{ error }}
                    {% endfor %}
                </div>
            {% endif %}
        </div>
    {% endfor %}
    
    <button type="submit" class="btn btn-primary">Submit</button>
</form>
```

## Common Classes Reference

| Class | Purpose |
|-------|---------|
| `.container` | Max-width wrapper |
| `.row` | Flex row container |
| `.col-md-*` | Column width (md=768px+) |
| `.mb-3` | Margin bottom (1rem) |
| `.mx-auto` | Auto horizontal margin |
| `.text-center` | Center text |
| `.text-muted` | Gray text |
| `.d-flex` | Display flex |
| `.gap-2` | Gap between flex items |
| `.justify-content-center` | Center flex content |
| `.align-items-center` | Align items center |
| `.w-100` | Width 100% |
| `.me-3` | Margin right |
| `.ms-3` | Margin left |
| `.mt-4` | Margin top |
| `.pt-3` | Padding top |
| `.px-2` | Padding horizontal |

## Tips & Best Practices

1. **Always use semantic HTML**: `<button>`, `<form>`, `<label>`, etc.
2. **Use Material Icons**: For consistent visual language
3. **Follow spacing scale**: Use gap-1, gap-2, etc. instead of random values
4. **Test responsive**: Use browser dev tools to test all breakpoints
5. **Check accessibility**: Verify color contrast and keyboard navigation
6. **Use CSS variables**: Never hardcode colors in components
7. **Keep it consistent**: Use the same component patterns throughout
8. **Document custom CSS**: If adding custom styles, document why

## Resources

- **Material Design 3**: https://m3.material.io/
- **Material Icons**: https://fonts.google.com/icons
- **CSS Variables**: Edit `:root` in `material3.css`
- **Design Guide**: See `MATERIAL3_DESIGN_GUIDE.md`
- **Full Docs**: See `MATERIAL3_IMPLEMENTATION.md`

## File Locations

```
Static Files:
  workshop_app/static/workshop_app/css/
    - material3.css
    - material3-utilities.css

Templates:
  workshop_app/templates/workshop_app/
    - base.html (main template)
    - login.html
    - register.html
    - components.html

Documentation:
  - MATERIAL3_DESIGN_GUIDE.md
  - MATERIAL3_IMPLEMENTATION.md
  - MATERIAL3_UPGRADE_SUMMARY.md
```

---

**Print this page as a reference while developing!**
