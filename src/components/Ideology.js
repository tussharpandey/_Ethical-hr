import React from 'react';
import './ideology.css'
import {Link} from 'react-router-dom'

const Ideology = () => {
  return <div className='ideo'>
      <div className='text-ideo'>
          <h2>Ethical HR Ideology</h2>
      </div>
      <div className='cont-ideo'>
      <Link to='/students' style={{textDecoration:'none', color:'inherit'}}>
          <div>
              <img src="./img/unity-img_03.png" alt="" />
              <h3>STUDENT</h3>
          </div>
     </Link>
          <div>
              <img src="./img/empower_03.png" alt="" />
              <h3>EMPLOYEE</h3>     
        </div>
        
            <div>
                <img src="./img/change-img_03.png" alt="" />
                <h3>ORGANISATION</h3>      
            </div>
        
          
      </div>
  </div>;
};

export default Ideology;
