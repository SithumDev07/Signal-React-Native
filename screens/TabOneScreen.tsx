import * as React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native'

import ChatRoomItem from '../components/ChatRoomItem';
import ChatRooms from '../assets/dummy-data/ChatRooms';

const chatRoom1 = ChatRooms[0];
const chatRoom2 = ChatRooms[1];

export default function TabOneScreen() {
  return (
    <View>
      <ChatRoomItem chatRoom={chatRoom1} />
      <ChatRoomItem chatRoom={chatRoom2} />
    </View>
  );
}

const styles = StyleSheet.create({
  pageView: {
    backgroundColor: 'white',
  }
})