import React, { useState } from 'react';
import { Search, Filter, Plus } from 'lucide-react';
import { useData } from '../context/DataContext';
import { useAuth } from '../context/AuthContext';
import CompanyCard from '../components/CompanyCard';
import { useNavigate } from 'react-router-dom';

const Companies = () => {
    const { companies } = useData();
    const { user } = useAuth();
    const [searchTerm, setSearchTerm] = useState("");
    const navigate = useNavigate();

    const filteredCompanies = companies.filter(c =>
        c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        c.role.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="space-y-6 animate-fade-in">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-slate-800">Companies</h1>
                    <p className="text-slate-500">Explore and apply to visiting companies.</p>
                </div>

                <div className="flex items-center gap-3 w-full sm:w-auto">
                    {user?.role === 'admin' && (
                        <button
                            onClick={() => navigate('/admin')}
                            className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors shadow-sm"
                        >
                            <Plus className="w-5 h-5" /> Add Company
                        </button>
                    )}
                    <div className="relative flex-1 sm:w-64">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                        <input
                            type="text"
                            placeholder="Search by name or role..."
                            className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                    <button className="p-2 border border-slate-200 rounded-lg hover:bg-slate-50 text-slate-600">
                        <Filter className="w-5 h-5" />
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredCompanies.map(company => (
                    <CompanyCard
                        key={company.id}
                        company={company}
                        onCheckEligibility={() => navigate('/eligibility')}
                    />
                ))}
                {filteredCompanies.length === 0 && (
                    <div className="col-span-full text-center py-12 text-slate-500">
                        No companies found matching your search.
                    </div>
                )}
            </div>
        </div>
    );
};

export default Companies;
