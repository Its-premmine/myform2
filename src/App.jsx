import React from "react";
import "./Style.scss";

const App = () => {
  return (
    <div className="mainDiv">
      <div className="contantDiv">
      <h3>RETURNING CUSTOMERS</h3>
      
      <p className="resetPass">First time visting our new site? You will need to   <a href="#"> reset your password.</a></p>
      <br />
      <form action="">
        <input type="text" className="inputField" placeholder="Email "/>
        <br />
        <input type="password" className="inputFieldpassword" placeholder="password" />
        <br />
        <br />
        <input type="radio" value="Remember me" prem/>
        <label for="html">Remember me</label>
        <br />
        <br />
        <input type="button" className="passBut"  value="SIGN IN" />
        <br />
        <p className="forGotPassword" >Don't have an account? <a href="">create an account</a></p>
      </form>
      </div>
    </div>
  )
}
export default App