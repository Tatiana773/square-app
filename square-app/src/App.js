import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MainComponent from './Components/Main/Main';
import ShowListComponent from './Components/ShowList/ShowList';
import './App.css';
import {getModes} from './store/app/thunks';
import { selectError, selectIsLoading, selectModes } from './store/app/selectors';
import LinearProgress from '@mui/material/LinearProgress';
import Alert from '@mui/material/Alert';

const App = () => {

  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getModes());
  },[dispatch]);

  const modes = useSelector(selectModes);
  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);

  return (
    <div className="App">
      {error && <Alert severity="error">{error}</Alert>}
      {isLoading && <LinearProgress/>}
      {modes.length > 0
      ?<MainComponent/>
      : null}
      <ShowListComponent/>
    </div>
  );
}

export default App;
