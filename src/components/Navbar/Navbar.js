import React, {useEffect, useState} from 'react';
import { HashLink, } from 'react-router-hash-link';
import { useLocation } from "react-router-dom";

import useWindowDimensions from '../useWindowDimensions';
import Logo from '../../assets/images/DANASH.png'
import LogoW from '../../assets/images/DANASHW.png'
import './Navbar.styles.scss';
import MenuIcon from '../../assets/images/menu.svg'
import MenuIcon2 from '../../assets/images/close.svg'
import NavbarItems from './NavbarItems';


function Navbar() {
   
    const [scrolled, setScrolled] = useState(false)
    const [showMenu, setShowMenu] = useState(false)
    const [project, setProject] = useState(false)
    const { width } = useWindowDimensions();

    const location = useLocation();
    const path = location.pathname;

    let pageWhite = path.includes("/projects/") || path.includes("contact") 
        ? true : false
    useEffect(()=>{
        if(!project && pageWhite){
            setProject(true)
        } else if(project && !pageWhite){
            setProject(false)
        }
    }, [path])

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

    return (
        <div 
            className={a}
            onClick={closeMenu}
            style={path === '/video' ? 
                {
                    display:'none'
                }
                : null
            }
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
                ? <NavbarItems width={width} scrolled={scrolled} project={project}/>
                :<div>
                    <img alt="" src={showMenu ? MenuIcon2 : MenuIcon} className='MenuIcon' onClick={handleMenuClick}/>
                    {
                        showMenu && 
                        <NavbarItems 
                         onClick={closeMenu} 
                         width={width} 
                         scrolled={true} 
                         project={project}
                         path={location}
                        />
                    }
                </div>
            }

        </div>
    )
}

export default Navbar
