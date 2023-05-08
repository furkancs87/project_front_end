import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import UserService from "../service/UserService";

let DeleteUser = () => {
   let location = useLocation();
   let navigate = useNavigate();

   useEffect(()=>{
     UserService.deleteUser(location.state.id).then((response) => {
        alert("User ID" + location.state.id + " has been deleted successfully!")
        navigate({pathname : "/"})
     }, ()=>{});
   }, []);
   
    return (
        <>
        </>
    );
} //end DeleteUser

export default DeleteUser;