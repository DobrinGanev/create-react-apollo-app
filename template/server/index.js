const { find, filter } = require('lodash')

const { makeExecutableSchema } = require('graphql-tools')
const express = require('express')
const cors = require('cors')
const graphqlHTTP = require('express-graphql')

const typeDefs = `
  type Author {
    id: Int!
    firstName: String
    lastName: String
    """
    the list of Posts by this author
    """
    posts: [Post]
  }

  type Post {
    id: Int!
    title: String
    author: Author
    votes: Int
  }

  # the schema allows the following query:
  type Query {
    posts: [Post]
    author(id: Int!): Author
  }

  # this schema allows the following mutation:
  type Mutation {
    upvotePost (
      postId: Int!
    ): Post
  }
`

// example data
const authors = [
  { id: 1, firstName: 'Tom', lastName: 'Coleman' },
  { id: 2, firstName: 'Sashko', lastName: 'Stubailo' },
  { id: 3, firstName: 'Mikhail', lastName: 'Novikov' }
]

const posts = [
  { id: 1, authorId: 1, title: 'Introduction to GraphQL', votes: 2 },
  { id: 2, authorId: 2, title: 'Welcome to Meteor', votes: 3 },
  { id: 3, authorId: 2, title: 'Advanced GraphQL', votes: 1 },
  { id: 4, authorId: 3, title: 'Launchpad is Cool', votes: 7 }
]

const delay = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve()
    }, 3000)
  })
}

const getPosts = async () => {
  await delay()
  return posts
}

const resolvers = {
  Query: {
    posts: async () => {
      return await getPosts()
    },
    author: (_, { id }) => find(authors, { id })
  },

  Mutation: {
    upvotePost: (_, { postId }) => {
      const post = find(posts, { id: postId })
      if (!post) {
        throw new Error(`Couldn't find post with id ${postId}`)
      }
      post.votes += 1
      return post
    }
  },

  Author: {
    posts: author => filter(posts, { authorId: author.id })
  },

  Post: {
    author: post => find(authors, { id: post.authorId })
  }
}
const schema = makeExecutableSchema({
  typeDefs,
  resolvers
})

const app = express()
app.use(cors())
app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true
  })
)

const port = process.env.PORT || 4000
app.listen(port)
console.log(`Running a GraphQL API server at localhost:${port}/graphql`)
