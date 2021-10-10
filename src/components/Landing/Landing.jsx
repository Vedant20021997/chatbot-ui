import React from 'react';
import { Link } from 'react-router-dom';
import Michael1 from './Michael1';
import Michael2 from './Michael2';
import Dwight1 from './Dwight1';
import Dwight2 from './Dwight2';

const Landing = (props) => {


  return (
    <div class="boxes">
      <div style={{display:'flex', justifyContent: 'space-evenly', marginTop: '20vh'}}>
        <Link to={'/chat1'} style={{ textDecoration: 'none' }}>
          <div onClick={() => props.setModel("Michael1")}>
            <Michael1/>
          </div>
        </Link>
        <Link to={'/chat2'} style={{ textDecoration: 'none' }}>
          <div onClick={() => props.setModel("Michael2")}>
            <Michael2/>
          </div>
        </Link>
        <Link to={'/chat3'} style={{ textDecoration: 'none' }}>
          <div onClick={() => props.setModel("Dwight1")}>
            <Dwight1/>
          </div>
        </Link>
        <Link to={'/chat4'} style={{ textDecoration: 'none' }}>
          <div onClick={() => props.setModel("Dwight2")}>
            <Dwight2/>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Landing

