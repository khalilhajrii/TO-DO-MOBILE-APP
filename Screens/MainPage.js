import { StyleSheet, View } from 'react-native';
import * as React from 'react';
import Header from '../Components/Header';
import Tasks from '../Components/Tasks';

export default function MainPage() {
    return (
        <View style={page.container}>
            <Header />
            <Tasks />
        </View>
    );
}

const page = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    }





});
