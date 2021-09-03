import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const BLUE = '#3777f0';
const GREY = 'lightgrey';

const currentUserID = 'u1';

const Message = ({ message }) => {

    const isCurrentUser = message.user.id === currentUserID;

    return (
        <View style={[
            styles.container,
            {
                backgroundColor: isCurrentUser ? GREY : BLUE,
                marginLeft: isCurrentUser ? 'auto' : 10,
                marginRight: isCurrentUser ? 10 : 'auto',
            }
        ]}>
            <Text style={{ color: isCurrentUser ? 'black' : 'white' }}>{message.content}</Text>
        </View>
    )
}

export default Message

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#3777f0',
        padding: 10,
        margin: 10,
        borderRadius: 10,
        maxWidth: '75%',
    },
})
