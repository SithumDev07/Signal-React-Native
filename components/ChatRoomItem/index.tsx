import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import styles from './styles'



export default function ChatRoomItem() {
    return (
        <View style={styles.container}>
            <View>
                <Image source={{ uri: 'https://images.unsplash.com/photo-1630305090270-408e312c5468?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80' }} style={styles.image} />
                <View style={styles.badgeContainer}>
                    <Text style={styles.badge}>4</Text>
                </View>
            </View>
            <View style={styles.rightContainer}>
                <View style={styles.row}>
                    <Text style={styles.name}>Savennah ❤</Text>
                    <Text style={styles.text}>12.12 AM</Text>
                </View>
                <Text numberOfLines={1} style={styles.text}>Happiest Birthday Sithum ❤🥰</Text>
            </View>
        </View>
    )
}



