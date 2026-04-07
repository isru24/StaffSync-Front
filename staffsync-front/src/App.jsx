import { useState } from 'react'
import { Route, Routes} from 'react-router-dom';
import './App.css'
import Signup from './screens/signup';

function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
      <Routes>
        <Route path='/' element = {<Signup/>}/>
      </Routes>
    </main>
  )
}

export default App
