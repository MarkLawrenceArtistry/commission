import { useState, useEffect } from 'react'
import api from 'axios'
import { login, register } from '../services/userService';

export default function Home() {
    const [credentials, setCredentials] = useState({ email: '', password: '' })
    const [loading, isLoading] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const response = await login(credentials);
            alert("Login successful")
            localStorage.setItem('token', response.token)
        } catch (err) {
            console.error(err.message)
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h1>Login</h1>
                <div>
                    <label>Email</label>
                    <input type="text" placeholder='Email..' value={credentials.email} onChange={(e) => setCredentials({...credentials, email: e.target.value})} required />
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" placeholder='Password..' value={credentials.password} onChange={(e) => setCredentials({...credentials, password: e.target.value})} required />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    )
}