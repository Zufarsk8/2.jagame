import React, { Component } from 'react';
import { StyleSheet, Modal, Text, TouchableHighlight, View, Image, TextInput, TouchableOpacity } from 'react-native';
import Context from '../../Context'


class AddNewPatient extends Component {
    state = {
        modalVisible: false,
        patientName: ''
    };

    setModalVisible(visible) {
        this.setState({ modalVisible: visible });
    }

    existingPatientIsEmpty(state) {
        if (state.data.length != 0) {
            return (<Text style={{ textAlign: 'center', paddingTop: 10 }}>
                Existing patients:
    </Text>)
        }

    }

    render() {
        return (
            <View >
                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={this.state.modalVisible}
                    onRequestClose={() => {

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
                            <View style={{ marginLeft: 'auto', marginRight: 'auto', }}>
                                <Text style={{ fontWeight: 'bold', textAlign: 'center', paddingBottom: 30 }}>
                                    Add a New Patient.
                                  </Text>

                                <Image style={{ width: 120, height: 160, padding: 50, marginLeft: 'auto', marginRight: 'auto' }} source={require("../assets/patient.png")} resizeMode="contain" />
                                <TextInput placeholder="Patient's Name" style={{ padding: 20 }}
                                    onChangeText={(patientName) => {
                                        this.setState({ patientName })
                                    }} />
                                <TouchableOpacity onPress={() => {
                                    this.props.state.AddNewPatient(this.state.patientName)
                                    this.props.state.setPatient(this.state.patientName)
                                    this.setModalVisible(!this.state.modalVisible)
                                }
                                }>
                                    <View style={{ padding: 25, backgroundColor: '#1d9999' }}>
                                        <Text style={{ textAlign: 'center', color: 'white' }}>  Add Patient   </Text>
                                    </View>
                                </TouchableOpacity>

                                {this.existingPatientIsEmpty(this.props.state)}

                                {this.props.state.data.map(user => (

                                    <TouchableOpacity key={user.userName} onPress={() => {
                                        this.props.state.switchPatientTo(user.userName)
                                        this.setModalVisible(!this.state.modalVisible);
                                    }
                                    }>
                                        <View style={{ padding: 15, marginBottom: 10, backgroundColor: '#1d9999' }}>
                                            <Text style={{ textAlign: 'center', color: 'white' }}>  {user.userName}   </Text>
                                        </View>
                                    </TouchableOpacity>
                                ))}

                            </View>

                        </View>
                    </View>
                </Modal>

                <TouchableHighlight
                    onPress={() => {
                        this.setModalVisible(true);
                    }}>
                    {/* <Text style={styles.btn}>Add to list</Text> */}
                    <Image style={{ width: 24, height: 24, margin: 10 }} source={require("../assets/AddNewPatient.png")} resize='contain' />
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
export default AddNewPatient