'use client'
import React, { useState } from 'react'

const Unclicked = () => {
    const [selectedItem, setSelectedItem] = useState('')
    const grids = [
        ['😺','🐎', '🥤', '🦈' ],
        ['🦈', '🪲', '🍓', '😺'],
        ['🥤', '🐎', '🪲', '🍓']
    ]
    const handleClick=(emojis)=>{
        setSelectedItem(emojis)
    }
  return (
    <div className=' flex flex-col items-center justify-center mt-6' >
        <h1 className="text-6xl font-extrabold text-green-900 text-center w-full mb-6 drop-shadow-md">
        Welcome to the Game
    </h1>

    <div className='flex items-center justify-center mt-0'>
        {grids.map((item, id)=>{
            return(
                <div>
                    {item.map((emojis)=>{
                        return(
                            <div onClick={()=>handleClick(emojis)} className='w-40 h-40 text-8xl m-6 shadow-lg text-center p-5 bg-yellow-200 rounded-2xl'>
                                 {emojis === selectedItem && emojis}
                            </div>

                        )
                       
                    })}
                </div>
            )
        })}
        
    </div>
    </div>
  )
}

export default Unclicked