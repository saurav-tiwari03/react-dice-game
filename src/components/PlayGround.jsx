import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import dice1 from './../assets/dice_1.png';
import dice2 from './../assets/dice_2.png';
import dice3 from './../assets/dice_3.png';
import dice4 from './../assets/dice_4.png';
import dice5 from './../assets/dice_5.png';
import dice6 from './../assets/dice_6.png';

export const PlayGround = () => {
  const [score, setScore] = useState(0);
  const [randomNumber, setRandomNumber] = useState();
  const [userNumber, setUserNumber] = useState("");
  const [showRules, setShowRules] = useState(false);

  const rollDiceHandler = () => {
    if (userNumber === "") {
      setRandomNumber("Please choose a number first");
    } else {
      const newRandomNumber = Math.floor(Math.random() * 6) + 1;
      setRandomNumber(newRandomNumber);

      if (parseInt(newRandomNumber, 10) === parseInt(userNumber, 10)) {
        setScore((prevScore) => prevScore + parseInt(userNumber, 10));
        toast.success('Congratulations! You guessed it right!', {
          position: "top-right",
          autoClose: 1500,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      } else {
        setScore((prevScore) => prevScore - 1);
        toast.error('Try Again', {
          position: "bottom-center",
          autoClose: 1000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      }
    }
  };

  const showRulesHandler = () => {
    setShowRules(!showRules);
  };


  const diceImages = [dice1, dice2, dice3, dice4, dice5, dice6];

  return (
    <div>
      <div className='select-none'>
        <div className='flex md:flex-row flex-col justify-around items-center'>
          <div>
            <div className='text-center text-3xl'>{score}</div>
            <div className='text-3xl'>Score</div>
          </div>
          <div>
            <div>
              <input
                className='text-center md:text-2xl text-xl mt-2 md:mt-0 border-b-2 w-[280px] md:w-[350px] border-black outline-none'
                type="text"
                placeholder='Enter number Between 1 to 6'
                onChange={(val) => { setUserNumber(val.target.value) }}
              />
            </div>
            <div className='text-center text-2xl'>Choose a number </div>
          </div>
        </div>
        <div className=''>
          <div className='text-xl mt-4 flex items-center justify-center'>
            {<img   src={diceImages[randomNumber - 1]} alt="" width={100} />}
          </div>
          <div className='flex items-center justify-center cursor-pointer ' onClick={rollDiceHandler} >
            <div className='border-3 border-sky-500 rounded-lg'>
              <button className='bg-sky-400 px-4 py-2 rounded-lg'>Click here to roll dice</button>
            </div>
          </div>
        </div>
      </div>
      <div className='mt-12'>
        <div className='flex flex-col items-center justify-center '>
          <button className='border-2 border-[#222] bg-[#222] text-white px-4 py-1 rounded-xl mb-4' onClick={() => {setScore(0)}}><a href='/playground' >Reset Game</a></button>
          <button className='border-2 border-[#222] bg-[#222] text-white px-4 py-1 rounded-xl' onClick={showRulesHandler}>Show Rules</button>
        </div>
        <div className=''>
          {
            showRules ? <div className='mt-4 flex flex-col items-center justify-center'>
              <div className='border-2 border-[#222] p-4 rounded-md bg-[#464646] text-white'>
              <h2 className='text-xl underline'>Rules of this Game</h2>
              <ol className=''>
                <li>1. Choose any Number </li>
                <li>2. Roll a Dice</li>
                <li>3. After click on  dice  if selected number is equal to dice number you will get same point as dice </li>
                <li>4. If you get wrong guess then 1 point will be dedcuted </li>
              </ol>
              </div>
            </div>
              :
            <div></div>
          }
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};
