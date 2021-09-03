
import { Entypo, FontAwesome5 } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName, Image, Text, useWindowDimensions, View } from 'react-native';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import ModalScreen from '../screens/ModalScreen';
import HomeScreen from '../screens/HomeScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types';
import LinkingConfiguration from './LinkingConfiguration';

import ChatRoomScreen from '../screens/ChatRoomScreen';

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

const PROFILE_IMAGE_SIZE = 30;

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Chats"
        component={HomeScreen}
        options={{ headerTitle: HomeHeader }}
      />
      <Stack.Screen
        name="ChatRoom"
        component={ChatRoomScreen}
        options={{
          headerTitle: ChatRoomHeader,
          headerBackTitleVisible: false,
        }}
      />
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name="Modal" component={ModalScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

const HomeHeader = (props) => {

  const { width } = useWindowDimensions();

  return (
    <View style={
      {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width,
        paddingHorizontal: 10
      }
    }>
      <Image source={{ uri: 'https://images.unsplash.com/photo-1630305090270-408e312c5468?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80' }} style={{ width: PROFILE_IMAGE_SIZE, height: PROFILE_IMAGE_SIZE, borderRadius: PROFILE_IMAGE_SIZE }} />
      <Text style={{ flex: 1, textAlign: 'center', fontWeight: 'bold', fontSize: 16 }}>Home</Text>
      <View style={{ flexDirection: 'row' }}>
        <Entypo name="camera" size={24} color="#595959" style={{ marginRight: 10 }} />
        <FontAwesome5 name="edit" size={22} color="#595959" />
      </View>
    </View>
  );
}

const ChatRoomHeader = (props) => {

  const { width } = useWindowDimensions();


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
      <Image source={{ uri: 'https://images.unsplash.com/photo-1630305090270-408e312c5468?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80' }} style={{ width: PROFILE_IMAGE_SIZE, height: PROFILE_IMAGE_SIZE, borderRadius: PROFILE_IMAGE_SIZE }} />
      <Text style={{ flex: 1, marginLeft: 10, fontWeight: 'bold', fontSize: 16 }}>Savennah ❤</Text>
      <View style={{ flexDirection: 'row' }}>
        <Entypo name="camera" size={24} color="#595959" style={{ marginRight: 10 }} />
        <FontAwesome5 name="edit" size={22} color="#595959" />
      </View>
    </View>
  );
}
