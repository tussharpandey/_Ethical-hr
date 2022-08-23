import React from 'react';
import { AiFillGooglePlusSquare,AiFillTwitterSquare,AiFillFacebook,AiFillLinkedin,AiOutlineMenu,AiOutlineCloseSquare } from "react-icons/ai";
import { BiPhone } from "react-icons/bi";
import { Link } from 'react-router-dom';
import './nav.css'


const Nav = ({toggle,togglebtn,show,showI,set}) => {

  return <div className='nav' >
      <div className='topNav'>
          <div className='phone'><BiPhone size={20}/>020 25434622</div>
          <div className='socialNav'>
              <div> <AiFillFacebook size={30} color='#4267B2' /></div>
              <div><AiFillGooglePlusSquare size={30} color='#db4a39'/></div>
              <div><AiFillLinkedin size={30} color='#0e76a8 '/></div>
              <div><AiFillTwitterSquare size={30} color='#00acee'/></div>
              
              
              
          </div>
      </div>
      <div className='mainNav' >
          <Link to='/' style={{textDecoration:'none'}}>
                <div className='logoNav'>
                    <img src="./img/logo.png" alt="" />
                    <h2>ETHICAL HR</h2>
                </div>
          </Link>
          
          <div className={toggle?'navLinks active':'navLinks'}>
              <div>HOME</div>
              <div>NEWS</div>
              <div>DASHBOARD</div>
              <button className={show?'lin active':'lin'}>LOGIN</button>
              <button className={show?'reg active':'reg'} onClick={showI}>REGISTER</button>
              <button className={show?'regI active':'regI'}>REGISTER AS CANDIDATE</button>
              <button className={show?'regI active':'regI'}>REGISTER AS EMPLOYER</button>
              <button onClick={set} className={show?'close regI active':'regI close'}><AiOutlineCloseSquare/></button>
          </div>
          <div className='menu' onClick={togglebtn}><AiOutlineMenu  color='white' size={30}/></div>
      </div>
  </div>;
};

export default Nav;
