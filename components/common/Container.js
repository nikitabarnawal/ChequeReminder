import React from "react";
import { StyleSheet, SafeAreaView } from "react-native";


const Container = props => {
    return (
        <SafeAreaView testID="container" style={[styles.container]}>
            {props.children}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});


export default Container;
