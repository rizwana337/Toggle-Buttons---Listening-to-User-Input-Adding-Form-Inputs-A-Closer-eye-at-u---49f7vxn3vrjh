import React, { useState } from 'react'
import '../styles/App.css';
const App = () => {
  //code here 
  let [isLoggedIn, setLoggedIn] = useState(false);

  const handleClick = () => {
    setLoggedIn(!isLoggedIn);

  };


  return (
    <div className="App">
      <button id="btn1" onClick={handleClick}>
        {/* assign value for button 1 */}
        {
          isLoggedIn ? "ON" : "OFF"
        }
      </button>
      <br />
      <br />
      <button id="btn2" onClick={handleClick}>
        {/* assign value for button 2 */}
        {
          isLoggedIn ? "OFF" : "ON"
        }
      </button>
    </div>
  );
}


export default App;
