import React, { useState, useContext } from 'react'
import '../styles/Signup.css'

function Signup() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div className='signup-container' >
            <div className="signup-content">
                <h1>Signup</h1>

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

export default Signup