"use client";

import React, { useState, useEffect } from 'react';


const DotTransition = ({ show }: { show: boolean }) => {
  if (!show) return null;

  return (
    <>
      <style>
        {`
          @keyframes appear {
            0% {
              transform: scale(0);
              opacity: 0;
            }
            10% {
              transform: scale(1.2);
              opacity: 1;
            }
            100% {
              transform: scale(1);
              opacity: 1;
            }
          }
        `}
      </style>
      <div className="flex justify-center items-center h-screen">
        <div className="dot w-12 h-12 bg-purple-200 rounded-full mx-2"
          style={{ animation: 'appear 1s ease-in-out forwards', animationDelay: '0s', opacity: 0 }}></div>
        <div className="dot w-12 h-12 bg-purple-400 rounded-full mx-2"
          style={{ animation: 'appear 1s ease-in-out forwards', animationDelay: '0.5s' , opacity: 0}}></div>
        <div className="dot w-12 h-12 bg-purple-600 rounded-full mx-2"
          style={{ animation: 'appear 1s ease-in-out forwards', animationDelay: '1s', opacity: 0 }}></div>
      </div>
    </>
  );
};


const RandomDigitsSequence = () => {
  const [digit, setDigit] = useState<string>('');
  const [index, setIndex] = useState(0);
  const [randomDigits, setRandomDigits] = useState<number[]>([]);
  const [userInput, setUserInput] = useState('');
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [sequenceLength, setSequenceLength] = useState(4);
  const [wrongAnswers, setWrongAnswers] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [showTransition, setShowTransition] = useState(true);

  useEffect(() => {
    const generateRandomDigits = (length: number) => {
      let digits = [];
      for (let i = 0; i < length; i++) {
        digits.push(Math.floor(Math.random() * 10));
      }
      return digits;
    };
    

    setRandomDigits(generateRandomDigits(sequenceLength));
    setIsCorrect(null);
    setIndex(0);
    setShowTransition(false);
  }, [sequenceLength]);


  useEffect(() => {
    if (index < randomDigits.length * 2) {
      setShowTransition(false);
      const timer = setTimeout(() => {
        setDigit(prevDigit => prevDigit === '' ? randomDigits[Math.floor(index / 2)].toString() : '');
        setIndex(prevIndex => prevIndex + 1);
      }, 800);
      return () => clearTimeout(timer);
    } else if (index === randomDigits.length * 2) {
      setDigit('');  
    }
  }, [index, randomDigits, gameOver]);

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(event.target.value);
  };

  const handleSubmit = () => {
    const currentIsCorrect = userInput === randomDigits.join('');
    setIsCorrect(currentIsCorrect);
    
    setTimeout(() => {
      setShowTransition(true);  
      setTimeout(() => {
        setShowTransition(false);  
        if (currentIsCorrect) {
          setSequenceLength(prevLength => prevLength + 1);
        } else {
          setSequenceLength(prevLength => prevLength - 1);
          setWrongAnswers(prevWrongAnswers => prevWrongAnswers + 1);
        }
        setUserInput('');
        setIndex(0);
      }, 1500);
    }, 1500);
  };

  useEffect(() => {
    if (wrongAnswers === 3) {
      setGameOver(true);
      setSequenceLength(4);
      setWrongAnswers(0);
    }
  }, [wrongAnswers]);


  if (gameOver) {
    return (
      <div style={{ textAlign: 'center', fontSize: '2rem', marginTop: '50vh', transform: 'translateY(-50%)' }}>
        Game Over! You have reached 3 wrong answers. 
      </div>
    );
  }


  return (
    <div style={{ textAlign: 'center', fontSize: '2rem', marginTop: '50vh', transform: 'translateY(-50%)' }}>
      {!showTransition && digit}
      {showTransition && <DotTransition show={showTransition} />}
      {index >= randomDigits.length * 2 && !showTransition && (
        <div>
          <p>Type the numbers that appeared and press enter:</p>
          <input
            style={{
              fontSize: '1.5rem',
              textAlign: 'center',
              color: isCorrect ? 'green' : 'black',
              outline: 'none',
              border: '1px solid #ccc',
              borderRadius: '5px'
            }}
            type="text"
            value={userInput}
            onChange={handleInput}
            onKeyDown={(event) => {
              if (event.key === 'Enter') {
                handleSubmit();
              }
            }}
          />
          
          <hr style={{ background: 'black', height: '2px', width: '50%', margin: '0 auto' }} />
          {isCorrect !== null && (
            <div style={{ color: isCorrect ? 'green' : 'red' }}>
            {isCorrect ? '✓ Correct' : '✗ Incorrect'}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default RandomDigitsSequence;