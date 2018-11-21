const {ApolloServer, gql} = require('apollo-server-lambda')

const typeDefs = gql`
  type Query {
    hello: String
  }
`

const resolvers = {
  Query: {
    hello: (root, args, context, info) => "what up, world!"
  }
}

const server = new ApolloServer({typeDefs, resolvers})

exports.handler = server.createHandler()
