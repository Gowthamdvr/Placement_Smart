import React, { useState } from 'react';
import { useData } from '../context/DataContext';
import { Trash2, Plus, Briefcase, Calendar } from 'lucide-react';

const AdminDashboard = () => {
    const { companies, deleteCompany, addCompany } = useData();
    const [showForm, setShowForm] = useState(false);
    const [newCompany, setNewCompany] = useState({
        name: '', role: '', package: '', deadline: '', status: 'Open',
        eligibility: { minCGPA: 0, maxBacklogs: 0, departments: ['All'] }
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        addCompany({
            ...newCompany,
            logo: `https://ui-avatars.com/api/?name=${newCompany.name}&background=random`
        });
        setShowForm(false);
        setNewCompany({
            name: '', role: '', package: '', deadline: '', status: 'Open',
            eligibility: { minCGPA: 0, maxBacklogs: 0, departments: ['All'] }
        });
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name === 'minCGPA' || name === 'maxBacklogs') {
            setNewCompany(prev => ({
                ...prev,
                eligibility: { ...prev.eligibility, [name]: Number(value) }
            }));
        } else {
            setNewCompany(prev => ({ ...prev, [name]: value }));
        }
    };

    return (
        <div className="space-y-8 animate-fade-in">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-2xl font-bold text-slate-800">Admin Dashboard</h1>
                    <p className="text-slate-500">Manage companies and placements.</p>
                </div>
                <button
                    onClick={() => setShowForm(!showForm)}
                    className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors"
                >
                    <Plus className="w-5 h-5" /> {showForm ? 'Cancel' : 'Add Company'}
                </button>
            </div>

            {showForm && (
                <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm animate-fade-in">
                    <h2 className="text-lg font-bold mb-4">Add New Company</h2>
                    <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input required name="name" placeholder="Company Name" value={newCompany.name} onChange={handleInputChange} className="p-2 border rounded" />
                        <input required name="role" placeholder="Role" value={newCompany.role} onChange={handleInputChange} className="p-2 border rounded" />
                        <input required name="package" placeholder="Package (e.g. 10 LPA)" value={newCompany.package} onChange={handleInputChange} className="p-2 border rounded" />
                        <input required type="date" name="deadline" value={newCompany.deadline} onChange={handleInputChange} className="p-2 border rounded" />
                        <input required type="number" step="0.1" name="minCGPA" placeholder="Min CGPA" value={newCompany.eligibility.minCGPA} onChange={handleInputChange} className="p-2 border rounded" />
                        <input required type="number" name="maxBacklogs" placeholder="Max Backlogs" value={newCompany.eligibility.maxBacklogs} onChange={handleInputChange} className="p-2 border rounded" />

                        <div className="md:col-span-2">
                            <button type="submit" className="bg-emerald-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-emerald-700 w-full md:w-auto">
                                Save Company
                            </button>
                        </div>
                    </form>
                </div>
            )}

            <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm">
                        <thead className="bg-slate-50 border-b border-slate-200">
                            <tr>
                                <th className="px-6 py-4 font-semibold text-slate-700">Company</th>
                                <th className="px-6 py-4 font-semibold text-slate-700">Role</th>
                                <th className="px-6 py-4 font-semibold text-slate-700">Package</th>
                                <th className="px-6 py-4 font-semibold text-slate-700">Deadline</th>
                                <th className="px-6 py-4 font-semibold text-slate-700 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                            {companies.map((company) => (
                                <tr key={company.id} className="hover:bg-slate-50 transition-colors">
                                    <td className="px-6 py-4 font-medium text-slate-900">{company.name}</td>
                                    <td className="px-6 py-4 text-slate-600">{company.role}</td>
                                    <td className="px-6 py-4 text-emerald-600 font-medium">{company.package}</td>
                                    <td className="px-6 py-4 text-slate-500">{new Date(company.deadline).toLocaleDateString()}</td>
                                    <td className="px-6 py-4 text-right">
                                        <button
                                            onClick={() => deleteCompany(company.id)}
                                            className="text-red-600 hover:text-red-800 p-2 hover:bg-red-50 rounded-lg transition-colors"
                                            title="Delete Company"
                                        >
                                            <Trash2 className="w-4 h-4" />
                                        </button>
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

export default AdminDashboard;
