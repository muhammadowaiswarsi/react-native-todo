import React, { Component } from 'react';
import { Dimensions, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { View, Header, Title } from 'native-base';
import { connect } from "react-redux";
import { SignOutAction } from "../store/action";
const { height, width, fontScale } = Dimensions.get("window")

class Profile extends Component {

    logOut = () => {
        this.props.signOut()

    }

    componentDidUpdate(nextProps) {
        if (nextProps.Signout !== this.props.Signout) {
            this.props.navigation.navigate("Login")
        }
    }

    render() {
        return (
            <View >
                <Header style={style.headerStyle}>
                    <View style={style.bodyStyle}>
                        <Title style={style.titleStyle} >Hello {this.props.user.name} </Title>
                    </View>
                </Header>
                <View style={style.mainView}>
                    <TouchableOpacity onPress={() => this.logOut()}
                        style={style.logOutBtn}>
                        <Text style={style.logOutText}>Logout</Text>
                    </TouchableOpacity>
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
    mainView: { height: height / 0.9, justifyContent: "center", alignItems: "center" },
    logOutBtn: { width: width / 1.1, height: height / 12, borderRadius: 5, borderWidth: 1, borderColor: "#E3D4C7", justifyContent: "center", alignItems: "center", backgroundColor: "white", alignSelf: "center" },
    logOutText: { color: "red" }
})

const mapStateToProps = (state) => {
    return {
        user: state.Auth.user,
        Signout: state.signOut.signOut
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(SignOutAction.signOut())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Profile);
