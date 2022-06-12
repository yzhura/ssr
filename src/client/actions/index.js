export const FETCH_USERS = 'fetch_users';
export const FETCH_CURRENT_USER = 'fetch_current_user';

export const fetchUsers = () => async (dispath, _, api) => {
    // xss atack link : https://react-ssr-api.herokuapp.com/users/xss
    const res = await api.get('/users');
    dispath({
        type: FETCH_USERS,
        payload: res
    })
}

export const fetchCurrentUser = () => async (dispath, _, api) => {
    const res = await api.get('/current_user');
    
    dispath({
        type: FETCH_CURRENT_USER,
        payload: res
    })
}

