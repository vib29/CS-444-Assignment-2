import React, { Component } from 'react';

class Personal extends Component{
    render(){
        return(
            <div class="blocks">
            <div class="personal">
                <h3>{this.props.profile.title}</h3>
                <p>{this.props.profile.par}</p>
            </div>
            <div class="divider2"></div>
          </div>

        );
    }

}

export default Personal;