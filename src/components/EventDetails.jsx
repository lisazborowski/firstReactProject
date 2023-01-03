import React from "react"
import { useContext } from "react"
import { EventContext } from "../App";
import { useParams } from "react-router-dom"
export default function EventDetails() 
{
    const params=useParams();
    console.log("this is", params)
    return (
        <div>
            <p>Your event name:{params.eventName}</p>
            <p>Start date:{params.startDate}</p>
            <p>Finish date:{params.finishDate}</p>
            <p>Description:{params.eventDescription}</p>
          
            
             
            {/* <p>lisa</p> */}
        </div>
    )
}