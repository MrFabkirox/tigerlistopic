import React, { Component } from 'react'
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { connect } from 'react-redux'
import { getItems, deleteItem } from '../actions/itemActions'
import PropTypes from 'prop-types'

class ShoppingList extends Component {

  componentDidMount() {
    this.props.getItems()
  }

  onDeleteClick = id => {
    this.props.deleteItem(id)
  }

  /*state = {
    items: [
      { id: uuid(), name: 'water' },
      { id: uuid(), name: 'cucumber' },
      { id: uuid(), name: 'tomato' }
    ]
  }*/

  render() {

    // this.state.items // using destructuring instead
    // const { items } = this.state // pull items from component state w was up
    // before mapping to props
    
    // item represent the entire state object and items the array
    // this.props.item.items

    const { items } = this.props.item

    return (

      <Container>

        <Button
//          color="dark"
//          style={{marginBottom: '2rem'}}
//          onClick={() => {
//            const name = prompt('Enter item')
//            if(name) {
//              this.setState(state => ({
//                items: [...state.items, { id: uuid(), name }]
//              }))
//            }
//          }}
        >old add from component</Button>

        <ListGroup>
          <TransitionGroup className="shopping-list">

            {items.map(({ _id, name }) => (
              <CSSTransition key={_id} timeout={500} classNames="fade">
                <ListGroupItem>

                  <Button
                    className="remove-btn"
                    color="danger"
                    size="sm"
                    onClick={this.onDeleteClick.bind(this, _id)}
                  >
                  &times;
                  </Button>

                  {name}
                  
                </ListGroupItem>

              </CSSTransition>
            ))}

          </TransitionGroup>
        </ListGroup>

      </Container>

    )
  }

}

ShoppingList.propTypes = {
  getItems: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  // this item refers to reducers/index.js
  item: state.item
})

export default connect(mapStateToProps, {
  getItems,
  deleteItem
})(ShoppingList)
