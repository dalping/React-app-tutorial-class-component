import React, { Component } from 'react';

class Control extends Component { //컴포넌트1
    render() { //class 안에 소속되는 함수는 function을 생략가능
        return ( //render함수에서는 하나의 최상위 태그로 시작,사용해야 한다.
            <ul>
                <li><a href="/create" onClick={function(e){
                    e.preventDefault();
                    this.props.onChangeMode('create');
                }.bind(this)}>create</a></li>
                <li><a href="/update" onClick={function(e){
                    e.preventDefault();
                    this.props.onChangeMode('update');
                }.bind(this)}>update</a></li>
                <li><input type="button" onClick={function(e){
                    e.preventDefault();
                    this.props.onChangeMode('delete');
                }.bind(this)} value="delete"></input></li>
          </ul>
        );
    }
}

export default Control;