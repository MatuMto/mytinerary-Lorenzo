import {NavLink} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Dropdown, DropdownItem, DropdownMenu, DropdownToggle} from 'reactstrap'
import {useState} from 'react'

function Header (){
   const [dropdown, setDropdown] = useState(false) 
   const abrirCerrarDropdown = ()=>{
      setDropdown(!dropdown)
   }
   return(
      <>
         <header className="header">
            <div className="homeAndCities-container">
               <NavLink to="/" >Home</NavLink>
               <div>|</div>
               <NavLink to="/cities" >Cities</NavLink>
            </div>

            <div className="logo-container">
               <img src="/img/logo-finish.png" alt="mi loguito :)" style={{width: '150px'}}></img>
               <h1 className="logo-text">MyTinerary</h1>
            </div>

            <div className="login-section">
               <NavLink to="/user/signup"  className="link" style={{color: 'white'}}>Sign Up</NavLink>
               <p style={{color: 'white', marginBottom: '0px'}}>|</p>
               <NavLink to="/user/signin" className="link" style={{color: 'white'}}>Sign In</NavLink>
               <div style={{ marginLeft: '20px'}}>
                  <img src="/img/user-icon.png" className="unlogged-icon" style={{width: '60px'}} alt="user unloged logo"></img>
               </div>
            </div>
         </header>
      
         <header className="header-responsive">
            <Dropdown isOpen={dropdown} toggle={abrirCerrarDropdown}>
               <DropdownToggle>
                  <img src="/icons/hamburger.png" alt="hamburguer responsive " width="20px" />
               </DropdownToggle>

               <DropdownMenu>
                  <DropdownItem>Home</DropdownItem>
                  <DropdownItem>
                     <NavLink to="/cities" >Cities</NavLink>
                  </DropdownItem>
                  <DropdownItem>Sign Up</DropdownItem>
                  <DropdownItem disabled>Log In</DropdownItem>
               </DropdownMenu>
            </Dropdown>

            <div className="logo-container">
               <img src="/img/logo-finish.png" alt="My logo :)" style={{width: '80px'}}></img>
               <h1 className="logo-text">MyTinerary</h1>
            </div>

            {/* <div className="login-section"> */}
               <div style={{ marginLeft: '20px'}}>
                  <img src="/img/user-icon.png" alt="user unloged icon" style={{width: '50px'}}></img>
               </div>
            {/* </div> */}
         </header>
      </>

   )
}

export default Header