import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
const iconOut = <Icon name="sign-out-alt" size={30} color="#808080" />;
class MaisScreen extends React.Component {
    constructor(props) {
        super(props);

    }

    sairDoAplicativo=()=>{
        this.props.navigation.navigate('LoginScreen')
        
    }

    render() {
        return (
            <View style={styles.container}>

                <View style={styles.viewHeader}>
                    <Text>Teste Técnico CTIS</Text>
                    <Text>Versão 1.0.2 (Número da build 10)</Text>
                </View>

                <TouchableOpacity onPress={this.sairDoAplicativo} style={styles.botaoSair}>
                    {iconOut}
                    <Text>   Sair</Text>
                </TouchableOpacity>

            </View>
        );
    }
}
export default MaisScreen;
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    viewHeader: {
        padding: 10
    },
    botaoSair: {
        position: 'absolute',
        borderWidth: 1,
        borderColor: '#808080',
        flexDirection: 'row',
        width: '100%',
        top: 60,
        height: 40,
        alignItems: 'center',
        paddingLeft: 10,
        alignItems: 'center',
    }
});