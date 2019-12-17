import { AsyncStorage } from "react-native";
import { TodoListAction } from "./index"
export default class TodoAction {
    static TODO = "TODO";
    static Todo = (payload) => {
        return (dispatch) => {
            AsyncStorage.getItem('todos').then(res => {
                if (res !== null) {
                    let newPayload = JSON.parse(res)
                    newPayload.push(payload)
                    AsyncStorage.setItem('todos', JSON.stringify(newPayload))
                        .then(() => {
                            AsyncStorage.getItem('todos').then((res) => {
                                dispatch({
                                    type: TodoListAction.TODOLIST,
                                    payload: JSON.parse(res)
                                })
                            })
                        })
                } else {
                    AsyncStorage.setItem('todos', JSON.stringify([payload])).then(() => {
                        AsyncStorage.getItem('todos').then((res) => {
                            dispatch({
                                type: TodoListAction.TODOLIST,
                                payload: JSON.parse(res)
                            })
                        })
                    })
                }
            })

        }
    }
}