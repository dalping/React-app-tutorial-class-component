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

export default Subject;