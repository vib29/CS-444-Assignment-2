import React, { Component } from 'react';

class Work extends Component{
    render(){
        return(
            <div class="blocks">
                <div class="personal">
                <h3>{this.props.work.work_title}</h3>
            
            <div class="job"> 

            <div class="subwork">
              <h3>{this.props.work.job_title} </h3>

            </div>
            <p>{this.props.work.p}</p>
            
            <div class="subwork">
              <h3>{this.props.work.subwork_title} </h3>
            </div>
            <p>{this.props.work.subwork_p}</p>
          </div>
          </div>
          
          <div class="divider3"></div>
          </div>

          
        );
    }
}



export default Work;