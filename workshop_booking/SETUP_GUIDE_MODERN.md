# Modern FOSSEE Workshop Booking System - Setup Guide

## Installation & Setup Instructions

### Prerequisites
- Python 3.7+
- pip (Python package manager)
- Virtual Environment (recommended)
- Modern web browser (Chrome 90+, Firefox 88+, Safari 14+, Edge 90+)

### Step 1: Clone & Setup Virtual Environment

```bash
# Navigate to project directory
cd "workshop_booking"

# Create virtual environment
python -m venv .venv

# Activate virtual environment
# On Windows:
.\.venv\Scripts\Activate.ps1

# On macOS/Linux:
source .venv/bin/activate
```

### Step 2: Install Dependencies

```bash
# Upgrade pip
pip install --upgrade pip

# Install required packages
pip install -r requirements.txt
```

### Step 3: Database Setup

```bash
# Run migrations
python manage.py migrate

# Create superuser (for admin access)
python create_superuser.py

# Or manually:
python manage.py createsuperuser
```

### Step 4: Collect Static Files

```bash
# Collect all static files (CSS, JS, Images)
python manage.py collectstatic --noinput
```

### Step 5: Run Development Server

```bash
# Start development server
python manage.py runserver

# Server will be available at: http://localhost:8000
```

### Step 6: Access Admin Panel

```
URL: http://localhost:8000/admin/
Username: (your superuser username)
Password: (your superuser password)
```

---

## Modern Theme Features

### Neon Orange + Deep Blue Theme
- Primary Color: `#FF6B35` (Neon Orange)
- Secondary Color: `#1A3A52` (Deep Blue)
- Automatic theme application to all UI elements

### Animations & Interactions
- Scroll-triggered animations (AOS library)
- Smooth hover effects on cards and buttons
- Interactive form validation with visual feedback
- Loading animations and skeleton screens

### Modern Charts
- Chart.js 4.x integration
- Neon-styled bar, line, pie, and radar charts
- Interactive tooltips and data labels
- Chart export functionality

### Responsive Design
- Mobile-first approach
- Bootstrap 5 responsive grid
- Touch-friendly interface
- Optimized for all screen sizes

---

## Project Structure Overview

```
workshop_booking/
├── static/                      # Global static files
├── workshop_app/                # Main application
│   ├── static/
│   │   ├── css/
│   │   │   ├── neon-theme.css              # ⭐ Main neon theme
│   │   │   ├── animations.css              # ⭐ All animations
│   │   │   ├── charts-modern.css           # ⭐ Modern chart styling
│   │   │   └── [other CSS files]
│   │   └── js/
│   │       ├── modern-interactions.js      # ⭐ Interactive components
│   │       ├── charts-neon.js              # ⭐ Chart.js 4.x neon styling
│   │       └── [other JS files]
│   ├── templates/
│   │   ├── workshop_app/
│   │   │   ├── base.html                   # ⭐ Updated with modern theme
│   │   │   └── [other templates]
│   │   └── admin/
│   │       └── [admin templates]
│   ├── models.py
│   ├── views.py
│   ├── urls.py
│   └── [other files]
├── statistics_app/              # Statistics & analytics
│   ├── templates/
│   │   └── statistics_app/
│   │       ├── workshop_public_stats_modern.html   # ⭐ Modern stats page
│   │       └── [other stat pages]
│   └── [other files]
├── MODERN_UI_DOCUMENTATION.md   # ⭐ Complete UI documentation
└── [other configuration files]
```

**⭐** = Files created/updated in modernization

---

## Key Files & Their Purposes

### 1. Theme Files

**`workshop_app/static/css/neon-theme.css`**
- Complete neon orange + deep blue color scheme
- Component styling (buttons, cards, forms, etc.)
- Global UI elements
- CSS variables for easy customization

**`workshop_app/static/css/animations.css`**
- Scroll-triggered animation keyframes
- Hover and interactive effects
- Loading animations
- Parallax scrolling effects

### 2. JavaScript Files

**`workshop_app/static/js/modern-interactions.js`**
- AOS (Animate On Scroll) initialize
- Smooth scrolling setup
- Interactive element handlers
- Auto-hide notifications
- Form validation feedback

**`workshop_app/static/js/charts-neon.js`**
- Chart.js 4.x neon theme configuration
- Chart initialization functions
- Chart export functionality
- Automatic color theming

### 3. Template Files

**`workshop_app/templates/workshop_app/base.html`**
- Main layout template (updated)
- Navigation with modern styling
- Footer with neon theme
- Script & CSS includes

**`statistics_app/templates/statistics_app/workshop_public_stats_modern.html`**
- Modern statistics dashboard
- Animated counter cards
- Neon-styled charts
- Filter sidebar
- Data table with pagination

---

## Customization Guide

### Changing Colors

Edit CSS variables in `neon-theme.css`:

```css
:root {
  /* Change primary neon orange to different shade */
  --neon-orange: #FF6B35;  /* Change this value */
  
  /* Change deep blue to different shade */
  --deep-blue: #1A3A52;    /* Change this value */
}
```

### Modifying Animation Speed

```html
<!-- Adjust animation duration via data attribute -->
<div data-aos="fade-up" data-aos-duration="1000">
    Content (1000ms animation)
</div>
```

Or in JavaScript:

```javascript
AOS.init({
    duration: 1000,  // Change animation duration (ms)
    delay: 100,      // Change delay between elements
});
```

### Styling New Components

Always follow this pattern:

```css
/* Use neon theme variables */
.my-component {
    background: var(--card-bg);
    border: 1px solid var(--neon-orange);
    color: var(--text-primary);
    /* Add transitions for smooth interactions */
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Hover/Active states */
.my-component:hover {
    box-shadow: var(--glow-medium);
    transform: translateY(-8px);
}
```

---

## Integrating Modern Theme in New Pages

### Template Pattern

```html
{% extends 'workshop_app/base.html' %}

{% block title %}Page Title{% endblock %}

{% block content %}
<div class="container-fluid py-5">
    <!-- Use data-aos for scroll animations -->
    <h1 data-aos="fade-down">Heading</h1>
    
    <!-- Cards automatically get neon styling -->
    <div class="card" data-aos="zoom-in">
        <div class="card-header">Header</div>
        <div class="card-body">Content</div>
    </div>
    
    <!-- Buttons automatically get neon theme -->
    <button class="btn btn-primary" data-aos="fade-up">Action</button>
</div>
{% endblock %}
```

### Python View Pattern

```python
from django.shortcuts import render

def my_view(request):
    context = {
        'title': 'Page Title',
        'data': [],
    }
    return render(request, 'my_template.html', context)
```

---

## Adding Charts to Pages

### Method 1: JavaScript Initialization

```html
<canvas id="myChart"></canvas>
<script>
    NeonCharts.initBarChart(
        'myChart',
        ['Jan', 'Feb', 'Mar'],
        [{label: 'Data', data: [10, 20, 15]}]
    );
</script>
```

### Method 2: HTML Data Attributes

```html
<canvas id="myChart" 
    data-chart-type="pie"
    data-chart-data='{
        "labels": ["A", "B", "C"],
        "data": [30, 25, 45]
    }'>
</canvas>
```

---

## Performance Tips

1. **Use CDN links** for external libraries (already configured)
2. **Lazy load images** with `data-lazy` attribute
3. **Defer non-critical scripts** (already configured)
4. **Monitor animations** in production (can disable in `prefers-reduced-motion`)
5. **Cache static files** in production

---

## Deployment Checklist

- [ ] Update `DEBUG = False` in `settings.py`
- [ ] Configure `ALLOWED_HOSTS` properly
- [ ] Run `collectstatic` in production
- [ ] Set up proper database backup
- [ ] Configure email settings for notifications
- [ ] Set up HTTPS/SSL certificate
- [ ] Configure CDN for static assets
- [ ] Set up monitoring and logging
- [ ] Test all user types and workflows
- [ ] Backup original database before migration

---

## Browser DevTools Tips

### Testing Responsive Design
- Open DevTools (F12)
- Click Device Toolbar icon (Ctrl+Shift+M)
- Test various screen sizes

### Checking Animations
- Open DevTools (F12)
- Go to Performance tab
- Record animation and check frame rate
- Aim for 60 FPS for smooth animations

### Debugging JavaScript
- Add breakpoints in Sources tab
- Use `console.log()` for debugging
- Check Console tab for errors

---

## Support & Troubleshooting

### Issue: Static files not loading

```bash
# Collect static files again
python manage.py collectstatic --clear --noinput

# Check STATIC_URL and STATIC_ROOT in settings.py
```

### Issue: Animations not working

- Check browser console for JavaScript errors
- Verify AOS library is loaded (check Network tab)
- Ensure `data-aos` attributes are present

### Issue: Charts not rendering

- Verify Chart.js library is loaded
- Check canvas elements exist in DOM
- Look for JavaScript errors in console

### Issue: Theme colors not applying

- Clear browser cache (Ctrl+Shift+Delete)
- Verify CSS files are loaded (check Network tab)
- Check for CSS conflicts in browser DevTools

---

## Contact & Contribution

For issues, questions, or contributions:
- GitHub: [FOSSEE Workshop Booking System](https://github.com/FOSSEE/workshop_booking)
- Email: fossee@iiitb.ac.in
- Issue Tracker: GitHub Issues

---

## Version History

### v1.0.0 (April 2026)
- ✅ Neon orange + deep blue theme implementation
- ✅ Material UI integration for statistics pages
- ✅ Chart.js 4.x neon styling
- ✅ Scroll animations via AOS library
- ✅ Modern interactive components
- ✅ Admin panel modernization
- ✅ Complete documentation

---

**Happy coding! 🚀**

For the latest updates, check: `MODERN_UI_DOCUMENTATION.md`
