import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SingleUser from './singleUser/singleUser';
import './listOfUsers.scss';

const ListOfUsers = () => {
    const [allUsers, setAllUsers] = useState([]);
    const [searchName, setSearchName] = useState('');
    const [searchResults, setSearchResults] = useState([]);
  
    // call API to get all users
    const getAllUsers = () => {
        return axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res => res.data)
        .catch(error => console.log('Error getting Users from API', error))
    }

    // user of hook to mount date of all users
    useEffect(() => {
        let mounted = true;
            getAllUsers()
                .then(data => {
                    if (mounted) {
                        setAllUsers(data)
                        setSearchResults(data)
                    }
                })
        return () => mounted = false;
    }, []);

   
    const titleOnChangeHandler = (event) => {
        console.log(event.target.value)
        setSearchName(event.target.value);
    }

    // used hook when search input is changed
    useEffect(() => {
        const results = allUsers.filter(item =>
          item.name.toLowerCase().includes(searchName.toLowerCase())
        );
        setSearchResults(results);
      }, [searchName]);


    return (
        <div className='user-wrapper'>
            <div className='user-form'>
                <form>
                    <label>Name:</label>
                    <input 
                    type='text' 
                    placeholder="Search" 
                    value={searchName} 
                    onChange={titleOnChangeHandler}>
                    </input>
                </form>
            </div>
            <div className='users-list'>       
                    {searchResults.map(item => (
                        <SingleUser key={item.id} user={item}/>
                    ))}

            </div>
        </div>
  );
};

export default ListOfUsers;