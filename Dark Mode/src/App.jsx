
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Blog from './pages/Blog'
import Navbar from './components/Navbar'
import { ThemeProvider } from './theme-context'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
    <ThemeProvider>
    <BrowserRouter>
        {/* navbar */}
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/blog" element={<Blog/>}/>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
      
    </>
  )
}

export default App
