import * as React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native'

import ChatRoomItem from '../components/ChatRoomItem';

export default function TabOneScreen() {
  return (
    <View>
      <ChatRoomItem />
      <ChatRoomItem />
      <ChatRoomItem />
      <ChatRoomItem />
    </View>
  );
}

const styles = StyleSheet.create({
  pageView: {
    backgroundColor: 'white',
  }
})