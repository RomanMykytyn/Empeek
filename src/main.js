import './main.css';
import { render } from 'react-dom';
import Items from './items.js';
import Comments from './comments.js';
import React, { Component } from 'react';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        listItems: [],
        activeItem: {name: '', comments: []},
        numberActiveItem: '',
    };
    this.createNewItem = this.createNewItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.setActiveItem = this.setActiveItem.bind(this);
    this.createComment = this.createComment.bind(this);
  }


  componentDidMount() {
    let listItems = JSON.parse(localStorage.getItem('listItems'));
    this.setState({
      listItems: listItems
    });
  }


  createNewItem(name) {
    let newItem = {name: name, comments: []};
    let newListItems = this.state.listItems;
    for (let i = 0; i < newListItems.length; i++) {
      if (newListItems[i].name === name) {
        alert('This name already exist!');
        return
      }
    }
    newListItems.push(newItem);
    this.setState({
      listItems: newListItems
    });
    localStorage.setItem('listItems', JSON.stringify(this.state.listItems));
  }


  deleteItem(name) {
    let newListItems = this.state.listItems;
    for (let i = 0; i < newListItems.length; i++) {
      if (newListItems[i].name === name) {
        newListItems.splice(i, 1);
        this.setState({
          listItems: newListItems,
          activeItem: {name: '', comments: []},
          numberActiveItem: ''
        });
        localStorage.setItem('listItems', JSON.stringify(this.state.listItems));
        return
      }
    }
  }


  createComment(nameItem, text) {
    let newListItems = this.state.listItems;
    for (var i = 0; i < newListItems.length; i++) {
      if (newListItems[i].name === nameItem) {
        newListItems[i].comments.push(text);
        let newActiveItem = newListItems[i];
        this.setState({
          listItems: newListItems,
          activeItem: newActiveItem
        });
        localStorage.setItem('listItems', JSON.stringify(this.state.listItems));
        return
      }
    }
  }


  setActiveItem(item) {
    let newListItems = this.state.listItems;
    for (var i = 0; i < newListItems.length; i++) {
      if (newListItems[i].name === item.name) {
        this.setState({
          activeItem: item,
          numberActiveItem: i + 1
        });
      }
    }
  }


  render() {
    return(
      <>
        <Items createNewItem={this.createNewItem}
               listItems={this.state.listItems}
               deleteItem={this.deleteItem}
               activeItem={this.state.activeItem}
               setActiveItem={this.setActiveItem} />
        <Comments activeItem={this.state.activeItem}
                  createComment={this.createComment}
                  numberActiveItem={this.state.numberActiveItem} />
      </>
    );
  }
}


render(<App />, document.getElementById('root'));
