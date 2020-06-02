import React, { Component } from 'react';
import styled from 'styled-components';

const Button = styled.button`
  font-family: 'Marmelad';
  color: white;
  border: 1px solid white;
  border-radius: 31px;
  background-color: transparent;
  margin: 3px;
  cursor: pointer;
  text-align: center;
  padding: 5px 20px;
`;

export default class Snap extends Component {
    render() {
        return (
            <div>
                <Button onClick={this.props.handleEnter}>Додати</Button>
            </div>
        )
    }
}