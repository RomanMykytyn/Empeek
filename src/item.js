import React, { Component } from 'react';
import './item.css';

class Item extends Component {
  constructor(props) {
    super(props);
    this.onClickDelete = this.onClickDelete.bind(this);
    this.onClickItem = this.onClickItem.bind(this);
  }


  onClickDelete() {
    this.props.deleteItem(this.props.item.name);
  }


  onClickItem() {
    this.props.setActiveItem(this.props.item)
  }


  render() {
    let count = this.props.item.comments.length
    let activeClass = (this.props.item.name === this.props.activeItem.name) ? ' active' : '';
    return(
      <li>

        <div className={'borderItem' + activeClass}>
        </div>

        <div className='item'>

          <div className='itemName'
               onClick={this.onClickItem}>
            {this.props.item.name}
            <span className='counter'>
              {count}
            </span>
          </div>

          <input type='button'
                 className='deleteButton'
                 value='Delete'
                 onClick={this.onClickDelete} />
        </div>
      </li>
    );
  }
}

export default Item;
