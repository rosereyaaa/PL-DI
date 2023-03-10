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
import { Routes, Route } from "react-router-dom";
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Home from './components/Home';
import ProductDetails from './components/product/productDetails'
import Login from './components/user/Login'
import Register from './components/user/Register'
import React, { useEffect, useState } from 'react'
import { loadUser } from './actions/userActions'
import { useSelector } from 'react-redux'
import store from './store'
import Profile from './components/user/Profile'
import ProtectedRoute from './components/route/ProtectedRoute'
import UpdateProfile from './components/user/UpdateProfile';

function App() {
  return (
    // useEffect(() => {
    //   store.dispatch(loadUser())
    // }, [])
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} exact="true" />
        <Route path="/search/:keyword" element={<Home />} exact="true" />
        <Route path="/product/:id" element={<ProductDetails />} exact="true" />
        <Route path="/login" element={<Login />} exact="true" />
        <Route path="/register" element={<Register />} exact="true" />
        <Route path="/me" element={<Profile />} exact="true" />
        <Route path="/me" element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        }
        // exact="true"
        />
        <Route
          path="/me/update"
          element={
            <ProtectedRoute>
              <UpdateProfile />
            </ProtectedRoute>
          }
          exact="true"
        />
      </Routes>
      {!loading && (!isAuthenticated || user.role !== 'admin') && (
        <Footer />
      )}
    </div>
  );
}

export default App;