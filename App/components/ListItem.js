import React from 'react';
import { View, StyleSheet, Image, TouchableHighlight } from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';

import AppText from './AppText';
import colors from './config/colors';

function ListItem({title, subtitle, image, onPress, IconComponent, renderRightActions}) {
    return (
        <Swipeable renderRightActions={renderRightActions}>
            <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
            <View style={styles.container}>
                {IconComponent}
                {image && <Image style={styles.image} source={image}/>}
                <View style={styles.detailsContainer}>
                    <AppText style={styles.title}>{title}</AppText>
                    {subtitle && <AppText style={styles.subtitle}>{subtitle}</AppText>}
                </View>
            </View>
            </TouchableHighlight>
        </Swipeable>
    );
}
const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        padding: 10,
        backgroundColor: colors.white 
    },
    detailsContainer: {
        marginLeft: 10,
        justifyContent: "center"
    },

    image: {
        width: 70,
        height: 70,
        borderRadius: 35
    },
    title: {
        fontWeight: "500"
    },
    subtitle: {
        color: colors.midum
    }
    
})
export default ListItem;