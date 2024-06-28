import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Router, Routes } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Homepage from './pages/Homepage'
import Matches from './pages/Matches'
import Errorpage from './pages/Errorpage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Homepage />} />
          <Route path="/matches" element={<Matches />} />
        </Route>
        <Route path="/*" element={<Errorpage />} />
      </Routes>
    </>
  )
}

export default App
