import { Box, Drawer, Grid, Typography } from '@mui/material'

function StatCard({ title, value, color, trend }) {
    return (
        <Box
            sx={{
                backgroundColor: "#e5e5e5",
                borderRadius: "14px",
                p: 4,
                width:'55%',
                margin:'10px'
            }}
        >
            <Typography variant="body2" >{title}</Typography>
            <Typography variant="h4" sx={{ color }}>
                {value}
            </Typography>
            <Typography variant="caption">{trend}</Typography>
        </Box>
    );
}

function Dashboard() {
    return (
        <>
            <Drawer variant='permanent' sx={{
                width: "20%",
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: "15%",
                    boxSizing: 'border-box',
                    borderRight: '1px solid #e2e8f0',
                    background: '#d10505',
                    borderRadius: '10px',
                    margin: "5px",
                    height: "97%"
                },
            }}>
            </Drawer>
            <Box sx={{ ml: "185px", p: 3 ,marginTop:'60px'}}>
                <Grid container spacing={3}>

                    <Grid item xs={12} sm={6} md={3} sx={{width:'25%'}} >
                        <StatCard title="Attendance" value="1000" color="#3b82f6" trend="+2%"  />
                    </Grid>

                    <Grid item xs={12} sm={6} md={3} sx={{marginLeft:'0px',width:'25%'}}>
                        <StatCard title="Active Now" value="1,234" color="#8b5cf6" trend="+3.2%" />
                    </Grid>

                    <Grid item xs={12} sm={6} md={3} sx={{width:'20%',marginLeft:'20px'}}>
                        <StatCard title="Avg. Session" value="8.4m" color="#10b981" trend="+0.4m" />
                    </Grid>

                    <Grid item xs={12} sm={6} md={3} sx={{width:'20%',marginLeft:'20px'}}>
                        <StatCard title="Care Score" value="98%" color="#f59e0b" trend="Stable" />
                    </Grid>

                </Grid>
            </Box>
        </>
    )
}

export default Dashboard