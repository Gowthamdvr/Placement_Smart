import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

const variants = {
    success: 'bg-green-100 text-green-800 border-green-200',
    warning: 'bg-yellow-100 text-yellow-800 border-yellow-200',
    error: 'bg-red-100 text-red-800 border-red-200',
    info: 'bg-blue-100 text-blue-800 border-blue-200',
    neutral: 'bg-gray-100 text-gray-800 border-gray-200',
    purple: 'bg-purple-100 text-purple-800 border-purple-200',
};

const StatusBadge = ({ status, variant, className }) => {
    // Map specific text statuses to variants if variant not provided
    let finalVariant = variant || 'neutral';

    if (!variant) {
        const s = status.toLowerCase();
        if (s.includes('eligible') && !s.includes('not')) finalVariant = 'success';
        else if (s.includes('not eligible') || s.includes('rejected')) finalVariant = 'error';
        else if (s.includes('shortlisted')) finalVariant = 'purple';
        else if (s.includes('offer')) finalVariant = 'success';
        else if (s.includes('interview')) finalVariant = 'warning';
        else if (s.includes('applied')) finalVariant = 'info';
        else if (s.includes('open')) finalVariant = 'success';
        else if (s.includes('closed') || s.includes('closing')) finalVariant = 'error';
    }

    return (
        <span className={twMerge(
            'px-2.5 py-0.5 rounded-full text-xs font-medium border',
            variants[finalVariant],
            className
        )}>
            {status}
        </span>
    );
};

export default StatusBadge;
