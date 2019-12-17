import { TodoListAction } from "../action";
const initialState = {
    todolist: []
}
const Todo = (state = initialState, action) => {
    switch (action.type) {
        case TodoListAction.TODOLIST:
            return { todolist: action.payload };
        default:
            return state
    }
}
export default Todo;