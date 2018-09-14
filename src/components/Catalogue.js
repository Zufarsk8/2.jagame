import React from 'react';
import { StyleSheet, Text, View, Button, Image, ScrollView, TextInput } from 'react-native';
import Product from './Product';
import Context from "../../Context";
export default class Home extends React.Component {

    constructor() {
        super();
        this.state = {
            products: [],
            term: ' '
        }

        this.searchHandler = this.searchHandler.bind(this)
    }

    searchHandler(text) {
        this.setState({ term: text })
        console.log(this.state.term)

        if (text == '') {
            this.setState({ term: ' ' })
        }

    }

    searchingFor(term) {
        return function (x) {
            return x.name.toLowerCase().includes(term.toLowerCase() || !term)
        }
    }

    componentDidMount = () => {
        fetch('https://82v9umvzoj.execute-api.ap-southeast-1.amazonaws.com/dev/products', {
        })
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    products: responseJson
                })
            })
            .catch((error) => {
                console.error(error);
            });
    }


    showSearch(isShow) {
        console.log(isShow)
        if (isShow) {
            return (
                <View style={styles.search_box}><TextInput placeholder="Search Catalogue"
                    style={{ height: 40, width: "100%", padding: 5, color: 'black' }} onChangeText={this.searchHandler} />
                </View>
            )
        }
        else return null
    }
    render() {


        if (this.state.products) {
            return (
                <View style={{ flex: 1, zIndex: 10 }}>

                    <Context.Consumer>
                        {state => (this.showSearch(state.showSearch))}
                    </Context.Consumer>


                    <ScrollView style={{ flex: 1 }}>
                        <View style={styles.container}>

                            {
                                this.state.products.filter(this.searchingFor(this.state.term)).map((item) =>
                                    <Product key={item.id} image={item.images[0].src} product={item} nav={this.props.navigation} />
                                )}
                        </View >
                    </ScrollView >

                </View>

            )
        }
        else
            return (
                <View >
                    <Text>Loading Products</Text>
                </View >)
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        paddingTop: 10,
        backgroundColor: "#f5f5f5",
        flexWrap: 'wrap',
    },
    search_box: {
        padding: 10,
        height: 60,
        width: '100%',
        backgroundColor: '#f5f5f5'
    },

});