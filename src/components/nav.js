import {Link} from "react-router-dom"
import { useState } from "react"

import { MdClose } from "react-icons/md"
import { FiMenu } from "react-icons/fi"
const Nav = () => {
        const [navbarOpen, setNavbarOpen] = useState(false)
        const handleToggle = () => {
            setNavbarOpen(!navbarOpen)
            }
    return(
        <div className = 'nav'>
            <nav className = 'navBar'>
                <button onClick={handleToggle}>
                    {navbarOpen ? (<MdClose className = 'bar1' size={25}/>):
                    (<FiMenu className = 'bar2' size={25} />)}
                </button>
                <ul className={`menuNav ${navbarOpen ? "showMenu" : ""}`}>
                    <h4 className='work'>Our Work</h4>
                    <h4 className = 'involve'> Get Involved</h4>
                    <h4 className = 'About'>About</h4>
                    <h4 className = 'Donate'> Donate</h4>
                    <h3>searchbar</h3>
                </ul>
                
            </nav>
           
        </div>
        
    )
}

export default Nav