import React, { useState, useEffect } from 'react';
import { StyleSheet, View, FlatList } from 'react-native'

import UsersItem from '../components/UsersItem';

import { DataStore } from '@aws-amplify/datastore';
import { User } from '../src/models';

export default function UsersScreen() {

    const [users, setUsers] = useState<User[]>([]);

    // useEffect(() => {
    //     const fetchUsers = async () => {
    //         const fetchedUsers = await DataStore.query(User);
    //         setUsers(fetchedUsers);
    //     };
    //     fetchUsers();
    // }, [])

    useEffect(() => {
        DataStore.query(User).then(setUsers);
    }, [])

    return (
        <View style={styles.pageView}>
            <FlatList
                data={users}
                renderItem={({ item: user }) => <UsersItem user={user} />}
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