import EventList from './components/EventList';
import EventForm from './components/EventForm';
import './App.css';
import React from 'react';
import { createContext } from 'react';
import DataContext from './DataContext';
import EventDetails from './components/EventDetails';
import { NavLink, Route, Routes } from 'react-router-dom';
import  Button from '@mui/material/Button';

export const EventContext=createContext()

function App() {
  const{formContext,setFormContext}=DataContext()  
  const formContextValue = {formContext,setFormContext}
  return (
    <EventContext.Provider value={formContextValue} >
         <div className="App">
          <NavLink to='/'><Button variant="contained" type="submit" className='links'>Home</Button></NavLink>
          <NavLink to='/list'><Button variant="contained" type="submit" className='links'>List</Button></NavLink>
          
          <Routes>
            <Route path='/' element={<EventForm setFormContext={setFormContext} formContext={formContext}/>}></Route>
            <Route path='/list' element={<EventList/>}></Route>
            <Route path='/DataContext' element={<DataContext/>}></Route>
            <Route path='/details/:eventName/:startDate/:finishDate/:eventDescription' element={<EventDetails></EventDetails>}></Route>
      {/* <EventForm setFormContext={setFormContext} formContext={formContext}/> */}
      {/* <EventList/> */}
          </Routes>
    </div>
  
    </EventContext.Provider>);
 
}

export default App;
