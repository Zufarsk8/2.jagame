import { StyleSheet, Text, View, Button, Image, StatusBar } from 'react-native';
import React from 'react';
import { createStackNavigator } from 'react-navigation';
import Navbar from './src/components/Navbar';
import Catalogue from './src/components/Catalogue';
import ProductCart from './src/components/ProductCart';
import Product from './src/components/Product';

const NavOptions = ({ navigation }) => ({

    // headerTitle: <Image style={{ width: 90, height: 30, margin: 10 }} source={require("./src/assets/logo.pink.large.png")} />,
    headerTitle: (

        <View style={{ flexDirection: 'row' }} >
            <StatusBar barStyle="dark-content" />
            <Navbar nav={navigation} />
        </View>
    ),

    headerStyle: {
        // backgroundColor: '#333',
    },


    headerTintColor: "#fff"


})

const AppNavigator = createStackNavigator({
    CatalogueScreen: { screen: Catalogue, navigationOptions: NavOptions },
    Product: { screen: Product },
    ProductCartScreen: {
        screen: ProductCart,
        navigationOptions: {
            headerTitle:
                (
                    < View style={{ flexDirection: 'row' }}>
                        <Image style={{ width: 18, height: 24, margin: 10 }} source={require("./src/assets/jagalistGrey.png")} />
                        <Text style={{ marginTop: 'auto', marginBottom: 'auto', color: '#6D798D', fontWeight: 'bold', fontSize: 16 }}>
                            Product List
                        </Text>
                    </View >
                )
            ,
            headerStyle: {
                backgroundColor: '#fff',
            },
            headerTintColor: "#6D798D"
        },
    },
    Navbar: { screen: Navbar },
},
    {
        initialRouteName: 'CatalogueScreen',
    },
);

export default AppNavigator;
