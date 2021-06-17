import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SingleUser from './singleUser/singleUser';
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
                    <SingleUser key={item.id} user={item}/>
                ))}   
        </div>
  );
};

export default ListOfUsers;