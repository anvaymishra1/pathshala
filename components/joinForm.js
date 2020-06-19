import React, { Component } from 'react'
import styles from './form.module.scss'

class JoinForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      code: '',
      name: '',
      codeMatched: true,
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleCodeChange = event => {
    this.setState({
      code: event.target.value,
    })
  }

  handleNameChange = event => {
    this.setState({
      name: event.target.value,
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
          <div>
            <label htmlFor="name">
              Enter your Name
              <br />
              <input
                type="text"
                id="name"
                value={this.state.name}
                placeholder="Name"
                onChange={this.handleNameChange}
                required
              />{' '}
            </label>
            <label htmlFor="classCode">
              Enter Class Code
              <br />
              <input
                type="text"
                id="classCode"
                value={this.state.code}
                placeholder="Code"
                onChange={this.handleCodeChange}
                required
              />{' '}
            </label>
          </div>
          <button type="submit">Join</button>
        </form>
      </div>
    )
  }
}

export default JoinForm
