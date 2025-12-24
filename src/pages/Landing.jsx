import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, CheckCircle, TrendingUp, Users, Shield, Zap, Target, Award } from 'lucide-react';
import heroImg from '../assets/hero.png';
import analyticsImg from '../assets/analytics.png';

const Landing = () => {
    const navigate = useNavigate();

    return (
        <div className="bg-slate-50 min-h-screen font-sans selection:bg-indigo-100 selection:text-indigo-700">
            {/* Navbar */}
            <nav className="fixed w-full bg-white/70 backdrop-blur-xl border-b border-slate-200/60 z-50 transition-all duration-300">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
                    <div className="flex items-center gap-3 group cursor-pointer" onClick={() => navigate('/')}>
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-600 to-violet-600 flex items-center justify-center shadow-lg shadow-indigo-200 group-hover:scale-110 transition-transform duration-300">
                            <Zap className="text-white w-6 h-6 fill-current" />
                        </div>
                        <span className="font-black text-2xl tracking-tight text-slate-900">PlaceMate</span>
                    </div>
                    <div className="flex gap-6 items-center">
                        <button onClick={() => navigate('/login')} className="text-slate-600 font-semibold hover:text-indigo-600 transition-colors">Login</button>
                        <button onClick={() => navigate('/login')} className="bg-indigo-600 text-white px-6 py-2.5 rounded-xl font-bold hover:bg-indigo-700 hover:shadow-xl hover:shadow-indigo-200 transition-all active:scale-95">Get Started</button>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="relative pt-40 pb-24 overflow-hidden">
                <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[800px] h-[800px] bg-indigo-50 rounded-full blur-3xl opacity-50 -z-10"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-16">
                    <div className="flex-1 space-y-8 text-center lg:text-left">
                        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm animate-bounce-subtle">
                            <span className="flex h-2.5 w-2.5 rounded-full bg-indigo-500 animate-pulse"></span>
                            <span className="text-sm font-bold text-slate-600">New: AI Career Matching</span>
                        </div>
                        <h1 className="text-5xl sm:text-7xl font-black text-slate-900 tracking-tight leading-[1.1]">
                            Your Career <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600">Starts Here.</span>
                        </h1>
                        <p className="text-xl text-slate-600 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
                            The ultimate bridge between students and their dream careers. Simplify applications, master interviews, and land your perfect role at top Fortune 500 companies.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
                            <button onClick={() => navigate('/login')} className="group flex items-center justify-center gap-2 bg-slate-900 text-white px-10 py-5 rounded-2xl font-bold hover:bg-slate-800 transition-all shadow-2xl shadow-slate-200 active:scale-95">
                                Explore Opportunities <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                            <button onClick={() => navigate('/login')} className="flex items-center justify-center gap-2 bg-white text-slate-700 border-2 border-slate-100 px-10 py-5 rounded-2xl font-bold hover:bg-slate-50 hover:border-slate-200 transition-all active:scale-95">
                                For Recruiters
                            </button>
                        </div>
                        <div className="flex items-center gap-4 pt-6 justify-center lg:justify-start">
                            <div className="flex -space-x-3">
                                {[1, 2, 3, 4].map(i => (
                                    <div key={i} className={`w-10 h-10 rounded-full border-2 border-white bg-slate-200 flex items-center justify-center overflow-hidden`}>
                                        <img src={`https://i.pravatar.cc/150?u=${i}`} alt="user" />
                                    </div>
                                ))}
                            </div>
                            <p className="text-sm text-slate-500 font-medium">Joined by <span className="text-slate-900 font-bold">10,000+</span> ambitious students</p>
                        </div>
                    </div>
                    <div className="flex-1 relative">
                        <div className="relative z-10 p-4 bg-white rounded-[2.5rem] shadow-2xl shadow-indigo-100 border border-slate-100 transform hover:rotate-1 transition-transform duration-700">
                            <img
                                src={heroImg}
                                alt="Placement Dashboard Illustration"
                                className="rounded-[2rem] w-full object-cover"
                            />
                        </div>
                        <div className="absolute -bottom-10 -left-10 bg-white p-6 rounded-2xl shadow-xl border border-slate-50 animate-float">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                                    <CheckCircle className="w-6 h-6 text-green-600" />
                                </div>
                                <div>
                                    <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Status Updates</p>
                                    <p className="text-slate-900 font-black">Offer Received! 🎉</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features section with the analytics image */}
            <section className="py-24 bg-white relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row items-center gap-20">
                        <div className="flex-1 order-2 lg:order-1">
                            <div className="relative">
                                <div className="absolute -inset-4 bg-indigo-100 rounded-[3rem] blur-2xl opacity-30 -z-10"></div>
                                <img src={analyticsImg} alt="Analytics Dashboard" className="rounded-[2.5rem] shadow-2xl w-full" />
                            </div>
                        </div>
                        <div className="flex-1 space-y-10 order-1 lg:order-2">
                            <div className="space-y-4">
                                <span className="text-indigo-600 font-bold tracking-widest uppercase text-sm">Powerful Analytics</span>
                                <h2 className="text-4xl font-black text-slate-900">Measure Your Success in Real-Time</h2>
                                <p className="text-slate-600 text-lg leading-relaxed">
                                    Our advanced dashboard gives you deep insights into your application performance. Track every stage of the process from initial screening to the final offer.
                                </p>
                            </div>
                            <div className="grid gap-6">
                                <div className="flex gap-4">
                                    <div className="shrink-0 w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600">
                                        <Target className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 text-lg">Goal Tracking</h4>
                                        <p className="text-slate-500">Set career milestones and monitor your progress daily.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="shrink-0 w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center text-amber-600">
                                        <Award className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 text-lg">Skill Validation</h4>
                                        <p className="text-slate-500">Automated eligibility checks ensure you're always ready.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <div className="py-24 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="max-w-2xl mx-auto mb-16 space-y-4">
                        <h2 className="text-4xl font-black text-slate-900">Engineered for Excellence</h2>
                        <p className="text-slate-500 text-lg">Everything you need to streamline the placement process and focus on what matters most: your career.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <FeatureCard
                            icon={CheckCircle}
                            title="Smart Eligibility"
                            desc="Automatically check if you meet criteria for visiting companies based on CGPA and Backlogs."
                            variant="indigo"
                        />
                        <FeatureCard
                            icon={TrendingUp}
                            title="Real-time Analytics"
                            desc="Track your application progress and visualize placement trends with interactive charts."
                            variant="violet"
                        />
                        <FeatureCard
                            icon={Shield}
                            title="Secure & Centralized"
                            desc="One unified platform for all placement activities, notifications, and offer management."
                            variant="fuchsia"
                        />
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer className="bg-slate-900 text-slate-400 py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-8 border-b border-slate-800 pb-12 mb-12">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-indigo-600 flex items-center justify-center">
                                <Zap className="text-white w-6 h-6 fill-current" />
                            </div>
                            <span className="font-black text-2xl tracking-tight text-white">PlaceMate</span>
                        </div>
                        <div className="flex gap-8 font-bold text-sm">
                            <a href="#" className="hover:text-white transition-colors">Privacy</a>
                            <a href="#" className="hover:text-white transition-colors">Terms</a>
                            <a href="#" className="hover:text-white transition-colors">Contact</a>
                        </div>
                    </div>
                    <div className="text-center font-medium">
                        <p>&copy; 2025 PlaceMate Inc. All rights reserved. Designed for the professionals of tomorrow.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

const FeatureCard = ({ icon: Icon, title, desc, variant }) => {
    const variants = {
        indigo: "bg-indigo-50 text-indigo-600 hover:bg-indigo-600 hover:text-white",
        violet: "bg-violet-50 text-violet-600 hover:bg-violet-600 hover:text-white",
        fuchsia: "bg-fuchsia-50 text-fuchsia-600 hover:bg-fuchsia-600 hover:text-white",
    };

    return (
        <div className="group p-10 rounded-3xl bg-white border border-slate-100 hover:border-transparent hover:shadow-2xl hover:shadow-indigo-100 transition-all duration-500 text-left hover:-translate-y-2">
            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 transition-all duration-500 ${variants[variant]}`}>
                <Icon className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-black text-slate-900 mb-4">{title}</h3>
            <p className="text-slate-500 leading-relaxed font-medium">{desc}</p>
        </div>
    );
};

export default Landing;

