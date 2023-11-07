// import React from 'react'
// import { GiHamburgerMenu } from 'react-icons/gi'
// import { vec } from '../assets/assets'



// const Voter = () => {
//   return (
//     <div>
//       <div className='border-b-2 border-black w-full mt-6 pb-3 pl-2 '>
//         <GiHamburgerMenu className='text-green-600 md:text-[35px] ' />
//         <h1 className='text-green-600 text-[25px] mt-[10px] md:text-[40px] result-management'>Result Management</h1>
//       </div>
//       <div className='flex justify-between pt-8 pl-2 md:hidden result-management-div'>
//           <h1 className=' text-green-700 text-base font-semibold font-[Poppins]'>Election List</h1>
//           <input type="text" className='w-[169px] h-[35px] left-0 top-0  bg-gray-400 rounded-[5px] voter-management-input'/>
          
//         </div>

//         <div className='flex w-[361px] items-center h-[50px] bg-green-700 rounded-lg mt-3 text-center md:hidden '>
//           <p className='text-center text-white text-base font-bold mt-3 ml-3'> 1.SUG ELECTION</p>
//           <img src={vec} alt=""  className='w-[30px] h-[30px] flex  ml-40 mt-3 bg-green-700 '/>
//         </div>
        

//         <div className='flex w-[361px] h-[50px] bg-green-700 rounded-lg mt-3 md:hidden'>
//           <p className='text-center text-white text-base font-bold mt-3 ml-3'> 1.SUG ELECTION</p>
//           <img src={vec} alt=""  className='w-[30px] h-[30px] flex ml-40 mt-3 bg-green-700 '/>
//         </div>


//         <div className='flex w-[361px] h-[50px] bg-green-700 rounded-lg mt-3 md:hidden'>
//           <p className='text-center text-white text-base font-bold mt-3 ml-3'> 1.SUG ELECTION</p>
//           <img src={vec} alt=""  className='w-[30px] h-[30px] flex ml-40 mt-3 bg-green-700 '/>
//         </div>

//         <div className='flex w-[361px] h-[50px] bg-green-700 rounded-lg mt-3 md:hidden'>
//           <p className='text-center text-white text-base font-bold mt-3 ml-3'> 1.SUG ELECTION</p>
//           <img src={vec} alt=""  className='w-[30px] h-[30px] flex ml-40 mt-3 bg-green-700 '/>
//         </div>

//         <div className='flex w-[361px] h-[50px] bg-green-700 rounded-lg mt-3 md:hidden'>
//           <p className='text-center text-white text-base font-bold mt-3 ml-3'> 1.SUG ELECTION</p>
//           <img src={vec} alt=""  className='w-[30px] h-[30px] flex ml-40 mt-3 bg-green-700 '/>
//         </div>

//         <div className='flex w-[361px] h-[50px] bg-green-700 rounded-lg mt-3 md:hidden'>
//           <p className='text-center text-white text-base font-bold mt-3 ml-3'> 1.SUG ELECTION</p>
//           <img src={vec} alt=""  className='w-[30px] h-[30px] flex ml-40 mt-3 bg-green-700 md:mr-10 ' />
//         </div>

//         <div className='flex w-[361px] h-[50px] bg-green-700 rounded-lg mt-3 md:hidden '>
//           <p className='text-center text-white text-base font-bold mt-3 ml-3'>1.SUG ELECTION</p>
//           <img src={vec} alt=""  className='w-[30px] h-[30px] flex ml-40 mt-3 bg-green-700 '/>
//         </div>

//         <div className='flex w-[361px] h-[50px] bg-green-700 rounded-lg mt-3 md:hidden'>
//           <p className='text-center text-white text-base font-bold mt-3 ml-3'> 1.SUG ELECTION</p>
//           <img src={vec} alt=""  className='w-[30px] h-[30px] flex ml-40 mt-3 bg-green-700 '/>
//         </div>

//         <div className='flex w-[361px] h-[50px] bg-green-700 rounded-lg mt-3 md:hidden '>
//           <p className='text-center text-white text-base font-bold mt-3 ml-3'> 1.SUG ELECTION</p>
//           <img src={vec} alt=""  className='w-[30px] h-[30px] flex ml-40 mt-3  bg-green-700'/>
//         </div>

//         <div className='flex w-[361px] h-[50px] bg-green-700 rounded-lg mt-3  md:hidden'>
//           <p className='text-center text-white text-base font-bold mt-3 ml-3'>1.SUG ELECTION</p>
//           <img src={vec} alt=""  className='w-[30px] h-[30px] flex ml-40 mt-3 bg-green-700'/>
//         </div>

//       </div>
//   )
// }

// export default Voter





import Reinct from 'react'
import VoterResultManagement from './components/VoterResultManagement'
import Voter from './components/Voter'
import SideNav from './components/SideNav'
import { uli } from './assets/assets'
import { vector } from './assets/assets'
import { GiHamburgerMenu } from 'react-icons/gi'


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
