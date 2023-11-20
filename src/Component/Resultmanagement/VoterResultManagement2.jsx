import React from 'react'
import Resultmanagementmain from './Resultmanagementmain'
import SideNav from '../SideNav'


const VoterResultManagement2 = () => {
  return (
    <div className='flex'>
      <div className="w-3/12">
        <SideNav />
      </div>
      <div className="w-9/12">
        <Resultmanagementmain />
      </div>
    </div>
  )
}

export default VoterResultManagement2
