import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { ApplicationsTrend, StatusDistribution } from '../components/ChartSection';

const eligibilityData = [
    { name: 'Eligible', value: 12 },
    { name: 'Not Eligible', value: 8 },
];

const COLORS = ['#10b981', '#f43f5e'];

const Analytics = () => {
    return (
        <div className="space-y-8 animate-fade-in">
            <div>
                <h1 className="text-2xl font-bold text-slate-800">Placement Analytics</h1>
                <p className="text-slate-500">Deep dive into your placement performance and opportunities.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Application Trend */}
                <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
                    <h3 className="font-semibold text-lg text-slate-800 mb-6">Monthly Applications</h3>
                    <ApplicationsTrend />
                </div>

                {/* Status Distribution */}
                <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
                    <h3 className="font-semibold text-lg text-slate-800 mb-6">Application Status</h3>
                    <StatusDistribution />
                </div>

                {/* Eligibility Split */}
                <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
                    <h3 className="font-semibold text-lg text-slate-800 mb-6">Eligibility Overview</h3>
                    <div className="h-64 w-full flex justify-center">
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie
                                    data={eligibilityData}
                                    cx="50%"
                                    cy="50%"
                                    innerRadius={60}
                                    outerRadius={80}
                                    paddingAngle={5}
                                    dataKey="value"
                                >
                                    {eligibilityData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                    ))}
                                </Pie>
                                <Tooltip />
                                <Legend verticalAlign="bottom" height={36} />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                    <div className="mt-4 text-center">
                        <p className="text-sm text-slate-500">Based on your academic criteria vs visiting companies.</p>
                    </div>
                </div>

                {/* Salary Range (Mock) */}
                <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
                    <h3 className="font-semibold text-lg text-slate-800 mb-6">Package Distribution (LPA)</h3>
                    <div className="h-64 w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart
                                data={[
                                    { name: '3-6 LPA', count: 4 },
                                    { name: '6-10 LPA', count: 8 },
                                    { name: '10-15 LPA', count: 5 },
                                    { name: '15+ LPA', count: 3 },
                                ]}
                            >
                                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                                <XAxis dataKey="name" axisLine={false} tickLine={false} fontSize={12} />
                                <YAxis axisLine={false} tickLine={false} />
                                <Tooltip cursor={{ fill: 'transparent' }} />
                                <Bar dataKey="count" fill="#8b5cf6" radius={[4, 4, 0, 0]} />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Analytics;
