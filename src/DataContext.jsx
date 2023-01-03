import { useState } from "react";
function DataContext() {
const [formContext,setFormContext]=useState([{}])
    return {
        formContext,setFormContext
}
}
export default DataContext;