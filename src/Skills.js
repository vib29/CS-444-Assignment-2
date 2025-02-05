import { Component } from "react";

class Skill extends Component{
    render(){
        return(
            <div class="blocks">
            <div class="personal">
            <h3>{this.props.keys.key_title}</h3>
              
              <div class="key">
                <p>{this.props.keys.key_skills}</p>
                <p>{this.props.keys.key_skills}</p>
                <p>{this.props.keys.key_skills}</p>
                <p>{this.props.keys.key_skills}</p>
                <p>{this.props.keys.key_skills}</p>
                <p>{this.props.keys.key_skills}</p>
                <p>{this.props.keys.key_skills}</p>
                <p>{this.props.keys.key_skills}</p>
                <p>{this.props.keys.key_skills}</p>
  
              </div>
  
              </div>
              <div class="divider4"></div>
              
            </div>
        );
    }
}

export default Skill;