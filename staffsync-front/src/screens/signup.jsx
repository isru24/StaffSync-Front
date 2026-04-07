import { useState } from "react";
import { useNavigate } from "react-router-dom";
import firstImage from "../assets/first.jpg"
function Signup(params) {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        country: "",
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
                    <div style={{paddingLeft:"30%",paddingBottom:"20px"}}>Create Account</div>
                    <div>
                        <label>
                            CompanyName
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
                            CompanyEmail
                        </label>
                        <input type="email"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            style={inputStyle}
                        />
                    </div>
                    <div>
                        <label>
                            Country
                        </label>
                        <input type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            style={inputStyle}
                        />
                    </div>
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

export default Signup;