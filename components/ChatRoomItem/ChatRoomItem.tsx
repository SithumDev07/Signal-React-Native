import React, { useState, useEffect } from 'react'
import { Image, StyleSheet, Text, View, Pressable, ActivityIndicator } from 'react-native'
import { useNavigation } from '@react-navigation/core';
import styles from './styles'
import { DataStore } from '@aws-amplify/datastore'
import { User } from '../../src/models';
import { ChatRoomUser } from '../../src/models';
import Auth from '@aws-amplify/auth';

export default function ChatRoomItem({ chatRoom }) {

    // const [users, setUsers] = useState<User[]>([]); // * All Users in this chatroom
    const [user, setUser] = useState<User | null>(null); // * Displaying contact

    const navigation = useNavigation();

    useEffect(() => {
        const fetchUsers = async () => {
            const fetchedUsers = await (await DataStore.query(ChatRoomUser))
                .filter(chatRoomUser => chatRoomUser.chatroom.id === chatRoom.id)
                .map(chatRoomUser => chatRoomUser.user);

            // setUsers(fetchedUsers);
            const authUser = await Auth.currentAuthenticatedUser();
            setUser(fetchedUsers.find(user => user.id !== authUser.attributes.sub) || null);
        }
        fetchUsers();
    }, [])

    const onPress = () => {
        navigation.navigate('ChatRoom', { id: chatRoom.id });
    }

    if (!user) {
        return <ActivityIndicator />
    }

    return (
        <Pressable onPress={onPress} style={styles.container}>
            <View>
                <Image source={{ uri: user.imageURI }} style={styles.image} />
                {chatRoom.newMessages ? <View style={styles.badgeContainer}>
                    <Text style={styles.badge}>{chatRoom.newMessages}</Text>
                </View> : null}
            </View>
            <View style={styles.rightContainer}>
                <View style={styles.row}>
                    <Text style={styles.name}>{user.name}</Text>
                    <Text style={styles.text}>{chatRoom.lastMessage?.createdAt}</Text>
                </View>
                <Text numberOfLines={1} style={styles.text}>{chatRoom.lastMessage?.content}</Text>
            </View>
        </Pressable>
    )
}



