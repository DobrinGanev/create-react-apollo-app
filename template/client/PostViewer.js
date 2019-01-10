import React from 'react'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'

export const GET_POSTS = gql`
  query GetPosts {
    posts {
      author {
        id
        firstName
      }
    }
  }
`

export default () => (
  <Query query={GET_POSTS}>
    {({ loading, data }) => {
      if (loading) {
        return <div>Loading data!</div>
      }
      return (
        <ul>
          {data.posts.map(p => (
            <li key={p.author.id}>{p.author.firstName}</li>
          ))}
        </ul>
      )
    }}
  </Query>
)
