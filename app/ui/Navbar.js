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
      backgroundColor: '#2A2D34',
      alignSelf: 'stretch',
      justifyContent: 'center',
    //   marginBottom: 10,
    },
    navText: {
      color: '#fff',
      fontSize: 30,
      fontWeight: 'bold',
      alignSelf: 'center',
    }
});

export default Navbar;
