import { useState } from "react";
import AuthService from "../services/auth.service"; 


const Signup = () => {
    /* utm */
    const [credentials, setCredentials] = useState({ email: '', password: '' });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const data = await AuthService.signup(credentials);
            console.log("handleSubmit data : ", data);
        } catch (error) {
            console.log("handleSubmit error : ", error);
        }
    };

    return (
        <div>
            <h1>Signup</h1>

            <form onSubmit={handleSubmit}>
                <div>
                    <input 
                        type="email" 
                        name="email" 
                        placeholder="email" 
                        value={credentials.email} 
                        onChange={handleChange} 
                    />
                </div>
                <div>
                    <input 
                        type="password" 
                        name="password" 
                        placeholder="password" 
                        value={credentials.password} 
                        onChange={handleChange} 
                    />
                </div>
                <input type="submit" value="Signup" />
            </form>
        </div>
    );
}

export default Signup;