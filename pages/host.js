import React, { Component } from 'react'
import Layout from '../layouts/layout'
import HomeLayout from '../layouts/homeLayout'
import HostForm from '../components/hostForm'
import Heading from '../components/heading'
import Pdfscreen from '../components/PdfScreen'

class Host extends Component {
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
        <Layout title="Host">
          {showLogin && (
            <HomeLayout>
              <Heading titleText="Host a class" />
              <HostForm onFormSubmit={this.formSubmit} />
            </HomeLayout>
          )}
          {showPDF && <Pdfscreen />}
        </Layout>
      </>
    )
  }
}

export default Host
