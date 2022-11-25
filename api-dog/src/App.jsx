
import './App.css'

import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Nav from './components/Nav'
import { lazy, Suspense} from'react'

const Home = lazy(()=> import("./components/Home"))
const Contact =lazy(()=> import("./components/Contact"))
const Empresa= lazy(()=> import("./components/Empresa"))

function App() {

  return (  
      <BrowserRouter >
        <Nav/>
        <Suspense fallback ={<p>otra cosa</p>}>
          <Routes>           
          
            <Route path="/Home" element={<Home/>}/>
            <Route path='/Contact' element={<Contact/>}/>
            <Route path='/Empresa' element={<Empresa/>}/>
          </Routes>
        </Suspense>
      </BrowserRouter> 
  )
}

export default App