import React, { Component } from 'react';
import logo from './logo.svg';
import AppNavbar from './components/AppNavbar'
import ShoppingList from './components/ShoppingList'
import ItemModal from './components/ItemModal'
import { Container } from 'reactstrap'

import { Provider } from 'react-redux'
import store from './store'

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

class App extends Component {
  render() {
    return (

      <Provider store={store}>

        <div className="App">
          <header className="App-header">
  
            <h3>A tiger list, qui tombe a peak !</h3>
  
            <AppNavbar />

            <Container>
              <ItemModal />
              <ShoppingList />
            </Container>

            <img src={logo} className="App-logo" alt="logo" />
  
          </header>
        </div>
      
      </Provider>
    );
  }
}

export default App;
