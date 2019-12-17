import { AsyncStorage } from "react-native";

export default class SignOutAction {

    static SIGN_OUT = "SIGN_OUT";

    static signOut = () => {
        return dispatch => {
            AsyncStorage.removeItem('user').then((resUser) => {
                AsyncStorage.removeItem('todos').then((resTodos) => {
                    if (resUser === null) {
                        dispatch({
                            type: SignOutAction.SIGN_OUT,
                            payload: resUser
                        })
                    }
                })


            });
        }
    }

}