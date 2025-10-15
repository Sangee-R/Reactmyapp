// import React from "react";
// import { Outlet, Link } from "react-router-dom";

// export default function Dashboard() {
//     return (
//         <div>
//             <nav>
//                 <Link to="home">Home</Link> | <Link to="contact">Contact</Link>
//             </nav>
//             <hr />
//             <Outlet />
//         </div>
//     );
// }


import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Nav from '../components/Layout/Nav'
import Home from './Home'
import Contact from './Contact'
import DataList from '../components/DataList/DataList'

export default function Dashboard() {
    return (
        <div>
            <Nav />
            <div className="container" style={{ paddingTop: 18 }}>
                <Routes>
                    <Route path="home" element={<Home />} />
                    <Route path="contact" element={<Contact />} />
                    <Route path="menu" element={<DataList />} />
                    <Route path="" element={<Navigate to="home" replace />} />
                </Routes>
            </div>
        </div>
    )
}