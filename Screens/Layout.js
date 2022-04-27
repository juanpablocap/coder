
import { View, Button, TextInput, Text, StyleSheet } from "react-native";
import { colors } from "../Styles/Colors";
import Item from "../Components/Item";

const Layout = () => {
    return(
        <View style={styles.container}>
            <View style={styles.topContainer}>
                <TextInput style={styles.input} />
                <Button title='Add Task' />
            </View>
            <View style={styles.itemList}>
                <Item item={{id:1, todo: "Estudiar React Native!"}}></Item>
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
    },
    itemList:{
        backgroundColor: colors.gray,
        borderRadius: 8,
        width: '90%',
        padding: 20,
    }
})