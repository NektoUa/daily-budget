import React, { Component } from 'react';
import styled from 'styled-components';
import moment from 'moment';
import Expanse from './Expanse';
import Incomes from './Incomes';

const Link = styled.span`
  font-family: 'Marmelad';
  cursor: pointer;
  color: white;
  margin: 0 8px;
  border-bottom: ${({ selected }) =>
        selected ? '2px solid white' : 'none'};
`;

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  font-size: 25px;
  padding: 40px 0 15px;
`;

export default class Navigation extends Component {
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

    handleNavClick = event => {
        this.setState({ navSelected: event.target.getAttribute('name') });
    };

    render() {
        const { date, navSelected, transactions } = this.state;


        return (
            <div>
                <Nav>
                    <Link
                        name="expanse"
                        onClick={this.handleNavClick}
                        selected={navSelected === 'expanse'}
                    >
                        Витрачено
            </Link>

                    <Link
                        name="incomes"
                        onClick={this.handleNavClick}
                        selected={navSelected === 'incomes'}
                    >
                        Зароблено
            </Link>
                </Nav>

                {
                    navSelected === 'expanse' ? (
                        <Expanse onSubmit={this.handleSubmitTransaction} name="expanse" />
                    ) : (
                            <Incomes onSubmit={this.handleSubmitTransaction} />
                        )
                }
            </div>
        )
    }
}