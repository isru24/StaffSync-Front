import { Link } from "react-router-dom";
import Login from "./login";
import { AppBar,Toolbar,Typography } from "@mui/material";

const drawerWidth = 280;

function Navbar() {
    return (
        <AppBar position="fixed"
            elevation={0}
            sx={{
                width: '83%',
                bgcolor: 'rgba(255, 255, 255, 0.8)',
                marginTop:"7px",
                marginRight:'5px',
                backdropFilter: 'blur(8px)',
                borderRadius:'10px',
                backgroundColor:"black",
                color: '#0f172a',
                zIndex: (theme) => theme.zIndex.drawer + 1,
            }}>
            <Toolbar>
                <Typography variant="body2" sx={{ fontWeight: 600, color: '#64748b', letterSpacing: '0.5px' }}>
                    Company Name
                </Typography>
            </Toolbar>
        </AppBar>
    )
}

const navstyle = {
    backgroundColor: "pink",
    width: "100%",
    boxSizing: "border-box",
    marginLeft: "20px"
}
export default Navbar;
