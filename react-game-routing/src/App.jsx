import { useState } from 'react'
import './App.css'
import {Link, Route, Routes} from 'react-router-dom'
import About from './components/About'
import Home from './components/Home'
import Games from './components/Games'
import Game from './components/Game'
import NotFound from './components/NotFound'

export default function App() {
  return (
    <>
    <header>
      <nav>
        <ul>
          <li><Link to = "/">Home</Link></li>
          <li><Link to = "/About">About</Link></li>
          <li><Link to = "/Games">Games</Link></li>
        </ul>
      </nav>
    </header>     

      {/*Routes for Application*/}
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/About' element={<About/>}/>
          <Route path='/Games'>
            <Route index element = {<Games/>}/>
            <Route path=":gameId" element={<Game/>}/>    
          </Route>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </>
  )
}