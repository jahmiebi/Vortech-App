


import React from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import SideNav from './SideNav'
import { uli } from '../assets/asset'


const VoterResultManagement = () => {
  return (
    <div className='flex'>
      <div className="w-3/12 sidenav">
        <SideNav />
      </div>
      <div className="w-9/12">

      <GiHamburgerMenu className='text-green-600 md:text-[35px] tola'/>

        

        <div className=' text-green-700 text-2xl font-semibold flex justify-between mt-16 pl-2 '>
          <p className='result-manage'>Result Management</p>
          <input type="text" className="w-[250px] h-[40px] opacity-50 bg-gradient-to-bl from-green-700 to-green-500 rounded-[10px] shadow mr-4 input" />
          {/* <img src={vector} alt="" /> */}
        </div>
        <p className="w-500px  border-b-2 border-black ml-2 mt-2"></p>

        <div className='jason'>
          <div className='flex justify-between mobile'>
            <h1 className=' text-green-700 text-[15px] text-base font-semibold font-[Poppins] electtext'>Election List</h1>
            <input type="text" className='w-[169px] h-[35px] opacity-50 bg-gradient-to-bl  from-green-700 to-green-500 rounded-[10px] shadow mr-[-6]' />

          </div>
          <div className="w-[900px] h-[60px] opacity-50 bg-gradient-to-bl from-green-700 to-green-500 rounded-[10px] shadow mt-4 ml-2 flex justify-between anything" >
            <p className="text-center text-white text-[20px] font-bold font-['Poppins'] mt-4 pl-6">SUG ELECTION</p>
            <img src={uli} alt="" className="w-20 h-10 mt-2 " />
          </div>
          <div className="w-[900px] h-[60px] opacity-50 bg-gradient-to-bl from-green-700 to-green-500 rounded-[10px] shadow mt-4 ml-2 flex justify-between anything" >
            <p className="text-center text-white text-[20px] font-bold font-['Poppins'] mt-4 pl-6">SUG ELECTION</p>
            <img src={uli} alt="" className="w-20 h-10 mt-2 " />
          </div>

          <div className="w-[900px] h-[60px] opacity-50 bg-gradient-to-bl from-green-700 to-green-500 rounded-[10px] shadow mt-4 ml-2 flex justify-between anything" >
            <p className="text-center text-white text-[20px] font-bold font-['Poppins'] mt-4 pl-6">SUG ELECTION</p>
            <img src={uli} alt="" className="w-20 h-10 mt-2 " />
          </div>

          <div className="w-[900px] h-[60px]  opacity-50 bg-gradient-to-bl from-green-700 to-green-500 rounded-[10px] shadow mt-4 ml-2 flex justify-between anything" >
            <p className="text-center text-white text-[20px] font-bold font-['Poppins'] mt-4 pl-6">SUG ELECTION</p>
            <img src={uli} alt="" className="w-20 h-10 mt-2 " />
          </div>

          <div className="w-[900px] h-[60px] opacity-50 bg-gradient-to-bl from-green-700 to-green-500 rounded-[10px] shadow mt-4 ml-2 flex justify-between anything" >
            <p className="text-center text-white text-[20px] font-bold font-['Poppins'] mt-4 pl-6">SUG ELECTION</p>
            <img src={uli} alt="" className="w-20 h-10 mt-2 " />
          </div>

          <div className="w-[900px] h-[60px] opacity-50 bg-gradient-to-bl from-green-700 to-green-500 rounded-[10px] shadow mt-4 ml-2 flex justify-between anything" >
            <p className="text-center text-white text-[20px] font-bold font-['Poppins'] mt-4 pl-6">SUG ELECTION</p>
            <img src={uli} alt="" className="w-20 h-10 mt-2 " />
          </div>

          <div className="w-[900px] h-[60px] opacity-50 bg-gradient-to-bl from-green-700 to-green-500 rounded-[10px] shadow mt-4 ml-2 flex justify-between anything" >
            <p className="text-center text-white text-[20px] font-bold font-['Poppins'] mt-4 pl-6">SUG ELECTION</p>
            <img src={uli} alt="" className="w-20 h-10 mt-2 " />
          </div>

          <div className="w-[900px] h-[60px] opacity-50 bg-gradient-to-bl from-green-700 to-green-500 rounded-[10px] shadow mt-4 ml-2 flex justify-between anything" >
            <p className="text-center text-white text-[20px] font-bold font-['Poppins'] mt-4 pl-6">SUG ELECTION</p>
            <img src={uli} alt="" className="w-20 h-10 mt-2 " />
          </div>
          <div className="w-[900px] h-[60px] opacity-50 bg-gradient-to-bl from-green-700 to-green-500 rounded-[10px] shadow mt-4 ml-2 flex justify-between anything" >
            <p className="text-center text-white text-[20px] font-bold font-['Poppins'] mt-4 pl-6">SUG ELECTION</p>
            <img src={uli} alt="" className="w-20 h-10 mt-2 " />
          </div>

        </div>
      </div>
    </div>
  )
}

export default VoterResultManagement
