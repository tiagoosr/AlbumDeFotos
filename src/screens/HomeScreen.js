import React from 'react';
import { View, StyleSheet, SafeAreaView, FlatList, Image, ActivityIndicator } from 'react-native';
import { Dimensions } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import api from '../services/api';
import LoadingComponent from '../components/LoadingComponent';
const width = Dimensions.get("window").width;
const widthDatela = width / 2
class HomeScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            listaDeFotos: [],
        };

        this.getListaDeTarefas = this.getListaDeTarefas.bind(this);
    }

    getListaDeTarefas = () => {
        api.getImage()
            .then(response => {
                this.setState({
                    listaDeFotos: response.data
                })
                console.log("lista", this.state.listaDeFotos);
                console.log('largura', widthDatela)
            })
            .catch(error => {
                console.log(error);
            });
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <NavigationEvents
                    onWillFocus={this.getListaDeTarefas()}
                />
                {this.state.listaDeFotos.length === 0 && <LoadingComponent/>}
                <FlatList
                    numColumns={2}
                    data={this.state.listaDeFotos}
                    renderItem={({ item }) => <Item listaDeFotos={item} />}
                    keyExtractor={item => item.id.toString()}
                />
            </SafeAreaView>
        );
    }
}
export default HomeScreen;

const Item = (props) => {
    return (
        <View>
            <Image
                style={{ width: widthDatela, height: widthDatela }}
                source={{ uri: props.listaDeFotos.url }}
            />

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems:'center',
        justifyContent:'center'
    },

});