import * as React from 'react';
import { StyleSheet, View, FlatList, Text, Pressable } from 'react-native'

import ChatRoomItem from '../components/ChatRoomItem';
import ChatRooms from '../assets/dummy-data/ChatRooms';

import { Auth } from 'aws-amplify'

export default function TabOneScreen() {

  const Logout = () => {
    Auth.signOut();
  }

  return (
    <View style={styles.pageView}>
      <FlatList
        data={ChatRooms}
        renderItem={({ item: chatroom }) => <ChatRoomItem chatRoom={chatroom} />}
        showsVerticalScrollIndicator={false}
      />
      {/* <Pressable onPress={Logout} style={{ backgroundColor: '#404040', height: 50, borderRadius: 5, alignItems: 'center', justifyContent: 'center', position: 'absolute', bottom: 20, width: '80%', left: '10%' }}>
        <Text style={{ color: 'white', fontWeight: 'bold' }}>Logout</Text>
      </Pressable> */}
    </View>
  );
}

const styles = StyleSheet.create({
  pageView: {
    backgroundColor: 'white',
  }
})