import { useState } from 'react'
import { Route, Routes} from 'react-router-dom';
import './App.css'
import Signup from './screens/signup';
import Login from './screens/login';

function App() {

  return (
    <main>
      <Routes>
        <Route path='/' element = {<Signup/>}/>
        <Route path='/Login' element = {<Login/>}/>
      </Routes>
    </main>
  )
}

export default App
