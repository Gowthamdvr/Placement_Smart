import React from 'react';
import { Bell, Info, AlertTriangle, CheckCircle } from 'lucide-react';
import NotificationItem from '../components/NotificationItem';

const notifications = [
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
    },
    {
        id: 3,
        title: "New Company Listed",
        message: "Google has started hiring for Software Engineer roles.",
        time: "1 day ago",
        type: "info",
        read: true
    },
    {
        id: 4,
        title: "Profile Update Reminder",
        message: "Update your latest semester CGPA to appear in eligibility checks.",
        time: "2 days ago",
        type: "neutral",
        read: true
    }
];

const Notifications = () => {
    return (
        <div className="max-w-3xl mx-auto space-y-6 animate-fade-in">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-2xl font-bold text-slate-800">Notifications</h1>
                    <p className="text-slate-500">Stay updated with latest alerts and announcements.</p>
                </div>
                <button className="text-sm text-indigo-600 font-medium hover:underline">Mark all as read</button>
            </div>

            <div className="space-y-4">
                {notifications.map((notif) => (
                    <NotificationItem key={notif.id} notification={notif} />
                ))}
            </div>
        </div>
    );
};

export default Notifications;
