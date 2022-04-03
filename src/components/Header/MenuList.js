import React from 'react';
import ReactDOM from 'react-dom';
import { useLocation } from 'react-router-dom';
import './MenuList.css';



const menuItems = (splitLocation) => {

    return (<ul className='menu-list'>
        <li className={`${"menu-item"} ${splitLocation[1] === "" ? "current" : ""}`}><a href="/">Show expenses</a></li>
        <li className={`${"menu-item"} ${splitLocation[1] === "goal" ? "current" : ""}`}><a href="/goal">Manage Goals</a></li>
        <li className={`${"menu-item"} ${splitLocation[1] === "person" ? "current" : ""}`}><a href="/person">Enter Persons</a></li>
        <li className={`${"menu-item"} ${splitLocation[1] === "task" ? "current" : ""}`}><a href="/task">Tasks</a></li>
    </ul>)
}

export const MenuList = ({ showMenue }) => {
    const location = useLocation();
    const { pathname } = location;
    const splitLocation = pathname.split("/");
    return (
        <React.Fragment>
            {showMenue
                ? ReactDOM.createPortal(menuItems(splitLocation), document.getElementById('portal-left-menu'))
                : <div />
            }
        </React.Fragment>
    )
}