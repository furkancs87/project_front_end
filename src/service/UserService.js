import React from "react";
import axios from 'axios';
const getAllUsersUrl = "http://localhost:8080/getallusers";
const findUserUrl = "http://localhost:8080/getuser/";
const addUserUrl = "http://localhost:8080/saveuser";
const updateUserUrl = "http://localhost:8080/updateuser";
const deleteUserUrl = "http://localhost:8080/deleteuser/";

class UserService{


    getAllUsers(){
      return axios.get(getAllUsersUrl);
      //let data = axios.get(getAllUsersUrl);
      //return data;
    }

    findUser(id){
        return axios.get(findUserUrl+id);
    }

    addUser(user){
        return axios.post(addUserUrl, user)
    }

    updateUser(id){
        return axios.put(updateUserUrl+id);
    }
    
    deleteUser(id){
        return axios.delete(deleteUserUrl+id)
    }
}
export default new UserService();