
import { Routes, Route, Link } from 'react-router-dom'
import { AuthProvider } from './contexts/AuthContext'
import ProtectedRoute from './components/ProtectedRoute'

import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import NotFound from './pages/NotFound'
import CheckSession from './pages/CheckSession'

function App() {
    return (
       <AuthProvider>
            <div>
                <Routes>
                    {/* If the URL is exactly "/", show the Login component */}
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    
                    {/* If the URL is "/Dashboard", show the Dashboard component */}
                    <Route path="/dashboard" 
                        element={
                            <ProtectedRoute>
                                <Dashboard />
                            </ProtectedRoute>
                        } 
                    />

                    {/* You can also add a "Catch-all" for 404 Not Found pages */}
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </div>
       </AuthProvider>
    )
}

export default App
