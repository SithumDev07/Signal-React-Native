import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput, Pressable, KeyboardAvoidingView, Platform } from 'react-native';

import { AntDesign, SimpleLineIcons, Entypo, FontAwesome } from '@expo/vector-icons';

import { DataStore } from '@aws-amplify/datastore';
import { Message } from '../../src/models';
import Auth from '@aws-amplify/auth';
import { ChatRoom } from '../../src/models';

const BLUE = "#3777f0";
const BUTTON_HEIGHT = 45;

const MessageInput = ({ chatroom }) => {

    const [message, setMessage] = useState('');

    const sendMessage = async () => {
        const authUser = await Auth.currentAuthenticatedUser();
        const newMessage = await DataStore.save(new Message({
            content: message,
            userID: authUser.attributes.sub,
            chatroomID: chatroom.id,
        }))
        updateLastMessage(newMessage);
        setMessage('');
    };

    const updateLastMessage = async (newMessage) => {
        DataStore.save(ChatRoom.copyOf(chatroom, updatedChatRoom => {
            updatedChatRoom.LastMessage = newMessage;
        }))
    }

    const onPlusClicked = () => {
        console.log('Get an attachment');
    };

    const onPress = () => {
        if (message) {
            sendMessage();
        } else {
            onPlusClicked();
        }

    }

    return (
        <KeyboardAvoidingView
            style={styles.root}
            behavior={Platform.OS === 'ios' ? "padding" : "height"}
            keyboardVerticalOffset={70}
        >
            <View style={styles.inputContainer}>
                <SimpleLineIcons name="emotsmile" size={24} color="#595959" />
                <TextInput
                    style={styles.input}
                    placeholder="Type a message..."
                    value={message}
                    onChangeText={setMessage}
                />
                <Entypo name="camera" size={24} color="#595959" style={styles.icon} />
                <FontAwesome name="microphone" size={22} color="#595959" style={styles.icon} />
            </View>
            <Pressable onPress={onPress} style={styles.buttonContainer}>
                {
                    message ?
                        <FontAwesome name="send" size={20} color="white" style={styles.icon} />
                        :
                        <AntDesign name="plus" size={24} color="white" />
                }
            </Pressable>
        </KeyboardAvoidingView>
    )
}

export default MessageInput

const styles = StyleSheet.create({
    root: {
        flexDirection: 'row',
        padding: 10,
    },
    buttonContainer: {
        width: BUTTON_HEIGHT,
        height: BUTTON_HEIGHT,
        backgroundColor: BLUE,
        borderRadius: BUTTON_HEIGHT / 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
    },
    inputContainer: {
        borderRadius: BUTTON_HEIGHT / 2,
        backgroundColor: '#f2f2f2',
        flex: 1,
        marginRight: 10,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#dedede',
        paddingHorizontal: 10,
        flexDirection: 'row',
    },
    input: {
        flex: 1,
        marginLeft: 5
    },
    icon: {
        marginHorizontal: 5,
    }
})
