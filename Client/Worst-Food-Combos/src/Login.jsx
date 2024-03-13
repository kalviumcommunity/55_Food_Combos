import React from 'react'
import "./Login.css"

function Login() {
  return (
    <div>
        <div className="l-btn">
            <form>
                Username: <input type='text'/><br></br>
                Password: <input type='password' required/><br></br>
                <input type='submit' value="Login"/>
            </form>
        </div>
    </div>
  )
}
export default Login
