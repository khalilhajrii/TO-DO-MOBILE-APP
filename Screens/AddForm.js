import { StyleSheet, Text, View } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import * as React from 'react';

export default function AddForm() {
    return (
        <View style={form.content}>
        <View style={form.container}>
            <TextInput
            style={form.input}
                label="Task Name"
            />
                        <TextInput
                        style={form.input}
                label="Descritption"
            />
            <Button style={form.button_submit}   icon='plus' color='#0A8EA0' mode="contained">Submit</Button>
        </View>
        </View>
        
    );
}
const form = StyleSheet.create({
    content:{
        backgroundColor:'#fff',
        flex:1
    },
    container:{
        margin:15,
        marginTop:"50%"
        
    },
    input: {
        backgroundColor:'white',
        margin: 5,
        padding:5
    },
    button_submit:{
        margin:50,
        justifyContent: 'center',
        alignItems: 'center'
    }

});
