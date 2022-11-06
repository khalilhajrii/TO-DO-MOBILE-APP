import { StyleSheet, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import Header from '../Components/Header';
import Tasks from '../Components/Tasks';
import axios from "axios";


export default function MainPage() {
    const [Task, setTask] = useState([]);
    const fetchData = async () => {
        await axios.get('http://10.0.2.2:3001/api/tasks/').then(res => {
            setTask(res.data)
            console.log(Task)
        }).catch((error) => {
            console.log(error);
        })
    }

    useEffect(()=>{
        fetchData();
    },[])
    return (
        <View style={page.container}>
            <Header />
            <Tasks />
            {Task.map((item, i)=>{
                return(
                    <View key={i}>
                <Text>{item.Name}</Text>
                <Text>{item.Description}</Text>
                </View>
                )})}
            
        </View>
    );
}

const page = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    }





});
