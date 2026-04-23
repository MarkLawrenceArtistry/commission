
import { Routes, Route, Link } from 'react-router-dom'

import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import NotFound from './pages/NotFound'
import CheckSession from './pages/CheckSession'

function App() {
    return (
        <>
            <div>
                <nav style={{ padding: '10px', background: '#eee', marginBottom: '20px' }}>
                    <Link to="/">Login</Link>
                    <span style={{ margin: '0 10px' }}>|</span>
                    <Link to="/dashboard">Dashboard</Link>
                    <span style={{ margin: '0 10px' }}>|</span>
                    <Link to="/check">Check Session</Link>
                </nav>

                <Routes>
                    {/* If the URL is exactly "/", show the Login component */}
                    <Route path="/" element={<Login />} />
                    
                    {/* If the URL is "/Dashboard", show the Dashboard component */}
                    <Route path="/dashboard" element={<Dashboard />} />

                    <Route path="/check" element={<CheckSession />} />

                    {/* You can also add a "Catch-all" for 404 Not Found pages */}
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </div>
        </>
    )
}

export default App
