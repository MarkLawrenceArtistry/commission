import { createContext, useState, useContext } from "react";

const AuthContext = createContext()

export const useAuth = () => {
    return useContext(AuthContext)
}

export function AuthProvider({ children }) {
    const existingToken = localStorage.getItem('token')

    const [token, setToken] = useState(existingToken)
    const [user, setUser] = useState(null)

    const loginSession = (newToken, userData) => {
        localStorage.setItem('token', newToken)
        setToken(newToken)
        setUser(userData)
    }

    const logoutSession = () => {
        localStorage.removeItem('token')
        setToken(null)
        setUser(null)
    }

    const value = {
        token,
        user,
        loginSession,
        logoutSession,
        isAuthenticated: !!token
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}