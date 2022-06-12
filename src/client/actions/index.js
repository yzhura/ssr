export const FETCH_USERS = 'fetch_users';
export const fetchUsers = () => async (dispath, _, api) => {
    // xss atack link : https://react-ssr-api.herokuapp.com/users/xss
    const res = await api.get('/users');
    dispath({
        type: FETCH_USERS,
        payload: res
    })
}