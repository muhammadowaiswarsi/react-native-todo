import { TodoAction } from "../action";
const initialState = {
    todo: []
}
const Todo = (state = initialState, action) => {
    switch (action.type) {
        case TodoAction.TODO:
        // alert("red case matc")
            return { state, todo: action.payload };
        default:
            return  state 
    }
}
export default Todo;