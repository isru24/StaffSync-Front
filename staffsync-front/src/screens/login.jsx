import firstImage from "../assets/first.jpg"
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login(params) {

    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState("");
    const navigate = useNavigate();


    const handleLogin = async (e) => {
        e.preventDefault();
        setMessage("");
        setLoading(true);
        // try {
        //     if (res.data.success) {
        //         setMessage("Company Registered");
        //         setFormData({
        //             name: "",
        //             email: "",
        //         });
        //         setTimeout(() => navigate(""), 1500);
        //     } else {
        //         setMessage((res.data.message || "Registration Failed"));
        //     }
        // } catch (error) {
        //     console.error(err);
        //     setMessage("Error Registering. Please try again");
        // } finally {
        //     setLoading(false)
        // }
    }

    return (
        <div style={{ display: "flex", height: "95vh", }}>
            <div style={{ width: "50%", backgroundImage: `url(${firstImage})`, backgroundSize: "cover", borderRadius: "10px" }} />
            <div style={{width: "50%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                <form onSubmit={handleLogin}>
                    <div style={{ paddingLeft: "30%", paddingBottom: "20px" }}>Login To Company Account</div>
                    <div>
                        <label>
                            Company Name
                        </label>
                        <input type="text"
                            name="name"
                            required
                            style={inputStyle}
                        />
                    </div>
                    <div>
                        <label>
                            Password
                        </label>
                        <input type="text"
                            name="name"
                            required
                            style={inputStyle}
                        />
                    </div>
                    <button style={buttonStyle}>
                        Login
                    </button>
                    <p>
                        <Link to="/Dashboard">Da</Link>
                    </p>
                    <p style={{ margin: "20px" }}>
                        Don't have an Account?{" "} 
                        <Link to="/" style={{color:"blue"}}>
                        Signup
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    )
}

const inputStyle = {
    width: "94%",
    padding: "10px",
    marginBottom: "1rem",
    marginLeft: "0.1rem",
    border: "1px solid #ccc",
    borderRadius: "10px",
}

const buttonStyle = {
    padding:"10px",
    backgroundColor:"#ffffff",
    border:"1px solid ",
    borderRadius:"8px",
    display:"flex",
    marginLeft:"6.7rem",
    marginBottom:"0.5rem"
}

export default Login;