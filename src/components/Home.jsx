import React from 'react'
import logo from './../assets/dices 1.png'
import { Link } from 'react-router-dom';


export const Home = () => {

  return (
    <div className=''>
      
      <div className='flex flex-col md:flex-row items-center justify-center'>
        <img id='img' src={logo} alt="" width={400}/>
        <div className=''>
          <p className='text-4xl md:mt-0 mt-4 font-bold flex-wrap ml-12'>
            Let's Play with Dice</p>
            <Link to="/playground" >
              <div className='mt-20 flex items-center justify-center'>
                <p className='border-[3px] border-black px-6 py-1 rounded-xl'>Start Playing</p>
              </div>
            </Link>
        </div>
      </div>
      <footer className='flex items-end justify-center h-[12vh] md:h-[40vh]'>*For better Exprience use Laptop or PC*</footer>
    </div>
  )
}
