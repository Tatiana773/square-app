import React from 'react';
import ModeComponent from './Mode/Mode';
import TableComponent from './Table/Table';
import "./Main.css";


const MainComponent = () => {
    return(
        <div className='main'>
            <ModeComponent/>
            <TableComponent/>
        </div>
    );
}

export default MainComponent;