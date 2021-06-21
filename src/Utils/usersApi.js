import axios from 'axios';

// call API to get all users
export const getAllUsers = () => {
    return axios
    .get('https://jsonplaceholder.typicode.com/users')
    .then(res => res.data)
    .catch(error => console.log('Error getting Users from API', error))
}

// POST request
export const createUser = async (user) => {
   const {data} = await axios.post('https://jsonplaceholder.typicode.com/posts', {
       title: user.name,
       body: user.username,
       userId: user.id
    })
    .catch(function(error) {
       console.log(error);
    })
    return data;
 };