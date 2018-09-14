import React from 'react';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity } from 'react-native';
import Context from "../../Context";
import AddNewPatient from '../components/AddNewPatient'

export default class Navbar extends React.Component {

    getCurrentPatient(state) {

        currentPatient = state.data.find(obj => obj.userName == state.currentPatient)
        console.log()
        return
        (currentPatient.productList.map(item => {
            <Text>{currentPatient}</Text>
        })
        )
    }

    render() {
        return (
            <View style={styles.Navbar}>


                <Image style={{ width: 90, height: 30, margin: 10 }} source={require("../assets/logo.pink.large.png")} />

                <View style={{ marginLeft: 'auto' }}>
                    <View style={{ flexDirection: 'row', flex: 1, }}>
                        <Context.Consumer >
                            {state =>
                                <TouchableOpacity onPress={state.toggleSearch}>
                                    <Image style={{ width: 24, height: 24, margin: 10, }} source={require("../assets/searchicon.png")} resizeMode='contain' />
                                </TouchableOpacity>
                            }
                        </Context.Consumer>

                        {/* <Image style={{ width: 24, height: 24, margin: 10, }} source={require("../assets/addNewPatient.png")} resizeMode='contain' /> */}
                        <Context.Consumer >
                            {state =>
                                <AddNewPatient state={state} />
                            }

                        </Context.Consumer>

                        <TouchableOpacity onPress={() =>
                            this.props.nav.navigate('ProductCartScreen')}>
                            <View style={{ flexDirection: 'row' }}>
                                <Image style={{ width: 18, height: 24, margin: 10 }} source={require("../assets/jagalist.png")} />
                                <Context.Consumer >
                                    {state => <Text style={styles.listCount}>&nbsp;{state.currentCartSize} </Text>}
                                </Context.Consumer>
                                <Context.Consumer >
                                    {state => <Text style={{ marginTop: 'auto', marginBottom: 'auto', marginRight: 10, color: '#eb7073' }}>{state.currentPatient}</Text>}
                                </Context.Consumer>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({

    Navbar: {
        flexDirection: 'row',
        flex: 1,
        // backgroundColor: "#333"
    },
    btn: {
        backgroundColor: '#f38487',
        borderRadius: 5,
        padding: 5,
        textAlign: "center",
        color: 'white'
    }
    , listCount: {
        color: "white",
        position: "absolute",
        bottom: 5,
        left: 5,
        backgroundColor: '#eb7073',
        borderRadius: 50,
        fontSize: 10
    }
});