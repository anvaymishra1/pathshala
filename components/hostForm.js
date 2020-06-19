import React, { Component } from 'react'
import styles from './form.module.scss'

const codes = require('../codes.json')

class HostForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      class: '',
      code: codes[Math.floor(Math.random() * codes.length)].word,
      codeMatched: true,
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleClassChange = event => {
    this.setState({
      class: event.target.value,
    })
  }

  // redirect = ()=>{
  //   this.props.history.push('/classPage');
  // }

  handleSubmit = event => {
    if (this.state.codeMatched) {
      this.props.onFormSubmit()
    } else {
      alert('There is no meeting with the entered code')
    }
    event.preventDefault()
  }

  render() {
    return (
      <div className={styles.form}>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="className">
            Enter Class Name
            <br />
            <input
              type="text"
              id="className"
              value={this.state.class}
              placeholder="Class Name"
              onChange={this.handleClassChange}
              required
            />{' '}
          </label>
          <label htmlFor="classCode">
            Your Class Code
            <br />
            <input type="text" id="classCode" value={this.state.code} readOnly />{' '}
            <button type="submit">Host</button>
          </label>
        </form>
      </div>
    )
  }
}

export default HostForm
