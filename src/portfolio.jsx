import React from 'react';
import { Button } from 'react-bootstrap';

export class Portfolio extends React.Component{
	constructor(props) {
    	super(props);
    	this.state = {
      		balance: 0,
    	};
  	}
	render() {
		return (
			<div>
				<h1>This is your portfolio. </h1>
				<p>Your current balance is {this.state.balance}</p>
			</div>
			);
	}

}