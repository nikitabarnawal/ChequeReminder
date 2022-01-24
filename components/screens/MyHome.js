import * as React from 'react';
import { Text, TouchableHighlight, View, StyleSheet } from 'react-native';

function Home({ navigation }) {
    const onPress = () => navigation.navigate('Contacts');
    return (
        <View style={styles.container}>
            <TouchableHighlight style={styles.button} onPress={onPress}>
                <Text>Add Customers</Text>
            </TouchableHighlight>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    button: {
        justifyContent: "flex-end",
        alignItems: "flex-end",
        backgroundColor: "#32a852",
        width: "auto",
        marginBottom: 10,
        marginRight: 5,
        borderRadius: 8,
        padding: 10,
        marginTop: "auto",
        marginLeft: "auto"

    }
});


export default Home;