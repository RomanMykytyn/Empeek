import React, { Component } from 'react';
import './comment.css';

class Comment extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let index = this.props.index;
    let color = index % 2 ? ' isBlue' : ' isOrange';
    return(
      <div className='comment'>

        <div className={"picture" + color}>
        </div>

        <div className='textComment'>
          {this.props.comment}
        </div>
      </div>
    );
  }
}

export default Comment;
