
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Icon from 'react-native-vector-icons/Ionicons';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import HomeScreen from '../screen/screens/HomeScreen';
import DetailsScreen from '../screen/screens/DetailScreen';
import SettingsScreen from '../screen/screens/SettingScreen';
import ProfileScreen from '../screen/screens/ProfileScreen';
import ExploreScreen from '../screen/screens/ExploreScreen';

const HomeStack = createNativeStackNavigator();

const HomeStackScreen = ({ navigation }) => (
    <HomeStack.Navigator screenOptions={{
        headerStyle: {
            backgroundColor: '#009387',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold'
        }
    }}>
        <HomeStack.Screen name="Home" component={HomeScreen} options={{
            title: 'Home',
            headerLeft: () => (
                <Icon.Button name="ios-menu" size={25} backgroundColor="#009387" onPress={() => navigation.openDrawer()}></Icon.Button>
            )
        }} />
        <HomeStack.Screen name="Details" component={DetailsScreen} />

    </HomeStack.Navigator>
);


const SettingsStack = createNativeStackNavigator();


    const SettingsStackScreen = ({ navigation }) => (
        <SettingsStack.Navigator screenOptions={{
            headerStyle: {
                backgroundColor: '#1f65ff',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold'
            }
        }}>
            <SettingsStack.Screen name="Settings" component={SettingsScreen} options={{
                headerLeft: () => (
                    <Icon.Button name="ios-menu" size={25} backgroundColor="#1f65ff" onPress={() => navigation.openDrawer()}></Icon.Button>
                )
            }} />
            <SettingsStack.Screen name="Details" component={DetailsScreen} />

        </SettingsStack.Navigator>
    );



const ExploreStack = createNativeStackNavigator();

// function ExploreStackScreen() {
//     return (
    const ExploreStackScreen = ({ navigation }) => (
        <ExploreStack.Navigator screenOptions={{
            headerStyle: {
                // backgroundColor: '#1f65ff',
                backgroundColor: '#d02860',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold'
            }
        }}>
            <ExploreStack.Screen name="Explore" component={ExploreScreen} options={{
                headerLeft: () => (
                    <Icon.Button name="ios-menu" size={25} backgroundColor="#d02860" onPress={() => navigation.openDrawer()}></Icon.Button>
                )
            }} />
            <ExploreStack.Screen name="Details" component={DetailsScreen} />
        </ExploreStack.Navigator>
    );


const Tab = createMaterialBottomTabNavigator();
// const Tab = createBottomTabNavigator();

export default function MainTab() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={{ headerShown: false }}
                initialRouteName="Home"
                activeColor="#fff"
            >
                <Tab.Screen
                    name="Home"
                    component={HomeStackScreen}
                    options={{
                        tabBarLabel: 'Home',
                        tabBarColor: 'yellow',
                        tabBarColor: '#009387',
                        tabBarIcon: ({ color }) => (
                            <Icon name="ios-home" color={color} size={26} />
                        ),
                    }}
                />

                <Tab.Screen
                    name="Settings"
                    component={SettingsStackScreen}
                    options={{
                        tabBarLabel: 'Settings',
                        tabBarColor: '#1f65ff',
                        tabBarIcon: ({ color }) => (
                            <Icon name="ios-notifications" color={color} size={26} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Profile"
                    component={ProfileScreen}
                    options={{
                        tabBarLabel: 'Profile',
                        tabBarColor: '#694fad',
                        tabBarIcon: ({ color }) => (
                            <Icon name="ios-person" color={color} size={26} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Explore"
                    component={ExploreStackScreen}
                    options={{
                        tabBarLabel: 'Explore',
                        tabBarColor: '#d02860',
                        tabBarIcon: ({ color }) => (
                            <Icon name="ios-aperture" color={color} size={26} />
                        ),
                    }}
                />

            </Tab.Navigator>
        </NavigationContainer>
    );
}
