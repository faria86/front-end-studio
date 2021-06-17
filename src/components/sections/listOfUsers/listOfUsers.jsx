import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './listOfUsers.scss';

function ListOfUsers() {
    const [users, setUsers] = useState([]);
    
    
    const getAllUsers = () => {
        return axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res => res.data)
        .catch(error => console.log('Error getting Users from API', error))
    }

    useEffect(() => {
        let mounted = true;
            getAllUsers()
                .then(data => {
                    if (mounted) {
                        setUsers(data)
                    }
                })
        return () => mounted = false;
    }, []);


    return (
        <div className='users-list'>    
                {users.map(item => (
                    <div className='user-single' key={item.id}>
                        <h2>{item.name}</h2>
                        <h3>{item.email}</h3>
                        <h5>ADDRESS:</h5>
                        <p>Street: {item.address.street}</p>
                        <p>City: {item.address.city}</p>
                        <p>Zip Code: {item.address.zipcode}</p>
                    </div>
                ))}   
        </div>
        
  );
};

export default ListOfUsers;