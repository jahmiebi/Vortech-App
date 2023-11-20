import React from 'react'
import { logo } from '../assets/asset'
import { def } from '../assets/asset'
import { vote } from '../assets/asset'
import { solid } from '../assets/asset'
import { carbon } from '../assets/asset'
import { round } from '../assets/asset'
import { ant } from '../assets/asset'
import { solar } from '../assets/asset'
import { eos } from '../assets/asset'

const SideNav = () => {
  return (
    <div className='w-[315px] bg-green-700 h-screen   fixed pb-10'>
      <div>
        <img src={logo} alt="" className='pt-10 text-[20px] ml-6 mb-10' />


        <div className='text-[] ml-6 flex mt-5 items-center'>
          <img src={def} alt="" />
       <button className='text-white pl-2'>Dashboard</button> 
        </div>

      </div>

      <div className='ml-6 flex mt-5 items-center'>
        <img src={vote} alt="" />
       <button className='text-white pl-2'>Voter Management</button>
      </div>


      <div className='ml-6 flex mt-5 items-center'>
        <img src={solid} alt="" />
       <button className='text-white pl-2'>Candidate Mnagement</button>
      </div>

      <div className='ml-6 flex mt-5 items-center'>
        <img src={eos} alt="" />
        <button className='text-white pl-2'>Vote configuration</button>
      </div>

      <div className='ml-6 flex mt-5 items-center'>
        <img src={carbon} alt="" />
       <button className='text-white pl-2' >Vote Analysis</button>
      </div>

      <div className='ml-6 flex mt-5 items-center'>
        <img src={round} alt="" />
        <button className='text-white pl-2'>Result Management</button>
      </div>

      <div className='ml-6 flex mt-5 items-center'>
        <img src={ant} alt="" />
        <button className='text-white pl-2'>Settings</button>
      </div>

      <div className='ml-6 flex mt-20 items-center'>
        <img src={solar} alt="" />
      <button className='text-white pl-2'>Logout</button>
      </div>


    </div>

  )
}

export default SideNav
