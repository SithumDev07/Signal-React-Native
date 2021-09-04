import React from 'react'
import { Image, StyleSheet, Text, View, Pressable } from 'react-native'
import { useNavigation } from '@react-navigation/core';
import styles from './styles'
import { DataStore } from '@aws-amplify/datastore';
import { ChatRoom, User } from '../../src/models';
import Auth from '@aws-amplify/auth';
import { ChatRoomUser } from '../../src/models';

export default function UsersItem({ user }) {

    const navigation = useNavigation();

    const onPress = async () => {

        // TODO if there is already a chat room -> redirect to the existing chat room

        // * Create a new chatroom
        const newChatRoom = await DataStore.save(new ChatRoom({ newMessages: 0 }));

        // * Connect authenticated user with the chat room
        const authUser = await Auth.currentAuthenticatedUser();
        const dbUser = await DataStore.query(User, authUser.attributes.sub);

        await DataStore.save(new ChatRoomUser({
            user: dbUser,
            chatroom: newChatRoom
        }));


        // * Connect clicked user with the chat room
        await DataStore.save(new ChatRoomUser({
            user,
            chatroom: newChatRoom
        }));

        navigation.navigate('ChatRoom', { id: newChatRoom.id });

    }

    return (
        <Pressable onPress={onPress} style={styles.container}>
            <View>
                <Image source={{ uri: user.imageURI }} style={styles.image} />
            </View>
            <View style={styles.rightContainer}>
                <View style={styles.row}>
                    <Text style={styles.name}>{user.name}</Text>
                </View>
            </View>
        </Pressable>
    )
}



