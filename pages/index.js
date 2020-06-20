import React from 'react'
import Layout from '../layouts/layout'
import HomeLayout from '../layouts/homeLayout'
import Heading from '../components/heading'
import HomeGrid from '../components/homeGrid'
import HomeButton from '../components/homeButton'

export default function Home() {
  return (
    <Layout>
      <HomeLayout>
        <Heading titleText="Welcome to Pathshala" desc="A better way to take classes, remotely" />
        <HomeGrid>
          <HomeButton to="/host" name="Host" />
          <HomeButton to="/join" name="Join" />
        </HomeGrid>
      </HomeLayout>
    </Layout>
  )
}
