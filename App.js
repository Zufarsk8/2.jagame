import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import AppNavigator from './AppNavigator';
import Context from './Context'

export default class App extends React.Component {

  componentDidMount = () => {

  }

  getPrice(price) {

    if (isNaN(parseFloat(price))) {
      return 0
    }
    else return parseFloat(price)
  }

  state = {
    number: 0,
    inc: () => {
      this.setState({ number: this.state.number + 1 })
    },
    toggleSearch: () => {
      this.setState(previousState => ({
        showSearch: !previousState.showSearch
      }))
    },
    route: '',
    showSearch: false,
    data: [],
    currentPatient: '',
    currentCart: [],
    currentCartSize: 0,
    postPatient: (patient, cart) => {
      fetch('https://webhook.site/16fb45fb-9458-4139-980f-e3e9de3a2cc5', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ patientName: patient, productList: cart }),
      });
    },
    setPatient: (name) => {
      this.setState({ currentPatient: name })
    },
    switchPatientTo: (name) => {
      this.setState(previousState => ({
        currentPatient: name,
        currentCart: previousState.data.find(obj => obj.userName == name).productList,
        currentCartSize: previousState.data.find(obj => obj.userName == name).productList.length
      }))
    },

    AddNewPatient: (userName) => {
      this.setState(previousState => ({
        data: [...previousState.data, { userName: userName, productList: [] }],
        currentCartSize: 0,
        currentCart: []
      }))
    },
    addToCart: (userName, productName, price) => {

      // if data is empty, create new object
      if (this.state.data.length == 0) {
        this.setState(previousState => ({
          data: [...previousState.data, { userName: userName, productList: [{ productName: productName, productPrice: price }] }],
          currentCartSize: 1,
          currentCart: [{ productName: productName, productPrice: this.getPrice(price) }]
        }))
      }
      else {
        // if data is not empty, search for correct user name
        newProductList = this.state.data
          .find(object => object.userName == userName)
          .productList

        newProductList.push({ productName: productName, productPrice: this.getPrice(price) })

        this.setState({
          currentCart: newProductList,
          currentPatient: userName,
        })

        console.log('data', this.state.data)
        console.log('here', this.state.data.find(obj => { return obj.userName != userName }))
        this.setState(previousState => ({
          data: (previousState.data.filter(obj => obj.userName != userName)).concat({ userName: userName, productList: newProductList }),
          currentCartSize: newProductList.length
        }))
      }
      // console.log('data', this.state.data)
    }
  }


  render() {
    return (

      <View style={styles.container}>

        <Context.Provider value={this.state}>
          <AppNavigator />
        </Context.Provider>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
