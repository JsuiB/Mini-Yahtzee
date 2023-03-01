import React from "react";
import { Text, View } from 'react-native'
import Styles from "../Styles/Styles";

export default Footer = () => {
    return (
        <View style={Styles.footer}>
            <Text style={Styles.author}>
                Author: Jussi Wedman
            </Text>
        </View>
    )
}