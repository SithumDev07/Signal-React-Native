import * as React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native'

const PROFILE_SIZE = 60;
const BADGE_SIZE = 20;

export default function TabOneScreen() {
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
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
  },
  text: {
    color: 'grey',
  },
  name: {
    fontWeight: 'bold',
    fontSize: 17,
    marginBottom: 3,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rightContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  image: {
    height: PROFILE_SIZE,
    width: PROFILE_SIZE,
    borderRadius: PROFILE_SIZE / 2,
    marginRight: 10,
  },
  badgeContainer: {
    width: BADGE_SIZE,
    height: BADGE_SIZE,
    borderRadius: BADGE_SIZE / 2,
    borderWidth: 1,
    borderColor: 'white',
    backgroundColor: '#3770E4',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    left: PROFILE_SIZE - 20,
    top: 2,
  },
  badge: {
    color: 'white',
    fontSize: 12,
  }
})