import Home from "./Home"
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Form from "./Form"

function App() {
  

  return (
    <>
    <BrowserRouter>
    
    <Routes>
    <Route path="/" element={<Home/>}/>
      <Route path="/form" element={<Form/>}/>
    </Routes>
    
    </BrowserRouter>
      {/* <Home/> */}
    </>
  )
}

export default App
