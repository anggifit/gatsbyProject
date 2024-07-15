import * as React from "react"
import Layout from '../components/layout'
import { StaticImage } from "gatsby-plugin-image";

const IndexPage = () => {
  return (
    <Layout pageTitle="Homepage">
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage class='size-1/2' alt='homepage image' src='https://images.unsplash.com/photo-1483058712412-4245e9b90334?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
    </Layout>
  )
}

export const Head = () => <title>Home Page</title>

export default IndexPage
