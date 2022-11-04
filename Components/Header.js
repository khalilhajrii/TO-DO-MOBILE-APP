import { StyleSheet, Text, View } from 'react-native';
import * as React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Button } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';

const Header = () => {
    let navigate = useNavigation()
    return (
        <View>
            <LinearGradient colors={['#C3F8FF', '#ABD9FF']} start={{ x: 0.7, y: 0 }} style={header.linearGradient}>

                <View style={header.button_add}>
                    <Button icon="plus" color='#fff' mode="contained" style={header.button} onPress={() => navigate.navigate('AddTask')}>Add Task</Button>
                </View>
            </LinearGradient>
        </View>
    );
}
const header = StyleSheet.create({
    linearGradient: {
        borderRadius: 30,
        height: 150
    },
    button_add: {
        margin: 20,
        top: '35%',
        justifyContent: 'center',
        alignItems: 'center',

    },
    button: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 11,
        },
        shadowOpacity: 0.57,
        shadowRadius: 15.19,

        elevation: 23,
    }
});

export default Header;