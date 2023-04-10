import React, {useState} from 'react';
import {BiMenuAltRight} from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { navbar } from '../Data/navbar';

const Menu = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [links ] = useState(navbar)
    return ( 
        <>
            <div className="menu-btn" onClick={() => setIsOpen(!isOpen)}>   
                <button>
                    <BiMenuAltRight />
                </button>
            </div>
    
            <header className={`${isOpen ? "menu-header menu-open" : "menu-header"}`}>
            <nav>
                <ul>
                    {links.map(({id, title, url}) => {
                        return (
                            <li key={id} onClick={() => setIsOpen(!isOpen)}>
                                <Link className='header-links' to={url}>{title}</Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </header>
    
        </>
     );
}
 
export default Menu;