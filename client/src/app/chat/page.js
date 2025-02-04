'use client'
import React from 'react'

const Chat = () => {
    const info = [
        {
          "id": 1,
          "username": "johndoe",
          "status": "online",
          "last_seen": "2025-01-27T12:00:00Z",
          "avatar": "https://i.pravatar.cc/150?img=1"
        },
        {
          "id": 2,
          "username": "janedoe",
          "status": "offline",
          "last_seen": "2025-01-26T20:45:00Z",
          "avatar": "https://i.pravatar.cc/150?img=2"
        },
        {
          "id": 3,
          "username": "alexsmith",
          "status": "online",
          "last_seen": "2025-01-27T10:30:00Z",
          "avatar": "https://i.pravatar.cc/150?img=3"
        },
        {
          "id": 4,
          "username": "emilyrose",
          "status": "offline",
          "last_seen": "2025-01-25T18:10:00Z",
          "avatar": "https://i.pravatar.cc/150?img=4"
        },
        {
          "id": 5,
          "username": "devmaster",
          "status": "online",
          "last_seen": "2025-01-27T14:00:00Z",
          "avatar": "https://i.pravatar.cc/150?img=5"
        },
        {
          "id": 6,
          "username": "chrisjames",
          "status": "online",
          "last_seen": "2025-01-27T15:45:00Z",
          "avatar": "https://i.pravatar.cc/150?img=6"
        },
        {
          "id": 7,
          "username": "lilyadams",
          "status": "offline",
          "last_seen": "2025-01-26T09:20:00Z",
          "avatar": "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=150"
        },
        {
          "id": 8,
          "username": "robertbrown",
          "status": "online",
          "last_seen": "2025-01-27T16:15:00Z",
          "avatar": "https://images.unsplash.com/photo-1502767089025-6572583495b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=150"
        },
        {
          "id": 9,
          "username": "sarawilson",
          "status": "offline",
          "last_seen": "2025-01-24T22:30:00Z",
          "avatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=150"
        },
        {
          "id": 10,
          "username": "michaelgreen",
          "status": "online",
          "last_seen": "2025-01-27T08:00:00Z",
          "avatar": "https://images.unsplash.com/photo-1511367461989-f85a21fda167?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=150"
        }
      ]
      
  return (
    <div className="bg-blue-200 p-4 rounded-xl w-1/5">
        <p className="font-bold text-4xl m-6 ">Chats</p>

        {info.map((chats)=>{
            return(
                <div key={chats.id} className='flex flex-col bg-white p-2 m-3 shadow-xl w-1/8 h-32 rounded-2xl'>
                    <p className='font-bold text-2xl'>{chats.username}</p>
                    <p>{chats.status}</p>
                    <p className='font-italic'>{chats.last_seen}</p>
                </div>
            )
        })}
    </div>
  )
}

export default Chat