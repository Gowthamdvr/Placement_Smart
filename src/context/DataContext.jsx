import React, { createContext, useContext, useState } from 'react';
import { companies as initialCompanies } from '../data/companies';

const DataContext = createContext();

export const useData = () => useContext(DataContext);

export const DataProvider = ({ children }) => {
    const [companies, setCompanies] = useState(initialCompanies);
    const [notifications, setNotifications] = useState([
        {
            id: 1,
            title: "Application Deadline Warning",
            message: "Amazon application closes in 2 hours. Complete your profile now.",
            time: "2 hours ago",
            type: "warning",
            read: false
        },
        {
            id: 2,
            title: "Shortlist Announced",
            message: "Congratulations! You have been shortlisted for the Infosys interview round.",
            time: "5 hours ago",
            type: "success",
            read: false
        }
    ]);

    const [applications, setApplications] = useState([]);

    const addCompany = (newCompany) => {
        setCompanies(prev => [{ ...newCompany, id: prev.length + 1 }, ...prev]);
    };

    const deleteCompany = (id) => {
        setCompanies(prev => prev.filter(c => c.id !== id));
    };

    const applyForCompany = (companyId, studentName) => {
        // Avoid duplicate applications
        if (applications.find(app => app.companyId === companyId)) return;

        const company = companies.find(c => c.id === companyId);
        const newApp = {
            id: applications.length + 1,
            companyId,
            company: company?.name,
            role: company?.role,
            studentName,
            appliedDate: new Date().toISOString(),
            status: 'Applied',
            nextStep: 'Resume Screening',
            logo: company?.logo
        };
        setApplications(prev => [newApp, ...prev]);
    };

    const updateApplicationStatus = (appId, newStatus) => {
        setApplications(prev => prev.map(app =>
            app.id === appId ? { ...app, status: newStatus } : app
        ));
    };

    const addNotification = (notif) => {
        setNotifications(prev => [{ ...notif, id: prev.length + 1, time: 'Just now', read: false }, ...prev]);
    };

    return (
        <DataContext.Provider value={{ companies, notifications, applications, addCompany, deleteCompany, applyForCompany, updateApplicationStatus, addNotification }}>
            {children}
        </DataContext.Provider>
    );
};
