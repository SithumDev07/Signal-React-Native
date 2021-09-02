import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import styles from './styles'

export default function ChatRoomItem({ chatRoom }) {
    const user = chatRoom.users[1];
    return (
        <View style={styles.container}>
            <View>
                <Image source={{ uri: user.imageUri }} style={styles.image} />
                {chatRoom.newMessages ? <View style={styles.badgeContainer}>
                    <Text style={styles.badge}>{chatRoom.newMessages}</Text>
                </View> : null}
            </View>
            <View style={styles.rightContainer}>
                <View style={styles.row}>
                    <Text style={styles.name}>{user.name}</Text>
                    <Text style={styles.text}>{chatRoom.lastMessage.createdAt}</Text>
                </View>
                <Text numberOfLines={1} style={styles.text}>{chatRoom.lastMessage.content}</Text>
            </View>
        </View>
    )
}



