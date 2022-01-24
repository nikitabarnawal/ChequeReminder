import React, { useEffect, useState } from 'react';
import { Text, TouchableHighlight, View, StyleSheet, FlatList, Alert, PermissionsAndroid } from 'react-native';
import Contacts from 'react-native-contacts';
import Contact from './Contact';

function ContactList() {
    const [contacts, setContacts] = useState([])

    useEffect(() => {
        const getContacts = async () => {
            try {
                const andoidContactPermission = await PermissionsAndroid.request(
                    PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
                    {
                        title: "Contacts Permission",
                        message:
                            "This app would like to view your contacts.",
                        buttonNeutral: "Ask Me Later",
                        buttonNegative: "Cancel",
                        buttonPositive: "OK"
                    }
                );
                if (andoidContactPermission === PermissionsAndroid.RESULTS.GRANTED) {
                    console.log("Contacts Permission granted");
                    Contacts.getAll().then(contacts => {
                        setContacts(contacts);
                    }).catch(e => console.log(e))

                } else {
                    console.log("Contacts permission denied");
                }
            } catch (err) {
                console.log(err);
            }
        }
        getContacts()
    }, [])


    const onPress = () => {
        Alert.alert("I am clicked yayy!")
        const keyExtractor = (item, idx) => {
            return item?.recordID?.toString() || idx.toString();
        };

        const renderItem = ({ item }) => <Contact contact={item} />;

        return (
            <View style={styles.container}>
                <FlatList
                    data={contacts}
                    renderItem={renderItem}
                    keyExtractor={keyExtractor}
                    style={styles.list}
                />
            </View>
        )
    };

    return (
        <View style={styles.container}>
            <TouchableHighlight style={styles.button} onPress={onPress}>
                <Text>Add New Customers</Text>
            </TouchableHighlight>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    button: {
        justifyContent: "flex-start",
        alignItems: "flex-start",
        backgroundColor: "#32a852",
        width: "auto",
        marginBottom: 10,
        marginRight: 5,
        borderRadius: 8,
        padding: 10,
    },
    list: {
        flex: 1,
    },
});


export default ContactList;