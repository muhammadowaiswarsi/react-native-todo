import React, { Component } from 'react';
import { View, Text, Image, Dimensions, TouchableOpacity, StatusBar, StyleSheet } from 'react-native';
import { Container, Content, Item, Input, } from 'native-base';
import { connect } from "react-redux";
import { SignUpAction, AuthAction } from "../store/action";
const { height, width, fontScale } = Dimensions.get("window")


const successImageUri = 'https://www.sketchengine.eu//wp-content/uploads/security_data.png';

class Login extends Component {

    state = {
        name: ""
    }

    SignUpUser() {
        var name = this.state.name;
        if (name.length > 0) {
            this.props.SignUp(name)
            this.props.authUser();
            this.setState({
                name: ''
            })
        }
        else {
            alert("Please Enter Your name")
        }
    }

    componentDidMount() {
        this.props.authUser();
    }

    componentDidUpdate(nextProps) {
        if (nextProps && nextProps.user.name !== this.props.user.name) {
            this.props.navigation.navigate("Dashboard")
        }
    }
    
    render() {
        StatusBar.setBackgroundColor("#479f3c");
        return (
            <Container>
                <Content>
                    <View style={style.headerStyle}>
                        <Image source={{ uri: successImageUri }} style={style.logoImage} />
                        <Text style={style.todoHeading}>Todo</Text>
                    </View>
                    <View>
                        <Item regular style={style.itemStyle} >
                            <Input
                                placeholder="Name"
                                value={this.state.name}
                                onChangeText={(name) => this.setState({ name })}
                            />
                        </Item>
                        <TouchableOpacity onPress={() => this.SignUpUser()} style={style.loginBtn}>
                            <Text style={style.loginText}>Login</Text>
                        </TouchableOpacity>
                    </View>
                </Content>
            </Container>
        )
    }
}

const style = StyleSheet.create({
    headerStyle: { height: height / 1.35, justifyContent: "center", alignItems: "center" },
    logoImage: { width: 100, height: 100, marginBottom: 10 },
    todoHeading: { fontSize: fontScale * 20, color: "black", fontWeight: 'normal' },
    itemStyle: { width: width / 1.1, height: height / 12, alignSelf: "center", borderRadius: 5, marginBottom: 10 },
    loginBtn: { width: width / 1.1, height: height / 12, borderRadius: 5, justifyContent: "center", alignItems: "center", backgroundColor: "#479f3c", alignSelf: "center" },
    loginText: { color: "white" }
})

const mapStateToProps = (state) => {
    return {
        user: state.Auth.user
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        SignUp: (payload) => dispatch(SignUpAction.SignUp(payload)),
        authUser: () => dispatch(AuthAction.authUser())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login);
