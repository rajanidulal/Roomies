import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Header = (props) => {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>{ props.title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        height: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title:{
        color:'#F3F3F3',
        fontSize:28,
        fontWeight:'900',
        textTransform:'uppercase'
    }
});

export default Header;