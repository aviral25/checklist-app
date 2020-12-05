import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: '10%',
        borderBottomWidth: 8,
        borderBottomColor: "yellow",
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#0a508b'
    },
    text: {
        fontSize: 18,
        letterSpacing: 1.1,
        fontWeight: 'bold',
        color: '#fff'
    }
});

export default class Header extends React.Component {
    render() {
        return (
            <View style={styles.header}>
                <Text style={styles.text}>{this.props.title}</Text>
            </View>
        );
    }
}