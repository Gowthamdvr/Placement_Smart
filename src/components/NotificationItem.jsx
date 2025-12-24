import React from 'react';
import { Bell, Info, AlertTriangle, CheckCircle } from 'lucide-react';

const NotificationItem = ({ notification }) => {
    const { type, read, title, time, message } = notification;

    return (
        <div
            className={`flex gap-4 p-4 rounded-xl border transition-all ${read ? 'bg-white border-slate-100' : 'bg-indigo-50/50 border-indigo-100 shadow-sm'
                }`}
        >
            <div className={`mt-1 p-2 rounded-full flex-shrink-0 ${type === 'warning' ? 'bg-amber-100 text-amber-600' :
                    type === 'success' ? 'bg-emerald-100 text-emerald-600' :
                        type === 'info' ? 'bg-blue-100 text-blue-600' :
                            'bg-slate-100 text-slate-500'
                }`}>
                {type === 'warning' && <AlertTriangle className="w-5 h-5" />}
                {type === 'success' && <CheckCircle className="w-5 h-5" />}
                {type === 'info' && <Bell className="w-5 h-5" />}
                {type === 'neutral' && <Info className="w-5 h-5" />}
            </div>
            <div className="flex-1">
                <div className="flex justify-between items-start">
                    <h3 className={`font-semibold ${read ? 'text-slate-700' : 'text-slate-900'}`}>{title}</h3>
                    <span className="text-xs text-slate-400 whitespace-nowrap ml-2">{time}</span>
                </div>
                <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                    {message}
                </p>
            </div>
            {!read && (
                <div className="flex bg-indigo-600 w-2 h-2 rounded-full mt-2"></div>
            )}
        </div>
    );
};

export default NotificationItem;
