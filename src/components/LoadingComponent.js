import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
const LoadingComponent = () => {
    return (
        <View style={styles.container}>
            <ActivityIndicator size="large" color="#D73F8C" />
        </View>
    );
}

export default LoadingComponent;

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: '50%',
    }
})