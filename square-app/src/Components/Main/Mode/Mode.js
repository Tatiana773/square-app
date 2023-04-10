import React, {useState, useCallback} from 'react';
import { useDispatch } from 'react-redux';
import StartButtonComponent from './StartButton/StartButton';
import SelectComponent from './Select/Select';
import { getModeItem } from '../../../store/app/thunks';
import "./Mode.css";

const ModeComponent = () => {

    const dispatch = useDispatch();
    const [currentMode, setCurrentMode] = useState('');

    const onSelectMode= useCallback((event) => {
    setCurrentMode(event.target.value);
    }, [setCurrentMode]);

    const onStart= useCallback(() => {
        dispatch(getModeItem(currentMode))
    }, [currentMode, dispatch]);

    return(
        <div className='mode'>
            <SelectComponent 
            mode = {currentMode}
            onSetMode = {onSelectMode}
            />
            <StartButtonComponent
            onClickStart={onStart}
            />
        </div>
    );
}

export default ModeComponent;