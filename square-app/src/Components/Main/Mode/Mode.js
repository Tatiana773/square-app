import React, {useState, useCallback} from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { selectModes } from '../../../store/app/selectors';
import StartButtonComponent from './StartButton/StartButton';
import SelectComponent from './Select/Select';
import { resetCellsAction, setModeAction } from '../../../store/app/actions';
import "./Mode.css";

const ModeComponent = () => {

    const dispatch = useDispatch();
    const [currentMode, setCurrentMode] = useState('');
    const modes = useSelector(selectModes);

    const onSelectMode= useCallback((event) => {
    setCurrentMode(event.target.value);
    }, [setCurrentMode]);

    const onStart= useCallback(() => {
        dispatch(setModeAction(modes.find((i)=>i.id === currentMode)))
        dispatch(resetCellsAction())
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