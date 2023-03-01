import React from "react";
import { Text, View } from 'react-native'
import Styles from "../Styles/Styles";

export default Header = () => {
    return (
        <View style={Styles.header}>
            <Text style={Styles.title}>
                Dices game
            </Text>
        </View>
    )
}