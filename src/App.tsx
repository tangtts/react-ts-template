
import React from "react";
import { Outlet, Link } from "react-router-dom";
import { Button } from 'antd'
function App() {
  return <div>
    <span className="text-red-200">aaa</span>
    <Button type="primary">parent</Button>
    <nav>
      <ul>
        <li>
          <Link to={`contacts/1`}>Your Name</Link>
        </li>
        <li>
          <Link to={`contacts/2`}>Your Friend</Link>
        </li>
      </ul>
    </nav>
    <Outlet />
  </div>
}

export default App;