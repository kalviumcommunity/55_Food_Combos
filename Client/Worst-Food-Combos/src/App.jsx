import Home from "./Home"
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Form from "./Form"
import UpdateForm from "./UpdateForm"

function App() {
  

  return (
    <>
    <BrowserRouter>
    
    <Routes>
    <Route path="/" element={<Home/>}/>
      <Route path="/form" element={<Form/>}/>
      <Route path="/update" element={<UpdateForm/>}/>
    </Routes>
    
    </BrowserRouter>
      {/* <Home/> */}
    </>
  )
}

export default App
