import React from "react";
import {View, Text} from "react-native";
import {NativeModules} from "react-native";
import MyCustomLoginScreen from "./components/MyCustomLoginScreen";
import MyCustomScreen from "./components/MyCustomScreen";
import MyOtherCustomScreen from "./components/MyOtherCustomScreen";
const {RNCustomCode} = NativeModules;

export const applyCustomCode = externalCodeSetup => {
    // call custom code api here
    externalCodeSetup.navigationApi.replaceScreenComponent("SignupScreen", () => (
        <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
            <Text>This is my signup screen. Updated</Text>
        </View>
    ));

    //css test
    externalCodeSetup.cssApi.addGlobalStyle("container", {
        backgroundColor: "red"
    });
    externalCodeSetup.cssApi.addGlobalStyle("moreItemIcon", {
        height: 20,
        width: 20
    });
    externalCodeSetup.cssApi.addGlobalStyle("sectionHeader", {
        size: 48,
        color: "red",
        weight: 900
    });

    // externalCodeSetup.navigationApi.replaceScreenComponent("LoginScreen",
    //     MyCustomLoginScreen
    // );

    externalCodeSetup.navigationApi.addNavigationRoute(
        "otherCustomScreen",
        "MyOtherCustomScreen",
        MyOtherCustomScreen,
        "Main"
    );


    // add screen after auth
    externalCodeSetup.navigationApi.setFilterAfterAuthRoutes(afterAuthRoutes => {
        return {
            ...afterAuthRoutes,
            "MyCustomScreen": MyCustomScreen
        };
    });

    externalCodeSetup.navigationApi.setInitialAfterAuthRoute(props => {
        return "MyCustomScreen";
    });

};
