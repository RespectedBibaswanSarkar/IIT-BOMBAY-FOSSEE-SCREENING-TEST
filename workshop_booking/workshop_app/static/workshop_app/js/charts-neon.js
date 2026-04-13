/* ============================================================
   CHART.JS 4.x - NEON STYLING & INITIALIZATION
   Modern Chart Configuration with FOSSEE Theme
   ============================================================ */

// Define Neon Theme Colors
const NEON_THEME = {
    primary: '#FF6B35',
    primaryLight: '#FF8A50',
    primaryDark: '#E55A2B',
    deepBlue: '#1A3A52',
    deepBlueLight: '#2A5A7F',
    darkBg: '#0A0E27',
    cardBg: '#141829',
    text: '#FFFFFF',
    textSecondary: '#B8C5D6',
    success: '#00FF41',
    warning: '#FFB703',
    error: '#FF006E',
    info: '#00D9FF'
};

// Chart.js Global Configuration
Chart.defaults.color = NEON_THEME.textSecondary;
Chart.defaults.borderColor = `rgba(255, 107, 53, 0.1)`;
Chart.defaults.backgroundColor = `rgba(255, 107, 53, 0.1)`;

// Register Chart.js Plugin for custom tooltips
Chart.register({
    id: 'neonTooltip',
    afterDraw(chart) {
        if (chart.tooltip && chart.tooltip._active && chart.tooltip._active.length) {
            initNeonTooltip(chart);
        }
    }
});

/* ============================================================
   CHART INITIALIZATION FUNCTIONS
   ============================================================ */

/**
 * Initialize Neon Bar Chart
 */
function initNeonBarChart(canvasId, labels, datasets, options = {}) {
    const ctx = document.getElementById(canvasId);
    if (!ctx) {
        console.warn(`Canvas element with ID ${canvasId} not found`);
        return null;
    }

    const defaultOptions = {
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
            legend: {
                display: true,
                labels: {
                    color: NEON_THEME.textSecondary,
                    font: {
                        size: 12,
                        weight: '600',
                        family: "'Segoe UI', 'Roboto', sans-serif"
                    },
                    padding: 15,
                    boxWidth: 12,
                    usePointStyle: true,
                    pointStyle: 'circle'
                }
            },
            tooltip: {
                backgroundColor: 'rgba(15, 35, 51, 0.95)',
                titleColor: NEON_THEME.primary,
                bodyColor: NEON_THEME.text,
                borderColor: NEON_THEME.primary,
                borderWidth: 1,
                padding: 12,
                titleFont: {
                    size: 13,
                    weight: 'bold'
                },
                bodyFont: {
                    size: 12
                },
                displayColors: true,
                callbacks: {
                    label: function(context) {
                        return `${context.dataset.label}: ${context.parsed.y.toLocaleString()}`;
                    }
                }
            }
        },
        scales: {
            x: {
                grid: {
                    color: 'rgba(255, 107, 53, 0.05)',
                    drawBorder: true
                },
                ticks: {
                    color: NEON_THEME.textSecondary,
                    font: {
                        size: 11
                    }
                }
            },
            y: {
                grid: {
                    color: 'rgba(255, 107, 53, 0.1)',
                    drawBorder: true
                },
                ticks: {
                    color: NEON_THEME.textSecondary,
                    font: {
                        size: 11
                    },
                    callback: function(value) {
                        return value.toLocaleString();
                    }
                }
            }
        }
    };

    const mergedOptions = deepMerge(defaultOptions, options);

    return new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: datasets
        },
        options: mergedOptions
    });
}

/**
 * Initialize Neon Line Chart
 */
function initNeonLineChart(canvasId, labels, datasets, options = {}) {
    const ctx = document.getElementById(canvasId);
    if (!ctx) {
        console.warn(`Canvas element with ID ${canvasId} not found`);
        return null;
    }

    const defaultOptions = {
        responsive: true,
        maintainAspectRatio: true,
        interaction: {
            mode: 'index',
            intersect: false
        },
        plugins: {
            filler: {
                propagate: true
            },
            legend: {
                display: true,
                labels: {
                    color: NEON_THEME.textSecondary,
                    font: {
                        size: 12,
                        weight: '600'
                    },
                    padding: 15,
                    usePointStyle: true,
                    pointStyle: 'circle'
                }
            },
            tooltip: {
                backgroundColor: 'rgba(15, 35, 51, 0.95)',
                titleColor: NEON_THEME.primary,
                bodyColor: NEON_THEME.text,
                borderColor: NEON_THEME.primary,
                borderWidth: 1,
                padding: 12,
                displayColors: true
            }
        },
        scales: {
            x: {
                grid: {
                    color: 'rgba(255, 107, 53, 0.05)',
                    drawBorder: true
                },
                ticks: {
                    color: NEON_THEME.textSecondary
                }
            },
            y: {
                grid: {
                    color: 'rgba(255, 107, 53, 0.1)',
                    drawBorder: true
                },
                ticks: {
                    color: NEON_THEME.textSecondary,
                    callback: function(value) {
                        return value.toLocaleString();
                    }
                }
            }
        }
    };

    const mergedOptions = deepMerge(defaultOptions, options);

    return new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: datasets
        },
        options: mergedOptions
    });
}

/**
 * Initialize Neon Pie/Doughnut Chart
 */
function initNeonPieChart(canvasId, labels, data, options = {}) {
    const ctx = document.getElementById(canvasId);
    if (!ctx) {
        console.warn(`Canvas element with ID ${canvasId} not found`);
        return null;
    }

    const colors = generateNeonColors(data.length);

    const defaultOptions = {
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
            legend: {
                display: true,
                position: 'bottom',
                labels: {
                    color: NEON_THEME.textSecondary,
                    font: {
                        size: 12,
                        weight: '600'
                    },
                    padding: 15,
                    usePointStyle: true,
                    pointStyle: 'circle'
                }
            },
            tooltip: {
                backgroundColor: 'rgba(15, 35, 51, 0.95)',
                titleColor: NEON_THEME.primary,
                bodyColor: NEON_THEME.text,
                borderColor: NEON_THEME.primary,
                borderWidth: 1,
                padding: 12,
                callbacks: {
                    label: function(context) {
                        const label = context.label || '';
                        const value = context.parsed || 0;
                        const total = context.dataset.data.reduce((a, b) => a + b, 0);
                        const percentage = ((value / total) * 100).toFixed(1);
                        return `${label}: ${value} (${percentage}%)`;
                    }
                }
            }
        }
    };

    const mergedOptions = deepMerge(defaultOptions, options);

    return new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: labels,
            datasets: [{
                data: data,
                backgroundColor: colors,
                borderColor: NEON_THEME.darkBg,
                borderWidth: 2,
                hoverOffset: 10,
                borderRadius: 5
            }]
        },
        options: mergedOptions
    });
}

/**
 * Initialize Neon Radar Chart
 */
function initNeonRadarChart(canvasId, labels, datasets, options = {}) {
    const ctx = document.getElementById(canvasId);
    if (!ctx) {
        console.warn(`Canvas element with ID ${canvasId} not found`);
        return null;
    }

    const defaultOptions = {
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
            legend: {
                labels: {
                    color: NEON_THEME.textSecondary,
                    font: {
                        size: 12,
                        weight: '600'
                    }
                }
            },
            tooltip: {
                backgroundColor: 'rgba(15, 35, 51, 0.95)',
                titleColor: NEON_THEME.primary,
                bodyColor: NEON_THEME.text,
                borderColor: NEON_THEME.primary,
                borderWidth: 1
            }
        },
        scales: {
            r: {
                grid: {
                    color: 'rgba(255, 107, 53, 0.1)'
                },
                ticks: {
                    color: NEON_THEME.textSecondary
                },
                pointLabels: {
                    color: NEON_THEME.textSecondary
                }
            }
        }
    };

    const mergedOptions = deepMerge(defaultOptions, options);

    return new Chart(ctx, {
        type: 'radar',
        data: {
            labels: labels,
            datasets: datasets
        },
        options: mergedOptions
    });
}

/* ============================================================
   UTILITY FUNCTIONS
   ============================================================ */

/**
 * Generate Neon gradient styled datasets
 */
function generateNeonDataset(label, data, type = 'gradient') {
    const dataset = {
        label: label,
        data: data,
        borderColor: NEON_THEME.primary,
        backgroundColor: type === 'gradient' 
            ? `rgba(255, 107, 53, 0.1)` 
            : NEON_THEME.primaryLight,
        borderWidth: 2,
        fill: type === 'gradient',
        tension: 0.4,
        pointRadius: 5,
        pointBackgroundColor: NEON_THEME.primary,
        pointBorderColor: 'white',
        pointBorderWidth: 2,
        pointHoverRadius: 7,
        pointHoverBackgroundColor: NEON_THEME.primaryLight,
        pointHoverBorderWidth: 2
    };

    return dataset;
}

/**
 * Generate Neon Color Palette
 */
function generateNeonColors(count) {
    const colors = [
        NEON_THEME.primary,
        NEON_THEME.info,
        NEON_THEME.success,
        NEON_THEME.warning,
        NEON_THEME.error,
        '#FF1493',
        '#00CED1',
        '#32CD32'
    ];

    const result = [];
    for (let i = 0; i < count; i++) {
        result.push(colors[i % colors.length]);
    }

    return result;
}

/**
 * Add gradient effect to chart
 */
function addChartGradient(chart, gradientStart, gradientEnd) {
    const ctx = chart.ctx;
    const gradient = ctx.createLinearGradient(0, 0, 0, 400);
    gradient.addColorStop(0, gradientStart);
    gradient.addColorStop(1, gradientEnd);

    if (chart.data.datasets) {
        chart.data.datasets.forEach(dataset => {
            if (dataset.backgroundColor) {
                dataset.backgroundColor = gradient;
            }
        });
    }

    chart.update();
}

/**
 * Deep merge utility for options
 */
function deepMerge(target, source) {
    const result = { ...target };

    for (const key in source) {
        if (source.hasOwnProperty(key)) {
            if (typeof source[key] === 'object' && source[key] !== null && !Array.isArray(source[key])) {
                result[key] = deepMerge(result[key] || {}, source[key]);
            } else {
                result[key] = source[key];
            }
        }
    }

    return result;
}

/**
 * Initialize custom neon tooltip
 */
function initNeonTooltip(chart) {
    const tooltip = chart.tooltip;
    if (!tooltip) return;

    const tooltipEl = document.getElementById('chartjs-tooltip') || createTooltipElement();
    
    if (!tooltip._active || tooltip._active.length === 0) {
        tooltipEl.style.opacity = '0';
        return;
    }

    const position = chart.canvas.getBoundingClientRect();
    tooltipEl.style.opacity = '1';
    tooltipEl.style.position = 'absolute';
    tooltipEl.style.left = position.left + window.pageXOffset + tooltip.caretX + 'px';
    tooltipEl.style.top = position.top + window.pageYOffset + tooltip.caretY + 'px';
}

/**
 * Create tooltip element
 */
function createTooltipElement() {
    let tooltipEl = document.getElementById('chartjs-tooltip');
    
    if (!tooltipEl) {
        tooltipEl = document.createElement('div');
        tooltipEl.id = 'chartjs-tooltip';
        tooltipEl.className = 'chartjs-tooltip';
        document.body.appendChild(tooltipEl);
    }

    return tooltipEl;
}

/**
 * Export Chart as Image
 */
function exportChartAsImage(chartInstance, filename = 'chart.png') {
    const link = document.createElement('a');
    link.href = chartInstance.canvas.toDataURL('image/png');
    link.download = filename;
    link.click();
}

/**
 * Update chart with animation
 */
function updateChartWithAnimation(chart, newData, transitionDuration = 750) {
    chart.data.datasets.forEach((dataset, index) => {
        if (newData[index]) {
            dataset.data = newData[index];
        }
    });

    chart.options.animation.duration = transitionDuration;
    chart.update();
}

/* ============================================================
   AUTO-INITIALIZATION ON DOCUMENT LOAD
   ============================================================ */

document.addEventListener('DOMContentLoaded', function() {
    initializeAllCharts();
    console.log('Neon Charts initialized');
});

/**
 * Initialize all charts on page
 */
function initializeAllCharts() {
    const barCharts = document.querySelectorAll('[data-chart-type="bar"]');
    const lineCharts = document.querySelectorAll('[data-chart-type="line"]');
    const pieCharts = document.querySelectorAll('[data-chart-type="pie"]');

    barCharts.forEach(chart => initChartFromData(chart));
    lineCharts.forEach(chart => initChartFromData(chart));
    pieCharts.forEach(chart => initChartFromData(chart));
}

/**
 * Initialize chart from data attributes
 */
function initChartFromData(element) {
    try {
        const chartType = element.getAttribute('data-chart-type');
        const chartId = element.getAttribute('id');
        const chartData = JSON.parse(element.getAttribute('data-chart-data'));

        switch(chartType) {
            case 'bar':
                initNeonBarChart(chartId, chartData.labels, chartData.datasets);
                break;
            case 'line':
                initNeonLineChart(chartId, chartData.labels, chartData.datasets);
                break;
            case 'pie':
                initNeonPieChart(chartId, chartData.labels, chartData.data);
                break;
            default:
                console.warn(`Unknown chart type: ${chartType}`);
        }
    } catch (error) {
        console.error('Error initializing chart:', error);
    }
}

// Export functions for global use
window.NeonCharts = {
    initBarChart: initNeonBarChart,
    initLineChart: initNeonLineChart,
    initPieChart: initNeonPieChart,
    initRadarChart: initNeonRadarChart,
    generateDataset: generateNeonDataset,
    generateColors: generateNeonColors,
    exportChart: exportChartAsImage,
    updateChart: updateChartWithAnimation,
    theme: NEON_THEME
};

console.log('Neon Charts API initialized and available as window.NeonCharts');
