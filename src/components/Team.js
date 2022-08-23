import React from 'react';
import './team.css'
const Team = () => {
  return <div className='team'>
      <div className='team1'>
          <h2>MEET OUR TEAM</h2>
          <p>The team behind the inception, ideation and realization of Ethical HR</p>
          <div className='cont-team'>
              <div>
                  <div>
                      <h3>Avinash Kulkarni</h3>
                      <p>CEO</p>
                  </div>
                   <img src="./img/ceo.png" alt="" />
             </div>
              <div>
                  <div>
                      <h3>Rakesh Khatri</h3>
                      <p>CTO</p>
                  </div>
                  <img src="./img/manager.png" alt="" />
             </div>
              <div>
                  <div>
                      <h3>Vatsala Saxena</h3>
                      <p>Project Lead</p>
                  </div>
                  <img src="./img/projectlead.png" alt="" />
            </div>
              <div>
                   <div>
                      <h3> Aloysius Domnic</h3>
                      <p>Manager Operations</p>
                  </div>
                  <img src="./img/no-img.png" alt="" />
             </div>       
          </div>
      </div>
      <div className='team2'>
          <h2>ADVISORY BOARD</h2>
          <div className='cont-team2'>
              <div>
                  <div>
                      <h3>Brig Rajiv Divekar(Retd)</h3>
                      <p>(Director SIMS,Pune)</p>
                  </div>
                  <img src="./img/advisory_b.png" alt="" />
              </div>
              <div>
                  <div>
                      <h3>Dr.Pravin Kumar Bhoyer</h3>
                      <p>(Deputy Director SIMS,Pune)</p>
                  </div>
                    <img src="./img/no-img.png" alt="" />
              </div>
              <div>
                  <div>
                      <h3>Ms.Renu Kulkarni</h3>
                      <p>(Head Placements and Corporate Relations,SIMS Pune)</p>
                  </div>
                    <img src="./img/advisory-img.png" alt="" />
              </div>
              <div>
                  <div>
                      <h3> Prof.Dr.Suruchi Pandey</h3>
                      <p>(Professor,SIMS,Pune)</p>
                  </div>
                    <img src="./img/no-img.png" alt="" />
              </div>
              <div>
                 <div>
                      <h3> Mr.Shantanu Bhamare</h3>
                      <p>(Director,CMS,HP Enterprises)</p>
                  </div>
                    <img src="./img/shantanu.png" alt="" />
              </div>
              <div>
                  <div>
                     <h3> Mr.Devendra Nath</h3>
                      <p>(Ex. Vice President Engg. Birla Cement Works)</p>
                  </div>
                    <img src="./img/dev.png" alt="" />
              </div>   
          </div>
      </div>
  </div>;
};

export default Team;
