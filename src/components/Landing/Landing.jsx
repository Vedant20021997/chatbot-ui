import React from 'react';
import { Card } from '@mui/material';
import Michael1 from './Michael1';
import Michael2 from './Michael2';
import Dwight1 from './Dwight1';
import Dwight2 from './Dwight2';

const Landing = () => {
  return (
    <div class="boxes">
      <div style={{display:'flex', justifyContent:'center', }}>
        <Michael1/>
        <Michael2/>
      </div>


      <div style={{display:'flex', justifyContent:'center', }}>
        <Dwight1/>
        <Dwight2/>
      </div>
    </div>
  )
}

export default Landing

