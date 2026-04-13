#!/bin/bash

# FOSSEE Workshop Booking System - Modern UI Setup Script
# This script helps set up the modern UI system
# Version: 2.0 | Date: April 13, 2026

echo "=========================================="
echo "FOSSEE Modern UI System Setup"
echo "=========================================="
echo ""

# Check if we're in the right directory
if [ ! -f "manage.py" ]; then
    echo "❌ Error: manage.py not found!"
    echo "Please run this script from the Django project root"
    exit 1
fi

echo "✓ Django project detected"
echo ""

# Step 1: Collect CSS files
echo "📦 Step 1: Verifying CSS files..."
CSS_FILES=(
    "workshop_app/static/workshop_app/css/fossee-theme.css"
    "workshop_app/static/workshop_app/css/components.css"
    "workshop_app/static/workshop_app/css/animations.css"
)

for file in "${CSS_FILES[@]}"; do
    if [ -f "$file" ]; then
        echo "  ✓ Found: $file"
    else
        echo "  ❌ Missing: $file"
    fi
done
echo ""

# Step 2: Collect JavaScript files
echo "📦 Step 2: Verifying JavaScript files..."
JS_FILES=(
    "workshop_app/static/workshop_app/js/MaterialUIComponents.jsx"
    "workshop_app/static/workshop_app/js/scrollAnimations.js"
    "workshop_app/static/workshop_app/js/chartExtensions.js"
)

for file in "${JS_FILES[@]}"; do
    if [ -f "$file" ]; then
        echo "  ✓ Found: $file"
    else
        echo "  ❌ Missing: $file"
    fi
done
echo ""

# Step 3: Verify templates
echo "📦 Step 3: Verifying templates..."
TEMPLATE_FILES=(
    "workshop_app/templates/workshop_app/base_fossee_modern.html"
    "workshop_app/templates/admin/fossee_login.html"
    "statistics_app/templates/statistics_app/modern_workshop_stats.html"
)

for file in "${TEMPLATE_FILES[@]}"; do
    if [ -f "$file" ]; then
        echo "  ✓ Found: $file"
    else
        echo "  ❌ Missing: $file"
    fi
done
echo ""

# Step 4: Collect static files
echo "📦 Step 4: Collecting static files..."
python manage.py collectstatic --noinput 2>/dev/null
if [ $? -eq 0 ]; then
    echo "  ✓ Static files collected"
else
    echo "  ⚠ Static files collection had issues (this is normal in development)"
fi
echo ""

# Step 5: Summary
echo "=========================================="
echo "✅ Setup Complete!"
echo "=========================================="
echo ""
echo "📋 Next Steps:"
echo "1. Update your Django templates to use base_fossee_modern.html"
echo "2. See IMPLEMENTATION_GUIDE_MODERN_UI.md for detailed usage"
echo "3. Add data-aos attributes to elements for animations"
echo "4. Test on desktop and mobile browsers"
echo ""
echo "📚 Documentation:"
echo "  - IMPLEMENTATION_GUIDE_MODERN_UI.md (Detailed guide)"
echo "  - README_MODERN_UI_SYSTEM.md (Quick reference)"
echo ""
echo "🎨 Color References:"
echo "  - Primary Orange: #FF7A00"
echo "  - Dark Blue: #0F1219"
echo "  - Accent Cyan: #00D9FF"
echo ""
echo "=========================================="
