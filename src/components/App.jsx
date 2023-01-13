import React from "react";
import Login from "./Login";

var isLoggedIn = true;

const currentTime = new Date().getHours();

function App() {
  return (
    <div className="container">
      {isLoggedIn ? currentTime > 12 ? <h1>YAY</h1> : <h1>BOO</h1> : <Login />}
    </div>
  );
}

export default App;
