import './App.css';
import React, { Component } from 'react';

class Subject extends Component { //컴포넌트1
  render() { //class 안에 소속되는 함수는 function을 생략가능
    return ( //render함수에서는 하나의 최상위 태그로 시작,사용해야 한다.
      <header>
        <h1>{this.props.title}</h1>
        {this.props.sub}
        word wide web!
      </header>
    );
  }
}

class TOC extends Component { //컴포넌트2
  render() {
    return (
      <nav>
        <ul>
          <li><a href="1.html">HTML</a></li>
          <li><a href="2.html">CSS</a></li>
          <li><a href="3.html">JavaScript</a></li>
        </ul>
      </nav>
    );
  }
}

class Content extends Component { //컴포넌트3
  render() {
    return (
      <article>
        <h2>{this.props.title}</h2>
        {this.props.content}
      </article>
    );
  }
}

class App extends Component { //메인 컴포넌트
  render() {
    return ( // jsx : html과 js코드가 공존할 수 있게 해주는 것
      <div className="App">
        <Subject title="Web" sub="world wide web!"></Subject>
        <TOC></TOC>
        <Content title="HTML" content="HTML is HyperText Markup Language."></Content>
      </div>
    );
  }
}

export default App;
