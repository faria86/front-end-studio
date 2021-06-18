import React, { useState } from "react";

const SingleUser = ({user}) => {
   let [name, setName] = useState(user.name);

   function ChangeName() {
      setName('User Deleted');
      console.log(user.name);
   }

   return (
      <div className='user-single' onClick={() => ChangeName()}>
         <h3>{name}</h3>
         <h5>{user.email}</h5>
         <p>Address:</p>
         <p>Street: {user.address.street}</p>
         <p>City: {user.address.city}</p>
         <p>Zip Code: {user.address.zipcode}</p>
      </div>
   )
};

export default SingleUser;