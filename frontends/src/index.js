// // import React from 'react';
// // import ReactDOM from 'react-dom';
// // import App from './App';
// // import { Provider } from 'react-redux'
// // import store from './store'
// // const root = ReactDOM.createRoot(document.getElementById("root"));


// // ReactDOM.render(
// //   <Provider store={store} >
// //     <App />
// //   </Provider >,
// //   document.getElementById('root')
// // );
// // ReactDOM.render(
// //   // <React.StrictMode>
// //     <App />
// //   {/* </React.StrictMode>, */}
// //   document.getElementById('root')
// // );

// // ReactDOM.render
// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
// import { Provider } from 'react-redux'
// import store from './store'
// import { BrowserRouter } from 'react-router-dom';
// import { positions, transitions, Provider as AlertProvider } from 'react-alert'
// import AlertTemplate from 'react-alert-template-basic'


// const root = ReactDOM.createRoot(document.getElementById("root"));
// const options = {
//   timeout: 5000,
//   position: positions.BOTTOM_CENTER,
//   transition: transitions.SCALE
// }
// root.render(
//   // <React.StrictMode>
//   // <Provider store={store}>
//   //   {/* <BrowserRouter> */}
//   //   <AlertProvider template={AlertTemplate} {...options}>
//   //     <App />
//   //   </AlertProvider>
//   // </Provider>
//   // {/* </BrowserRouter> */}
//   // </React.StrictMode>

//   <Provider store={store} >
//     <AlertProvider template={AlertTemplate} {...options}>
//       <App />
//     </AlertProvider>
//   </Provider>,
//   document.getElementById('root')
// );

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux'
import store from './store'
import App from './App';
import { ToastContainer } from 'react-toastify';

// import { positions, transitions, Provider as AlertProvider } from 'react-alert'
// import AlertTemplate from 'react-alert-template-basic'

// const options = {
//   timeout: 5000,
//   position: positions.BOTTOM_CENTER,
//   transition: transitions.SCALE
// }
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>

    <BrowserRouter>
      {/* <AlertProvider template={AlertTemplate} {...options}> */}
      <App />
      <ToastContainer />
      {/* </AlertProvider> */}
    </BrowserRouter>



  </Provider>

);