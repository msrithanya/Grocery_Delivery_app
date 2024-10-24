import React, { useState } from 'react';
import './Cate.css'; 
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material'; // Import Button from MUI

function Cate() {
  const [selectedDiv, setSelectedDiv] = useState(null);
  const navigate = useNavigate(); // Initialize navigate function

  const handleClick = (divName) => {
    setSelectedDiv(divName);
  };

  return (
    <div>
      <div className='container'>
        <div 
          onClick={() => handleClick('groceries')} 
          style={{
            display: "flex",
            justifyContent: "center", 
            alignItems: "center",
            flexDirection: "column",
            backgroundColor: selectedDiv === 'groceries' ? 'rgb(117, 171, 117)' : 'transparent'
          }}  
          className='gro'
        >
          <img src='Grocery.png' alt="Groceries"/>
          <h1>Groceries</h1>
        </div>
        
        <div 
          onClick={() => handleClick('mealKit')} 
          style={{
            display: "flex",
            justifyContent: "center", 
            alignItems: "center",
            flexDirection: "column",
            backgroundColor: selectedDiv === 'mealKit' ? 'rgb(117, 171, 117)' : 'transparent'
          }}  
          className='meal'
        >
          <img src='mealkit.png' alt="Meal Kit"/>
          <h1 className='me'>Meal Kit</h1>
        </div>
      </div>

      <div className='b'>
        {/* Continue Button */}
        <Button style={{backgroundColor:"green",color:"white"}} onClick={() => navigate('/products')}>Continue</Button> 
      </div>
    </div>
  );
}

export default Cate;
