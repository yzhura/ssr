import axios from 'axios';

export const FETCH_USERS = 'fetch_users';
export const fetchUsers = () => async (dispath) => {
    // xss atack link : https://react-ssr-api.herokuapp.com/users/xss
    const res = await axios.get('https://react-ssr-api.herokuapp.com/users');
    dispath({
        type: FETCH_USERS,
        payload: res
    })
}