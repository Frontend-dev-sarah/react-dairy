import { useState } from 'react';
import { useLocation } from 'react-router-dom';
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
                <li className={`${"expand-item"} ${splitLocation[1] === "" ? "current" : ""}`}><a href="/">Show expenses</a></li>
                <li className={`${"expand-item"} ${splitLocation[1] === "goal" ? "current" : ""}`}><a href="/goal">Manage Goals</a></li>
                <li className={`${"expand-item"} ${splitLocation[1] === "person" ? "current" : ""}`}><a href="/person">Enter Persons</a></li>
                <li className={`${"expand-item"} ${splitLocation[1] === "task" ? "current" : ""}`}><a href="/task">Tasks</a></li>
                <li className={`${"expand-item"} ${splitLocation[1] === "auth" ? "current" : ""}`}><a href="/auth">Auth</a></li>
            </ul>
        </nav>
    )
}