import React from 'react';
import { useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import './Select.css'
import { selectModes } from '../../../../store/app/selectors';

const SelectComponent = ({mode, onSetMode}) => {
    
    const modes = useSelector(selectModes);

    return (
        <Box className='input' sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
            <InputLabel id="select-label">Pick mode</InputLabel>
            <Select
                labelId="select-label"
                id="select"
                label = "Pick mode"
                value={mode}
                onChange={onSetMode}
            >
                {modes.map((i)=>
                    <MenuItem 
                        key = {i.id} 
                        value={i}
                    >
                        {i.name}
                    </MenuItem>
                )}
            </Select>
            </FormControl>
        </Box>
    );
}

export default SelectComponent;