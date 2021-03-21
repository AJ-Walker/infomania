import React, { Component } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default class About extends Component{
    render(){
        return(
        
            
            <div className="about">

            <h1>WELCOME TO THE WORLD OF INFOMANIA !!</h1>

            <h2>Nagindas Khandwala College has its own Technical Department (i.e. Information Technology & Computer Science).</h2>

            <p>We have various Mentors , Teachers , Visioners to Help the students and Guide the student body.
                When teachers teaches any particular Subject , Topic or Unit from any subject so at 
                that time contents may be Clear but after that students may or may not be Remembered 
                by students till exams comes up Hence , many students of NK IT/CS faces difficulties
                to cope up with studies and to understand or learning the concepts so here comes ‘INFOMANIA’ into Picture. 
            </p>
            </div>
            
        )
    }
}
