
const SET_USER_DATA = 'SET_USER_DATA';


let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false
};


const authReducer = (state = initialState, action) => {  //Принимаем предыдущее состояние state и action (передает данные из приложения в store)

    switch (action.type) {
        case SET_USER_DATA:
            debugger
            return {
                ...state,
                ...action.data,
                isAuth:true
            }


        default:
            return state;
    }

}
export const setAuthUserData = (id,login,email) => ({type: SET_USER_DATA, data:{id,login,email}});

export default authReducer;