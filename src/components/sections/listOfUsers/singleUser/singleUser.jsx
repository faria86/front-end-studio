import React from "react";

const SingleUser = ({ user, changeNameOnClick}) => {

   return (
      <div className='user-single' onClick={() => {changeNameOnClick(user.id)}}>
         <h3 >{user.name}</h3>
         <h5>{user.email}</h5>
         <p>Address:</p>
         <p>Street: {user.address.street}</p>
         <p>City: {user.address.city}</p>
         <p>Zip Code: {user.address.zipcode}</p>
      </div>
   )
};

export default SingleUser;