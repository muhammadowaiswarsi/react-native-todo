import { AsyncStorage } from "react-native";

export default class AuthAction {

    static GET_USER_SUCCESS = "GET_USER_SUCCESS";
    static GET_USER_FAIL = "GET_USER_FAIL";

    static authUser = () => {
        return dispatch => {
            AsyncStorage.getItem('user').then((res) => {
                if (res !== null) {
                    dispatch({
                        type: AuthAction.GET_USER_SUCCESS,
                        payload: JSON.parse(res)
                    })
                }
                else {
                    dispatch({
                        type: AuthAction.GET_USER_FAIL
                    })
                }
            })
        }
    }

}