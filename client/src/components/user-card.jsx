'use client'
import Image from 'next/image'
import React from 'react'

const UserCard = ({item, setUserDetails}) => {
    const statusColors = {
        active: 'bg-green-500',
        offline: 'bg-gray-400',
        busy: 'bg-red-500',
        away: 'bg-yellow-500'
      };
  return (
    <div className='bg-white ml-0'>
    <div onClick={()=>setUserDetails(item)} className='flex items-center gap-5 p-9  b-white shadow-md border border-gray-100 rounded-lg cursor-pointer 
                  hover:bg-green-100'>
        <Image src ={item.image} width={200} height={200} className="w-16 h-16 rounded-full object-cover"  alt='imagee'/>
        <span className='font-semibold text-lg'>{item.name}</span>
        <span className={`w-3 h-3 rounded-full ${statusColors[item.status] || bg-gray-300}`}></span>
       {item.status}
       </div>
       
       
       
       
    </div>
  )
}
export default UserCard   