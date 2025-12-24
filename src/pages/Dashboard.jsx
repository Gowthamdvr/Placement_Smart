import React from 'react';
import { Briefcase, CheckCircle, XCircle, Clock } from 'lucide-react';
import ChartSection from '../components/ChartSection';
import { companies } from '../data/companies';
import CompanyCard from '../components/CompanyCard';

const StatCard = ({ label, value, icon: Icon, color, bg }) => (
    <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm flex items-center justify-between">
        <div>
            <p className="text-slate-500 text-sm font-medium">{label}</p>
            <h3 className="text-2xl font-bold text-slate-800 mt-1">{value}</h3>
        </div>
        <div className={`p-3 rounded-lg ${bg}`}>
            <Icon className={`w-6 h-6 ${color}`} />
        </div>
    </div>
);

const Dashboard = () => {
    return (
        <div className="space-y-8 animate-fade-in">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-2xl font-bold text-slate-800">Welcome back, John! 👋</h1>
                    <p className="text-slate-500 mt-1">Here's what's happening with your placements today.</p>
                </div>
                <div className="text-right hidden sm:block">
                    <p className="text-sm font-medium text-slate-600">Current CGPA</p>
                    <p className="text-2xl font-bold text-indigo-600">8.75</p>
                </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <StatCard label="Applied" value="15" icon={Briefcase} color="text-indigo-600" bg="bg-indigo-50" />
                <StatCard label="Shortlisted" value="5" icon={CheckCircle} color="text-purple-600" bg="bg-purple-50" />
                <StatCard label="Ignored/Rejected" value="3" icon={XCircle} color="text-red-600" bg="bg-red-50" />
                <StatCard label="Pending" value="7" icon={Clock} color="text-amber-600" bg="bg-amber-50" />
            </div>

            {/* Analytics */}
            <ChartSection />

            {/* Recent Opportunities */}
            <div>
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-bold text-slate-800">Recent Opportunities</h2>
                    <button className="text-indigo-600 font-medium text-sm hover:underline">View All</button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {companies.slice(0, 3).map(company => (
                        <CompanyCard key={company.id} company={company} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
