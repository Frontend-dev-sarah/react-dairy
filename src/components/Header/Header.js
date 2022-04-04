import { useState } from 'react';
import { useLocation, Link, NavLink } from 'react-router-dom';
import './Header.css';
import { MenuList } from "./MenuList";
import { TiThMenu } from "react-icons/ti";

export const Header = () => {
    const [showMenu, setShowMenu] = useState(false);
    const location = useLocation();
    const { pathname } = location;
    const splitLocation = pathname.split("/");

    return (
        <nav className="expand-nav">
            {showMenu === true && <MenuList showMenue={showMenu} />}
            <ul>
                <TiThMenu className='menu-icon' color="white" size={35} cursor={'pointer'}
                    onClick={() => setShowMenu(!showMenu)} />
                <li className={`${"expand-item"} ${splitLocation[1] === "" ? "current" : ""}`}><Link to="/">Show expenses</Link></li>
                <li className={`${"expand-item"} ${splitLocation[1] === "goal" ? "current" : ""}`}><Link to="/goal">Manage Goals</Link></li>
                <li className={`${"expand-item"} ${splitLocation[1] === "person" ? "current" : ""}`}><Link to="/person">Enter Persons</Link></li>
                <li className={`expand-item ${splitLocation[1] === "task" ? "current" : ""}`}><Link to="/task">Tasks</Link></li>
                <li className='expand-item'>
                    <NavLink to="/auth"
                        className={({ isActive }) => isActive ? "active" : ''}
                    >Auth
                    </NavLink>
                </li>

            </ul>
        </nav >
    )
}