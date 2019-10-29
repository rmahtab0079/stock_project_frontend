import React from 'react';
import { Button } from 'react-bootstrap';


export class SignUp extends React.Component{
	constructor(props) {
    	super(props);
    	this.state = {
      		username: '',
      		password: '',
    	};
  	}

  	componentDidMount() {
  		console.log(this.state.username);
  		console.log(this.state.password);
  	}

  	handleChangeUsername = (event) => {
    	this.setState({username: event.target.value});
  	}

  	handleChangePassword = (event) => {
    	this.setState({password: event.target.value});
  	}

 
  	 handleSubmit = async (event) => {
  		alert('Credentials were submitted ' + this.state.username + ' ' +  this.state.password);
  // 		try {
		//   const data = await postData('http://localhost:5000/register', { username: this.state.username, 
		//   password: this.state.password });
		//   console.log("It worked!!");
		//   console.log(JSON.stringify(data)); // JSON-string from `response.json()` call
		// } catch (error) {
		//   console.error(error);
		// }

		async function postData(url = '', data = {}) {
		  // Default options are marked with *
		  const response = await fetch(url, {
		    method: 'POST', // *GET, POST, PUT, DELETE, etc.
		    mode: 'cors', // no-cors, *cors, same-origin
		    //cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
		    //credentials: 'same-origin', // include, *same-origin, omit
		    headers: {
		      'Content-Type': 'application/json'
		      // 'Content-Type': 'application/x-www-form-urlencoded',
		    },
		    //redirect: 'follow', // manual, *follow, error
		    //referrer: 'no-referrer', // no-referrer, *client
		    body: JSON.stringify(data) // body data type must match "Content-Type" header
		  })
		  .then(response => {
		  	return response.json();
		  })
		  .then(jsonres => {console.log(jsonres.data)});
		  return await response.json(); // parses JSON response into native JavaScript objects
		}

		let req = postData('http://localhost:5000/register', {username: this.state.username, password: this.state.username});
		// console.log(req);
		// console.log(req.message);
  	}

	render() {
		return (
			<div>
			<form >
				<h1>Welcome to the Sign Up</h1>
				<label>Username <input type="text" onChange={this.handleChangeUsername} value={this.state.username} ></input></label>
				<label>Password <input type="password" onChange={this.handleChangePassword} value={this.state.password}></input></label>
				<br />
				<Button onClick={this.handleSubmit}>Submit</Button>
			</form>
			</div>
			);
	}
}