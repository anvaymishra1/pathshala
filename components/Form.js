import React, { Component } from 'react'
import styles from './form.module.scss'
import Router from 'next/router'


export class Form extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          code: "",
          name:"",
          codeMatched:true,
        };
      }
      
      handleCodeChange = (event) => {
        this.setState({
          code: event.target.value,
        });
      };
      handleNameChange = (event) => {
        this.setState({
          name: event.target.value,
        });
      };
      // redirect = ()=>{
      //   this.props.history.push('/classPage');
      // }
      handleSubmit = (event) => {
        if(this.state.codeMatched){
          Router.push('/classPage')
        }
        else{
          alert("There is no meeting with the entered code");
        }
      };
      render() {
        return (
          <div className = {styles.form}>
          <form onSubmit={this.handleSubmit} >
            <div>
              
              <label>Enter your Name </label>
              
              <br />
              <input
                type="text"
                value={this.state.name}
                placeholder = "Name"
                onChange={this.handleNameChange}
              ></input>{" "}
              <br></br>
              <label>Enter Class Code</label>
              <br/>
              <input
                type="password"
                value={this.state.code}
                placeholder = "Code"
                onChange={this.handleCodeChange}
              ></input>{" "}
            </div>

            <button type="submit" onClick = {this.handleSubmit}>Submit</button>
            
          </form>
          </div>
        );
      }
}

export default Form
