import * as axios from "axios";



const instance = axios.create({
    baseURL : 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials:  true,
    headers: {'API-KEY': '2715d844-cdc9-4ba3-8069-935b69da0964'}
});

export const usersApi = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)

            .then(response => {
                return response.data;

            });
    },

}
