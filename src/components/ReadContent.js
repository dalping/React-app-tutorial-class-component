import React, { Component } from 'react';

class ReadContent extends Component { //컴포넌트3
  render() {
    return (
      <article>
        <h2>{this.props.title}</h2>
        {this.props.content}
      </article>
    );
  }
}

export default ReadContent;