
import {gettAuthUserData} from "./auth-reducer";

const SET_INITIALIZED = 'SET_INITIALIZED';


let initialState = {
    initialized: false,
};


const appReducer = (state = initialState, action) => {  //Принимаем предыдущее состояние state и action (передает данные из приложения в store)

    switch (action.type) {
        case SET_INITIALIZED:

            return {
                ...state,
                initialized: true

            }


        default:
            return state;
    }

}
export const setinitialized = () => ({type: SET_INITIALIZED});

export const initializeApp = () => (dispatch)=> {
    let promise = dispatch(gettAuthUserData());

   Promise.all([promise])
        .then(() => {
        dispatch(setinitialized())
    });

}

export default appReducer;

