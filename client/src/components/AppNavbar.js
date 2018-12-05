import React, { Component } from 'react'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container
} from 'reactstrap'

class AppNavbar extends Component {

//  constructor(props) {
//     super(props)
// 
//     // in react component default lifecycle method like componentDidMount or render
//     // method 'this' is awailable, toggle or custom method doesn t
//     // this.toggle = this.toggle.bind(this) // or use arrow function
// 
//     this. // since bindin out w arrow function no constructor needed for state 
    
  state = {
    isOpen: false
  }

  toggle = () => {

    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  render() {
    return (

      <div>
        <Navbar color="dard" dark expand="sm" className="mb-5">
          <Container>
            <NavbarBrand href="/">shopping list</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink href="http://localhost:3000/">index</NavLink>
                  <NavLink href="http://localhost:5000/api/items">items</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Container> 
        </Navbar>
      </div>

    )

  }

}

export default AppNavbar
