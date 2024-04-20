"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

type BalloonColor = 'red' | 'blue' | 'green' | 'yellow' | 'purple';

const colorThresholds: Record<BalloonColor, number> = {
    red: 0.8,
    blue: 1.2,
    green: .4,
    yellow: .6,
    purple: 1.3
};


const BalloonComponent: React.FC = () => {
    const [color, setColor] = useState<BalloonColor>('red');
    const [size, setSize] = useState(100);  // Default size of the balloon
    const [potentialMoney, setPotentialMoney] = useState(0.0);
    const [isClient, setIsClient] = useState(false);
    const [runs, setRuns]= useState(0);
    const [totMoney, settotMoney]= useState(0.0)
    const [lastMoney,setlastMoney]=useState(0.0)
    const [gameOver,setGameOver]=useState(false)
    const resetBalloon = () => {
        if (runs >= 5) {
            setGameOver(true);             
            return ; // This will stop the function from continuing further
        }
        setRuns(runs => runs + 1);

        const colors: BalloonColor[] = Object.keys(colorThresholds) as BalloonColor[];
        const newColor = colors[Math.floor(Math.random() * colors.length)];
        setColor(newColor);
        setSize(100);
        setPotentialMoney(0);
    };

    useEffect(() => {
        setIsClient(true);  // Ensuring the component only runs client-side logic
    }, []);

    const handlePump = () => {
        const newPotential = parseFloat((potentialMoney + 0.10).toFixed(2));
        if (newPotential > colorThresholds[color]) {
            resetBalloon();
        } else {
            setPotentialMoney(newPotential);
            setSize(prevSize => prevSize + 10);  // Increment the size of the balloon
        }
    };

    const handleCollect = () => {
        settotMoney(totMoney => parseFloat((totMoney + potentialMoney).toFixed(2)));
        setlastMoney(potentialMoney)
        setPotentialMoney(0); 
        // Reset potential money after collecting
        resetBalloon();
    };

    

    if (!isClient) {
        return null;  // Render nothing on the server
    }
    if (gameOver==false){
        return (
            <div className=" p-5 flex-1 flex-col border-2 mt-5 items-center justify-center border-gray-200 rounded-lg shadow-lg">
            <div className=" flex items-center"> {/* Ensured full width and center items */}
                <div className="flex  mr-20 flex-col">
                    <p className="text-md text-gray-400 ">TOTAL: ${totMoney.toFixed(2)}</p>
                    <p className="text-md mb-7 text-gray-400 ">LAST: ${lastMoney.toFixed(2)}</p>
                </div>
                <div className=" flex justify-center ml-10 mr-10 items-center"> {/* Center potentialMoney */}
                    <p className="text-5xl mb-7 text-gray-400 ">${potentialMoney.toFixed(2)}</p>
                </div>
                <p className="text-md mb-7 ml-20 text-gray-400 ">{runs}/6</p>
            </div>
            <div className=" flex justify-center ml-10 mr-10 mt-10 mb-10 items-center"> {/* Center potentialMoney */}
            <img src={`/balloon.jpeg`} style={{ width: `${size}px`, height: `${size}px` }} alt="Colorful Balloon"/>          
              </div>
            
            
            <div className="flex flex-col space-y-2 w-full mt-2 items-center"> {/* Align buttons in a column and center them */}
                <button onClick={handlePump} className="bg-gray-300 text-black w-[150px] text-sm font-semibold  py-3 border border-gray-400 shadow cursor-pointer hover:bg-gray-300 ">Pump</button>
                <button onClick={handleCollect} className="bg-black text-white text-sm w-[150px] font-semibold  py-3 ">Collect</button>
            </div>
        </div>
        
        );
    }
   
    if (gameOver==true){
        return (
            <div className="flex  pr-20 pl-20 border mt-5 border-gray-200 flex-col items-center rounded-lg shadow-lg bg-white">
                <p className="p-5 text-4xl mb-4 text-gray-600 bg-white"> Game Over!</p>
                <img src={`/balloon.jpeg`} style={{ width: `${size}px`, height: `${size}px` }} alt="Colorful Balloon"/>          
                <p className="text-md mb-7 mt-3 text-gray-600  ">Final Score: ${totMoney.toFixed(2)}</p>
                <div className="flex items center">
                <Link href="#" className="mb-5 bg-white flex justify-center border border-black text-gray-600  text-md w-[150px] font-semibold py-3">Play Again</Link>
                </div>
                
            </div>
            

        );
    }
       
};

export default BalloonComponent;