
import { View, Button, TextInput, Text, StyleSheet } from "react-native";
import { useState } from "react";
import { colors } from "../Styles/Colors";
import Item from "../Components/Item";
import ButtonCustom from "../Components/Button";
import Header from '../Components/Header';
import Lista from '../Components/Lista';
import CustomModal from '../Components/Modal';
 
const Layout = () => {

    const [modalVisible, setModalVisible] = useState(false);
    const [todoSelected, setTodoSelected] = useState([]);
    const [todoList, setTodoList] = useState({});

    const handleAdd = (input) => {
        {
            setTodoList([...todoList, {id: Date.now(), todo: input}])
        }
    }

    const handleModal = (todoSelected) => {
        setModalVisible(true);
        setTodoSelected(todoSelected);
    }

    const handleDelete = () => {
        const todoFiltrados = todoList.filter(item => item !== todoSelected);
        setTodoList(todoFiltrados);
        setModalVisible(false);
    }

    const handleEdit = (text) => {
        const todoToEdit = todoList.find(todo => todo.id === todoSelected.id);
        todoToEdit.todo = text;
        const todoAux = [];
        todoList.forEach((item) => {
            todoAux.push(item)
        })
        setTodoList(todoAux)
    }

    return(
        <View style={styles.container}>
            <Header handleAdd={handleAdd} />
            <Lista handleModal={handleModal} todoList={todoList}/>
            <CustomModal
                modalVisible={modalVisible}
                setModalVisible={setModalVisible}
                handleEdit={handleEdit}
                handleDelete={handleDelete}
            />
        </View>
    )
}

export default Layout;

const styles = StyleSheet.create({
    container: {
        padding: 25,
        flexDirection: 'column',
        justifyContent: 'space-around',
}})