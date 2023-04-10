import React from 'react';
import Button from '@mui/material/Button';
import "./StartButton.css";

const StartButtonComponent = ({onClickStart}) => {
  return (
      <Button 
        className='button'
        variant="contained"
        onClick = {onClickStart}
        >
        Start
      </Button>
  );
}

export default StartButtonComponent;