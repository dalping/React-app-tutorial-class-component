import './App.css';
import React, { Component } from 'react';
import Subject from './components/Subject';
import TOC from './components/TOC';
import ReadContent from './components/ReadContent';
import Control from './components/Control';
import CreateContent from './components/CreateContent';
import { render } from '@testing-library/react';

class App extends Component { //메인 컴포넌트
  constructor(props) { //어떤 컴포넌트가 실행될 때 render()함수보다 먼저 실행되어 초기화를 담당한다.
    super(props);
    this.max_content_id = 3;
    this.state = { //단일 데이터
      mode: 'create',
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
    let _title, _desc, _article = null;

    if (this.state.mode === "welcome") {
      _title = this.state.welcome.title
      _desc = this.state.welcome.desc
      _article = <ReadContent title={_title} content={_desc}></ReadContent>
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
      _article = <ReadContent title={_title} content={_desc}></ReadContent>
    } else if(this.state.mode === "create"){
      _article = <CreateContent onSubmit={function(_title, _desc){
        this.max_content_id = this.max_content_id + 1;
        // this.setState.contents.push({
        //   contents:this.state.contents
        // });
        const _contents = this.state.contents.concat( //원본 데이터를 바꾸지 않고 갱신하는 방법(concat())
          {id:this.max_content_id, title:_title, desc:_desc}
        );
        this.setState({
          contents:_contents
        });
      }.bind(this)}></CreateContent>
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
        <TOC onChangePage={function (id) {
          this.setState({
            mode: 'read',
            selected_content_id: Number(id)
          });
        }.bind(this)}
          data={this.state.contents}></TOC>
        <Control onChangeMode={function(_mode){
          this.setState({
            mode:_mode
          });
        }.bind(this)}></Control>
        {_article}
      </div >
    );
  }
}

export default App;
