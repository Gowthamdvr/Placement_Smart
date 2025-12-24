import React, { useState } from 'react';
import { companies } from '../data/companies';
import { checkEligibility } from '../utils/eligibilityCheck';
import { Check, X, AlertCircle } from 'lucide-react';

const Eligibility = () => {
    const [student, setStudent] = useState({
        cgpa: "8.5",
        backlogs: "0",
        department: "CSE"
    });

    const handleChange = (e) => {
        setStudent({ ...student, [e.target.name]: e.target.value });
    };

    return (
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
            <div className="text-center space-y-2">
                <h1 className="text-3xl font-bold text-slate-800">Eligibility Checker</h1>
                <p className="text-slate-500">Enter your academic details to see where you stand.</p>
            </div>

            {/* Input Section */}
            <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-lg shadow-indigo-500/5">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-700">CGPA (Current)</label>
                        <input
                            type="number"
                            name="cgpa"
                            step="0.01"
                            value={student.cgpa}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-700">Backlogs (Active)</label>
                        <input
                            type="number"
                            name="backlogs"
                            value={student.backlogs}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-700">Department</label>
                        <select
                            name="department"
                            value={student.department}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none bg-white"
                        >
                            <option value="CSE">CSE</option>
                            <option value="ISE">ISE</option>
                            <option value="ECE">ECE</option>
                            <option value="MECH">MECH</option>
                            <option value="CIVIL">CIVIL</option>
                        </select>
                    </div>
                </div>
            </div>

            {/* Results */}
            <h2 className="text-xl font-bold text-slate-800 pt-4">Your Eligibility Status</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {companies.map(company => {
                    const { eligible, reasons } = checkEligibility(student, company);
                    return (
                        <div
                            key={company.id}
                            className={`p-4 rounded-xl border transition-all duration-300 ${eligible
                                    ? 'bg-emerald-50 border-emerald-100 hover:shadow-md hover:shadow-emerald-100'
                                    : 'bg-red-50 border-red-100 opacity-75'
                                }`}
                        >
                            <div className="flex justify-between items-start">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-lg bg-white p-1.5 flex items-center justify-center shadow-sm">
                                        <img src={company.logo} alt={company.name} className="w-full h-full object-contain" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-slate-800">{company.name}</h3>
                                        <p className="text-xs text-slate-600">{company.role}</p>
                                    </div>
                                </div>
                                {eligible ? (
                                    <span className="flex items-center gap-1 text-xs font-bold text-emerald-700 bg-white px-2 py-1 rounded-full shadow-sm">
                                        <Check className="w-3 h-3" /> Eligible
                                    </span>
                                ) : (
                                    <span className="flex items-center gap-1 text-xs font-bold text-red-700 bg-white px-2 py-1 rounded-full shadow-sm">
                                        <X className="w-3 h-3" /> Not Eligible
                                    </span>
                                )}
                            </div>

                            {!eligible && (
                                <div className="mt-3 text-xs text-red-600 bg-red-100/50 p-2 rounded-lg flex items-start gap-2">
                                    <AlertCircle className="w-3 h-3 mt-0.5 flex-shrink-0" />
                                    <ul className="list-disc list-inside">
                                        {reasons.map((r, i) => <li key={i}>{r}</li>)}
                                    </ul>
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Eligibility;
