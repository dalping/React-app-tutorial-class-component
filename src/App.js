import './App.css';
import React, { Component } from 'react';
import Subject from './components/Subject';
import TOC from './components/TOC';
import Content from './components/Content';

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
