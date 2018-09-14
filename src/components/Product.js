import React from 'react';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity } from 'react-native';
import Context from '../../Context'
import SelectPatient from '../components/SelectPatient'

export default class Product extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View style={styles.Product}>
                <Image style={{ width: "100%", height: 100, borderRadius: 5, borderWidth: 1, borderColor: '#eee' }} source={{ uri: this.props.image }} />
                <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 12, color: '#333' }}> {this.props.product.name.toString().slice(0, 20)} </Text>
                <Text style={{ textAlign: 'center', color: '#6fa8e5', fontWeight: 'bold' }}> ${parseFloat(this.props.product.price).toFixed(2)} </Text>
                <View>
                    <Context.Consumer >
                        {state =>
                            (
                                <SelectPatient product={this.props.product} nav={this.props.nav} />
                            )}
                    </Context.Consumer>
                </View>
            </View >

        );
    }
}

const styles = StyleSheet.create({

    Product: {
        backgroundColor: 'white',
        width: "48.5%",
        marginBottom: 10,
        padding: 5,
        borderRadius: 2,
        borderWidth: 1,
        borderColor: '#ddd',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.8,
        shadowRadius: 10,
        elevation: 1,
    },
    btn: {
        backgroundColor: '#f38487',
        borderRadius: 5,
        padding: 5,
        textAlign: "center",
        color: 'white'
    }
});