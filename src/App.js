import './App.css';
import React, { Component } from 'react';
import Subject from './components/Subject';
import TOC from './components/TOC';
import Content from './components/Content';
import { render } from '@testing-library/react';

class App extends Component { //메인 컴포넌트
  constructor(props) { //어떤 컴포넌트가 실행될 때 render()함수보다 먼저 실행되어 초기화를 담당한다.
    super(props);
    this.state = { //단일 데이터
      mode: 'read',
      selected_content_id: 2,
      subject: { title: 'Web', sub: 'world wide web!' },
      welcome: { title: 'Welcome', desc: 'Hello, React!' },
      contents: [ //복수 데이터
        { id: 1, title: 'HTML', desc: 'HTML is HyperText...' },
        { id: 2, title: 'CSS', desc: 'CSS is for design...' },
        { id: 3, title: 'JavaScript', desc: 'JavaScript is for interactive...' }
      ]
    }
  }

  render() {
    let _title, _desc = null;

    if (this.state.mode === "welcome") {
      _title = this.state.welcome.title
      _desc = this.state.welcome.desc
    } else if (this.state.mode === "read") {
      let i = 0;
      while (i < this.state.contents.length) {
        let data = this.state.contents[i];
        if (data.id === this.state.selected_content_id) {
          _title = data.title;
          _desc = data.desc;
          break;
        }
        i = i + 1;
      }
    }

    return ( // jsx : html과 js코드가 공존할 수 있게 해주는 것
      <div className="App">
        <Subject
          title={this.state.subject.title}
          sub={this.state.subject.sub}
          onChangePage={function () {
            this.setState({ mode: 'welcome' });
          }.bind(this)}>

        </Subject>

        {/* <header>
          <h1><a href="/" onClick={function (e) {
            e.preventDefault(); //tag의 기본적인 동작을 하지 못하도록 막는다.
            this.state.mode = 'welcome'; //this를 찾을 수 없어 에러 발생 : bind 필요
            this.setState({
              mode: 'welcome'
            });
          }.bind(this)}>{this.state.subject.title}</a></h1>
        </header> */}

        <TOC onChangePage={function (id) {
          this.setState({
            mode: 'read',
            selected_content_id: Number(id)
          });
        }.bind(this)}
          data={this.state.contents}></TOC>
        <Content title={_title} content={_desc}></Content>
      </div >
    );
  }
}

export default App;
