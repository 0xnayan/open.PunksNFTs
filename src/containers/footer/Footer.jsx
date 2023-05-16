import React from 'react'
import "./footer.css"
import logoUrl from "../../assets/op.png"

const Footer = () => {
  return (
    <div className="gpt3__footer section__padding" id='footer'>
      <div className="gpt3__footer-links">
        <div className="gpt3__footer-links_logo">
          <img src={logoUrl} alt="gpt3 logo" />
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Company</h4>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Get in touch</h4>
          <p>085-132567</p>
          <p>borahnayanmoni80@gmail.com</p>
        </div>
      </div>
      <div className="gpt3__footer-copyrights">
        ©2023 open.Punks. All rights reserved.
      </div>
    </div>
  )
}

export default Footer