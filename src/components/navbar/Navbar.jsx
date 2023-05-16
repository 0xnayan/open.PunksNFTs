import { connectWallet } from '../../Oxnayan'
import { truncate, useGlobalState } from '../../store'
import React, { useState } from 'react'
import "./navbar.css"
import logo from "../../assets/op.png"
import { RiMenu3Line, RiCloseLine } from "react-icons/ri"

const Menu = () => (
  <>
    <p><a href='#home'>Home</a></p>
    <p><a href='#artworks'>Artworks</a></p>
    <p><a href='#features'>About punks</a></p>
    <p><a href='#footer'>Contact</a></p>
  </>
)

const Navbar = () => {

  const [connectedAccount] = useGlobalState('connectedAccount')
  const [toggleMenu, setToggleMenu] = useState(false)

  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <img src={logo} alt="GPT3 Logo" />
        </div>
        <div className="gpt3__navbar-links_container">
          <Menu />
        </div>
        <div className="gpt3__navbar-wrapper">

        <div className="gpt3__navbar-sign">

        {connectedAccount ? (
            <button type='button' >{truncate(connectedAccount, 4, 4, 11)}</button>
          ) : (
            <button type='button' onClick={connectWallet} >Connect Wallet</button>
          )}
          </div>
          {/* Responsive part for mobiles devices */}
          {/* hamburger menu */}
          <div className="gpt3__navbar-menu">
            {toggleMenu
              ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
              : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />
            }
            {toggleMenu &&
              <div className="gpt3__navbar-menu_container scale-up-center">
                <div className="gpt3__navbar-menu_container-links">
                  <Menu />
                </div>
                <div className="gpt3__navbar-menu_container-links-sign">
            
                  {connectedAccount ? (
                  <button type='button'>{truncate(connectedAccount, 4, 4, 11)}</button>
                ) : (
                  <button type='button' onClick={connectWallet} >Connect Wallet</button>
                )}
                  </div>
              </div>
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar