import React, { Component } from 'react';
import Item from './item.js';
import './items.css';

class Items extends Component {
  constructor(props) {
    super(props);
    this.state = {
        name: '',
    };
    this.onChangeName = this.onChangeName.bind(this);
    this.onClickAdd = this.onClickAdd.bind(this);
  }


  onChangeName(e) {
    this.setState({
      name: e.target.value
    });
  }


  onClickAdd() {
    let name = this.state.name;
    if (name) {
      this.props.createNewItem(name);
    }
  }


  render() {
    return(
        <div className='items'>

          <p className='title'>Items</p><br />
          <input type='text'
                 className='enterName'
                 placeholder='Type name here...'
                 onChange={this.onChangeName} />

          <input type='button'
                className='addButton'
                value='Add new'
                onClick={this.onClickAdd} />

          <ul className='listItems'>
            {this.props.listItems.map(el => (<Item item={el}
                                                   key={el.name}
                                                   deleteItem={this.props.deleteItem}
                                                   activeItem={this.props.activeItem}
                                                   setActiveItem={this.props.setActiveItem} />))}
          </ul>

        </div>
    );
  }
}

export default Items;
