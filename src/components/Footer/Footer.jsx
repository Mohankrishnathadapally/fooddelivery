import React from 'react'
import './Footer.css'
import {assets} from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-context">
          <div className="footer-content-left">
            <img src={assets.logofooter} alt="" className='img'/>
            <p>Bringing you the flavors of the world, right to your door. From savory to sweet, discover a variety of dishes crafted with care and delivered with convenience. Order now and satisfy your cravings!</p>
            <div className="footer-social-icons">
              <img src={assets.facebook_icon} alt="" />
              <img src={assets.twitter_icon} alt="" />
              <img src={assets.linkedin_icon} alt="" />
            </div>
          </div>
          <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Delivery</li>
              <li>Privacy policy</li>
            </ul>
          </div>
          <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
              <li>+91-6785-431-893</li>
              <li>contact@delivery.com</li>
            </ul>
          </div>
        </div>
        <hr />
        <p className='footer-copyright'>Copyright 2024 &copy; delivery.com - All Right Reserved</p>
    </div>
  )
}

export default Footer