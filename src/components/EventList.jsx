import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { EventContext } from "../App";
import '../App.css';
import Button from '@mui/material/Button';


export default function EventList(props) {
    const { formContext, setFormContext } = useContext(EventContext)
    const DeleteByIndex = name => {
        setFormContext(formContext => {
            formContext = formContext.filter((i) => i.eventName !== name)
            return [...formContext]
        })
        // function onClick(data){
        //     props.setFormContext(data);
        // }
        // function ChangeEventName(e) {
        //     props.setFormContext({...props.data,eventName:e.target.value})
        //    }
    }
    return (
        <div>
            {formContext && <p>{formContext.map((event, name) => <li key={name}><p>Your event name: {event.eventName} </p>
                <p>Your event starts at:{event.startDate}</p>
                <p>Finish date: {event.finishDate}</p>
                <p>Description: {event.eventDescription}</p>
                {/* <input type="text" placeholder="change your event name" onClick={ChangeEventName} /> */}

                {/* <button onClick={()=> DeleteByIndex(event.eventName)}>delete</button> */}
                <Button variant="outlined" onClick={() => DeleteByIndex(event.eventName)}>Delete</Button>
                <NavLink to={`/details/${event.eventName}/${event.startDate}/${event.finishDate}/${event.eventDescription}`}><Button variant="outlined" className="links">Details</Button> </NavLink>

            </li>)}</p>}
            {/* {formContext && <p>{formContext.map((startDate) => <li> {startDate} </li>)}</p>} */}
            {/* <h1>Event name: {formContext?. eventName}</h1>   
           <p>Your event starts at:{formContext?.startDate}</p> 
           <p>Your event finishes at:{formContext?.finishDate}</p> 
           <p>Event description:{formContext?.eventDescription}</p>  */}
        </div>
    );

}