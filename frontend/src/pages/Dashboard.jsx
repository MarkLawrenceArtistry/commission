import { useAuth } from "../contexts/AuthContext"
import { useNavigate } from "react-router-dom"

export default function Dashboard() {
    const { logoutSession, user } = useAuth()
    const navigate = useNavigate()

    const handleLogout = () => {
        logoutSession();
        navigate('/login')
    }

    return (
        <div>
            <h1>Welcome, this is Dashboard</h1>
            <p>GANDA MO MARINZKIIIIIIIII</p>

            <button onClick={handleLogout}>Logout</button>
        </div>
    )
}