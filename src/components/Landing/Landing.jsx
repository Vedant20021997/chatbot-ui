import React from 'react';
import { Link } from 'react-router-dom';
import Michael1 from './Michael1';
import Michael2 from './Michael2';
import Dwight1 from './Dwight1';
import Dwight2 from './Dwight2';

const Landing = () => {

  // const launchChat = (e) => {
  //   console.log(e);
  // }

  return (
    <div class="boxes">
      <div style={{display:'flex', justifyContent: 'space-evenly', marginTop: '20vh'}}>
        <Link to={'/chat'} style={{ textDecoration: 'none' }}>
          <div onClick={e => console.log(e)}>
            <Michael1/>
          </div>
        </Link>
        <Michael2/>
        <Dwight1/>
        <Dwight2/>
      </div>


      {/* <div style={{display:'flex', justifyContent:'center', }}>
        <Dwight1/>
        <Dwight2/>
      </div> */}
    </div>
  )
}

export default Landing

