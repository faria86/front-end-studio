import React, { useState } from "react";
import { createUser } from "../../../../Utils/usersApi";

const SingleUser = ({ user, changeNameOnClick}) => {
   let [newUser, setNewUser] = useState({});

    const handleUserClick = async (id) => {
      changeNameOnClick(id);
      const responseFromPostApi = await createUser(user)
	   setNewUser(responseFromPostApi)
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