import React from 'react';
import { Platform, Text, StyleSheet } from 'react-native';

function AppText({children}) {
    return (
        <Text style={styles.text}>{children}</Text>
    );
}
 
const styles = StyleSheet.create({
    text:{
        color: "tomato",
        fontSize: 20,
        fontFamily: "Avenir",
    }
})
export default AppText;