import * as React from 'react';
import { StyleSheet, View, FlatList } from 'react-native'

import Users from '../assets/dummy-data/Users';
import UsersItem from '../components/UsersItem';

export default function UsersScreen() {
    return (
        <View style={styles.pageView}>
            <FlatList
                data={Users}
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