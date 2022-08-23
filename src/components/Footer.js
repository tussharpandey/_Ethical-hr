import React from 'react';
import { BiMailSend } from "react-icons/bi";
import { BiPhone } from "react-icons/bi";

import { AiFillGooglePlusSquare,AiFillTwitterSquare,AiFillFacebook,AiFillLinkedin } from "react-icons/ai";

import './footer.css'
const Footer = () => {
  return <div className='footer'>
      <div className='mainfooter'>
          <div className='footerLogo'>
              <img src="./img/logo.png" alt="" />
          </div>
          <div className='navigation'>
              <h2>Navigation</h2>
              <li>Home</li>
              <li>About Us</li>
              <li>News</li>
              <li> Dashboard</li>
          </div>
          <div className='contact'>
              <h2>Contacts</h2>
              <li> <BiPhone/>&nbsp;020 25434622</li>
              <li><BiMailSend size={20}/>&nbsp;ethicalhrorg@gmail.com</li>
          </div>
          <div className='subscribe'>
              <h2>SUBSCRIBE</h2>
              <p>Subscribe to our newsletters & stay updated with our latest projects & initiatives.</p>
               <form action="">
                   <input type="text" placeholder='Enter Your E-mail' />
                    <button type='submit'><BiMailSend/></button>
               </form>
          </div>
          <div className='social'>
              <h2>Social</h2>
              <div className='a'><AiFillFacebook size={30} color='#4267B2' />&nbsp; <div>Facebook</div></div>
              <div className='a'><AiFillGooglePlusSquare size={30} color='#db4a39'/>&nbsp;<div>Google+</div></div>
              <div className='a'><AiFillLinkedin size={30} color='#0e76a8 '/>&nbsp;<div>LinkedIn</div></div>
              <div className='a'><AiFillTwitterSquare size={30} color='#00acee'/>&nbsp;<div>Twitter</div></div>
          </div>
      </div>
      <div className='copyright'>
          <p>All rights reserved by Ethical HR © 2016</p>
      </div>
  </div>;
};

export default Footer;
