"use client"

import Link from 'next/link';
import { useState } from 'react';

export default function Home() {
  const [demoStarted, setDemoStarted] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-gray-100" style={{ scrollBehavior: 'smooth' }}>
      <nav className="bg-gradient-to-b from-transparent to-purple-200 text-black p-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <h1 className="text-3xl font-semi-bold">Consultra.</h1>
        </div>
        <div className="space-x-4">
          <Link href="/auth/sign-up">Sign Up</Link>
        </div>
      </nav>

      <section className="min-h-screen h-[110vh] flex flex-col items-center justify-start snap-start bg-gradient-to-b from-purple-200 to-purple-700 text-white pt-60 text-center">
        <h1 className="text-5xl font-bold mb-4 text-black">A PyMetrics practice software.</h1>
        <p className="text-xl mb-8 text-black">
        <Link href="/auth/sign-up">Access the games here →</Link>

</p>

      </section>

      <div className="min-h-screen flex items-center snap-start bg-gradient-to-b from-purple-700 to-purple-800 text-white">
        <div className="w-1/2 flex flex-col justify-between">
          <div className="p-10" style={{ paddingTop: '1rem', marginTop: '-8rem' }}>
            <h2 className="text-4xl font-semi-bold text-white mb-8">About Us</h2>
            <p className="text-white text-xl">
              At PyMetrics, we understand the importance of presenting your best self in today's competitive job market. That's why we've created a suite of practice games inspired by the neuroscience-based assessments used by pymetrics.
            </p>
            <p className="text-white text-lg mt-6">
              Pymetrics has revolutionized the hiring process for companies and job seekers alike. With our platform, candidates can showcase their skills and potential, leading to better job matches and increased diversity in hiring.
            </p>
            <p className="text-white text-lg mt-6">
              Practicing pymetrics offers a range of benefits, including insightful self-discovery through neuroscience-based games that assess cognitive, social, and emotional traits. Users can enhance skills such as decision-making and emotional intelligence, while receiving personalized career recommendations based on their traits. For organizations, pymetrics streamlines recruitment by identifying candidates who align with job requirements, leading to better candidate-job fit and reduced turnover.
            </p>
            <div className="mt--12" style={{ marginLeft: '1000px' }}>
            <button className="bg-purple-500 text-white px-4 py-2 rounded-md absolute bottom--2 left-84" onClick={() => setDemoStarted(!demoStarted)}>
  {demoStarted ? "Restart Demo" : "Start Demo"}
</button>

            </div>
          </div>
        </div>
        <div className="w-1/2">
          {demoStarted && (
            <iframe 
            src="http://localhost:3000/digits"
            title="Page Preview"
            width="90%"
            height="500px"
            style={{ marginTop: '-12rem', border: 'none' }}  // Use CSS to remove border
            allowFullScreen={true}
          ></iframe>

          )}
        </div>
      </div>

      <footer className="bg-gradient-to-b from-purple-800 to-purple-900 text-white py-6 px-8 text-center">
        <p className="mb-2">@ 2024 PyMetrics. All rights reserved.</p>
        <p className="text-sm">A PyMetrics practice software</p>
      </footer>
    </div>
  );
}
