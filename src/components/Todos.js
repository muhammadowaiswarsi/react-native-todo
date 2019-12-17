import React, { Component } from 'react';
import { Dimensions, View, Text, StatusBar, ScrollView, StyleSheet } from 'react-native';
import { Header, Left, Title, Body, List, ListItem } from 'native-base';
import moment from 'moment'
import { connect } from "react-redux";
import { TodoListAction } from "../store/action";
const { height, width, fontScale } = Dimensions.get("window")

class Todo extends Component {
    
    state = {
        listTodos: ""
    }

    componentDidMount() {
        this.props.TodoList()
    }

    render() {
        StatusBar.setBackgroundColor("#479f3c");
        return (
            <View >
                <Header style={style.headerStyle}>
                    <View style={style.bodyStyle}>
                        <Title style={style.titleStyle} >Todos</Title>
                    </View>
                </Header>
                <View style={style.mainView} >
                    <ScrollView>
                        <List style={style.list} >
                            {this.props.Todos && this.props.Todos.map((todo, index) => {
                                let time = todo.time
                                let currentTime = new Date().getTime();
                                return (
                                    <ListItem key={index} >
                                        <Left style={style.left}>
                                            <View style={{ ...style.bullets, backgroundColor: todo.Color }} />
                                        </Left>
                                        <Body>
                                            <Text style={{ ...style.todoItem, textDecorationLine: time < currentTime ? 'line-through' : 'none' }} >{todo.todo}</Text>
                                            <Text style={style.dateText} note> Due {moment(time).endOf('day').fromNow()}</Text>
                                        </Body>
                                    </ListItem>
                                )
                            })
                            }
                        </List>
                    </ScrollView>
                </View>
            </View>
        )
    }
}

const style = StyleSheet.create({
    headerStyle: {
        backgroundColor: "#479f3c",
        height: height / 6,
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "flex-start",
    },
    bodyStyle: { display: "flex", alignItems: "flex-start", justifyContent: "flex-end", marginBottom: 20 },
    titleStyle: { fontSize: fontScale * 30, fontWeight: 'bold', color: "#fff" },
    mainView: { height: height / 1.43 },
    list: { width: width / 1.1 },
    left: { maxWidth: 30 },
    bullets: { width: 15, borderRadius: 50, height: 15 },
    todoItem: { fontSize: 17 },
    dateText: { fontSize: 12 }
})

const mapStateToProps = (state) => {
    return {
        Todos: state.Todolist.todolist
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        TodoList: () => dispatch(TodoListAction.TodoList())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Todo);
