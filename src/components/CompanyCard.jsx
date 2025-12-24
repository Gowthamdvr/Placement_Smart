import React from 'react';
import { Calendar, Briefcase, IndianRupee, GraduationCap } from 'lucide-react';
import StatusBadge from './StatusBadge';

const CompanyCard = ({ company, onCheckEligibility }) => {
    return (
        <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-slate-50 p-2 border border-slate-100 flex items-center justify-center">
                        <img
                            src={company.logo}
                            alt={company.name}
                            className="w-full h-full object-contain"
                            onError={(e) => { e.target.src = `https://ui-avatars.com/api/?name=${company.name}&background=random` }}
                        />
                    </div>
                    <div>
                        <h3 className="font-bold text-lg text-slate-800">{company.name}</h3>
                        <p className="text-sm text-slate-500 flex items-center gap-1">
                            <Briefcase className="w-3 h-3" /> {company.role}
                        </p>
                    </div>
                </div>
                <StatusBadge status={company.status} />
            </div>

            <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="flex items-center gap-2 text-sm text-slate-600 bg-slate-50 p-2 rounded-lg">
                    <IndianRupee className="w-4 h-4 text-emerald-500" />
                    <span className="font-medium">{company.package}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-600 bg-slate-50 p-2 rounded-lg">
                    <Calendar className="w-4 h-4 text-blue-500" />
                    <span>{new Date(company.deadline).toLocaleDateString()}</span>
                </div>
                <div className="col-span-2 text-xs text-slate-500 flex items-center gap-2 mt-1">
                    <GraduationCap className="w-3 h-3" />
                    <span>Min CGPA: {company.eligibility.minCGPA} • Backlogs: {company.eligibility.maxBacklogs}</span>
                </div>
            </div>

            <div className="flex gap-2 mt-auto">
                <button
                    className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-lg text-sm font-medium transition-colors shadow-sm shadow-indigo-200"
                >
                    Apply Now
                </button>
                <button
                    onClick={() => onCheckEligibility && onCheckEligibility(company)}
                    className="flex-1 bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 py-2 px-4 rounded-lg text-sm font-medium transition-colors"
                >
                    Check Eligibility
                </button>
            </div>
        </div>
    );
};

export default CompanyCard;
