import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Navbar = () => {
    return (
        <View style={styles.navContainer}>
            <Text style={styles.navText}>Navigation</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    navContainer: {
      flex: 1,
      backgroundColor: 'red',
      alignSelf: 'stretch',
      justifyContent: 'center',
      marginBottom: 40,
    },
    navText: {
      color: 'blue',
      fontSize: 30,
      alignSelf: 'center',
    }
});

export default Navbar;
