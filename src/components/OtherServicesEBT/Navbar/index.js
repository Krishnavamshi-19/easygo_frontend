import React,{useState, useEffect}   from 'react'
import {FaBars} from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'
import { animateScroll as scroll } from 'react-scroll'
import { Nav,NavLogo,NavbarContainer, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink } from './NavbarElements'

const Navbar = ({toggle}) => {

  const [scrollNav,setScrollNav]=useState(false);

  const changeNav=()=>{
    if(window.scrollY>=80){
      setScrollNav(true);
    }else{
      setScrollNav(false);
    }
  }

  useEffect(() => {
      window.addEventListener('scroll', changeNav)
  },[])

  const toggleHome=() =>{
    scroll.scrollToTop();
  };


  return (
    <>
    <IconContext.Provider value={{color: "#fff"}}>
    <Nav scrollNav={scrollNav}>
      <NavbarContainer> 
        <NavLogo to='/' onClick={toggleHome}>
            EasyGo
        </NavLogo>
        <MobileIcon onClick={toggle}>
            <FaBars/>
        </MobileIcon>
        {/* <NavMenu>
          <NavItem>
            <NavLinks to="travelbuddy"
            smooth={true} duration={500} spy={true} exact='true' offset={-80} 
            >TravelBuddy</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="lostandfound"
            smooth={true} duration={500} spy={true} exact='true' offset={-80} >Lost&found</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="collegeupdates"
            smooth={true} duration={500} spy={true} exact='true' offset={-20} 
            >CollegUpdates</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="services"
            smooth={true} duration={500} spy={true} exact='true' offset={0} >Services</NavLinks>
          </NavItem>
        </NavMenu> */}
        <NavBtn>
            <NavBtnLink to="/signinebt">Add New</NavBtnLink>
        </NavBtn>
      </NavbarContainer>
    </Nav>
    </IconContext.Provider>
    </>
  )
}

export default Navbar