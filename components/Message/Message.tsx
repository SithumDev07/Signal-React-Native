import React, { useState, useEffect } from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';

import { DataStore } from '@aws-amplify/datastore';
import { User } from '../../src/models';
import Auth from '@aws-amplify/auth';

const BLUE = '#3777f0';
const GREY = 'lightgrey';

const currentUserID = 'u1';

const Message = ({ message }) => {

    const [user, setUser] = useState<User | undefined>();
    const [isMe, setIsMe] = useState<boolean>(false);

    useEffect(() => {
        DataStore.query(User, message.userID).then(setUser);
    }, []);

    useEffect(() => {
        const checkIfMe = async () => {
            if (!user) {
                return;
            }
            const authUser = await Auth.currentAuthenticatedUser();
            setIsMe(user.id === authUser.attributes.sub);
        }
        checkIfMe();
    }, [user]);

    if (!user) {
        return <ActivityIndicator />
    }


    return (
        <View style={[styles.container, isMe ? styles.currentUserStyles : styles.GuestUserStyles]}>
            <Text style={{ color: isMe ? 'black' : 'white' }}>{message.content}</Text>
        </View>
    )
}

export default Message

const styles = StyleSheet.create({
    container: {
        padding: 10,
        margin: 10,
        borderRadius: 10,
        maxWidth: '75%',
    },
    currentUserStyles: {
        backgroundColor: GREY,
        marginLeft: 'auto',
        marginRight: 10,
    },
    GuestUserStyles: {
        backgroundColor: BLUE,
        marginLeft: 10,
        marginRight: 'auto',
    }
})
