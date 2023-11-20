import React from 'react'
import { drop, kiss } from '../../assets/asset'
import Piechart from '../Piechart'



const Resultmanagementmain = () => {
  return (
    <div>
        <div className=' text-green-700 text-3xl font-semibold flex justify-between mt-10 pl-2 '>
          <p className='result-manage'>Result Management</p>
        </div>
        <p className="w-500px  border-b-2 border-black ml-2 mt-2"></p>

        <p className='mt-6 ml-14 text-[20px]'>ELECTION</p>

        <select className="w-[850px] h-[50px] bg-green-500 ml-14 flex justify-between pl-3 pr-10 text-white ">
          <option className='pt-2 pl-5 '>SUG PRESIDENT</option>
          <option className='pt-2 pl-5 '>VICE PRESIDENT</option>
          <option className='pt-2 pl-5 '>GENERAL SECRETARY</option>
          <option className='pt-2 pl-5 '>PRO</option>
          <option className='pt-2 pl-5 '>FINANCIAL SECRETARY</option>
          <option className='pt-2 pl-5 '>TREASURER</option>
          <option className='pt-2 pl-5 '>DIRECTOR OF TRANSPORTATION</option>
          <option className='pt-2 pl-5 '>WELLWARE OFFICER</option>
          <option className='pt-2 pl-5 '>DIRECTOR OF SPORTS</option>
          <option className='pt-2 pl-5 '>ASSISTANT GENERAL SECRETARY</option>
          <option className='pt-2 pl-5 '>DIRECTOR OF SOCIALS</option>
          
          
        </select>
        <div>
        <Piechart/>
        </div>
       
        
    </div>
  )
}

export default Resultmanagementmain
