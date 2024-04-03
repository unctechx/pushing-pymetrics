import Link from 'next/link';

export default function Home() {

  return (
    <div className="flex flex-col min-h-screen overflow-hidden bg-gray-100">
      {/* Navigation */}
      <nav className="bg-gradient-to-r from-purple-600 to-purple-700 text-white p-4 flex justify-between items-center shadow-md">
        <div className="flex items-center space-x-2">
          <Link href="/">
            
              <img src="/pymetrics-removebg-preview.png" className="h-8 w-8" alt="Logo" />
            
          </Link>
          <h1 className="text-3xl font-bold">PyMetrics</h1>
        </div>
        <div className="space-x-4">
          <Link href="/auth/sign-in" className="hover:text-purple-300 transition-colors">
            Login
          </Link>
          <Link href="/auth/sign-up" className="hover:text-purple-300 transition-colors">
            Signup
          </Link>
        </div>
      </nav>

      {/* Boxes */}
      <div className="grid grid-cols-3 gap-6 p-10 flex-grow">
        {/* Box 1 */}
        <a
          href="/game"
          className="bg-purple-500 hover:bg-purple-600 transition-colors text-white p-4 flex flex-col justify-between items-center rounded-lg shadow-xl hover:scale-110 transform transition-all relative overflow-hidden"
          style={{ height: 'calc(33vh - 3rem)' }}
        >
          <div>
            <div className="text-2xl font-bold">Balloon Game</div>
            <div className="text-sm mt-2 opacity-0 hover:opacity-100 transition-opacity duration-500">Description of Game 1</div>
          </div>
          <img src="/towers.png" className="absolute top-0 left-0 w-full h-full object-cover opacity-0 hover:opacity-100 transition-opacity duration-500" alt="Game 1 Preview" />
        </a>

        {/* Box 2 */}
        <a
          href="/game"
          className="bg-purple-500 hover:bg-purple-600 transition-colors text-white p-4 flex flex-col justify-between items-center rounded-lg shadow-xl hover:scale-110 transform transition-all relative overflow-hidden"
          style={{ height: 'calc(33vh - 3rem)' }}
        >
          <div>
            <div className="text-2xl font-bold">Tower Game</div>
            <div className="text-sm mt-2 opacity-0 hover:opacity-100 transition-opacity duration-500">Description of Game 2</div>
          </div>
          <img src="/towers.png" className="absolute top-0 left-0 w-full h-full object-cover opacity-0 hover:opacity-100 transition-opacity duration-500" alt="Game 2 Preview" />
        </a>

        {/* Box 3 */}
        <a
          href="/game"
          className="bg-purple-500 hover:bg-purple-600 transition-colors text-white p-4 flex flex-col justify-between items-center rounded-lg shadow-xl hover:scale-110 transform transition-all relative overflow-hidden"
          style={{ height: 'calc(33vh - 3rem)' }}
        >
          <div>
            <div className="text-2xl font-bold">Money Exchange Game #1</div>
            <div className="text-sm mt-2 opacity-0 hover:opacity-100 transition-opacity duration-500">Description of Game 3</div>
          </div>
          <img src="/towers.png" className="absolute top-0 left-0 w-full h-full object-cover opacity-0 hover:opacity-100 transition-opacity duration-500" alt="Game 3 Preview" />
        </a>

        {/* Box 4 */}
        <a
          href="/game"
          className="bg-purple-500 hover:bg-purple-600 transition-colors text-white p-4 flex flex-col justify-between items-center rounded-lg shadow-xl hover:scale-110 transform transition-all relative overflow-hidden"
          style={{ height: 'calc(33vh - 3rem)' }}
        >
          <div>
            <div className="text-2xl font-bold">Money Exchange Game #2</div>
            <div className="text-sm mt-2 opacity-0 hover:opacity-100 transition-opacity duration-500">Description of Game 4</div>
          </div>
          <img src="/towers.png" className="absolute top-0 left-0 w-full h-full object-cover opacity-0 hover:opacity-100 transition-opacity duration-500" alt="Game 4 Preview" />
        </a>

        {/* Box 5 */}
        <a
          href="/game"
          className="bg-purple-500 hover:bg-purple-600 transition-colors text-white p-4 flex flex-col justify-between items-center rounded-lg shadow-xl hover:scale-110 transform transition-all relative overflow-hidden"
          style={{ height: 'calc(33vh - 3rem)' }}
        >
          <div>
            <div className="text-2xl font-bold">Keypress Game</div>
            <div className="text-sm mt-2 opacity-0 hover:opacity-100 transition-opacity duration-500">Description of Game 5</div>
          </div>
          <img src="/towers.png" className="absolute top-0 left-0 w-full h-full object-cover opacity-0 hover:opacity-100 transition-opacity duration-500" alt="Game 5 Preview" />
        </a>

        {/* Box 6 */}
        <a
          href="/game"
          className="bg-purple-500 hover:bg-purple-600 transition-colors text-white p-4 flex flex-col justify-between items-center rounded-lg shadow-xl hover:scale-110 transform transition-all relative overflow-hidden"
          style={{ height: 'calc(33vh - 3rem)' }}
        >
          <div>
            <div className="text-2xl font-bold">Hard or Easy Task Game</div>
            <div className="text-sm mt-2 opacity-0 hover:opacity-100 transition-opacity duration-500">Description of Game 6</div>
          </div>
          <img src="/towers.png" className="absolute top-0 left-0 w-full h-full object-cover opacity-0 hover:opacity-100 transition-opacity duration-500" alt="Game 6 Preview" />
        </a>

        {/* Box 7 */}
        <a
          href="/game"
          className="bg-purple-500 hover:bg-purple-600 transition-colors text-white p-4 flex flex-col justify-between items-center rounded-lg shadow-xl hover:scale-110 transform transition-all relative overflow-hidden"
          style={{ height: 'calc(33vh - 3rem)' }}
        >
          <div>
            <div className="text-2xl font-bold">Digits Memory Game</div>
            <div className="text-sm mt-2 opacity-0 hover:opacity-100 transition-opacity duration-500">Description of Game 7</div>
          </div>
          <img src="/towers.png" className="absolute top-0 left-0 w-full h-full object-cover opacity-0 hover:opacity-100 transition-opacity duration-500" alt="Game 7 Preview" />
        </a>

        {/* Box 8 */}
        <a
          href="/game"
          className="bg-purple-500 hover:bg-purple-600 transition-colors text-white p-4 flex flex-col justify-between items-center rounded-lg shadow-xl hover:scale-110 transform transition-all relative overflow-hidden"
          style={{ height: 'calc(33vh - 3rem)' }}
        >
          <div>
            <div className="text-2xl font-bold">Stop Game</div>
            <div className="text-sm mt-2 opacity-0 hover:opacity-100 transition-opacity duration-500">Description of Game 8</div>
          </div>
          <img src="/towers.png" className="absolute top-0 left-0 w-full h-full object-cover opacity-0 hover:opacity-100 transition-opacity duration-500" alt="Game 8 Preview" />
        </a>

        {/* Box 9 */}
        <a
          href="/game"
          className="bg-purple-500 hover:bg-purple-600 transition-colors text-white p-4 flex flex-col justify-between items-center rounded-lg shadow-xl hover:scale-110 transform transition-all relative overflow-hidden"
          style={{ height: 'calc(33vh - 3rem)' }}
        >
          <div>
            <div className="text-2xl font-bold">Arrows Game</div>
            <div className="text-sm mt-2 opacity-0 hover:opacity-100 transition-opacity duration-500">Description of Game 9</div>
          </div>
          <img src="/towers.png" className="absolute top-0 left-0 w-full h-full object-cover opacity-0 hover:opacity-100 transition-opacity duration-500" alt="Game 9 Preview" />
        </a>

        {/* Box 10 */}
        <a
          href="/game"
          className="bg-purple-500 hover:bg-purple-600 transition-colors text-white p-4 flex flex-col justify-between items-center rounded-lg shadow-xl hover:scale-110 transform transition-all relative overflow-hidden"
          style={{ height: 'calc(33vh - 3rem)' }}
        >
          <div>
            <div className="text-2xl font-bold">Lengths Game</div>
            <div className="text-sm mt-2 opacity-0 hover:opacity-100 transition-opacity duration-500">Description of Game 10</div>
          </div>
          <img src="/towers.png" className="absolute top-0 left-0 w-full h-full object-cover opacity-0 hover:opacity-100 transition-opacity duration-500" alt="Game 10 Preview" />
        </a>

        {/* Box 11 */}
        <a
          href="/game"
          className="bg-purple-500 hover:bg-purple-600 transition-colors text-white p-4 flex flex-col justify-between items-center rounded-lg shadow-xl hover:scale-110 transform transition-all relative overflow-hidden"
          style={{ height: 'calc(33vh - 3rem)' }}
        >
          <div>
            <div className="text-2xl font-bold">Cards Game</div>
            <div className="text-sm mt-2 opacity-0 hover:opacity-100 transition-opacity duration-500">Description of Game 11</div>
          </div>
          <img src="/towers.png" className="absolute top-0 left-0 w-full h-full object-cover opacity-0 hover:opacity-100 transition-opacity duration-500" alt="Game 11 Preview" />
        </a>

        {/* Box 12 */}
        <a
          href="/game"
          className="bg-purple-500 hover:bg-purple-600 transition-colors text-white p-4 flex flex-col justify-between items-center rounded-lg shadow-xl hover:scale-110 transform transition-all relative overflow-hidden"
          style={{ height: 'calc(33vh - 3rem)' }}
        >
          <div>
            <div className="text-2xl font-bold">Faces Game</div>
            <div className="text-sm mt-2 opacity-0 hover:opacity-100 transition-opacity duration-500">Description of Game 12</div>
          </div>
          <img src="/towers.png" className="absolute top-0 left-0 w-full h-full object-cover opacity-0 hover:opacity-100 transition-opacity duration-500" alt="Game 12 Preview" />
        </a>
      </div>

      {/* Footer */}
      <footer className="bg-purple-900 text-white py-6 px-8 text-center">
        <p>&copy; 2024 PyMetrics. All rights reserved.</p>
      </footer>
    </div>
  );
}
