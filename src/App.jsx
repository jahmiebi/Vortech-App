import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './Component/Login/Login'
import Register from './Component/Register/Register'
// import VoteConfiguration from './Component/Vote Configuration'

import VoterResultManagement from './Component/VoterResultManagement'
import VoterResultManagement2 from './Component/Resultmanagement/VoterResultManagement2'

const App = () => {
  return (
    <div>
      {/* <VoteConfiguration/> */}


      <Routes>
        <Route path='/register' exact element={<Register/>}></Route>
        <Route path='/login' exact element={<Login/>} />
        <Route path='/voter-result-management' exact element={<VoterResultManagement/>}/>
        <Route path='/voter-result-management2' exact element={<VoterResultManagement2/>}/>
        
      </Routes>
    </div>
  )
}

export default App