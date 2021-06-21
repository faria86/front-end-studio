import React, { useState, useEffect } from "react";
import { createUser } from "../../../../Utils/usersApi";
import axios from 'axios';

const SingleUser = ({ user, changeNameOnClick}) => {
   let [newUser, setNewUser] = useState({});

   const createUser = () => {
      axios.post('https://jsonplaceholder.typicode.com/posts', {
         title: user.name,
         body: user.username,
         userId: user.id
      })
      .then(function(response) {
         console.log(response);
         setNewUser(response.data);
      })
      .catch(function(error) {
         console.log(error);
      });
   };

    const handleUserClick = id => {
      changeNameOnClick(id);
      createUser();
    }

    // show new user when user has content
    let newUserContent = null;
    if (newUser?.title?.length) {
      newUserContent = 
      <div className='user-post'>
         {newUser.id} {newUser.title} {newUser.body}
      </div>
    }

   return (
      <div className='user-single' onClick={() => {handleUserClick(user.id)}}>
         <h3 >{user.name}</h3>
         <h5>{user.email}</h5>
         <p>Address:</p>
         <p>Street: {user.address.street}</p>
         <p>City: {user.address.city}</p>
         <p>Zip Code: {user.address.zipcode}</p>
         {newUserContent}
      </div>
   )
};

export default SingleUser;