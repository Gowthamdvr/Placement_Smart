import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Check local storage for persisted session (mock)
        const storedUser = localStorage.getItem('placemate_user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
        setLoading(false);
    }, []);

    const login = (email, password) => {
        // Mock login logic
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (email === 'admin@placemate.com' && password === 'admin123') {
                    const adminUser = {
                        name: 'Admin User',
                        email,
                        role: 'admin',
                        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Admin'
                    };
                    setUser(adminUser);
                    localStorage.setItem('placemate_user', JSON.stringify(adminUser));
                    resolve(adminUser);
                } else if (email.includes('@')) {
                    // Default to student for any other email
                    const studentUser = {
                        name: 'John Doe',
                        email,
                        role: 'student',
                        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Felix',
                        cgpa: 8.75,
                        department: 'CSE'
                    };
                    setUser(studentUser);
                    localStorage.setItem('placemate_user', JSON.stringify(studentUser));
                    resolve(studentUser);
                } else {
                    reject('Invalid credentials');
                }
            }, 1000);
        });
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('placemate_user');
    };

    return (
        <AuthContext.Provider value={{ user, login, logout, loading }}>
            {!loading && children}
        </AuthContext.Provider>
    );
};
