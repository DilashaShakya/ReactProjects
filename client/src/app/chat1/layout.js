import SideNav from '@/components/side-nav'
import React from 'react'

const layout = ({children}) => {
  return (
    <div className='flex gap-1'>
        <SideNav/>
        {children}
        </div>
  )
}

export default layout