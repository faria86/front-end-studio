import axios from 'axios';

// call API to get all users
export const getAllUsers = () => {
    return axios
    .get('https://jsonplaceholder.typicode.com/users')
    .then(res => res.data)
    .catch(error => console.log('Error getting Users from API', error))
}

// POST request
 