import { Route, Routes } from 'react-router-dom'
import './App.scss'
import HomePage from './components/HomePage'
import SearchPage from './components/SearchPage'
import AboutPage from './components/AboutPage'
import Navbar from './components/Navbar'
function App() {
  

  return (
    <section id='app-container'>

    <Navbar/>

     <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/about' element={<AboutPage/>}/>
      <Route path='/search' element={<SearchPage/>}/>
     </Routes>
    </section>
  )
}

export default App
