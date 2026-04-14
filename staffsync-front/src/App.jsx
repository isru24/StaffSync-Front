import { useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import './App.css'
import Signup from './screens/signup';
import Login from './screens/login';
import Navbar from './screens/Navbar';
import Dashboard from './screens/Dashboard';
import AuthLayout from './routes/Authlayout';
import MainLayout from './routes/Mainlayout';

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
        </Route>
      </Routes>
    </main>
  )
}

export default App
