import React, { useEffect, useState } from 'react'
import { ActivityIndicator, StyleSheet } from 'react-native'
import { useRoute, useNavigation } from '@react-navigation/core'
import Message from '../components/Message'

import { DataStore } from '@aws-amplify/datastore';

// * Models
import { Message as MessageModel } from '../src/models';
import { ChatRoom } from '../src/models';

import { FlatList } from 'react-native-gesture-handler'
import MessageInput from '../components/MessageInput'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function ChatRoomScreen() {

    const [messages, setMessages] = useState<MessageModel[]>([]);
    const [chatRoom, setChatRoom] = useState<ChatRoom | null>(null);

    const route = useRoute();
    const navigation = useNavigation();

    useEffect(() => {
        fetchChatRoom();
    }, []);

    useEffect(() => {
        fetchMessages();
    }, [chatRoom]);

    const fetchChatRoom = async () => {
        if (!route.params?.id) {
            console.warn("No chatroom id provided");
            return;

        }
        const chatRoom = await DataStore.query(ChatRoom, route.params?.id);
        if (!chatRoom) {
            console.error("Couldn't find a chat room with current ID");
        } else {
            setChatRoom(chatRoom);
        }
    }

    const fetchMessages = async () => {
        if (!chatRoom) {
            return;
        }
        const fetchedMessages = await DataStore.query(MessageModel, message => message.chatroomID("eq", chatRoom?.id));
        setMessages(fetchedMessages);
    }

    navigation.setOptions({ title: 'Sithumm' });

    if (!chatRoom) {
        return <ActivityIndicator />
    }

    return (
        <SafeAreaView style={styles.page}>
            <FlatList
                data={messages}
                renderItem={({ item }) => <Message message={item} />}
                inverted
            />
            <MessageInput chatroom={chatRoom} />
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    page: {
        backgroundColor: 'white',
        flex: 1,
    },
})
