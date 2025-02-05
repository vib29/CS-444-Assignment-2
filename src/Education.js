import { Component } from "react";

class Ed extends Component{
    render(){
        return(
            <div class="blocks">
            <div class="personal">
              <h3>{this.props.edu.ed_title}</h3>

              <div class="subeducation">
                <h3>{this.props.edu.sub_title}</h3>
              
              <div class="col">
                <p>{this.props.edu.major_bs}</p>
                <p>{this.props.edu.year_bs}</p>
                <p>{this.props.edu.gpa_bs}</p>
              </div>

              <h3>{this.props.edu.sub_title}</h3>
              <div class="col">
                <p>{this.props.edu.major_ms}</p>
                <p>{this.props.edu.year_ms}</p>
                <p>{this.props.edu.gpa_ms}</p>
              </div>

          </div>
          </div>
          </div>
        );
    }
}

export default Ed;