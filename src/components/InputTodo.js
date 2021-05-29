import React, {Fragment, useState, useEffect} from "react";
import "./style.css";
import Dashboard from "./Dashboard"

const InputTodo = ({uid}) => {

    const [todo_name, settodo_name] = useState("");
    const [description, setDescription] = useState("");
    const [date, setDate] = useState("");
    const [check, setCheck] = useState("");


    const onSubmitForm = async(e) => {
        e.preventDefault()
        try {
            if(check === true){
                console.log('public')
                const body = {todo_name, description, date};
                    await fetch("https://oceanseighttodoappserver.herokuapp.com/todos",{
                    method: "POST",
                    headers: {"Content-Type": "application/json"},
                    body: JSON.stringify(body)  
                });
           
                window.location = "/";
            }else{
                console.log('private')
                const body = {uid, todo_name, description, date};
                    await fetch("https://oceanseighttodoappserver.herokuapp.com/todos",{
                    method: "POST",
                    headers: {"Content-Type": "application/json"},
                    body: JSON.stringify(body)  
                });
           
                window.location = "/";
            }
            
        } catch (err) {
            console.error(err.message);
        }
    }

    function onChange(e) {
        setCheck(e.target.checked);
      }

    return(
        <Fragment>
            <div className="container">
            <h1 className = "text-center mt-5 title">Oceans 8 TODO App</h1>
            <form className = "d-flex mt-4" onSubmit={onSubmitForm}>
                <input placeholder = "Todo name" 
                       type = "text"
                       className = "form-control mr-2 in" 
                       value = {todo_name}
                       onChange = {e => settodo_name(e.target.value)}
                       required
                       />
                
                <input placeholder = "Todo description" 
                       type = "text" 
                       className = "form-control mr-2 in" 
                       value = {description}
                       onChange = {e => setDescription(e.target.value)}
                       />

                <input placeholder = "Todo date" 
                       type = "date" 
                       className = "form-control mr-2 in" 
                       value = {date}
                       onChange = {e => setDate(e.target.value)}
                       required
                       />
                <button className = "btn btn-success bttn">Add</button>
            </form>
            <div class="form-check form-check-inline">
            <input id="checkbox3" type="checkbox" onChange={onChange} />
            <label for="checkbox3">Public</label>
            </div>
            </div>
            
        </Fragment>);
}

export default InputTodo;