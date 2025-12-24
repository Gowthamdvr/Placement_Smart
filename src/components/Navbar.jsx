import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { LayoutDashboard, Building2, UserCheck, FileText, PieChart, Bell, LogOut, Settings } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    const studentNavItems = [
        { to: "/dashboard", icon: LayoutDashboard, label: "Dashboard" },
        { to: "/companies", icon: Building2, label: "Companies" },
        { to: "/eligibility", icon: UserCheck, label: "Eligibility" },
        { to: "/applications", icon: FileText, label: "Applications" },
        { to: "/analytics", icon: PieChart, label: "Analytics" },
    ];

    const adminNavItems = [
        { to: "/admin", icon: LayoutDashboard, label: "Admin Dashboard" },
        { to: "/companies", icon: Building2, label: "View Listings" },
    ];

    const navItems = user?.role === 'admin' ? adminNavItems : studentNavItems;

    return (
        <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-slate-200 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex items-center">
                        <div className="flex-shrink-0 flex items-center gap-2">
                            <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center">
                                <span className="text-white font-bold text-lg">P</span>
                            </div>
                            <span className="font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-violet-600">
                                PlaceMate
                            </span>
                        </div>

                        {/* Desktop Menu */}
                        <div className="hidden md:ml-10 md:flex md:space-x-8">
                            {navItems.map((item) => (
                                <NavLink
                                    key={item.to}
                                    to={item.to}
                                    className={({ isActive }) =>
                                        `flex items-center gap-2 px-1 pt-1 border-b-2 text-sm font-medium transition-colors duration-200 ${isActive
                                            ? 'border-indigo-500 text-gray-900'
                                            : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                                        }`
                                    }
                                >
                                    <item.icon className="w-4 h-4" />
                                    {item.label}
                                </NavLink>
                            ))}
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <NavLink to="/notifications" className="p-2 rounded-full text-gray-400 hover:text-gray-500 hover:bg-gray-100 transition-colors relative">
                            <Bell className="w-5 h-5" />
                            <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-red-500 border-2 border-white"></span>
                        </NavLink>
                        <div className="flex items-center gap-3 border-l pl-4 border-gray-200">
                            <img
                                className="h-8 w-8 rounded-full ring-2 ring-white shadow-sm"
                                src={user?.avatar || "https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"}
                                alt="User avatar"
                            />
                            <div className="hidden md:block text-sm">
                                <p className="font-medium text-gray-700">{user?.name || 'Guest'}</p>
                                <p className="text-gray-500 text-xs capitalize">{user?.role || 'Student'}</p>
                            </div>
                            <button
                                onClick={handleLogout}
                                className="ml-2 text-slate-400 hover:text-red-500 transition-colors"
                                title="Logout"
                            >
                                <LogOut className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
