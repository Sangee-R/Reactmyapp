// // src/App.js
// import React from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Login from "./pages/Login";
// import Register from "./pages/Register";
// import ForgotPassword from "./pages/ForgotPassword";
// import Dashboard from "./pages/Dashboard";
// import Home from "./pages/Home";
// import Contact from "./pages/Contact";

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Login />} />
//         <Route path="/register" element={<Register />} />
//         <Route path="/forgot-password" element={<ForgotPassword />} />

//         <Route path="/dashboard" element={<Dashboard />}>
//           <Route path="home" element={<Home />} />
//           <Route path="contact" element={<Contact />} />
//         </Route>

//         <Route path="*" element={<h2>404 - Page Not Found</h2>} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;


import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from './components/Auth/Login'
import Register from './components/Auth/Register'
import Forgot from './components/Auth/Forgot'
import Dashboard from './pages/Dashboard'

export default function App(){
  return (
    <Routes>
      <Route path="/" element={<Login/>} />
      <Route path="/register" element={<Register/>} />
      <Route path="/forgot-password" element={<Forgot/>} />
      <Route path="/dashboard/*" element={<Dashboard/>} />
      <Route path="*" element={<div style={{padding:40}}>404 - Not Found</div>} />
    </Routes>
  )
}
