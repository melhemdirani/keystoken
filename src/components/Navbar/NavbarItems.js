import React from 'react';
import { HashLink, } from 'react-router-hash-link';
import { useLocation } from "react-router-dom";

import Logo from '../../assets/images/DANASH.png';


function NavbarItems({scrolled, project, width}) {
    let location = useLocation()
    let path = location.pathname
    let b = scrolled || project  ? 'NavbarItems_Scrolled NavbarItems' : 'NavbarItems'
    console.log("path", scrolled)
    return(
        <div  className={b}  >
            { width < 600  &&
                <HashLink to="/#header">
                    <img 
                        alt='Reboost Logo' 
                        src={Logo} 
                        className={'Navbar_logo'}
                    />
                </HashLink>
            }
            
            <HashLink
                to="/#header"  
                scroll={(el) => el.scrollIntoView({ behavior: 'auto', block: 'center' })}
                style={
                    project 
                    ? {color: "rgba(0,0,0,.6)"} 
                    : path === '/' && scrolled 
                    ? {color:"#605FAF"} 
                    : scrolled 
                    ? {color: "rgba(0,0,0,.6)"} 
                    : {color: "white"}
                }
            >
                Home
            </HashLink>
            <HashLink 
                to="/aboutus" 
                scroll={(el) => el.scrollIntoView({ behavior: 'auto', block: 'center' })}
                style={
                    project 
                    ? {color: "rgba(0,0,0,.6)"} 
                    : path === '/aboutus' && scrolled 
                    ? {color:"#605FAF"} 
                    : scrolled 
                    ? {color: "rgba(0,0,0,.6)"} 
                    : {color: "white"}
                }
            >
                About Us
            </HashLink>
            <HashLink 
                to="/aboutus/#business vertical" 
                style={
                    project 
                    ? {color: "rgba(0,0,0,.6)"} 
                    : scrolled 
                    ? {color: "rgba(0,0,0,.6)"} 
                    : {color: "white"}
                }
            >
                Business Vertical
            </HashLink>
            <HashLink 
                to="/projects" 
                style={
                    project 
                    ? {color: "rgba(0,0,0,.6)"} 
                    : path === '/projects' && scrolled 
                    ? {color:"#605FAF"} 
                    : scrolled 
                    ? {color: "rgba(0,0,0,.6)"} 
                    : {color: "white"}
                }
            >
                Projects 
            </HashLink>
            <HashLink 
                to="/contact" 
                style={
                    project 
                    ? {color: "rgba(0,0,0,.6)"} 
                    : path === '/contact' && scrolled 
                    ? {color:"#324172"} 
                    : scrolled 
                    ? {color: "rgba(0,0,0,.6)"} 
                    : {color: "white"}
                }
            >
                Contact Us 
            </HashLink>
        </div>
    );
}

export default NavbarItems