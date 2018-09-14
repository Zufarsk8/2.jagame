import React, { Component } from 'react';
import { StyleSheet, Modal, Text, TouchableHighlight, View, Image, TextInput, TouchableOpacity } from 'react-native';
import Context from '../../Context'
class SelectPatient extends Component {
    state = {
        modalVisible: false,
        patientName: ''
    };

    setModalVisible(visible) {
        this.setState({ modalVisible: visible });
    }

    isEmpty(state) {
        if (state.data.length == 0) {
            return (
                <View style={{ marginLeft: 'auto', marginRight: 'auto', }}>
                    <Text style={{ fontWeight: 'bold', textAlign: 'center', paddingBottom: 30 }}>
                        Add a New Patient.
                    </Text>
                    <Text>
                        Whoops! Looks like your patient list is empty.
                    </Text>
                    <Image style={{ width: 120, height: 160, padding: 50, marginLeft: 'auto', marginRight: 'auto' }} source={require("../assets/patient.png")} resizeMode="contain" />
                    <TextInput placeholder="Patient's Name" style={{ padding: 20 }}
                        onChangeText={(patientName) => {
                            this.setState({ patientName })
                            console.log(this.state.patientName)
                        }} />
                    <TouchableOpacity onPress={() => {
                        state.addToCart(this.state.patientName, this.props.product.name.toString().slice(0, 20), this.props.product.price)
                        state.setPatient(this.state.patientName)
                        this.setModalVisible(!this.state.modalVisible)
                    }
                    }>
                        <View style={{ padding: 25, backgroundColor: '#1d9999' }}>
                            <Text style={{ textAlign: 'center', color: 'white' }}>  Add Patient   </Text>
                        </View>
                    </TouchableOpacity>
                </View>
            )
        }
        else
            return (
                <View>

                    <View style={{ marginLeft: 'auto', marginRight: 'auto', }}>
                        <Text style={{ fontWeight: 'bold', textAlign: 'center', paddingBottom: 10 }}>
                            Choose your patient.
                    </Text>
                        <View style={{ padding: 30 }}>
                            <Text style={{ textAlign: 'center' }}>
                                Select which patient could use a
                           </Text>
                            <Text style={{ textAlign: 'center' }}>
                                {this.props.product.name}
                            </Text>
                        </View>
                        <Image style={{ width: 120, height: 160, padding: 50, marginLeft: 'auto', marginRight: 'auto' }} source={require("../assets/happypatient.png")} resizeMode="contain" />
                    </View>
                    {state.data.map(patient =>

                        <TouchableOpacity key={patient.userName} style={{ padding: 15, backgroundColor: '#1d9999', margin: 10, }} onPress={() => {
                            state.addToCart(patient.userName, this.props.product.name.toString(), this.props.product.price)
                            this.setModalVisible(!this.state.modalVisible)
                        }
                        }>
                            <Text style={{ color: 'white', textAlign: 'center', }} >{patient.userName}</Text>
                        </TouchableOpacity>

                    )}
                </View>)
    }

    render() {
        return (
            <View >
                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={this.state.modalVisible}
                    onRequestClose={() => {
                        alert('Modal has been closed.');
                    }}>
                    <View style={{ marginTop: 22 }}>
                        <View>
                            <TouchableHighlight
                                onPress={() => {
                                    this.setModalVisible(!this.state.modalVisible);
                                }}>
                                <View style={{ marginLeft: 'auto', padding: 10 }}>
                                    <Image style={{ width: 20, height: 20, marginLeft: 'auto', marginRight: 'auto' }} source={require("../assets/close.png")} resizeMode="contain" />
                                </View>

                            </TouchableHighlight>

                            <Context.Consumer >
                                {state => (this.isEmpty(state))}
                            </Context.Consumer>
                        </View>
                    </View>
                </Modal>

                <TouchableHighlight
                    onPress={() => {
                        this.setModalVisible(true);
                    }}>
                    {/* <Text style={styles.btn}>Add to list</Text> */}
                    <Image style={{ width: 20, height: 20, marginLeft: 'auto', }} source={require("../assets/jagalistAdd.png")} resizeMode="contain" />
                </TouchableHighlight>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    btn: {
        backgroundColor: '#fff',
        borderColor: '#eb7073',
        borderWidth: 1,
        borderRadius: 5,
        padding: 5,
        textAlign: "center",
        color: 'black'
    }
})
export default SelectPatient