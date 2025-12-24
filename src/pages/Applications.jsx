import React from 'react';
import StatusBadge from '../components/StatusBadge';

const myApplications = [
    {
        id: 1,
        company: "Google",
        role: "Software Engineer",
        appliedDate: "2024-10-15",
        status: "Shortlisted",
        nextStep: "Technical Interview 1",
        logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
    },
    {
        id: 2,
        company: "Amazon",
        role: "SDE I",
        appliedDate: "2024-10-12",
        status: "Interview",
        nextStep: "HR Round",
        logo: "https://upload.wikimedia.org/wikipedia/commons/4/4a/Amazon_icon.svg"
    },
    {
        id: 3,
        company: "Infosys",
        role: "System Engineer",
        appliedDate: "2024-10-10",
        status: "Applied",
        nextStep: "Waiting for Shortlist",
        logo: "https://upload.wikimedia.org/wikipedia/commons/9/95/Infosys_logo.svg"
    },
    {
        id: 4,
        company: "Microsoft",
        role: "Software Engineer",
        appliedDate: "2024-10-01",
        status: "Rejected",
        nextStep: "-",
        logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg"
    },
];

const Applications = () => {
    return (
        <div className="space-y-6 animate-fade-in">
            <div>
                <h1 className="text-2xl font-bold text-slate-800">My Applications</h1>
                <p className="text-slate-500">Track the status of your job applications.</p>
            </div>

            <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm">
                        <thead className="bg-slate-50 border-b border-slate-200">
                            <tr>
                                <th className="px-6 py-4 font-semibold text-slate-700">Company</th>
                                <th className="px-6 py-4 font-semibold text-slate-700">Role</th>
                                <th className="px-6 py-4 font-semibold text-slate-700">Applied Date</th>
                                <th className="px-6 py-4 font-semibold text-slate-700">Status</th>
                                <th className="px-6 py-4 font-semibold text-slate-700">Next Step/Note</th>
                                <th className="px-6 py-4 font-semibold text-slate-700 text-right">Action</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                            {myApplications.map((app) => (
                                <tr key={app.id} className="hover:bg-slate-50 transition-colors">
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded bg-slate-100 p-1 flex items-center justify-center">
                                                <img src={app.logo} alt={app.company} className="w-full h-full object-contain" />
                                            </div>
                                            <span className="font-medium text-slate-900">{app.company}</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-slate-600">{app.role}</td>
                                    <td className="px-6 py-4 text-slate-500">{new Date(app.appliedDate).toLocaleDateString()}</td>
                                    <td className="px-6 py-4">
                                        <StatusBadge status={app.status} />
                                    </td>
                                    <td className="px-6 py-4 text-slate-600 font-medium">
                                        {app.nextStep}
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <button className="text-indigo-600 hover:text-indigo-800 font-medium text-xs">View Details</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Applications;
