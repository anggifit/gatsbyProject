import * as React from "react";
import { graphql } from 'gatsby'
import Layout from "../components/layout";
import Seo from '../components/seo'

const Blog = () => {
  return (
    <Layout pageTitle="My nutri posts">
      <section className="relative pt-12 bg-blueGray-50">
      <p>My cool posts will go in here</p>
      </section>
    </Layout>
  );
};

export const query = graphql`
  query {
    allFile {
      nodes {
        name
      }
    }
  }
`

export const Head = () => <Seo title="My nutri posts" />

export default Blog;
