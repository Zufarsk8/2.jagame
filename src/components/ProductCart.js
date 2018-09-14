import React from 'react';
import { StyleSheet, Text, View, Button, Image, ScrollView, TouchableOpacity } from 'react-native';
import Context from "../../Context";


export default class ProductCart extends React.Component {
    constructor(props) {
        super(props);
    }



    cartIsEmpty(state) {



        if (state.currentCart.length == 0) {
            return (
                <View style={{ flex: 1, paddingTop: 100 }}>

                    <Image style={{ height: 50, width: 50, marginLeft: 'auto', marginRight: 'auto' }} source={require("../assets/emptyCart.png")} resizeMode="contain" />
                    <Text style={{ textAlign: 'center', padding: 10 }}>Your cart is empty.</Text>

                </View>

            )
        }
        else {

            return (
                state.currentCart.map((product, index) => (
                    <View key={product.productName} style={{ flexDirection: 'row', paddingHorizontal: 30, paddingVertical: 10, }}>
                        <View style={{ backgroundColor: '#CCD6E5', height: 8, width: 8, borderRadius: 4, marginTop: 'auto', marginBottom: 'auto', marginRight: 10 }}></View>
                        <Text style={{ color: '#6D798D', fontWeight: 'bold', flexWrap: 'wrap' }} >
                            {product.productName.substring(0, 20)}
                        </Text>
                        <View style={{ marginLeft: 'auto', }}>
                            <Text style={{ color: '#6D798D' }}>
                                ${product.productPrice}
                            </Text>
                        </View>
                    </View>
                ))
            )
        }
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <ScrollView style={{ backgroundColor: '#F5F9FF' }}>
                    <Context.Consumer>
                        {state => (
                            this.cartIsEmpty(state)
                        )}
                    </Context.Consumer>
                </ScrollView>
                <View style={{ flexDirection: 'row', paddingHorizontal: 30, paddingVertical: 10, backgroundColor: 'white', position: 'relative', bottom: 0, height: 100 }}>
                    <Image style={{ height: 15, width: 15, marginTop: 'auto', marginBottom: 'auto', marginRight: 10 }} source={require("../assets/wallet.png")} resizeMode="contain" />
                    <Text style={{ color: '#6D798D', fontWeight: 'bold', marginTop: 'auto', marginBottom: 'auto' }} >
                        Total
                    </Text>
                    <View style={{ marginLeft: 'auto', marginTop: 'auto', marginBottom: 'auto' }}>
                        <Text style={{ color: '#6D798D' }}>
                            <Context.Consumer>
                                {state => (
                                    <Text>
                                        ${state.currentCart.reduce((prev, next) => prev + parseFloat(next.productPrice), 0).toFixed(2)}
                                    </Text>
                                )}
                            </Context.Consumer>
                        </Text>
                    </View>
                </View>
                <Context.Consumer>
                    {state => (
                        <TouchableOpacity onPress={() => {
                            state.postPatient(state.currentPatient, state.currentCart)
                        }
                        }>
                            <View style={{ backgroundColor: '#333', padding: 10 }}>
                                <Text style={{ color: 'white', textAlign: 'center' }}>
                                    Send to Jaga Staff
                </Text>
                            </View>
                        </TouchableOpacity>
                    )}
                </Context.Consumer>

            </View >


        )
    }
}

const styles = StyleSheet.create({


});