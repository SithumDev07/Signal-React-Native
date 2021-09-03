import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const BLUE = '#3777f0';
const GREY = 'lightgrey';

const currentUserID = 'u1';

const Message = ({ message }) => {

    const isCurrentUser = message.user.id === currentUserID;

    return (
        <View style={[styles.container, isCurrentUser ? styles.currentUserStyles : styles.GuestUserStyles]}>
            <Text style={{ color: isCurrentUser ? 'black' : 'white' }}>{message.content}</Text>
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
