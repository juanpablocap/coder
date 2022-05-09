import { Modal, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import React, { useState} from "react";

const CustomModal = ({modalVisible, 
                    setModalVisible, 
                    handleEdit, 
                    todoSelected,
                    handleDelete}) => {

    

    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={modalVisible}
            onRequestClose={()=> {
                setModalVisible(!modalVisible);
            }}
        >
            <View style = {styles.modalContainer}>
                <View style = {styles.content}>
                    <TouchableOpacity onPress={()=> setModaleVisible(false)}>
                        <Text>X</Text>
                    </TouchableOpacity>
                    <TextInput
                        style={styles.input}
                        onChangeText={handleEdit}
                        value={todoSelected.todo}
                    />
                    <TouchableOpacity onPress={handleDelete}>
                        <Text>Eliminar </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    )
}

export default CustomModal