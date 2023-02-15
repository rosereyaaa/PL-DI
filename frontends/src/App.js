// import React from 'react'
// import Header from './components/layout/Header'
// import Footer from './components/layout/Footer'
// import Home from './components/Home'


// function App() {
//   return (
//     <div className="App">
//       <Header />
//       <Home />
//       <Footer />
//     </div>
//   );
// }

// //get images from github repo

// export default App;
import React from 'react'
import { BrowserRouter as Router } from "react-router-dom";

import Header from '../../frontends/src/components/layout/Header'
import Footer from '../../frontends/src/components/layout/Footer'
import Home from '../../frontends/src/components/Home'

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Home />
        <Footer />
      </div>
    </Router>
  );
}

export default App;