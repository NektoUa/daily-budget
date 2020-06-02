import React, { Component } from 'react';
import styled from 'styled-components';


const InputLine = styled.div`
  display: flex;
  flex-direction: row;
  line-height: 1.5;
`;
const LineInput = styled.dd`
  width: 150px;
  margin: 0;
`;
const LineTitle = styled.dt`
  width: 150px;
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

    handleChangeInput = event => {
        console.log(event.target.value)
        this.setState({ [event.target.name]: event.target.value });
    };

    handleEnter = () => {
        const { onSubmit } = this.props;
        const { transaction, category } = this.state;

        onSubmit(Math.abs(parseFloat(transaction)), category);
        this.setState({ transaction: null, category: null });
    }

    render() {
        const { transaction, category } = this.state;


        return (
            <div>
                <InputLine>
                    <LineTitle>Копійки:</LineTitle>
                    <LineInput>
                        <Input
                            name="transaction"
                            onChange={this.handleChangeInput}
                            value={transaction || ''}
                        />
                    </LineInput>
                </InputLine>
                <InputLine>
                    <LineTitle>Категорії:</LineTitle>
                    <LineInput>
                        <Input
                            name="category"
                            onChange={this.handleChangeInput}
                            value={category || ''}
                        />
                    </LineInput>
                </InputLine>
            </div>
        )
    }
}