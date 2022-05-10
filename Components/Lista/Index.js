import { FlatList, StyleSheet, Text, View } from "react-native";
import React from 'react';
import TodoItem from './TodoItems';
import { colors } from '../../Styles/Colors';

const Lista = ({handleModal, todolist}) => {
    
    const renderTodo = ({ item}) => 
        <TodoItem onPress = {handleModal} todo={item}></TodoItem>

    return (
        <View style = {styles.itemList}>

        </View>
    )
}

// comentarios para hacer un commit