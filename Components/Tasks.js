import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Button, Card, Title, Paragraph } from 'react-native-paper';
import * as React from 'react';
import { useNavigation } from '@react-navigation/native';
export default function Tasks() {
    const navigate = useNavigation();
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <Card style={tasks.Task_container} >
                <Card.Content>
                    <Title>Task Name</Title>
                    <Paragraph>Description</Paragraph>
                    <Text>Date</Text>
                    <Card.Actions style={tasks.action_container}>
                        <Button icon="minus" mode='contained' color='#277BC0' style={tasks.button1} onPress={() => navigate.navigate('EditForm')}>Edit</Button>
                        <Button icon="minus" mode='contained' color='#C21010' style={tasks.button2}>Remove</Button>
                    </Card.Actions>
                </Card.Content>
            </Card>
            <Card style={tasks.Task_container} >
                <Card.Content>
                    <Title>Task Name</Title>
                    <Paragraph>Description</Paragraph>
                    <Text>Date</Text>
                    <Card.Actions style={tasks.action_container}>
                        <Button icon="minus" mode='contained' color='#277BC0' style={tasks.button1} onPress={() => navigate.navigate('EditForm')}>Edit</Button>
                        <Button icon="minus" mode='contained' color='#C21010' style={tasks.button2}>Remove</Button>
                    </Card.Actions>
                </Card.Content>
            </Card>
            <Card style={tasks.Task_container} >
                <Card.Content>
                    <Title>Task Name</Title>
                    <Paragraph>Description</Paragraph>
                    <Text>Date</Text>
                    <Card.Actions style={tasks.action_container}>
                        <Button icon="minus" mode='contained' color='#277BC0' style={tasks.button1} onPress={() => navigate.navigate('EditForm')}>Edit</Button>
                        <Button icon="minus" mode='contained' color='#C21010' style={tasks.button2}>Remove</Button>
                    </Card.Actions>
                </Card.Content>
            </Card>
            <Card style={tasks.Task_container} >
                <Card.Content>
                    <Title>Task Name</Title>
                    <Paragraph>Description</Paragraph>
                    <Text>Date</Text>
                    <Card.Actions style={tasks.action_container}>
                        <Button icon="minus" mode='contained' color='#277BC0' style={tasks.button1} onPress={() => navigate.navigate('EditForm')}>Edit</Button>
                        <Button icon="minus" mode='contained' color='#C21010' style={tasks.button2}>Remove</Button>
                    </Card.Actions>
                </Card.Content>
            </Card>
        </ScrollView>
    );
}

const tasks = StyleSheet.create({
    Task_container: {
        justifyContent: 'center',
        alignItems: 'center',
        margin: '10%',
        backgroundColor: 'white',
        borderRadius: 6,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 10,

    },
    action_container: {
        flexDirection: 'row',
        padding: '1%'
    },
    button2: {
        marginLeft: 10
    }





});
