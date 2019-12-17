import { AsyncStorage } from "react-native";
export default class TodoListAction {
    static TODOLIST = "TODOLIST";
    static TodoList = () => {
        return dispatch => {
            AsyncStorage.getItem('todos').then(res => {
                dispatch({
                    type: TodoListAction.TODOLIST,
                    payload: JSON.parse(res)
                })
            })

        }
    }
}