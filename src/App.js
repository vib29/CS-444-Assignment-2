import Header from './Header';
import PersonalProfile from './PersonalProfile';
import WorkExperience from './WorkExperience';
import Skills from './Skills';
import Education from './Education';
import './App.css';
import React, { Component } from 'react';


class App extends Component{

  constructor(props){
    super(props)
    this.state = {
      person:{
        name: "Zh Rimel", role : "Data Scientist", e : "Email : ", email : "abc@gmail.com", web : " Web : abc.github.io.abc", mobile : "01234567890"
      },
      profile:{
        title : "Personal Profile", par : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laborisnisi ut aliquip ex ea commodo consequat. "
      },
      work:{
        work_title : "Work Experience", job_title : "Job Title at Company (August 2022 - December 2023)", p : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laborisnisi ut aliquip ex ea commodo consequat.", subwork_title : "Job Title 2 at Company 2 (August 2020 - December 2021)", subwork_p : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laborisnisi ut aliquip ex ea commodo consequat. "
      },
      keys:{
        key_title : "Key Skills", key_skills : "A Key skill"
      },
      edu:{
        ed_title : "Education", sub_title : "New Jersey Institute of Technology", major_bs : "BS in Computer Science", year_bs : "2018 - 2022", gpa_bs : "GPA : 3.9", major_ms : "MS in Data Science", year_ms : "2022 - 2023", gpa_ms : "GPA : 4.0"
      }
    }

  }
  
  render(){
    return( 
      <div> 

        <Header person={this.state.person}></Header>
        <PersonalProfile profile={this.state.profile}></PersonalProfile>
        <WorkExperience work={this.state.work}></WorkExperience>
        <Skills keys={this.state.keys}></Skills>
        <Education edu={this.state.edu}></Education>


        
      </div>
    ) ;
  } 

}

export default App;
