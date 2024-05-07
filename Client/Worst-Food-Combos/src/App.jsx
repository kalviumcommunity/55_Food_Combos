import Home from "./Home"
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Form from "./Form"
import UpdateForm from "./UpdateForm"
import Signup from "./Signup"
import Login from "./Login"

function App() {
  

  return (
    <>
    <BrowserRouter>
    
    <Routes>
    <Route path="/" element={<Home/>}/>
      <Route path="/form" element={<Form/>}/>
      <Route path="/update/:id" element={<UpdateForm/>}/>
      <Route path="/Sign-up" element={<Signup/>}/>
      <Route path="/Login" element={<Login/>}/>

    </Routes>
    
    </BrowserRouter>
      {/* <Home/> */}
    </>
  )
}

export default App
