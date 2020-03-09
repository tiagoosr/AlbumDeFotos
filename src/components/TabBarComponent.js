import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import Icon from 'react-native-vector-icons/FontAwesome';
const iconFeed = <Icon name="feed" size={30} color="#D73F8C" />;
const iconCamera = <Icon name="camera" size={30} color="#D73F8C" />;
const iconEllipsis = <Icon name="ellipsis-h" size={30} color="#D73F8C" />;
const TabBarComponent = (props) => {

    const abrirCamera = () => {
        ImagePicker.openCamera({
            width: 300,
            height: 400,
            cropping: true,
        }).then(image => {
            console.log(image);
        })
    }
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.botaoContainer} onPress={() => props.navigation.navigate('HomeScreen')}>
                {iconFeed}
                <Text style={styles.BotaoText}>Feed de imagens</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.botaoContainer} onPress={(abrirCamera)}>
                {iconCamera}
                <Text style={styles.BotaoText}>Tirar foto</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.botaoContainer} onPress={() => props.navigation.navigate('MaisScreen')}>
                {iconEllipsis}
                <Text style={styles.BotaoText}>Mais</Text>
            </TouchableOpacity>
        </View>
    );
}
export default TabBarComponent;
const styles = StyleSheet.create({
    container: {
        elevation: 8,
        backgroundColor: '#FFF',
        height: 60,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    botaoContainer: {
        alignItems: 'center',
        flex: 1
    },
    BotaoText: {
        color: '#D73F8C',
        fontSize: 12
    }
});