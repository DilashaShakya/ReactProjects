'use client'
import { ThumbsUp } from 'lucide-react'
import React, { useState } from 'react'


const Like = () => {
    const [like, setLike] = useState(false)
    
    return (
    <div className='flex items-center justify-center h-screen'>
      {like}
      <ThumbsUp onClick={()=>{setLike(!like)}} className={like ? " text-pink-600 " : null} size={70}/>
      
      </div>
  )
}

export default Like