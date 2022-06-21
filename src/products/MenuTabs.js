import React from "react";

import {Link} from 'react-router-dom';

const MenuTabs=()=>{
    const tabs=(e)=>{
        let lis = document.querySelectorAll('.nav-tabs li');
        for (let [key, value] of Object.entries(lis)) {
            value.classList.remove("active");
          }
          e.target.parentElement.classList.add("active")
    }
    return (
        <div>
           <ul className="nav nav-tabs" id="nav-tabs">
                <li className="active"><Link to="/" onClick={(e) => tabs(e)}>Shop</Link></li>
                <li className=""><Link to="/orders" onClick={(e) => tabs(e)}>Orders</Link></li>
                <li className=""><Link to="/customers" onClick={(e) => tabs(e)}>Customers</Link></li>
            </ul>
            </div>
    )
}

export default MenuTabs