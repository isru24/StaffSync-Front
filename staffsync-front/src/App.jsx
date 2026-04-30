import { useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import './App.css'
import Signup from './screens/signup';
import Login from './screens/login';
import Navbar from './screens/Navbar';
import Dashboard from './screens/Dashboard';
import AuthLayout from './routes/Authlayout';
import MainLayout from './routes/Mainlayout';
import Employee from './screens/Employee';
import Attendance from './screens/Attendance';
import Doc from './screens/Document';

function App() {

  return (
    <main>
      <Routes>
        <Route element={<AuthLayout/>}>
          <Route path='/' element={<Signup />} />
          <Route path='/Login' element={<Login />} />
        </Route>
        <Route element={<MainLayout/>}>
          <Route path='/Dashboard' element = {<Dashboard/>}/>
          <Route path='/Employee' element={<Employee/>}/>
          <Route path='/Attendace' element={<Attendance/>}/>
          <Route path='/Document' element={<Doc/>}/>
        </Route>
      </Routes>
    </main>
  )
}

export default App
