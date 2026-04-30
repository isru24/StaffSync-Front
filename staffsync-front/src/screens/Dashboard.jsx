import { Box, Card, Drawer, Grid, Typography, Divider, List, ListItem, ListItemButton } from '@mui/material'
import { Link } from 'react-router-dom';

function StatCard({ title, value, color, trend }) {
    return (
        <Box
            sx={{
                backgroundColor: "#7f7f7f",
                borderRadius: "14px",
                p: 3,
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                margin: '21px'
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
                    background: '#7f7f7f',
                    borderRadius: '10px',
                    margin: "5px",
                    height: "97%"
                },
            }}>
                <Box sx={{ p: 3, mb: 2, ml: 3.5 }}>
                    <Typography>
                        El Matador
                    </Typography>
                </Box>
                <Divider sx={{ ml: 2, mr: 2}} />
                {/* <List sx={{ px: 2, flexGrow: 1 }}>
                    {menuItemClasses.map((item) => {
                        const active = location.pathname === item.path;
                        return (
                            <ListItem key={item.text} disablePadding sx={{ mb: 0.5 }}>
                                <ListItemButton component={Link} to={item.path} sx={{ borderRadius: '12px', bgcolor: active ? 'blue' : 'transparent', color: active ? 'yellow' : 'transparent', '&:hover': { bgcolor: 'white', color: 'green' }, transition: 'all 0.2s ease' }}>
                                    <ListItemIcon sx={{ color: 'inherit', minWidth: 40 }}>{item.icon}</ListItemIcon>
                                    <ListItemText primary={item.text} primaryTypographyProps={{ fontWeight: active ? 800 : 500, fontSize: '0.9rem' }} />
                                </ListItemButton>
                            </ListItem>
                        )
                    })}
                </List> */}
                    <p>
                        <Link to="/Employee">Employee</Link>
                    </p>
                    <p>
                        <Link to="/Attendance">Attendance</Link>
                    </p>
                    <p>
                        <Link to="/Document">Doc</Link>
                    </p>      
            </Drawer>
            <Box sx={{ ml: "190px", p: 3, marginTop: '60px' }}>
                <Grid container spacing={12}>

                    <Grid item xs={3}>
                        <StatCard title="Total Employees" value="1000" color="black" trend="+2%" />
                    </Grid>

                    <Grid item xs={3}>
                        <StatCard title="Active Now" value="1,234" color="black" trend="+3.2%" />
                    </Grid>

                    <Grid item xs={3}>
                        <StatCard title="Avg. Session" value="8.4m" color="black" trend="+0.4m" />
                    </Grid>

                    <Grid item xs={3} >
                        <StatCard title="Care Score" value="98%" color="black" trend="Stable"/>
                    </Grid>
                </Grid>
                <Grid container spacing={2} >
                    <Grid item xs={4} sx={{ width: '50%' }}>
                        <Card style={{ backgroundColor: '#7f7f7f', marginLeft: '10px', padding: '10px', height: 270, borderRadius: '10px' }} >
                            Employees
                        </Card>
                    </Grid>
                    <Grid item xs={8} sx={{ width: '48%' }} >
                    <Card style={{ backgroundColor: '#7f7f7f', padding: '10px', height: 270, borderRadius: '10px' }} >
                            att
                        </Card>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default Dashboard