import React, { Component } from 'react';
import styled from 'styled-components';

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

export default class Inp extends Component {
    state = {
        transaction: null,
        category: null,
    };

    handleChangeInput = event => {
        console.log(event.target.value)
        this.setState({ [event.target.name]: event.target.value });
    };

    render() {
        const { transaction, category } = this.state;
        return (
            <Input
                name="category"
                onChange={this.props.handleChangeInput}
                value={category || ''}
            />
        )
    }
}