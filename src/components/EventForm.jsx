import React from "react";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { EventContext } from "../App";
import '../App.css';
import TextField from '@mui/material/TextField';
import  Button from '@mui/material/Button';
function EventForm() {
const {formContext,setFormContext}=useContext(EventContext)
    const { register, handleSubmit,reset } = useForm();
    function handleRegistration(data) {
      console.log(data)
      console.log(formContext)
      setFormContext([...formContext, data]);
    // props.setFormContext([...props.formContext,data]);
    reset();}

    return(
      <form onSubmit={handleSubmit(handleRegistration)}>
        <div>
        <TextField id="outlined-basic" label="Event name:"
         variant="outlined" name="name" {...register('eventName',{required: true})} />
        </div>
        <div>
        <TextField id="outlined-basic" 
         variant="outlined" name="startDate" type='date' {...register('startDate',{required: true})} />
        </div>
        <div>
        <TextField id="outlined-basic" 
         variant="outlined" name="finishDate"type='date' {...register('finishDate',{required: true})} />
        </div>
        <div>
        <TextField id="outlined-basic" label="Event decsription:"
         variant="outlined" name="eventDescription" {...register('eventDescription',{required: true})} />

        </div>
       {/* <input type="submit" /> */}
       <Button variant="contained" type="submit">Submit</Button>
       
      </form>
    );
  };
  export default EventForm;