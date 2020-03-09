import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native';
import ImagemHeaderComponent from '../components/ImagemHeaderComponent';
import LoadingComponent from '../components/LoadingComponent';
import api from '../services/api';
class LoginScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            senha: '',
            logado: 0,
        };

    }

    logar = () => {
        this.setState({ logado: 1 })
        api.logar()
            .then(() => {
                this.setState({ logado: 0 })
                this.props.navigation.navigate('TabNavigator')
            })
    }

    inputEmail = (texto) => {
        this.setState({
            email: texto
        });
    }
    inputSenha = (senha) => {
        this.setState({
            senha: senha
        });
    }
    render() {
        return (
            <View style={styles.container}>
                {this.state.logado === 1 && <LoadingComponent />}
                <View style={styles.imagemHeader}>
                    <ImagemHeaderComponent />
                </View>

                <View style={styles.viewEmail}>
                    <Text style={styles.textNormal}>Para acessar o app informe seu
                    <Text style={styles.textNegrito}> email</Text>
                    </Text>

                    <View style={{}}>
                        <TextInput
                            placeholder="Email"

                            style={styles.styleInput}
                            onChangeText={(texto) => this.inputEmail(texto)}
                            value={this.state.email}
                        />
                    </View>
                </View>


                <View style={styles.viewSenha}>
                    <Text style={styles.textNormal}>Agora digite sua
                    <Text style={styles.textNegrito}> senha</Text>
                    </Text>

                    <View style={styles.viewEmailInput}>
                        <TextInput
                            placeholder="Senha"
                            // secureTextEntry={true}
                            style={styles.styleInput}
                            onChangeText={(senha) => this.inputSenha(senha)}
                            value={this.state.senha}
                        />
                    </View>
                </View>
                <TouchableOpacity onPress={this.logar} style={styles.botaoAcessar}>
                    <Text style={styles.textBotao}>ACESSAR</Text>
                </TouchableOpacity>
            </View >
        );
    }
}
export default LoginScreen;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        alignItems: 'center'
    },
    imagemHeader: {
        width: '100%',
        padding: 20, alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderColor: '#808080',
    },

    viewEmail: {
        width: '100%',
        marginTop: 30,
        padding: 20,
    },
    textNormal: {
        fontSize: 19,
    },
    textNegrito: {
        fontWeight: 'bold'
    },
    viewEmailInput: {
        marginTop: 15,
    },
    viewSenha: {
        width: '100%',
        marginTop: 15,
        padding: 20,
    },
    styleInput: {
        height: 40,
        width: '100%',
        borderColor: '#808080',
        borderBottomWidth: 1
    },
    botaoAcessar: {
        backgroundColor: '#D73F8C',
        height: 60,
        width: '100%',
        position: 'absolute',
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textBotao: {
        color: '#FFF'
    }
});