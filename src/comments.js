import React, { Component } from 'react';
import Comment from './comment.js';
import './comments.css';
const uuidv4 = require('uuid/v4');

class Comments extends Component {
  constructor(props) {
    super(props);
    this.state = {
        textComment: '',
    };
    this.onChangeComment = this.onChangeComment.bind(this);
    this.addComment = this.addComment.bind(this);
  }


onChangeComment(e) {
  this.setState({
    textComment: e.target.value
  });
}


addComment(e) {
  if (e.ctrlKey && e.charCode === 13) {
    let text = this.state.textComment;
    if (text) {
      this.props.createComment(this.props.activeItem.name, text);
    }
  }
}


  render() {
    let comments = this.props.activeItem.comments;
    return(
      <div className='comments'>
        <p className='title'>Comments #{this.props.numberActiveItem}</p><br />

        <div className='listComments'>
        {comments.map((el, index) => (<Comment comment={el}
                                      key={uuidv4()}
                                      index={index} />))}
        </div>

        <div className="picture picture_down">
        </div>

        <textarea onChange={this.onChangeComment}
                  onKeyPress={this.addComment}
                  placeholder='"CTRL+Enter" to create a comment.'>
        </textarea>
      </div>
    );
  }
}

export default Comments;
