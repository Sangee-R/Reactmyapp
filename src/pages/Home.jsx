// export default function Home() {
//   return <h2>🍕 Welcome to Home Page</h2>;
// }

import React from 'react'
import DataList from '../components/DataList/DataList'

export default function Home() {
    return (
        <div className="container header">
            <div className="card">
                <h2>Menu - Pizza | Pasta | Pancakes</h2>
                <p className="small">This list is populated from jsonplaceholder posts (replicated to 500 items). Use the category buttons and range slider to control pagination.</p>
            </div>
            <DataList />
        </div>
    )
}