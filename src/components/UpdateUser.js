import React, {useState, useEffect} from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import UserService from "../service/UserService";

let UpdateUser = () => {
    let location = useLocation();
    let findId = location.state.id;

    let [userTemp, setUser] = useState({
        id: '',
        first_name: '',
        last_name: '',
        phone: ''
    });

    useEffect(()=>{
        UserService.findUser(findId).then((response)=>{
            setUser(response.data);
        }, ()=>{});
    }, []);

    let navigate = useNavigate();

    let[id, setId] = useState('');
    let[first_name, setFirstName] = useState('');
    let[last_name, setLastName] = useState('');
    let[phone, setPhone] = useState('');

    //let handleId = (e) =>{ setId(e.target.value) }
    let handleFirstName = (e) =>{ setFirstName(e.target.value) }
    let handleLastName = (e) =>{ setLastName(e.target.value) }
    let handlePhone = (e) => { setPhone(e.target.value) }
    
    let handleSubmit = (e) => {
        //in order not to submit twice, use preventDefault
       e.preventDefault(); 

       let user = {id : findId, first_name : first_name, last_name : last_name, phone : phone}
       //alert(JSON.stringify(user))
       UserService.addUser(user).then(()=>{
          alert("User has been updated successfully!")
          navigate({pathname : '/'});
       }, ()=>{
          alert("User creation failed")
       })
    }

    return (
        <>
          <form onSubmit={handleSubmit}>
            <label>
                ID: <input type="text" value={id} className="form-control" placeholder={userTemp.id} disabled/>
                First Name: <input onChange={handleFirstName} type="text" value={first_name} className="form-control" placeholder={userTemp.first_name} />
                Last Name: <input onChange={handleLastName} type="text" value={last_name} className="form-control" placeholder={userTemp.last_name} />
                Phone: <input onChange={handlePhone} type="text" value={phone} className="form-control" placeholder={userTemp.phone} />        
            
                <input type="submit" value="Submit" className="form-control bg-warning" />
            </label>
          </form>
       </>
    );
} //end UpdateUser

export default UpdateUser;