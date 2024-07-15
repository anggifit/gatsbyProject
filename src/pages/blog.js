import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";

const Blog = ({ data }) => {
  return (
    <Layout pageTitle="My nutri posts">
      <section className="relative pt-12 bg-blueGray-50">
        <ul className='text-lg text-green-800'>
          {data.allFile.nodes.map((node) => (
            <li key={node.name}>{node.name}</li>
          ))}
        </ul>
      </section>
    </Layout>
  );
};

export const query = graphql`
  query {
    allFile (filter: {sourceInstanceName: {eq: "blog"}}){
      nodes {
        name
      }
    }
  }
`;

export const Head = () => <title>My nutri posts</title>

export default Blog;
