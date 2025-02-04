'use client'
import ChatUi from '@/components/chat-ui'
import UserCard from '@/components/user-card'
import React, { useState } from 'react'

const Chatt=()=>{
    const [userDetails, setUserDetails] = useState(null)
    const users = [
        {
          "userid": "1001",
          "last_seen": "2025-01-28T14:30:00Z",
          "name": "Alice Johnson",
          "status": "active",
          "image": "https://images.pexels.com/photos/4144036/pexels-photo-4144036.jpeg?cs=srgb&dl=pexels-julia-m-cameron-4144036.jpg&fm=jpg"
        },
        {
          "userid": "1002",
          "last_seen": "2025-01-28T13:15:00Z",
          "name": "Bob Smith",
          "status": "offline",
          "image": "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?cs=srgb&dl=pexels-justin-shaifer-501272-1222271.jpg&fm=jpg"
        },
        {
          "userid": "1003",
          "last_seen": "2025-01-28T12:45:00Z",
          "name": "Charlie Davis",
          "status": "busy",
          "image": "https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
          "userid": "1004",
          "last_seen": "2025-01-28T15:00:00Z",
          "name": "Diana Roberts",
          "status": "away",
          "image": "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
      ]
      
  return (

  <div className='flex h-screen w-screen'>
    <div className="w-1/3 bg-gray-50 p-1">
      {users.map((item) => (
        <UserCard key={item.userid} item={item} setUserDetails={setUserDetails}/>
      ))}
    </div>
  <div className="flex-1 flex bg-white">
    <ChatUi userDetails={userDetails} />
  </div>
</div>

        
        
  )
}

export default Chatt