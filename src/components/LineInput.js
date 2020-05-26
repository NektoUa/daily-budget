import React, { Component } from 'react';
import styled from 'styled-components';

const LineInput = styled.dd`
  width: 150px;
  margin: 0;
`;
const Input = styled.input`
  font-family: 'Marmelad';
  font-size: 20px;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid white;
  margin-left: 5px;
  color: white;
  width: 100%;
  padding: 0;
  margin: 0;
`;

export default class InLine extends Component {
    state = {
        transaction: null,
        category: null,
    };

    render() {
        const { transaction, category } = this.state;


        return (
            <LineInput>
                <Input
                    name="transaction"
                    onChange={this.handleChangeInput}
                    value={transaction || ''}
                />
            </LineInput>
        )
    }
}