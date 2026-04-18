import { Box, Card, Drawer, Grid, Typography } from '@mui/material'

function StatCard({ title, value, color, trend }) {
    return (
        <Box
            sx={{
                backgroundColor: "#e5e5e5",
                borderRadius: "14px",
                p: 3,
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                margin: '10px'
            }}
        >
            <Typography variant="body2" sx={{ alignSelf: 'flex-start', mb: 3 }} >{title}</Typography>
            <Typography variant="h4" sx={{ color }}>
                {value}
            </Typography>
            <Typography variant="caption" sx={{ alignSelf: 'self-start', mt: 3 }}>{trend}</Typography>
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
            <Box sx={{ ml: "170px", p: 3, marginTop: '60px' }}>
                <Grid container spacing={16}>

                    <Grid item xs={3}>
                        <StatCard title="Total Employees" value="1000" color="#3b82f6" trend="+2%" />
                    </Grid>

                    <Grid item xs={3}>
                        <StatCard title="Active Now" value="1,234" color="#8b5cf6" trend="+3.2%" />
                    </Grid>

                    <Grid item xs={3}>
                        <StatCard title="Avg. Session" value="8.4m" color="#10b981" trend="+0.4m" />
                    </Grid>

                    <Grid item xs={3}>
                        <StatCard title="Care Score" value="98%" color="#f59e0b" trend="Stable" />
                    </Grid>
                </Grid>
                <Grid container spacing={2} >
                    <Grid item xs = {6}sx={{width:'50%'}}>
                        <Card style={{ backgroundColor: 'blue' ,marginLeft:'10px',padding:'10px',height:270,borderRadius:'10px'}} >
                            Employees
                        </Card>
                    </Grid>
                    <Grid item xs = {6} >
                        <Card style={{ backgroundColor: 'yellow' ,marginLeft:'10px',padding:'10px',height:270,borderRadius:'10px'}} >
                            att
                        </Card>
                    </Grid>
                    </Grid>
            </Box>
        </>
    )
}

export default Dashboard