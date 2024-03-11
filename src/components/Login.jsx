import React, { useState, useContext } from 'react'
import '../styles/Login.css'
function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    return (
        <div className='login-container' >
            <div className="login-content">
                <h1>Login</h1>
                <form >
                    <div>
                        <label>Email : </label> <br />
                        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} /> <br />
                    </div>
                    <div>
                        <label>Password : </label> <br />
                        <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} /> <br />
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>

        </div>
    )
}

export default Login