import { AsyncStorage } from "react-native";

export default class SignUpAction {
    static SIGN_UP = "SIGN_UP";
    static SignUp = (payload) => {
        return () => {
            const user = { name: payload }
            AsyncStorage.setItem("user", JSON.stringify(user))
            return AsyncStorage.getItem("user")
        }
    }
}