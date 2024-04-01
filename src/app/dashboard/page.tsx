export default function Home() {
    return (
      <div className="flex flex-col min-h-screen overflow-hidden bg-gray-100">
  
        {/* Navigation */}
        <nav className="bg-gradient-to-r from-purple-600 to-purple-700 text-white p-4 flex justify-between items-center shadow-md">
          <div className="flex items-center space-x-2">
            <img src="/pymetrics-removebg-preview.png" className="h-8 w-8" alt="Logo" />
            <h1 className="text-3xl font-bold">PyMetrics</h1>
          </div>
          <div className="space-x-4">
            <a href="#" className="hover:text-purple-300 transition-colors">Login/Signup</a>
          </div>
        </nav>
  
        {/* Footer */}
        <footer className="bg-purple-900 text-white py-6 px-8 text-center mt-auto">
          <p>&copy; {new Date().getFullYear()} PyMetrics. All rights reserved.</p>
        </footer>
      </div>
    );
  }
  
