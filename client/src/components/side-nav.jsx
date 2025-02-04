'use client'
import { ActivitySquare, MessageSquare, RadioIcon, User2, UsersRound } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'

const SideNav = () => {
  const pathname = usePathname()
  const navItems = [
    { title: 'Chat', link: '/chat1/chat', icon: <MessageSquare className="w-8 h-8" /> }, 
    { title: 'Status', link: '/chat1/status', icon: <ActivitySquare className="w-8 h-8"/> },
    { title: 'Channel', link: '/chat1/channel', icon: <RadioIcon className="w-8 h-8"/> },
    { title: 'Communities', link: '/chat1/communities', icon: <UsersRound className=""/> },
  ];

  return (
    // <div className='bg-green-100 '>
    <div className="flex flex-col gap-16 m-8 h-screen">
      {navItems.map((item, id) => (
        <Link key={id} href={item.link} className={pathname === item.link? 'text-black': 'text-gray-500'}  >
          {item.icon}
        </Link>
      ))}
    </div>
    // </div>
  );
};

export default SideNav;
