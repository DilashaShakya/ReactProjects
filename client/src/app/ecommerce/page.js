'use client'
import Image from 'next/image'
import React from 'react'

const Cards = () => {
    const products = [
        {
          "id": 1,
          "name": "Classic White T-Shirt",
          "description": "A soft and comfortable classic white t-shirt made of 100% cotton.",
          "price": 19.99,
          "category": "Clothing",
          "image": "https://images.unsplash.com/photo-1618677603544-51162346e165?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "rating": 4.5,
          "stock": 120
        },
        {
          "id": 2,
          "name": "Leather Backpack",
          "description": "Stylish and durable leather backpack with multiple compartments.",
          "price": 79.99,
          "category": "Accessories",
          "image": "https://images.unsplash.com/photo-1549943872-f7ff0b2b51be?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "rating": 4.7,
          "stock": 50
        },
        {
          "id": 3,
          "name": "Wireless Bluetooth Headphones",
          "description": "High-quality sound and noise-cancellation with long battery life.",
          "price": 129.99,
          "category": "Electronics",
          "image": "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "rating": 4.8,
          "stock": 75
        },
        {
          "id": 4,
          "name": "Gaming Chair",
          "description": "Ergonomic gaming chair with adjustable height and lumbar support.",
          "price": 199.99,
          "category": "Furniture",
          "image": "https://images.unsplash.com/photo-1636487658609-28282bb5a3a0?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "rating": 4.6,
          "stock": 35
        }
      ]
      
  return (
    <div className='flex'>
        {products.map((item)=>{
            return(<div key={item.id} className='flex flex-col bg-gray-100 p-4 m-20 shadow-xl w-80'>
                <p className='font-bold text-xl'>{item.name}</p>
                    <Image src={item.image} width ={400} height={400}/>
                <br></br>
                <p >{item.description}</p>
                <p>{item.price}</p>
            </div>
                
            )
        })}
    </div>
  )
}

export default Cards