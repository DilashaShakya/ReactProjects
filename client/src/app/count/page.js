'use client'
import React, { useState } from 'react'

const Count = () => {
    const [counter, setCounter] = useState(0)
    const handleCount =(changeType)=>{
        if (changeType == 'dec'){
            setCounter(counter-1)
        }
        else if (changeType =='inc'){
            setCounter(counter+1)
        }
        else{
            setCounter(0)
        }
        
    }
  return (
    <div className='flex items-center justify-center h-screen bg-gray-100 flex-col'>
    <p className='font-bold text-lg mb-4'>Increment and Decrement Numbers </p>
        <div className='items-center space-x-4'>
            <button className='px-4 py-2 bg-red-500 text-white rounded' onClick={()=>handleCount('dec')}>-</button>
            <span className="text-lg font-semibold mx-4">{counter}</span>
            <button className='px-4 py-2 bg-yellow-500 text-white rounded' onClick={()=>handleCount('inc')}>+</button>
        </div>
    </div>
  )
}

export default Count