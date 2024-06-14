import { useState } from "react";
import UserService from "../services/user.service";

const Signup = () => {

    const [credentials, setCredentials] = useState({ email: '', password: '' });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const data = await UserService.create(credentials);
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

    return (
        <div>
            <h1>Signup</h1>

            <form>
                <div>
                    <input type="email" name="email" placeholder="email" />
                </div>
                <div>
                    <input type="password" name="password" placeholder="password" />
                </div>
                <input type="submit" value="Signup" />
            </form>
        </div>
    );
}

export default Signup;