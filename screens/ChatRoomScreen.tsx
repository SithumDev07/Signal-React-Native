import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Message from '../components/Message'

import ChatsData from '../assets/dummy-data/Chats'
import { FlatList } from 'react-native-gesture-handler'

export default function ChatRoomScreen() {
    return (
        <View style={styles.page}>
            <FlatList
                data={ChatsData.messages}
                renderItem={({ item }) => <Message message={item} />}
            />
        </View>
    )
}


const styles = StyleSheet.create({
    page: {
        backgroundColor: 'white',
        flex: 1,
    },
})
