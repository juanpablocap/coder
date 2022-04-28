
import { View, Button, TextInput, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useState } from "react";
import { colors } from "../Styles/Colors";
import Item from "../Components/Item";
import ButtonCustom from "../Components/Button";

const Layout = () => {

    const [input, setInput] = useState("")
    const [todoList, setTodoList] = useState([])

    const handleAdd = () => {
        if (input !== ""){
        setTodoList([...todoList, {id: Date.now, todo: input}])
        setInput("");
        }
        console.log(input, Date.now);
    }


    return(
        <View style={styles.container}>
            <View style={styles.topContainer}>
                <TextInput 
                placeholder="Ingresa tu tarea.." 
                style={styles.input} 
                onChangeText={setInput}
                value={input} />
                <ButtonCustom onPress ={handleAdd} />
            </View>
            <View style={styles.itemList}>
                { todoList.length !==0 ? 
                todoList.map (item =>{
                    return(
                        <Item item = {item} key={item.id} />
                    )
                })
                : <text>No hay items cargados</text>
            }
            </View>
        </View>
    )
}

export default Layout;

const styles = StyleSheet.create({
    container: {
        padding: 25,
        flexDirection: 'column',
        justifyContent: 'space-around',
    },
    topContainer:{
        marginTop:30,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: 8, 
    },
    input:{
        borderRadius: 8,
        borderWidth: 2,
        width: 200,
        padding: 4,
        fontSize: 18,
    },
    itemList:{
        backgroundColor: colors.gray,
        borderRadius: 8,
        width: '95%',
        padding: 20,
    },
})