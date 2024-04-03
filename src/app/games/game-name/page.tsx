export default function Home() {
    return (
      <div className="flex flex-col min-h-screen width-full justify-between bg-gray-100 ">
            
            <nav className="bg-gradient-to-r from-purple-600 to-purple-700 text-white p-4 flex justify-between items-center shadow-md">
                <div className="flex items-center space-x-2">
                    <img src="/pymetrics-removebg-preview.png" className="h-8 w-8" alt="Logo" />
                    <h1 className="text-3xl font-bold">PyMetrics</h1>
                </div>
                <div className="space-x-4">
                    <a href="#" className="hover:text-purple-300 transition-colors">Sign Up/In</a>
                </div>
            </nav>
            <div className="flex flex-col flex-1 mt-5 items-center">
            <h1 className="text-5xl font-bold mb-4 text-black">[Insert Game]</h1>
            <p className="mt-5">Instructions: skjdhasjbdf;jsbfk </p>
            <p className="mt-5">The game ends after ....... </p>
            <p className="mt-5 mb-5">Try to get as many ....... </p>
            <div className="relative w-full max-w-xl mx-auto">
  <img src="/demo_game.png" className="w-full h-auto border-2 border-gray-300 rounded-3xl" alt="demo game"/>
  <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-300 rounded-full p-3 bg-opacity-50 hover:bg-opacity-100  transition-all">
    <svg className="w-16 h-16 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
      <path d="M8 5v14l11-7z" />
    </svg>
  </button>
</div>
</div>

            

         {/* Footer */}
      <footer className="bg-purple-900 mt-10 text-white py-6 px-8 text-center">
        <p>&copy; {new Date().getFullYear()} PyMetrics. All rights reserved.</p>

      </footer>
      </div>
    );
  }