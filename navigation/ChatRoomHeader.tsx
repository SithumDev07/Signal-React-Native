import React, { useEffect, useState } from "react";
import { Image, Text, useWindowDimensions, View } from "react-native";
import { Entypo, FontAwesome5 } from "@expo/vector-icons";
import { DataStore } from "@aws-amplify/datastore";
import { ChatRoomUser, User } from "../src/models";
import Auth from "@aws-amplify/auth";
const PROFILE_IMAGE_SIZE = 30;
const ChatRoomHeader = ({ id, children }) => {

    const { width } = useWindowDimensions();
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {

        if (!id) {
            return;
        }

        const fetchUsers = async () => {
            const fetchedUsers = await (await DataStore.query(ChatRoomUser))
                .filter(chatRoomUser => chatRoomUser.chatroom.id === id)
                .map(chatRoomUser => chatRoomUser.user);

            // setUsers(fetchedUsers);
            const authUser = await Auth.currentAuthenticatedUser();
            setUser(fetchedUsers.find(user => user.id !== authUser.attributes.sub) || null);
        }
        fetchUsers();
    }, []);

    return (
        <View style={
            {
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                width: width - 25,
                marginLeft: 25,
                padding: 10
            }
        }>
            <Image source={{ uri: user?.imageURI }} style={{ width: PROFILE_IMAGE_SIZE, height: PROFILE_IMAGE_SIZE, borderRadius: PROFILE_IMAGE_SIZE }} />
            <Text style={{ flex: 1, marginLeft: 10, fontWeight: 'bold', fontSize: 16 }}>{user?.name}</Text>
            <View style={{ flexDirection: 'row' }}>
                <Entypo name="camera" size={24} color="#595959" style={{ marginRight: 10 }} />
                <FontAwesome5 name="edit" size={22} color="#595959" />
            </View>
        </View>
    );
}

export default ChatRoomHeader;