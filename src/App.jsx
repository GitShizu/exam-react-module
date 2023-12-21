import { Route, Routes } from 'react-router-dom'
import './App.scss'
import HomePage from './components/HomePage'
import SearchPage from './components/SearchPage'
import AboutPage from './components/AboutPage'
import Navbar from './components/Navbar'
import PersonPage from './components/PersonPage'
import { useEffect, useState } from 'react'
const apiKey = import.meta.env.VITE_API_KEY;
function App() {

  const [language, setLanguage]= useState('en-US')

  return (
    <section id='app-container'>

    <Navbar lang={language} changeLang={(newValue)=>setLanguage(newValue)}/>
     <Routes>
      <Route path='/' element={<HomePage lang={language}/>}/>
      <Route path='/about' element={<AboutPage/>}/>
      <Route path='/search' element={<SearchPage lang={language}/>}/>
      <Route path='/person/:id' element={<PersonPage lang={language}/>}/>
     </Routes>
    </section>
  )
}

export default App
