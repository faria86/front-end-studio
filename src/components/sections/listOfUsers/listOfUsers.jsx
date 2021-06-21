import React, { useState, useEffect } from 'react';
import SingleUser from './singleUser/singleUser';
import Spinner from '../../Others/Spinner/spinner';
import { getAllUsers } from '../../../Utils/usersApi';

import './listOfUsers.scss';

const ListOfUsers = () => {
    const [allUsers, setAllUsers] = useState([]);
    const [searchName, setSearchName] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [textInput, setTextInput] = useState('')


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
                          }, 3000);
                          return () => clearTimeout(timer);
                    }
                })
        return () => mounted = false;
    }, []);

   // on change event of input name
    const titleOnChangeHandler = (event) => {
        setSearchName(event.target.value);
    }

    const titleOnChangeInputHandler = (event) => {
        console.log(event.target.value);
        setTextInput(event.target.value);
    }

    // hook when search input is changed
    useEffect(() => {
        const results = allUsers.filter(item =>
          item.name.toLowerCase().includes(searchName.toLowerCase())
        );
        setSearchResults(results)
      }, [searchName, allUsers]);

    
    // change name with click event on child single user
    const changeNameOnClick = itemId => {
        var newAllUsers = allUsers.map(item => {
            if (itemId === item.id) {
                return {...item, name: textInput.length ? textInput : 'Default name' };
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
                    <input 
                    type='text' 
                    placeholder="Search"
                    value={textInput} 
                    onChange={titleOnChangeInputHandler}>
                    </input>
                </form>
            </div>
            <div className='users-list'>       
                    {!searchResults.length ? (<div>User not found</div>) : searchResults.map(item => (
                        <SingleUser 
                        key={item.id} 
                        user={item} 
                        changeNameOnClick={changeNameOnClick} 
                        />
                    ))}

            </div>
        </div>
  ) : <Spinner/>
};

export default ListOfUsers;