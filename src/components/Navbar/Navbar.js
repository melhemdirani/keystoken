import React, {useEffect, useState} from 'react';
import { HashLink, } from 'react-router-hash-link';
import { useLocation } from "react-router-dom";

import useWindowDimensions from '../useWindowDimensions';
import Logo from '../../assets/images/DANASH.png'
import LogoW from '../../assets/images/DANASHW.png'
import './Navbar.styles.scss';
import MenuIcon from '../../assets/images/menu.png'


function Navbar() {
   
    const [scrolled, setScrolled] = useState(false)
    const [showMenu, setShowMenu] = useState(false)
    const [project, setProject] = useState(false)

    const location = useLocation()

    let path = location.pathname
    useEffect(()=>{
        if(!project && path.includes("/projects/")){
            setProject(true)
        } else if(project && !path.includes("/projects/")){
            setProject(false)

        }
    }, [path])

    const { width } = useWindowDimensions();
    const changeNavbarColor = () =>{

        if(window.scrollY >= 50){
            setScrolled(true);
        }
        else{
            setScrolled(false);
        }
    };
    window.addEventListener('scroll', changeNavbarColor);

    const handleMenuClick = () => {
        setShowMenu(!showMenu)
    }
    const closeMenu = () => {
        if(showMenu){
            setShowMenu(false)
        }
    }
    let a = scrolled || project ? 'Navbar_Container Navbar_Container_Scrolled' : 'Navbar_Container '
    

  
    const NavbarItems = () => {
    let b = scrolled || project  ? 'NavbarItems_Scrolled NavbarItems' : 'NavbarItems'
    
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
                
                <HashLink to="/#header"  scroll={(el) => el.scrollIntoView({ behavior: 'auto', block: 'center' })}>Home</HashLink>
                <HashLink to="/aboutus"  scroll={(el) => el.scrollIntoView({ behavior: 'auto', block: 'center' })}>About Us</HashLink>
                <HashLink to="/#classifications" scroll={(el) => el.scrollIntoView({ behavior: 'auto', block: 'center' })} >Classifications</HashLink>
                <HashLink to="/projects" >Projects </HashLink>
            </div>
        );
    }
    
    return (
        <div 
            className={a}
            onClick={closeMenu}
        >
            { width > 600  &&
                <HashLink to="/#header" className='a'> 
                    <img 
                        alt='Reboost Logo' 
                        src={scrolled || project ? Logo : LogoW} 
                        className={'Navbar_logo'}
                    />
                </HashLink>
            }
            {
                width > 600   
                ? <NavbarItems/>
                :<div>
                    <img alt="" src={MenuIcon} className='MenuIcon' onClick={handleMenuClick}/>
                    {showMenu && <NavbarItems onClick={closeMenu}/>}
                </div>
            }

        </div>
    )
}

export default Navbar
