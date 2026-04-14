import { Link } from "react-router-dom";
import Login from "./login";

function Navbar() {
    return (
        <nav>
            <div style={navstyle}>
                <Link to="/Login">
                Login</Link>
            </div>
        </nav>
    )
}

const navstyle = {
    backgroudColor:"pink"
}
export default Navbar;
