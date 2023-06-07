import React,{useState} from 'react'
import '../Styles/HeaderStyle.css'
import {AppBar, Toolbar, Typography,Menu,MenuItem,useMediaQuery,useTheme,Container,Box, } from "@mui/material"
import {Search } from '@mui/icons-material';
import DrawerComp from './Drawer'
import "../Styles/bpartner.css"




const Header = () => {
 const [anchorEl,setAnchoeEl]=useState(null)
 const openMenu=Boolean(anchorEl)
 const handleClick=e=>{
  setAnchoeEl(e.currentTarget)
 }
 const handleClose=()=>{
  setAnchoeEl(null)
 }
  const theme=useTheme()
  const isMatch=useMediaQuery(theme.breakpoints.down("md"))
  const Pages=["industries","services","tecnologies","success","about","insights","career","contact"]
  const subPage=[ "industries",'pharma and life science','insurance','financial services and banking','automotive']
  return (
    
    <>
       
  
       <header className="header header--aimbulance showsub">
  <div className="header__inner ai-container">
    <div className="header__logo-block">
      <a href="https://www.avenga.com/" className="custom-logo-link" rel="home" aria-current="page"><img width="530" height="110" src="https://www.avenga.com/wp-content/uploads/2022/11/logo-color-black.svg" className="custom-logo" alt="avenga" decoding="async"/></a>    </div>

    <div className="header__mobile-view d-m-none">
      
<div className="js-search-container header__search-form-container">
  <form className="js-search-input header__search-form header__search-form--mobile-bar" action="/" method="get">
    <input type="hidden" name="region" value="us"/>

    <input type="text" name="s" placeholder="Search"/>
    <input type="submit" value=""/>
  </form>
  <span className="search-button"></span>
</div>

      <div className="header__mobile-logo d-m-none">
        <a href="https://www.avenga.com/" className="custom-logo-link" rel="home" aria-current="page"><img width="530" height="110" src="https://www.avenga.com/wp-content/uploads/2022/11/logo-color-black.svg" className="custom-logo" alt="avenga" decoding="async"/></a>      </div>

      
              <a className="header__mobile-contact ai-btn ai-btn--small d-m-none" href="https://www.avenga.com/contact-avenga/">
          Contact Us        </a>
          </div>

    <nav className="navbar">
                    
      <div className="header__nav-container">
        <div className="header__nav-top d-m-none">
          
<div className="js-search-container header__search-form-container">
  <form className="js-search-input header__search-form header__search-form--mobile-opened-bar" action="/" method="get">
    <input type="hidden" name="region" value="us"/>

    <input type="text" name="s" placeholder="Search"/>
    <input type="submit" value=""/>
  </form>
  <span className="search-button"></span>
</div>

          <button type="button" className="navbar__toggler navbar__toggler--close" data-toggle="collapse" aria-expanded="false"></button>
        </div>

        <div className="header__menu-container">
            <ul id="menu-aimbulance-header-menu" className="header-menu">
                {/* <li id="menu-item-55935" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-55935 nav-item dropdown">
                    <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">Industries</a> */}
                    <li id="menu-item-56897" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-56897 nav-item">
                        <a href="#" className="nav-link">Industries</a>

<div className="dropdown-menu-container">

<ul role="menu" className="dropdown-menu">
<li className="menu-item menu-item-type-post_type menu-item-object-page menu-item--parent-copy menu-item-55935 nav-item"><a href="https://www.avenga.com/industries/" className="nav-link">Industries</a></li>
	<li id="menu-item-55936" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-55936 nav-item"><a href="https://www.avenga.com/industries/pharma-life-sciences/" className="nav-link">Pharma and life sciences</a></li>
	<li id="menu-item-55937" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-55937 nav-item"><a href="https://www.avenga.com/industries/insurance/" className="nav-link">Insurance</a></li>
	<li id="menu-item-55938" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-55938 nav-item"><a href="https://www.avenga.com/industries/financial-services/" className="nav-link">Financial services and banking</a></li>
	<li id="menu-item-55941" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-55941 nav-item"><a href="https://www.avenga.com/industries/automotive/" className="nav-link">Automotive</a></li>
</ul>

</div>
</li>
{/* <li id="menu-item-56897" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-57543 nav-item dropdown">
    <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">Services</a> */}
    <li id="menu-item-56897" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-56897 nav-item">
                        <a href="#" className="nav-link">Services</a>
<div className="dropdown-menu-container">

<ul role="menu" className="dropdown-menu">
<li className="menu-item menu-item-type-post_type menu-item-object-page menu-item--parent-copy menu-item-57543 nav-item"><a href="https://www.avenga.com/offering/" className="nav-link">Services</a></li>
	<li id="menu-item-56387" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-56387 nav-item"><a href="https://www.avenga.com/offering/strategy/" className="nav-link">Strategy</a></li>
	<li id="menu-item-56388" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-56388 nav-item"><a href="https://www.avenga.com/offering/solution-engineering/" className="nav-link">Solution engineering</a></li>
	<li id="menu-item-56389" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-56389 nav-item"><a href="https://www.avenga.com/offering/managed-services/" className="nav-link">Maintenance and support</a></li>
	<li id="menu-item-56390" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-56390 nav-item"><a href="https://www.avenga.com/offering/staffing-services/" className="nav-link">Staffing services</a></li>
</ul>

</div>
</li>
{/* <li id="menu-item-56392" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-56392 nav-item dropdown">
    <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">Technologies</a> */}
    <li id="menu-item-56897" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-56897 nav-item">
                        <a href="#" className="nav-link">Technologies</a>
    
<div className="dropdown-menu-container">

<ul role="menu" className="dropdown-menu">
<li className="menu-item menu-item-type-post_type menu-item-object-page menu-item--parent-copy menu-item-56392 nav-item"><a href="https://www.avenga.com/our-expertise/" className="nav-link">Technologies</a></li>
	<li id="menu-item-56394" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-56394 nav-item"><a href="https://www.avenga.com/our-expertise/cloud-services/" className="nav-link">Cloud</a></li>
	<li id="menu-item-56395" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-56395 nav-item"><a href="https://www.avenga.com/our-expertise/data-services/" className="nav-link">Data and AI</a></li>
	<li id="menu-item-56396" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-56396 nav-item"><a href="https://www.avenga.com/our-expertise/salesforce-services/" className="nav-link">Salesforce</a></li>
	<li id="menu-item-58039" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-58039 nav-item"><a href="https://www.avenga.com/our-expertise/microsoft-development/" className="nav-link">Microsoft</a></li>
	<li id="menu-item-56399" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-56399 nav-item"><a href="https://www.avenga.com/our-expertise/automation-services/" className="nav-link">Automation</a></li>
	<li id="menu-item-56401" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-56401 nav-item"><a href="https://www.avenga.com/our-expertise/blockchain/" className="nav-link">Blockchain</a></li>
</ul>

</div>
</li>
<li id="menu-item-56897" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-56897 nav-item"><a href="https://www.avenga.com/success/" className="nav-link">Success</a>
</li>
{/* <li id="menu-item-56402" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-56402 nav-item dropdown">
    <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">About</a> */}
    <li id="menu-item-56897" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-56897 nav-item">
                        <a href="#" className="nav-link">About</a>
<div className="dropdown-menu-container">

<ul role="menu" className="dropdown-menu">
<li className="menu-item menu-item-type-post_type menu-item-object-page menu-item--parent-copy menu-item-56402 nav-item"><a href="https://www.avenga.com/about/" className="nav-link">About</a></li>
	<li id="menu-item-56405" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-56405 nav-item"><a href="https://www.avenga.com/about/leadership-team/" className="nav-link">Leadership team</a></li>
	<li id="menu-item-56407" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-56407 nav-item"><a href="https://www.avenga.com/sustainability/" className="nav-link">Sustainability</a></li>
	<li id="menu-item-56408" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-56408 nav-item"><a href="https://www.avenga.com/about/newsroom/" className="nav-link">Newsroom</a></li>
	<li id="menu-item-56411" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-56411 nav-item"><a href="https://www.avenga.com/about/our-story/" className="nav-link">Our Story</a></li>
</ul>

</div>
</li>
<li id="menu-item-56414" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-56414 nav-item"><a href="https://www.avenga.com/insights/" className="nav-link">Insights</a></li>
{/* <li id="menu-item-56416" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-56416 nav-item dropdown">
    <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">Career</a> */}
    <li id="menu-item-56897" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-56897 nav-item">
                        <a href="#" className="nav-link">Career</a>
<div className="dropdown-menu-container">

<ul role="menu" className="dropdown-menu">
<li className="menu-item menu-item-type-post_type menu-item-object-page menu-item--parent-copy menu-item-56416 nav-item"><a href="https://www.avenga.com/career/" className="nav-link">Career</a></li>
	<li id="menu-item-59778" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-59778 nav-item"><a href="https://www.avenga.com/career/career-global/" className="nav-link">Global</a></li>
	<li id="menu-item-56417" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-56417 nav-item"><a href="https://www.avenga.com/career/ukraine/" className="nav-link">Ukraine</a></li>
	<li id="menu-item-58702" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-58702 nav-item"><a href="https://www.avenga.com/career/germany/" className="nav-link">Germany</a></li>
	<li id="menu-item-58705" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-58705 nav-item"><a href="https://www.avenga.com/career/vacancies-poland/" className="nav-link">Poland</a></li>
	<li id="menu-item-59714" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-59714 nav-item"><a href="https://www.avenga.com/career/career-stories/" className="nav-link">Career stories</a></li>
	<li id="menu-item-56420" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-56420 nav-item"><a href="https://www.avenga.com/career/events/" className="nav-link">Events</a></li>
	<li id="menu-item-56421" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-56421 nav-item"><a href="https://www.avenga.com/career/benefits/" className="nav-link">Benefits</a></li>
	<li id="menu-item-56422" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-56422 nav-item"><a href="https://www.avenga.com/career/academy/" className="nav-link">Avenga Academy Ukraine</a></li>
</ul>

</div>
</li>
{/* <li id="menu-item-56423" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-56423 nav-item dropdown">
    <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">Contact</a> */}
    <li id="menu-item-56897" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-56897 nav-item">
                        <a href="#" className="nav-link">Contact</a>
<div className="dropdown-menu-container">

<ul role="menu" className="dropdown-menu">
<li className="menu-item menu-item-type-post_type menu-item-object-page menu-item--parent-copy menu-item-56423 nav-item"><a href="https://www.avenga.com/contact-avenga/" className="nav-link">Contact</a></li>
	<li id="menu-item-56425" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-56425 nav-item"><a href="https://www.avenga.com/contact-avenga/berlin/" className="nav-link">Berlin</a></li>
	<li id="menu-item-56426" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-56426 nav-item"><a href="https://www.avenga.com/contact-avenga/cologne/" className="nav-link">Cologne</a></li>
	<li id="menu-item-56427" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-56427 nav-item"><a href="https://www.avenga.com/contact-avenga/krakow/" className="nav-link">Kraków</a></li>
	<li id="menu-item-56430" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-56430 nav-item"><a href="https://www.avenga.com/contact-avenga/wroclaw/" className="nav-link">Wrocław</a></li>
	<li id="menu-item-56428" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-56428 nav-item"><a href="https://www.avenga.com/contact-avenga/warsaw/" className="nav-link">Warsaw</a></li>
	<li id="menu-item-56424" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-56424 nav-item"><a href="https://www.avenga.com/contact-avenga/gdansk/" className="nav-link">Gdańsk</a></li>
	<li id="menu-item-56432" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-56432 nav-item"><a href="https://www.avenga.com/contact-avenga/lviv/" className="nav-link">Lviv</a></li>
	<li id="menu-item-59622" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-59622 nav-item"><a href="https://www.avenga.com/contact-avenga/kyiv/" className="nav-link">Kyiv</a></li>
	<li id="menu-item-56433" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-56433 nav-item"><a href="https://www.avenga.com/contact-avenga/new-jersey/" className="nav-link">New Jersey</a></li>
	<li id="menu-item-56434" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-56434 nav-item"><a href="https://www.avenga.com/contact-avenga/kuala-lumpur/" className="nav-link">Kuala Lumpur</a></li>
	<li id="menu-item-57571" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-57571 nav-item"><a href="https://www.avenga.com/contact-avenga/floriana/" className="nav-link">Floriana</a></li>
	<li id="menu-item-57574" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-57574 nav-item"><a href="https://www.avenga.com/contact-avenga/cordoba/" className="nav-link">Córdoba</a></li>
</ul>

</div>
</li>
<li id="menu-item-42492" className="menu-item--search menu-item menu-item-type-custom menu-item-object-custom menu-item-42492 nav-item">
<div className="js-search-container header__search-form-container menu-item--search">
  <form className="js-search-input header__search-form" action="/" method="get">
    <input type="hidden" name="region" value="us"/>

    <input type="text" name="s" placeholder="Search"/>
    <input type="submit" value=""/>
  </form>
  <span className="search-button"></span>
</div>
</li>
</ul></div>      </div>

      <div className="header__settings">
        <div className="header__switchers">
          <div className="switchers">
            <div className="ai-country-switcher ai-dropdown ai-dropdown--top">
              <div className="country-switcher"><ul className="country-switcher__list"><li className="country-switcher__item "><button data-code="ua" className="country-switcher__item-link" aria-label="Please select your country">Ukraine</button></li><li className="country-switcher__item "><button data-code="de" className="country-switcher__item-link" aria-label="Please select your country">Germany</button></li><li className="country-switcher__item "><button data-code="pl" className="country-switcher__item-link" aria-label="Please select your country">Poland</button></li><li className="country-switcher__item country-switcher__item--active"><span className="country-switcher__item-link">Global</span></li></ul><span data-code="us" className="country-switcher__selected">Global</span></div>            </div>

            <div className="ai-language-switcher ai-dropdown ai-dropdown--top">
              <div className="ai-lang-switcher"><span className="ai-lang-switcher__selected js-ai-lang-switcher-selected clickevent">En</span><ul className="ai-lang-switcher__list"><li className="ai-lang-switcher__item ai-lang-switcher__item--active"><span>En</span></li><li className="ai-lang-switcher__item"><a href="https://www.avenga.com/de/">De</a></li><li className="ai-lang-switcher__item"><a href="https://www.avenga.com/pl/">Pl</a></li></ul></div>            </div>
          </div>
        </div>

                  <a className="ai-btn d-m-none" href="https://www.avenga.com/contact-avenga/">
            Contact Us          </a>
              </div>
    </nav>

          <button type="button" className="navbar__toggler d-m-none" data-toggle="collapse" aria-expanded="false"></button> 
      </div>
</header>
   
 
   
   
    </>
  )
}

export default Header