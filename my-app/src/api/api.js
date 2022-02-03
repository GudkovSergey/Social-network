import * as axios from "axios";



const instance = axios.create({
    baseURL : 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials:  true,
    headers: {'API-KEY': 'd558ebf6-595a-4aec-a20a-38840f78941c'}
});

export const usersApi = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)

            .then(response => {
                return response.data;

            });
    },

}
