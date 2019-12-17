import React, { Component } from 'react';
import { Dimensions, TouchableOpacity, StyleSheet } from 'react-native';
import { View, Header, Item, Text, Textarea, Title, DatePicker } from 'native-base';
import { connect } from "react-redux";
import { TodoAction } from "../store/action";
const { height, width, fontScale } = Dimensions.get("window")

class Addtodo extends Component {
    
    state = {
        Todo: '',
        colorArray: ['#4a90e2', '#dff4c7', '#f3bfc5', '#eec3f7', '#fbe7c8'],
        chosenDate: new Date(),
        selectedColor: ''
    };

    setDate = (newDate) => {
        let date = newDate.getTime()
        this.setState({ chosenDate: date });
    }

    AddTodo() {
        var { Todo, chosenDate, selectedColor } = this.state;
        if (Todo.length > 0 && chosenDate !== null && selectedColor.length > 0) {
            let obj = {
                todo: Todo,
                time: chosenDate,
                Color: selectedColor
            }
            this.props.Todo(obj)

            this.setState({
                Todo: '',
                selectedColor: '',
                chosenDate: new Date(),
            })
        }
        else {
            alert("fill up all fields")
        }
    }

    render() {
        let { selectedColor, Todo } = this.state
        return (
            <View >
                <Header style={style.headerStyle}>
                    <View style={style.bodyStyle}>
                        <Title style={style.titleStyle} >Add</Title>
                    </View>
                </Header>

                <View>
                    <Textarea style={style.textAreaStyle} rowSpan={5} bordered
                        value={Todo}
                        onChangeText={(Todo) => this.setState({ Todo })}
                        placeholder="When do you need to do?" placeholderTextColor="#d3d3d3" />
                    <Item regular style={style.itemStyle} >

                        <DatePicker
                            defaultDate={new Date()}
                            minimumDate={new Date()}
                            locale={"en"}
                            timeZoneOffsetInMinutes={undefined}
                            modalTransparent={false}
                            animationType={"fade"}
                            androidMode={"default"}
                            placeHolderText="Select date"
                            textStyle={{ color: "black" }}
                            placeHolderTextStyle={{ color: "#d3d3d3" }}
                            onDateChange={this.setDate}
                        />
                    </Item>

                    <View style={style.colorOptionsMainView}>
                        <View style={style.colorOptionsView}>
                            {this.state.colorArray.map((color, index) => {
                                return (
                                    <TouchableOpacity onPress={() => this.setState({ selectedColor: color })} key={index}
                                        style={{ ...style.colorOptions, borderWidth: selectedColor === color ? 2 : 0, backgroundColor: color, }} />
                                )
                            })}
                        </View>
                    </View>
                    <TouchableOpacity onPress={() => this.AddTodo()} style={style.todoBtnOpacity}>
                        <Text style={style.addTodoColor}>Add Todo</Text>
                    </TouchableOpacity>
                </View>
            </View >

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
    textAreaStyle: { width: width / 1.1, alignSelf: "center", borderRadius: 5, marginBottom: 10, fontWeight: "bold" },
    itemStyle: { width: width / 1.1, height: height / 12, alignSelf: "center", borderRadius: 5, marginBottom: 10 },
    colorOptionsMainView: { height: height / 6, justifyContent: "center", alignItems: "center" },
    colorOptionsView: { justifyContent: "space-around", flexDirection: "row", height: "100%", width: "100%" },
    todoBtnOpacity: { width: width / 1.1, height: height / 12, borderRadius: 5, justifyContent: "center", alignItems: "center", backgroundColor: "#479f3c", alignSelf: "center" },
    addTodoColor: { color: "white" },
    colorOptions: { height: 50, width: 50, paddingLeft: 10, borderRadius: 50, borderColor: '#479f3c' }
})

const mapDispatchToProps = (dispatch) => {
    return {
        Todo: (payload) => dispatch(TodoAction.Todo(payload)),
    }
}
export default connect(null, mapDispatchToProps)(Addtodo);
