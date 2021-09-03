import React from 'react'
import { StyleSheet } from 'react-native'
import { useRoute, useNavigation } from '@react-navigation/core'
import Message from '../components/Message'

import ChatsData from '../assets/dummy-data/Chats'
import { FlatList } from 'react-native-gesture-handler'
import MessageInput from '../components/MessageInput'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function ChatRoomScreen() {

    const route = useRoute();
    const navigation = useNavigation();

    console.log("Chat id: ", route.params?.id);

    navigation.setOptions({ title: 'Sithumm' });


    return (
        <SafeAreaView style={styles.page}>
            <FlatList
                data={ChatsData.messages}
                renderItem={({ item }) => <Message message={item} />}
                inverted
            />
            <MessageInput />
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    page: {
        backgroundColor: 'white',
        flex: 1,
    },
})
