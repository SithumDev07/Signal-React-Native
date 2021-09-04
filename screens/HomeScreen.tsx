import React, { useEffect, useState } from 'react';
import { StyleSheet, View, FlatList, Text, Pressable } from 'react-native'

import ChatRoomItem from '../components/ChatRoomItem';

import { Auth, DataStore } from 'aws-amplify'
import { ChatRoom } from '../src/models';
import { ChatRoomUser } from '../src/models';

export default function TabOneScreen() {

  const [chatRooms, setChatRooms] = React.useState<ChatRoom[]>([]);

  useEffect(() => {
    const fetchChatrooms = async () => {

      const userData = await Auth.currentAuthenticatedUser();

      const chatRooms = await (await DataStore.query(ChatRoomUser))
        .filter(chatRoomUser => chatRoomUser.user.id === userData.attributes.sub)
        .map(chatRoomUser => chatRoomUser.chatroom);

      setChatRooms(chatRooms);
    }
    fetchChatrooms();
  }, [])

  const Logout = () => {
    Auth.signOut();
  }

  return (
    <View style={styles.pageView}>
      <FlatList
        data={chatRooms}
        renderItem={({ item: chatroom }) => <ChatRoomItem chatRoom={chatroom} />}
        showsVerticalScrollIndicator={false}
      />
      <Pressable onPress={Logout} style={{ backgroundColor: '#404040', height: 50, borderRadius: 5, alignItems: 'center', justifyContent: 'center', position: 'absolute', bottom: 20, width: '80%', left: '10%' }}>
        <Text style={{ color: 'white', fontWeight: 'bold' }}>Logout</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  pageView: {
    backgroundColor: 'white',
    flex: 1
  }
})