import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import './App.css';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import About from './components/About';
import StudentLogin from './components/StudentLogin';
import StudentRegister from './components/StudentRegister';
import TeacherLogin from './components//TeacherLogin';
import TeacherRegister from './components/TeacherRegister';

class App extends React.Component{ 

	render(){
		return(
			<Router>
			<div className="App">
			<Navbar bg="dark" variant="dark" expand="lg" className="navvbar" sticky="top">
				<Navbar.Brand href="#home">
					<img
						alt="logo"
						src="/infomania-logo.jpg"
						width="80"
						height="80"
						className="d-inline-block align-top"
					/>
				</Navbar.Brand>
				<Navbar.Brand>
					<Link to={"/login"} className="navlink">
					INFOMANIA
					</Link>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse className="justify-content-end">
					<Nav>
						<Nav>
							<Link to={"/register"} className="nav_link">
							Register
							</Link>
						</Nav>
						<Nav>
							<Link to={"/about"} className="nav_link">
							About
							</Link>
						</Nav>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
				<Container fluid>
				<Row>
				<Col sm>
					<Switch>
						<Route exact path='/login' component={StudentLogin} />
						<Route path="/register" component={StudentRegister} />
					</Switch>
				</Col>
				<div className="vl"></div>
				<Col sm>
					<Switch>
							<Route exact path='/login' component={TeacherLogin} />
							<Route path="/register" component={TeacherRegister} />
					</Switch>
				</Col>
				</Row>
				</Container>
				<Container fluid>
				<Switch>
					<Route path="/about" component={About} />
				</Switch>
				</Container>
			</div>
			</Router>
		);
	}
}

export default App;
