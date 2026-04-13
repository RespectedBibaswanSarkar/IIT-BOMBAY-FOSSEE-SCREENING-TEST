/**
 * ============================================================================
 * CHART.JS 4.X INTEGRATION - FOSSEE NEON ORANGE THEME
 * ============================================================================
 * 
 * Modern chart components using Chart.js 4.x with Material Design 3
 * Custom styling with neon orange + deep blue theme
 * ============================================================================
 */

// ============================================================================
// CHART THEME CONFIGURATION
// ============================================================================

const FosseeChartTheme = {
  colors: {
    primary: '#FF7A00',      // Neon Orange
    secondary: '#00D9FF',    // Cyan
    accent: '#8C4DFF',       // Purple
    success: '#00FF41',      // Green
    error: '#FF0055',        // Red
    warning: '#FFB800',      // Orange/Yellow
    background: '#0F1219',   // Dark Blue
    surfaceLight: 'rgba(255, 255, 255, 0.03)',
    textPrimary: '#FFFFFF',
    textSecondary: '#E0E0E0'
  },

  getGradient(ctx, color1, color2) {
    const gradient = ctx.createLinearGradient(0, 0, 0, 400);
    gradient.addColorStop(0, `${color1}40`);
    gradient.addColorStop(1, `${color2}00`);
    return gradient;
  },

  chartOptions: {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: {
        display: true,
        position: 'bottom',
        labels: {
          color: '#E0E0E0',
          font: { size: 13, weight: '500', family: "'Roboto', sans-serif" },
          padding: 20,
          usePointStyle: true,
          borderRadius: 4,
          boxWidth: 8,
          boxHeight: 8
        }
      },
      tooltip: {
        backgroundColor: 'rgba(15, 18, 25, 0.9)',
        titleColor: '#FF7A00',
        bodyColor: '#E0E0E0',
        borderColor: 'rgba(255, 122, 0, 0.3)',
        borderWidth: 1,
        padding: 12,
        displayColors: true,
        titleFont: { size: 14, weight: '600' },
        bodyFont: { size: 13 },
        borderRadius: 8,
        boxPadding: 6
      }
    },
    scales: {
      x: {
        grid: {
          color: 'rgba(255, 255, 255, 0.05)',
          drawBorder: false,
          lineWidth: 1
        },
        ticks: {
          color: '#A0A0B0',
          font: { size: 12 }
        }
      },
      y: {
        grid: {
          color: 'rgba(255, 255, 255, 0.05)',
          drawBorder: false,
          lineWidth: 1
        },
        ticks: {
          color: '#A0A0B0',
          font: { size: 12 }
        }
      }
    }
  }
};

// ============================================================================
// LINE CHART - WORKSHOP TRENDS
// ============================================================================

function createLineChart(canvasId, data, options = {}) {
  const canvas = document.getElementById(canvasId);
  if (!canvas) return null;

  const ctx = canvas.getContext('2d');
  
  const defaultOptions = {
    ...FosseeChartTheme.chartOptions,
    interaction: {
      intersect: false,
      mode: 'index'
    },
    scales: {
      ...FosseeChartTheme.chartOptions.scales,
      y: {
        ...FosseeChartTheme.chartOptions.scales.y,
        beginAtZero: true,
        ticks: {
          stepSize: 5
        }
      }
    }
  };

  const chartConfig = {
    type: 'line',
    data: {
      labels: data.labels,
      datasets: [
        {
          label: data.label || 'Workshops',
          data: data.values,
          borderColor: FosseeChartTheme.colors.primary,
          backgroundColor: FosseeChartTheme.getGradient(ctx, FosseeChartTheme.colors.primary, '#FF7A0000'),
          borderWidth: 3,
          borderRadius: 4,
          fill: true,
          tension: 0.4,
          pointBackgroundColor: FosseeChartTheme.colors.primary,
          pointBorderColor: '#0F1219',
          pointBorderWidth: 2,
          pointRadius: 4,
          pointHoverRadius: 6,
          pointHoverBackgroundColor: FosseeChartTheme.colors.secondary,
          segment: {
            borderDash: [5, 5]
          }
        }
      ]
    },
    options: { ...defaultOptions, ...options }
  };

  return new Chart(ctx, chartConfig);
}

// ============================================================================
// BAR CHART - WORKSHOP TYPES
// ============================================================================

function createBarChart(canvasId, data, options = {}) {
  const canvas = document.getElementById(canvasId);
  if (!canvas) return null;

  const ctx = canvas.getContext('2d');
  
  const colors = [
    FosseeChartTheme.colors.primary,
    FosseeChartTheme.colors.secondary,
    FosseeChartTheme.colors.accent,
    FosseeChartTheme.colors.success,
    FosseeChartTheme.colors.warning
  ];

  const defaultOptions = {
    ...FosseeChartTheme.chartOptions,
    indexAxis: options.horizontal ? 'y' : 'x',
    scales: {
      ...FosseeChartTheme.chartOptions.scales,
      y: {
        ...FosseeChartTheme.chartOptions.scales.y,
        beginAtZero: true
      }
    }
  };

  const chartConfig = {
    type: 'bar',
    data: {
      labels: data.labels,
      datasets: data.datasets.map((dataset, idx) => ({
        label: dataset.label,
        data: dataset.values,
        backgroundColor: colors[idx % colors.length],
        borderColor: `rgba(255, 255, 255, 0.1)`,
        borderWidth: 1,
        borderRadius: 8,
        borderSkipped: false,
        barPercentage: 0.8,
        categoryPercentage: 0.9
      }))
    },
    options: { ...defaultOptions, ...options }
  };

  return new Chart(ctx, chartConfig);
}

// ============================================================================
// PIE/DOUGHNUT CHART - DISTRIBUTION
// ============================================================================

function createPieChart(canvasId, data, options = {}) {
  const canvas = document.getElementById(canvasId);
  if (!canvas) return null;

  const ctx = canvas.getContext('2d');

  const colors = [
    FosseeChartTheme.colors.primary,
    FosseeChartTheme.colors.secondary,
    FosseeChartTheme.colors.accent,
    FosseeChartTheme.colors.success,
    FosseeChartTheme.colors.warning,
    FosseeChartTheme.colors.error,
    '#6366F1',
    '#EC4899'
  ];

  const defaultOptions = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      ...FosseeChartTheme.chartOptions.plugins,
      legend: {
        ...FosseeChartTheme.chartOptions.plugins.legend,
        position: 'right'
      }
    }
  };

  const chartConfig = {
    type: options.doughnut ? 'doughnut' : 'pie',
    data: {
      labels: data.labels,
      datasets: [{
        data: data.values,
        backgroundColor: colors.slice(0, data.labels.length),
        borderColor: '#0F1219',
        borderWidth: 2,
        hoverBorderWidth: 3,
        hoverBorderColor: FosseeChartTheme.colors.secondary
      }]
    },
    options: { ...defaultOptions, ...options }
  };

  if (options.doughnut) {
    chartConfig.options.plugins.tooltip = FosseeChartTheme.chartOptions.plugins.tooltip;
  }

  return new Chart(ctx, chartConfig);
}

// ============================================================================
// AREA CHART - TIME SERIES
// ============================================================================

function createAreaChart(canvasId, data, options = {}) {
  const canvas = document.getElementById(canvasId);
  if (!canvas) return null;

  const ctx = canvas.getContext('2d');

  const defaultOptions = {
    ...FosseeChartTheme.chartOptions,
    interaction: {
      intersect: false,
      mode: 'index'
    },
    scales: {
      ...FosseeChartTheme.chartOptions.scales,
      y: {
        ...FosseeChartTheme.chartOptions.scales.y,
        stacked: options.stacked !== false // Default stacked
      }
    }
  };

  const datasets = data.datasets.map((dataset, idx) => ({
    label: dataset.label,
    data: dataset.values,
    borderColor: [FosseeChartTheme.colors.primary, FosseeChartTheme.colors.secondary][idx],
    backgroundColor: [
      FosseeChartTheme.getGradient(ctx, FosseeChartTheme.colors.primary, '#FF7A0000'),
      FosseeChartTheme.getGradient(ctx, FosseeChartTheme.colors.secondary, '#00D9FF00')
    ][idx],
    borderWidth: 2,
    fill: true,
    tension: 0.4,
    pointBackgroundColor: [FosseeChartTheme.colors.primary, FosseeChartTheme.colors.secondary][idx],
    pointBorderColor: '#0F1219',
    pointRadius: 3,
    pointHoverRadius: 5
  }));

  const chartConfig = {
    type: 'line',
    data: {
      labels: data.labels,
      datasets
    },
    options: { ...defaultOptions, ...options }
  };

  return new Chart(ctx, chartConfig);
}

// ============================================================================
// RADAR CHART - SKILLS/PERFORMANCE
// ============================================================================

function createRadarChart(canvasId, data, options = {}) {
  const canvas = document.getElementById(canvasId);
  if (!canvas) return null;

  const ctx = canvas.getContext('2d');

  const defaultOptions = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      ...FosseeChartTheme.chartOptions.plugins,
      legend: {
        ...FosseeChartTheme.chartOptions.plugins.legend,
        position: 'bottom'
      }
    },
    scales: {
      r: {
        beginAtZero: true,
        max: 100,
        grid: {
          color: 'rgba(255, 255, 255, 0.08)'
        },
        ticks: {
          color: '#A0A0B0',
          backdropColor: 'transparent'
        }
      }
    }
  };

  const chartConfig = {
    type: 'radar',
    data: {
      labels: data.labels,
      datasets: [{
        label: data.label || 'Performance',
        data: data.values,
        borderColor: FosseeChartTheme.colors.primary,
        backgroundColor: `${FosseeChartTheme.colors.primary}20`,
        borderWidth: 2,
        pointBackgroundColor: FosseeChartTheme.colors.primary,
        pointBorderColor: '#0F1219',
        pointRadius: 4,
        pointHoverRadius: 6
      }]
    },
    options: { ...defaultOptions, ...options }
  };

  return new Chart(ctx, chartConfig);
}

// ============================================================================
// BUBBLE CHART - SCATTER WITH SIZE
// ============================================================================

function createBubbleChart(canvasId, data, options = {}) {
  const canvas = document.getElementById(canvasId);
  if (!canvas) return null;

  const ctx = canvas.getContext('2d');

  const defaultOptions = {
    ...FosseeChartTheme.chartOptions,
    scales: {
      ...FosseeChartTheme.chartOptions.scales,
      x: {
        ...FosseeChartTheme.chartOptions.scales.x,
        beginAtZero: true
      },
      y: {
        ...FosseeChartTheme.chartOptions.scales.y,
        beginAtZero: true
      }
    }
  };

  const chartConfig = {
    type: 'bubble',
    data: {
      datasets: data.datasets.map((dataset, idx) => ({
        label: dataset.label,
        data: dataset.data,
        backgroundColor: [
          FosseeChartTheme.colors.primary,
          FosseeChartTheme.colors.secondary,
          FosseeChartTheme.colors.accent
        ][idx],
        borderColor: 'rgba(255, 255, 255, 0.2)',
        borderWidth: 1
      }))
    },
    options: { ...defaultOptions, ...options }
  };

  return new Chart(ctx, chartConfig);
}

// ============================================================================
// CHART BUILDER - UNIFIED INTERFACE
// ============================================================================

class ChartBuilder {
  static create(type, canvasId, data, options = {}) {
    const builders = {
      line: createLineChart,
      bar: createBarChart,
      pie: (id, d, o) => createPieChart(id, d, { ...o, doughnut: false }),
      doughnut: (id, d, o) => createPieChart(id, d, { ...o, doughnut: true }),
      area: createAreaChart,
      radar: createRadarChart,
      bubble: createBubbleChart
    };

    const builder = builders[type.toLowerCase()];
    if (!builder) {
      console.error(`Unknown chart type: ${type}`);
      return null;
    }

    return builder(canvasId, data, options);
  }

  static destroy(chartInstance) {
    if (chartInstance) {
      chartInstance.destroy();
    }
  }

  static updateData(chartInstance, newData) {
    if (chartInstance) {
      chartInstance.data = newData;
      chartInstance.update('active');
    }
  }

  static updateOptions(chartInstance, newOptions) {
    if (chartInstance) {
      Object.assign(chartInstance.options, newOptions);
      chartInstance.update();
    }
  }
}

// ============================================================================
// ANIMATION PRESETS
// ============================================================================

const AnimationPresets = {
  moderate: {
    duration: 1000,
    easing: 'easeInOutQuart',
    delay: (ctx) => ctx.dataIndex * 50
  },
  
  fast: {
    duration: 500,
    easing: 'easeOutQuart',
    delay: 0
  },
  
  slow: {
    duration: 2000,
    easing: 'easeInOutQuart',
    delay: (ctx) => ctx.dataIndex * 100
  },
  
  bounce: {
    duration: 1000,
    easing: 'easeOutBounce',
    delay: (ctx) => ctx.dataIndex * 75
  }
};

// ============================================================================
// EXPORT CHART FUNCTIONS
// ============================================================================

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    FosseeChartTheme,
    createLineChart,
    createBarChart,
    createPieChart,
    createAreaChart,
    createRadarChart,
    createBubbleChart,
    ChartBuilder,
    AnimationPresets
  };
}
