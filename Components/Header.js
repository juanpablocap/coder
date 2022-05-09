import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import ButtonCustom from "./Button";
import { useState } from "react";

const Header = ({handleAdd}) => {

    const [input, setInput] = useState("")

    return (
        <View style = {StyleSheet.topContainer}>
            <TextInput
            style = {StyleSheet.input}
            placeholder = "Add Todo"
            onChangeText = {setInput}
            value = {input}
        />
        <ButtonCustom onPress={handleAdd} />
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    topContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    }
})