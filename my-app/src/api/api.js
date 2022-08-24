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
    follow(userId){
      return  instance.post(`follow/${userId}`)

    },
    unfollow(userId){
       return  instance.delete(`follow/${userId}`)

    },
    getProfile(userId){
        return profileApi.getProfile(userId);


    }


}
export const profileApi = {

    getProfile(userId){
        return instance.get(`profile/` + userId);
    },
    getStatus(userId){
        return instance.get(`profile/status/` + userId);
},
    updateStatus(status){
        return instance.put(`profile/status`, {status:status});

    }

}
export const authApi = {
    me(){
       return  instance.get(`auth/me`)


    }
}
