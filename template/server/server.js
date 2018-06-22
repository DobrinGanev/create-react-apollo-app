import express from 'express'
import bodyParser from 'body-parser'
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express'
import { graphql, buildSchema } from 'graphql'
import { POINT_CONVERSION_COMPRESSED } from 'constants';


const schema = buildSchema(`
  type Query {
    greeting(name: String): String
  }
`)

const app = express()

// bodyParser is needed just for POST.
app.use('/graphql', bodyParser.json(), graphqlExpress({ schema: schema }))
app.get('/graphiql', graphiqlExpress({ endpointURL: '/graphql' })) // if you want GraphiQL enabled

export default app
