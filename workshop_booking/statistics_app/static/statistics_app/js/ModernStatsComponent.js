/* ============================================================================
   MODERN STATISTICS COMPONENT - FOSSEE Workshop Booking System
   Features: MUI Integration, Chart.js 4.x, Neon Orange Theme
   ============================================================================ */

const { 
  Box, 
  Container, 
  Grid, 
  Card, 
  Typography, 
  Button, 
  ButtonGroup,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Fade,
  Grow,
  IconButton,
  Tooltip
} = MaterialUI;

const ModernStatsComponent = ({ monthlyData, typeData, mapData, upcomingWorkshops }) => {
  const [activeChart, setActiveChart] = React.useState('monthly');
  const chartRef = React.useRef(null);
  const chartInstance = React.useRef(null);

  React.useEffect(() => {
    initChart();
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [activeChart]);

  const initChart = () => {
    const ctx = document.getElementById('statsChart').getContext('2d');
    
    if (chartInstance.current) {
        chartInstance.current.destroy();
    }

    let config = {};

    if (activeChart === 'monthly') {
        config = {
            type: 'bar',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                datasets: [{
                    label: 'Workshops per Month',
                    data: monthlyData,
                    backgroundColor: 'rgba(255, 125, 0, 0.4)',
                    borderColor: '#FF7D00',
                    borderWidth: 2,
                    borderRadius: 8,
                    hoverBackgroundColor: 'rgba(255, 125, 0, 0.7)',
                    hoverBorderColor: '#FF7D00',
                    boxShadow: '0 0 20px rgba(255, 125, 0, 0.5)'
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { display: false },
                    tooltip: {
                        backgroundColor: 'rgba(10, 14, 39, 0.9)',
                        titleColor: '#FF7D00',
                        bodyColor: '#E8E8FF',
                        borderColor: 'rgba(255, 125, 0, 0.3)',
                        borderWidth: 1,
                        displayColors: false
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        grid: { color: 'rgba(255, 255, 255, 0.05)' },
                        ticks: { color: '#8888A0' }
                    },
                    x: {
                        grid: { display: false },
                        ticks: { color: '#8888A0' }
                    }
                }
            }
        };
    } else {
        config = {
            type: 'doughnut',
            data: {
                labels: typeData[0],
                datasets: [{
                    data: typeData[1],
                    backgroundColor: [
                        '#FF7D00',
                        '#00D9FF',
                        '#00FF41',
                        '#FF0055',
                        '#FFD700',
                        '#8A2BE2'
                    ],
                    borderWidth: 0,
                    hoverOffset: 20
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                cutout: '70%',
                plugins: {
                    legend: {
                        position: 'right',
                        labels: { color: '#E8E8FF', padding: 20, font: { size: 12 } }
                    },
                    tooltip: {
                        backgroundColor: 'rgba(10, 14, 39, 0.9)',
                        padding: 12,
                        cornerRadius: 8
                    }
                }
            }
        };
    }

    chartInstance.current = new Chart(ctx, config);
  };

  return (
    <Container maxWidth="xl" sx={{ mt: 4, mb: 4 }}>
      <Grid container spacing={4}>
        
        {/* Header Section */}
        <Grid item xs={12} data-aos="fade-down">
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
            <Typography variant="h4" sx={{ fontWeight: 800, color: 'var(--accent-orange)', textTransform: 'uppercase', letterSpacing: 2 }}>
              Workshop Statistics
            </Typography>
            <ButtonGroup variant="outlined" sx={{ '& .MuiButton-root': { borderColor: 'rgba(255, 125, 0, 0.3)', color: '#E8E8FF' } }}>
              <Button 
                onClick={() => setActiveChart('monthly')}
                sx={{ 
                  bgcolor: activeChart === 'monthly' ? 'rgba(255, 125, 0, 0.1)' : 'transparent',
                  borderColor: activeChart === 'monthly' ? 'var(--accent-orange) !important' : 'rgba(255, 125, 0, 0.3)'
                }}
              >
                Monthly Count
              </Button>
              <Button 
                onClick={() => setActiveChart('overall')}
                sx={{ 
                  bgcolor: activeChart === 'overall' ? 'rgba(255, 125, 0, 0.1)' : 'transparent',
                  borderColor: activeChart === 'overall' ? 'var(--accent-orange) !important' : 'rgba(255, 125, 0, 0.3)'
                }}
              >
                Overall Count
              </Button>
            </ButtonGroup>
          </Box>
        </Grid>

        {/* Chart Section */}
        <Grid item xs={12} md={8} data-aos="fade-right">
          <Card className="glass-card" sx={{ height: 450, display: 'flex', flexDirection: 'column', p: 3 }}>
            <Typography variant="h6" sx={{ color: '#E8E8FF', mb: 3, fontWeight: 600 }}>
              {activeChart === 'monthly' ? 'Workshops Distribution (Yearly)' : 'Workshops by Category'}
            </Typography>
            <Box sx={{ flexGrow: 1, position: 'relative' }}>
              <canvas id="statsChart"></canvas>
            </Box>
          </Card>
        </Grid>

        {/* Small Stats / Summary */}
        <Grid item xs={12} md={4} data-aos="fade-left">
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Card className="glass-card" sx={{ p: 3, textAlign: 'center', borderLeft: '4px solid var(--accent-orange)' }}>
                <Typography variant="overline" sx={{ color: '#8888A0' }}>Total Workshops</Typography>
                <Typography variant="h3" sx={{ fontWeight: 800, color: '#E8E8FF' }}>
                  {monthlyData.reduce((a, b) => a + b, 0)}
                </Typography>
              </Card>
            </Grid>
            <Grid item xs={12}>
              <Card className="glass-card" sx={{ p: 3, textAlign: 'center', borderLeft: '4px solid var(--accent-blue)' }}>
                <Typography variant="overline" sx={{ color: '#8888A0' }}>Active Types</Typography>
                <Typography variant="h3" sx={{ fontWeight: 800, color: '#E8E8FF' }}>
                  {typeData[0].length}
                </Typography>
              </Card>
            </Grid>
            <Grid item xs={12}>
               <Card className="glass-card" sx={{ p: 2 }}>
                  <Typography variant="subtitle2" sx={{ color: '#FF7D00', mb: 1, fontWeight: 700 }}>Quick Actions</Typography>
                  <Button fullWidth variant="contained" sx={{ bgcolor: 'var(--accent-orange)', '&:hover': { bgcolor: '#E66E00' }, color: '#000', fontWeight: 700, mb: 1 }}>
                    Download Report
                  </Button>
                  <Button fullWidth variant="outlined" sx={{ color: '#00D9FF', borderColor: '#00D9FF', '&:hover': { borderColor: '#00D9FF', bgcolor: 'rgba(0, 217, 255, 0.05)' } }}>
                    View All Details
                  </Button>
               </Card>
            </Grid>
          </Grid>
        </Grid>

        {/* Upcoming Workshops Table */}
        <Grid item xs={12} data-aos="fade-up">
           <Typography variant="h5" sx={{ mt: 4, mb: 2, color: 'var(--accent-blue)', fontWeight: 700 }}>
             Upcoming Workshops Schedule
           </Typography>
           <TableContainer component={Paper} className="glass-card" sx={{ bgcolor: 'transparent', boxShadow: 'none' }}>
              <Table size="medium">
                <TableHead sx={{ bgcolor: 'rgba(255, 255, 255, 0.03)' }}>
                  <TableRow>
                    <TableCell sx={{ color: '#FF7D00', fontWeight: 700 }}>Coordinator</TableCell>
                    <TableCell sx={{ color: '#FF7D00', fontWeight: 700 }}>Institute</TableCell>
                    <TableCell sx={{ color: '#FF7D00', fontWeight: 700 }}>Instructor</TableCell>
                    <TableCell sx={{ color: '#FF7D00', fontWeight: 700 }}>Workshop Name</TableCell>
                    <TableCell sx={{ color: '#FF7D00', fontWeight: 700 }}>Date</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {upcomingWorkshops.map((ws, i) => (
                    <TableRow key={i} sx={{ '&:hover': { bgcolor: 'rgba(255, 255, 255, 0.02)' } }}>
                      <TableCell sx={{ color: '#E8E8FF', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>{ws.coordinator}</TableCell>
                      <TableCell sx={{ color: '#D9D9E3', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>{ws.institute}</TableCell>
                      <TableCell sx={{ color: '#E8E8FF', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>{ws.instructor}</TableCell>
                      <TableCell sx={{ color: '#00D9FF', fontWeight: 600, borderBottom: '1px solid rgba(255,255,255,0.05)' }}>{ws.title}</TableCell>
                      <TableCell sx={{ color: '#8888A0', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>{ws.date}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
           </TableContainer>
        </Grid>

      </Grid>
    </Container>
  );
};

window.ModernStatsComponent = ModernStatsComponent;
