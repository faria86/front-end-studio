import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SingleUser from './singleUser/singleUser';
import Spinner from '../Spinner/spinner';

import './listOfUsers.scss';

const ListOfUsers = () => {
    const [allUsers, setAllUsers] = useState([]);
    const [searchName, setSearchName] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
  
    // call API to get all users
    const getAllUsers = () => {
        return axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res => res.data)
        .catch(error => console.log('Error getting Users from API', error))
    }

    // hook to mount data with all users
    useEffect(() => {
        let mounted = true;
            getAllUsers()
                .then(data => {
                    if (mounted) {
                        setAllUsers(data)
                        setSearchResults(data)
                        const timer = setTimeout(() => {
                            setIsLoading(false);
                          }, 5000);
                          return () => clearTimeout(timer);
                        
                    }
                })
        return () => mounted = false;
    }, []);

   // on change event of input name
    const titleOnChangeHandler = (event) => {
        console.log(event.target.value)
        setSearchName(event.target.value);
    }

    // hook when search input is changed
    useEffect(() => {
        const results = allUsers.filter(item =>
          item.name.toLowerCase().includes(searchName.toLowerCase())
        );
        setSearchResults(results);
      }, [searchName, allUsers]);

    
    // change name with click event on child single user
    const changeNameOnClick = itemId => {
        var newAllUsers = allUsers.map(item => {
            if (itemId === item.id) {
                return {...item, name: 'User deleted' };
            }
            return item;
        })
        setAllUsers(newAllUsers);
    }


    return !isLoading ? (
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
                        <SingleUser key={item.id} user={item} changeNameOnClick={changeNameOnClick}/>
                    ))}

            </div>
        </div>
  ) : <Spinner/>
};

export default ListOfUsers;