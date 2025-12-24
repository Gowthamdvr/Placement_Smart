import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, BarChart, Bar, Legend } from 'recharts';

const dataArea = [
    { name: 'Sep', applications: 2 },
    { name: 'Oct', applications: 5 },
    { name: 'Nov', applications: 8 },
    { name: 'Dec', applications: 12 },
    { name: 'Jan', applications: 15 },
];

const dataPie = [
    { name: 'Applied', value: 15 },
    { name: 'Rejected', value: 3 },
    { name: 'Shortlisted', value: 5 },
    { name: 'Offers', value: 1 },
];

const COLORS = ['#6366f1', '#ef4444', '#a855f7', '#10b981'];

export const ApplicationsTrend = () => (
    <div className="h-64 w-full">
        <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={dataArea}>
                <defs>
                    <linearGradient id="colorApps" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#6366f1" stopOpacity={0.3} />
                        <stop offset="95%" stopColor="#6366f1" stopOpacity={0} />
                    </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#64748b' }} />
                <YAxis axisLine={false} tickLine={false} tick={{ fill: '#64748b' }} />
                <Tooltip
                    contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                />
                <Area type="monotone" dataKey="applications" stroke="#6366f1" strokeWidth={3} fillOpacity={1} fill="url(#colorApps)" />
            </AreaChart>
        </ResponsiveContainer>
    </div>
);

export const StatusDistribution = () => (
    <div className="h-64 w-full flex justify-center">
        <ResponsiveContainer width="100%" height="100%">
            <PieChart>
                <Pie
                    data={dataPie}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                >
                    {dataPie.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
                <Tooltip />
                <Legend verticalAlign="bottom" height={36} />
            </PieChart>
        </ResponsiveContainer>
    </div>
);

const ChartSection = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
                <h3 className="font-semibold text-lg text-slate-800 mb-6">Application Trend</h3>
                <ApplicationsTrend />
            </div>
            <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
                <h3 className="font-semibold text-lg text-slate-800 mb-6">Status Distribution</h3>
                <StatusDistribution />
            </div>
        </div>
    );
};

export default ChartSection;
