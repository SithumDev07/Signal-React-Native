import * as React from 'react';
import { StyleSheet, View, FlatList } from 'react-native'

import ChatRoomItem from '../components/ChatRoomItem';
import ChatRooms from '../assets/dummy-data/ChatRooms';

const chatRoom1 = ChatRooms[0];
const chatRoom2 = ChatRooms[1];

export default function TabOneScreen() {
  return (
    <View style={styles.pageView}>
      <FlatList
        data={ChatRooms}
        renderItem={({ item: chatroom }) => <ChatRoomItem chatRoom={chatroom} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  pageView: {
    backgroundColor: 'white',
  }
})