import { Route, Routes } from 'react-router-dom'
import './App.scss'
import HomePage from './components/HomePage'
import SearchPage from './components/SearchPage'
import AboutPage from './components/AboutPage'
import Navbar from './components/Navbar'
import PersonPage from './components/PersonPage'
import { useEffect } from 'react'
const apiKey = import.meta.env.VITE_API_KEY;
function App() {

  return (
    <section id='app-container'>

    <Navbar/>
     <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/about' element={<AboutPage/>}/>
      <Route path='/search' element={<SearchPage/>}/>
      <Route path='/person/:id' element={<PersonPage/>}/>
     </Routes>
    </section>
  )
}

export default App
