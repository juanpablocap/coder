import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { colors } from "../Styles/Colors"

const ButtonCustom = ({onPress}) => {
  return (
    <TouchableOpacity style={styles.button} onPress = {onPress}>
                    <Text>
                        Add Task
                    </Text>
                </TouchableOpacity>
  )
}

export default ButtonCustom

const styles = StyleSheet.create({
    button:{
        backgroundColor: colors.rosa,
        padding: 8,
        borderRadius: 10,
        borderWidth: 2,
    },
})