import { SignOutAction } from "../action";
const initailState={}
const Auth = (state=initailState, action) => {
    switch (action.type) {
        case SignOutAction.SIGN_OUT:
            return Object.assign({},state,{signOut:action.payload});
        default:
            return state;
    }
}
export default Auth;