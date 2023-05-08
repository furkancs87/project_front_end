import React, { useState } from "react";
import UserService from "../service/UserService";
import { useNavigate } from "react-router-dom";
let AddUser = () => {
    let navigate = useNavigate();
    let[id, setId] = useState('');
    let[first_name, setFirstName] = useState('');
    let[last_name, setLastName] = useState('');
    let[phone, setPhone] = useState('');

    let handleId = (e) =>{ setId(e.target.value) }
    let handleFirstName = (e) =>{ setFirstName(e.target.value) }
    let handleLastName = (e) =>{ setLastName(e.target.value) }
    let handlePhone = (e) => { setPhone(e.target.value) }
    
    let handleSubmit = (e) => {
        //in order not to submit twice, use preventDefault
       e.preventDefault(); 

       let user = {id : id, first_name : first_name, last_name : last_name, phone : phone}
       //alert(JSON.stringify(user))
       UserService.addUser(user).then(()=>{
          alert("User has been added successfully!")
          navigate({pathname : '/'});
       }, ()=>{
          alert("User creation failed")
       })
    }

    return (
        <>
          <form onSubmit={handleSubmit}>
            <label>
                ID: <input onChange={handleId} type="text" value={id} className="form-control" />
                First Name: <input onChange={handleFirstName} type="text" value={first_name} className="form-control" />
                Last Name: <input onChange={handleLastName} type="text" value={last_name} className="form-control" />
                Phone: <input onChange={handlePhone} type="text" value={phone} className="form-control" />        
            
                <input type="submit" value="Submit" className="form-control bg-warning" />
            </label>
          </form>
        </>
    );
} //end AddUser

export default AddUser;