import React, { Component } from 'react';

class Heading extends Component{
    render(){
        return(
            <div class="container">
            

        <div class="header"style={{ backgroundColor: '#e7ebe4d4', padding: '37px', margin:0 }}> 
          <div>
            <h1 class = "title">{this.props.person.name}</h1>
            <h2 class="title">{this.props.person.role}</h2>
          </div>
        <div class = "contact-info">
        <p>{this.props.e}<a href = "#">{this.props.person.email}</a></p>
          <p>{this.props.person.web}</p>
          <p>{this.props.person.mobile}</p> 
        </div>
        </div>  
        
        <div class="divider"></div>

        </div>
        );
    }
}

export default Heading;