import { useState } from "react";
import { useNavigate } from "react-router-dom";
import firstImage from "../assets/first.jpg"
function Signup(params) {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        country: "",
        AdminName:"",
        AdminEmail:"",
        password: ""
    })
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState("");
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage("");
        setLoading(true);
        try {
            if (res.data.success) {
                setMessage("Company Registered");
                setFormData({
                    name: "",
                    email: "",
                });
                setTimeout(() => navigate(""), 1500);
            } else {
                setMessage((res.data.message || "Registration Failed"));
            }
        } catch (error) {
            console.error(err);
            setMessage("Error Registering. Please try again");
        } finally {
            setLoading(false)
        }
    }


    return (
        <div style={{ display: "flex", height: "95vh", }}>
            <div style={{ width: "50%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                <form onSubmit={handleSubmit}>
                    <div style={{ paddingLeft: "30%", paddingBottom: "20px" }}>Create Company Account</div>
                    <div>
                        <label>
                            Company Name
                        </label>
                        <input type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            style={inputStyle}
                        />
                    </div>
                    <div>
                        <label>
                            Company Email
                        </label>
                        <input type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            style={inputStyle}
                        />
                    </div>
                    <div>
                        <label>
                            Admin Name
                        </label>
                        <input type="text"
                            name="name"
                            value={formData.AdminName}
                            onChange={handleChange}
                            required
                            style={inputStyle}
                        />
                    </div>
                    <div>
                        <label>
                            Admin Email
                        </label>
                        <input type="text"
                            name="name"
                            value={formData.AdminEmail}
                            onChange={handleChange}
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
                            value={formData.password}
                            onChange={handleChange}
                            required
                            style={inputStyle}
                        />
                    </div>
                    <button style={buttonStyle}>
                        Signup
                    </button>
                    <text style={{ margin:"20px",}}>
                        Already have an Account? Login
                    </text>
                </form>
            </div>
            <div style={{ width: "50%", backgroundImage: `url(${firstImage})`, backgroundSize: "cover", borderRadius: "10px" }}></div>
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

export default Signup;