import React, { Component } from 'react';
import styled from 'styled-components';
import moment from 'moment';

const DateButton = styled.button`
  color: white;
  border: 1px solid white;
  border-radius: 50%;
  background-color: transparent;
  width: 32px;
  height: 32px;
  margin: 3px;
  cursor: pointer;
  text-align: center;
`;

const DateLine = styled.div`
  display: flex;
  align-items: center;
`;

export default class Date extends Component {
    constructor(props) {
        super(props);

        let storageState = localStorage.getItem('state');
        let initState;

        if (storageState != null) {
            storageState = JSON.parse(storageState);
            initState = { ...storageState, date: moment(storageState.date) };
        } else {
            initState = {
                date: moment(),
                navSelected: 'incomes',
                transactions: [],
            };
        }

        this.state = initState;
    }

    handleAddDay = () => {
        this.setState({ date: this.state.date.add(1, 'day') });
    };

    handleSubtractDay = () => {
        this.setState({ date: this.state.date.subtract(1, 'day') });
    };

    componentDidUpdate() {
        const { date } = this.state;
        localStorage.setItem(
            'state',
            JSON.stringify({ ...this.state, date: date.format() }),
        );
    }
    render() {
        const { date } = this.state;
        return (
            <DateLine>
                <p>{date.format('DD.MM.YYYY')}</p>
                <DateButton onClick={this.handleSubtractDay}>
                    –
            </DateButton>
                <DateButton onClick={this.handleAddDay}>+</DateButton>
            </DateLine>
        )
    }
}