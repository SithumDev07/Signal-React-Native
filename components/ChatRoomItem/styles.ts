import { StyleSheet } from "react-native";

const PROFILE_SIZE = 60;
const BADGE_SIZE = 20;

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

export default styles;