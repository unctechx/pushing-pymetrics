"use client"
import type { NextPage } from 'next';
import { useState } from 'react';
import BalloonComponent from '@/components/ui/balloon';
import Link from 'next/link';

const Home: NextPage = () => {
    

    return (
        <div className="flex flex-col min-h-screen w-full justify-between bg-gray-100">
            <nav className="bg-gradient-to-r from-purple-600 to-purple-700 text-white p-4 flex justify-between items-center shadow-md">
                <Link href="/" className="flex items-center">
                    <div className="flex items-center space-x-2">
                        <img src="/pymetrics-removebg-preview.png" className="h-8 w-8" alt="Logo" />
                        <h1 className="text-3xl font-bold">PyMetrics</h1>
                    </div>
                </Link>
                <div className="space-x-4">
                    <a href="/auth/sign-up" className="hover:text-purple-300 transition-colors">Sign Up/In</a>
                </div>
            </nav>
            <div className="flex flex-col flex-1 mt-5 pl-10 pr-10 items-center">
                <h1 className="text-5xl font-bold mb-4 text-black">Balloon Game</h1>
                <p className="mt-5 ml-20 mr-20">Instructions: You allowed to pump up a balloon with each pump increasing your potential money earned. But be careful! Too many pumps and the ballon can pop, leaving you with nothing and moving onto the next balloon! You can always choose to collect at any time and move onto the next balloon.  </p>
                <p className="mt-5">The game ends after 6 balloons </p>
                <p className="mt-5">Try to get as much total money as possible! </p>
                
                    <BalloonComponent />
                
            </div>

            {/* Footer */}
            <footer className="bg-purple-900 mt-10 text-white py-6 px-8 text-center">
                <p>&copy; {new Date().getFullYear()} PyMetrics. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Home;

