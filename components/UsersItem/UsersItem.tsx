import React from 'react'
import { Image, StyleSheet, Text, View, Pressable } from 'react-native'
import { useNavigation } from '@react-navigation/core';
import styles from './styles'

export default function UsersItem({ user }) {

    const navigation = useNavigation();

    const onPress = () => {
        // * Create a new chatroom
    }

    return (
        <Pressable onPress={onPress} style={styles.container}>
            <View>
                <Image source={{ uri: user.imageUri }} style={styles.image} />
            </View>
            <View style={styles.rightContainer}>
                <View style={styles.row}>
                    <Text style={styles.name}>{user.name}</Text>
                </View>
            </View>
        </Pressable>
    )
}



