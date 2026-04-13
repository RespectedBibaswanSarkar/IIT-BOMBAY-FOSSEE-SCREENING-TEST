# Quick Reference Guide - FOSSEE Modern UI Theme

## Color Palette Quick Reference

```css
/* Primary - Neon Orange */
--neon-orange: #FF6B35
--neon-orange-light: #FF8A50
--neon-orange-dark: #E55A2B

/* Secondary - Deep Blue */
--deep-blue: #1A3A52
--deep-blue-light: #2A5A7F
--deep-blue-lighter: #3A7AAF
--deep-blue-dark: #0F2333

/* Accents */
--neon-cyan: #00D9FF
--neon-pink: #FF006E
--neon-purple: #A100F2
--neon-green: #00FF41

/* Backgrounds & Text */
--dark-bg: #0A0E27
--card-bg: #141829
--surface-bg: #1C2240
--text-primary: #FFFFFF
--text-secondary: #B8C5D6
--text-tertiary: #8B96A8

/* Status Colors */
--success-color: #00FF41
--warning-color: #FFB703
--error-color: #FF006E
--info-color: #00D9FF
```

---

## Common Components & Usage

### 1. Modern Button

```html
<!-- Primary Button (Neon Orange) -->
<button class="btn btn-primary">Click Me</button>

<!-- Outline Button -->
<button class="btn btn-primary-outline">Outline</button>

<!-- Status Buttons -->
<button class="btn btn-success">Success</button>
<button class="btn btn-danger">Delete</button>
<button class="btn btn-warning">Warning</button>
<button class="btn btn-info">Info</button>
```

**CSS Output**: Gradient background, glow on hover, smooth transitions

---

### 2. Modern Card

```html
<!-- Basic Card -->
<div class="card" data-aos="zoom-in">
    <div class="card-header">Card Title</div>
    <div class="card-body">Card content goes here</div>
    <div class="card-footer">Card footer</div>
</div>
```

**Features**: Glass morphism, neon border on hover, lift animation

---

### 3. Form Elements

```html
<!-- Text Input -->
<input type="text" class="form-control" placeholder="Enter text">

<!-- Select Dropdown -->
<select class="form-select">
    <option>Select option</option>
</select>

<!-- Textarea -->
<textarea class="form-control" rows="4"></textarea>

<!-- Checkbox -->
<input type="checkbox" class="form-check-input" id="cb1">
<label class="form-check-label">Option</label>
```

**Features**: Dark background, neon borders, glow on focus

---

### 4. Animated Text

```html
<!-- Gradient Text -->
<h1 class="text-gradient">Gradient Heading</h1>

<!-- Neon Text -->
<span class="text-neon">Neon Orange Text</span>

<!-- Glowing Text -->
<span class="text-glow">Glowing Text</span>
```

---

### 5. Badges & Labels

```html
<!-- Primary Badge -->
<span class="badge badge-primary">Active</span>

<!-- Status Badges -->
<span class="badge badge-success">Success</span>
<span class="badge badge-danger">Error</span>
<span class="badge badge-warning">Warning</span>
<span class="badge badge-info">Info</span>
```

---

### 6. Alerts

```html
<!-- Info Alert -->
<div class="alert alert-primary">
    <span class="material-icons">info</span>
    Information message
</div>

<!-- Success Alert -->
<div class="alert alert-success">
    <span class="material-icons">check_circle</span>
    Success message
</div>

<!-- Error Alert -->
<div class="alert alert-danger">
    <span class="material-icons">error</span>
    Error message
</div>

<!-- Warning Alert -->
<div class="alert alert-warning">
    <span class="material-icons">warning</span>
    Warning message
</div>
```

---

## Animation Usage

### Scroll-Triggered Animations (AOS)

```html
<!-- Fade In -->
<div data-aos="fade-in">Fades in on scroll</div>

<!-- Slide Up -->
<div data-aos="slide-up">Slides up on scroll</div>

<!-- Zoom In -->
<div data-aos="zoom-in">Zooms in on scroll</div>

<!-- With Settings -->
<div 
    data-aos="fade-up" 
    data-aos-duration="1000"
    data-aos-delay="200"
    data-aos-easing="ease-in-out">
    Custom animation
</div>

<!-- Multiple Animations -->
<h2 data-aos="slide-left" data-aos-delay="100">Title</h2>
<p data-aos="slide-left" data-aos-delay="200">Para 1</p>
<p data-aos="slide-left" data-aos-delay="300">Para 2</p>
```

### Hover Animations (CSS Classes)

```html
<!-- Lift on Hover -->
<div class="hover-lift">Lifts up on hover</div>

<!-- Glow Pulse on Hover -->
<div class="hover-glow-pulse">Glows and pulses</div>

<!-- Scale Bounce on Hover -->
<button class="hover-scale-bounce">Bounce on hover</button>
```

---

## Chart.js Usage

### Auto-Initialize from HTML

```html
<!-- Bar Chart -->
<canvas id="myChart" 
    data-chart-type="bar"
    data-chart-data='{
        "labels": ["Jan", "Feb", "Mar"],
        "datasets": [{
            "label": "Sales",
            "data": [12, 19, 8],
            "backgroundColor": "#FF6B35"
        }]
    }'>
</canvas>
```

### JavaScript Initialization

```javascript
// Bar Chart
NeonCharts.initBarChart(
    'chartId',
    ['Label1', 'Label2'],
    [{label: 'Dataset', data: [10, 20]}]
);

// Line Chart
NeonCharts.initLineChart(
    'chartId',
    ['Jan', 'Feb'],
    [{label: 'Data', data: [10, 20]}]
);

// Pie Chart
NeonCharts.initPieChart(
    'chartId',
    ['A', 'B', 'C'],
    [30, 25, 45]
);

// Export
NeonCharts.exportChart(chart, 'my-chart.png');
```

---

## Stats Card with Counter

```html
<!-- Individual Stat Card -->
<div class="card" style="border: 1px solid var(--neon-orange);">
    <div class="card-body text-center">
        <span class="material-icons" style="color: var(--neon-orange);">event</span>
        <h4 style="color: var(--text-secondary);">Total Events</h4>
        <h2 style="color: var(--neon-orange);" data-counter="150" data-duration="2000">0</h2>
    </div>
</div>
```

**Features**: Animated counter on scroll, neon styling

---

## Commonly Used CSS Classes

```html
<!-- Sizing & Spacing -->
<div class="mt-5">Margin top 5</div>
<div class="mb-3">Margin bottom 3</div>
<div class="p-4">Padding 4</div>

<!-- Text Utilities -->
<p class="text-gradient">Gradient text</p>
<p class="text-neon">Neon text</p>
<p class="text-glow">Glowing text</p>

<!-- Animations -->
<div class="animate-fade-in">Fade in animation</div>
<div class="animate-scale-in">Scale in animation</div>
<div class="animate-glow">Continuous glow</div>
<div class="animate-float">Float up/down</div>

<!-- Effects -->
<div class="glass-effect">Glass morphism</div>
<div class="glow-border">Neon glowing border</div>
<div class="gradient-bg">Gradient background</div>
```

---

## Table Styling

```html
<table class="table">
    <thead>
        <tr style="background: linear-gradient(90deg, #FF6B35, #FF8A50);">
            <th>Header 1</th>
            <th>Header 2</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Data 1</td>
            <td>Data 2</td>
        </tr>
    </tbody>
</table>

<!-- Features: Neon hover, row highlighting, modern styling -->
```

---

## Navigation Examples

```html
<!-- Basic Navigation Item -->
<li class="nav-item">
    <a class="nav-link" href="#" data-aos="fade-up">
        <span class="material-icons">icon_name</span>
        Link Text
    </a>
</li>

<!-- Dropdown -->
<li class="nav-item dropdown">
    <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">
        <span class="material-icons">menu</span>
        Menu
    </a>
    <ul class="dropdown-menu">
        <li><a class="dropdown-item" href="#">Option 1</a></li>
        <li><a class="dropdown-item" href="#">Option 2</a></li>
    </ul>
</li>
```

---

## Form Validation Example

```html
<form id="myForm" novalidate>
    <div class="mb-3">
        <label class="form-label" style="color: var(--neon-orange);">
            Email Address
        </label>
        <input type="email" class="form-control" required>
        <div class="invalid-feedback" style="color: #FF006E;">
            Please provide a valid email.
        </div>
    </div>
    
    <button type="submit" class="btn btn-primary">Submit</button>
</form>
```

**Features**: Automatic validation feedback, shake animation on error

---

## Creating New Components

### Component CSS Template

```css
/* Component Name */
.component-name {
    background: var(--card-bg);
    border: 1px solid rgba(255, 107, 53, 0.2);
    border-radius: 12px;
    padding: 1.5rem;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.component-name:hover {
    border-color: var(--neon-orange);
    box-shadow: 0 0 30px rgba(255, 107, 53, 0.3);
    transform: translateY(-8px);
}

/* Responsive */
@media (max-width: 768px) {
    .component-name {
        padding: 1rem;
    }
}
```

### Component HTML Template

```html
{% extends 'workshop_app/base.html' %}

{% block content %}
<div class="container-fluid py-5">
    <h1 data-aos="fade-down" class="text-gradient">Page Title</h1>
    
    <div class="card" data-aos="zoom-in">
        <div class="card-header">Header</div>
        <div class="card-body">Content</div>
    </div>
</div>
{% endblock %}
```

---

## Responsive Breakpoints

```css
/* Extra Small Devices (< 576px) */
@media (max-width: 575.98px) { }

/* Small Devices (576px - 767px) */
@media (min-width: 576px) and (max-width: 767.98px) { }

/* Medium Devices (768px - 991px) */
@media (min-width: 768px) and (max-width: 991.98px) { }

/* Large Devices (992px - 1199px) */
@media (min-width: 992px) and (max-width: 1199.98px) { }

/* Extra Large Devices (≥ 1200px) */
@media (min-width: 1200px) { }
```

---

## Utility Functions

```javascript
// Initialize AOS (automatic on page load)
AOS.refresh();

// Animate counters
animateCounters();

// Initialize all charts
initializeAllCharts();

// Export chart
NeonCharts.exportChart(chartInstance, 'filename.png');

// Update chart data
NeonCharts.updateChart(chart, [newData1, newData2], 750);
```

---

## Performance Tips

1. **Use CSS Variables for Colors**
   ```css
   color: var(--neon-orange);
   ```

2. **Add will-change for animations**
   ```css
   will-change: transform, opacity;
   ```

3. **Use data-aos for scroll animations**
   ```html
   <div data-aos="fade-up">Content</div>
   ```

4. **Lazy load images**
   ```html
   <img data-lazy="image.jpg">
   ```

5. **Minimize reflows with batch DOM changes**
   ```javascript
   const fragment = document.createDocumentFragment();
   // Add elements to fragment
   element.appendChild(fragment);
   ```

---

## Common Issues & Solutions

| Issue | Solution |
|-------|----------|
| Colors not applying | Check CSS specificity, clear browser cache |
| Animations not triggering | Verify `data-aos` attributes exist, check AOS is loaded |
| Charts not rendering | Ensure canvas element exists, Chart.js loaded, check console |
| Form styles broken | Verify Bootstrap 5 CSS is loaded before custom CSS |
| Responsive design issue | Check Bootstrap grid classes (col-md-6, etc.) |

---

## Resources

- [Color Palette](./MODERN_UI_DOCUMENTATION.md#theme-system)
- [Complete Documentation](./MODERN_UI_DOCUMENTATION.md)
- [Setup Guide](./SETUP_GUIDE_MODERN.md)
- [Chart.js Docs](https://www.chartjs.org/)
- [AOS Library](https://michalsnik.github.io/aos/)
- [Bootstrap 5 Docs](https://getbootstrap.com/)
- [Material Icons](https://fonts.google.com/icons)

---

## Keyboard Shortcuts (DevTools)

| Shortcut | Action |
|----------|--------|
| F12 | Open DevTools |
| Ctrl+Shift+M | Toggle device toolbar (responsive) |
| Ctrl+Shift+C | Select element inspector |
| Ctrl+\ | Pause/Resume execution |

---

**Last Updated**: April 13, 2026  
**Version**: 1.0.0

For more details, see [MODERN_UI_DOCUMENTATION.md](./MODERN_UI_DOCUMENTATION.md)
