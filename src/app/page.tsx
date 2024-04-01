import Head from 'next/head';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden bg-gray-100">
      <Head>
        <title>Traveler - Your Journey Begins Here</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Navigation */}
      <nav className="bg-gradient-to-r from-purple-600 to-purple-700 text-white p-4 flex justify-between items-center shadow-md">
        <div className="flex items-center space-x-2">
          <img src="/pymetrics-removebg-preview.png" className="h-8 w-8" alt="Logo" />
          <h1 className="text-3xl font-bold">PyMetrics</h1>
        </div>
        <div className="space-x-4">
        <a href="/auth/sign-up" className="hover:text-purple-300 transition-colors">Sign Up/In</a>
        </div>
      </nav>
      
      {/* Starting Section */}
      <section className="flex-grow flex flex-col items-center justify-center bg-gradient-to-b from-purple-700 to-purple-800 text-white p-8 text-center bg-cover bg-center"
         style={{backgroundImage: "url('/hero-background.jpg')"}}>
        <h1 className="text-5xl font-bold mb-4 text-black">A PyMetrics practice software.</h1>
        <p className="mb-2 text-lg text-black">Land your next consulting job.</p>
      </section>

      {/* About Section */}
      <section className="py-12 px-4 bg-white text-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-semibold mb-4">About Us</h2>
            <p className="text-xl leading-relaxed mx-auto max-w-2xl">
              At PyMetrics, we understand the importance of presenting your best self in today's competitive job market. That's why we've created a suite of practice games inspired by the neuroscience-based assessments used by pymetrics. Our goal is to help you become familiar with the types of tasks you'll encounter, so you can approach your actual assessment with confidence.
            </p>
          </div>
          {/* Feature List */}
          <div className="flex flex-wrap -m-4 text-center">
            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden shadow-lg">
                <div className="p-6">
                  <h2 className="text-2xl font-medium text-purple-800 mb-3">What We Offer</h2>
                  <ul className="list-none list-inside leading-relaxed mb-3 space-y-2">
                    <li className="relative pl-4">
                      <span className="absolute -left-4 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-purple-500 rounded-full"></span>
                      <span className="font-semibold text-purple-500">Practice Games:</span> A variety of games that mimic the style and challenges of the original pymetrics assessments, allowing you to practice at your own pace.
                    </li>
                    <li className="relative pl-4">
                      <span className="absolute -left-4 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-purple-500 rounded-full"></span>
                      <span className="font-semibold text-purple-500">Budget-Friendly:</span> Experience a cost-effective way to prepare with our extensive range of practice games and tools
                    </li>
                    <li className="relative pl-4">
                      <span className="absolute -left-4 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-purple-500 rounded-full"></span>
                      <span className="font-semibold text-purple-500">User-Friendly Design:</span> Our platform features a straightforward and efficient interface, making it easy for you to navigate and focus on your practice.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden shadow-lg">
                <h2 className="text-2xl font-medium text-purple-800 mb-3 p-6">Demo Game</h2>
                <div className="p-6">
                </div>
                <img src="/towers.png" className="lg:h-48 md:h-36 w-full object-cover object-center shadow-md" alt="about image" />
              </div>
            </div>

            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden shadow-lg">
                <div className="p-6">
                  <h3 className="text-xl font-medium text-purple-800 mb-3">Pymetrics Impact</h3>
                  <p className="leading-relaxed mb-3">
                    Pymetrics has revolutionized the hiring process for companies and job seekers alike. With our platform, candidates can showcase their skills and potential, leading to better job matches and increased diversity in hiring.
                  </p>
                  <p className="leading-relaxed mb-3">
                    Join the thousands of companies and millions of job seekers who have benefited from Pymetrics!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tagline Section */}
      <section className="bg-white text-gray-800 py-12 px-8 text-center">
        <h2 className="text-3xl font-semibold mb-8">A little preparation goes a long way</h2>
      </section>

      {/* Footer */}
      <footer className="bg-purple-900 text-white py-6 px-8 text-center">
        <p>&copy; {new Date().getFullYear()} PyMetrics. All rights reserved.</p>
      </footer>
    </div>
  );
}
