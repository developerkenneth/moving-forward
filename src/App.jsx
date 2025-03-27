import {BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom'
import PagesLayout from './layouts/PagesLayout'
import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Services from './pages/Services'

function App() {



  return (
    <Router>
    <Routes>
      <Route path='/' element={<PagesLayout />}>
        <Route index element = {<Home />} />
        <Route path='about' element={<About />} />
        <Route path='contact' element={<Contact />} />
        <Route path='services' element={<Services />} />

      </Route>
    </Routes>
    </Router>
  )
}

export default App
