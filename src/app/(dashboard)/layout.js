import SideNav from '@/components/sidenav/sideNav'
import React from 'react'

export default function Layout({children}) {
  return (
    <div>
      <SideNav>
        {children}
      </SideNav>
    </div>
  )
}
