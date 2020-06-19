import React, { Component } from 'react'
import Layout from '../layouts/layout'
import HomeLayout from '../layouts/homeLayout'
import JoinForm from '../components/joinForm'
import Heading from '../components/heading'
import PDFScreen from '../components/pdfScreen'

class Join extends Component {
  constructor(props) {
    super(props)

    this.state = {
      showLogin: true,
      showPDF: false,
    }
    this.formSubmit = this.formSubmit.bind(this)
  }

  formSubmit() {
    this.setState({
      showLogin: false,
      showPDF: true,
    })
  }

  render() {
    const { showLogin, showPDF } = this.state
    return (
      <>
        <Layout title="Join">
          {showLogin && (
            <HomeLayout>
              <Heading titleText="Join a class" />
              <JoinForm onFormSubmit={this.formSubmit} />
            </HomeLayout>
          )}
          {showPDF && <PDFScreen />}
        </Layout>
      </>
    )
  }
}

export default Join
