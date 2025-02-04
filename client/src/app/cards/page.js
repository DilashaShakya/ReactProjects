'use client'
import React, { useEffect, useState } from 'react'
const cardOptions = [
    'A' , '2' , '3' , '4' , '5' , '6' ,'7' ,'8','9','10','J','Q','K'
]

const faceConfigId = {
    'Q': 11,
    'K': 12,
    'J': 10,
    'A': 13
}


const Cards = () => {
    const [selectedCard, setSelectedCard] = useState(null)


    useEffect(()=>{
        if(selectedCard) {
            const randomNum = Math.floor(Math.random() *13)
  
        }
    },[selectedCard])

  return (
    <div className='flex flex-col justify-center gap-4'>
        {cardOptions.map((item, index) => {
          {selectedCard}
            return (
                <div onClick={()=>setSelectedCard(item)} key={index} 
                className='flex justify-center items-center p-4 m-4 shadow-lg w-20 h-32 bg-black text-white rounded-sm'>
                    <h1>{selectedCard === item && item}</h1>
                    </div>
            )
        })}
       
    </div>
  )
}

export default Cards