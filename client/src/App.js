import React from "react";
import Create from "./Create";
import Nav from './Nav';
import Tool from './Tool';
// const App = () => (
//   <div>
//     <Nav />
//     <h1>MERN CRUDS</h1>
//   </div>
// );

function App() {
  return (
    <div className="App">
      <Tool name={"james"} tool={"js"} lastname={"james2"} />
    </div>
  )
}
export default App;