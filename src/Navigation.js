import React, { Component } from "react"
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { Image } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import Login from "./components/Login";
import PlusGreen from "./assets/plusGreen.png";
import PlusGrey from "./assets/plusGrey.png";
import DocumentGreen from "./assets/documentGreen.png";
import DocumentGrey from "./assets/documentGrey.png";
import UserGreen from "./assets/userGreen.png";
import UserGrey from "./assets/userGrey.png";
import AddTodo from "./components/AddTodo";
import UserProfile from "./components/userProfile";
import Todos from "./components/Todos";

const BottomNavigator = createBottomTabNavigator({
    Todos: Todos,
    Add: AddTodo,
    User: UserProfile
},
    {
        defaultNavigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused }) => {
                const { routeName } = navigation.state;
                let IconComponent = Ionicons;
                let iconName;
                let color;
                if (routeName === 'Todos') {
                    iconName = `${focused ? DocumentGreen : DocumentGrey}`;
                } else if (routeName === 'Add') {
                    iconName = `${focused ? PlusGreen : PlusGrey}`;
                } else if (routeName === "User") {
                    iconName = `${focused ? UserGreen : UserGrey}`;
                }
                return <Image source={iconName} style={{ width: 20, height: 20 }} />
            }
        }),
        tabBarOptions: {
            activeTintColor: '#4cd964',
            inactiveTintColor: 'grey',
        },
    })


const AppStackNavigator = createStackNavigator({
    Login: Login,
    Dashboard: BottomNavigator
}, { headerMode: "none" })


const AppContainer = createAppContainer(AppStackNavigator)

class Navigations extends Component {
    render() {
        return (
            <AppContainer />
        )
    }
};

export default Navigations;