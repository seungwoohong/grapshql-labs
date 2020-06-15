import { ApolloServer, gql } from 'apollo-server'
import resolvers from './graphql/resolvers'
import { Server } from 'http'

const typeDefs = gql`
    type Todo {
        author: Int
        title: String
        description: String
    }

    type User {
        id: Int
        name: String
    }

    type Query {
        users: [User]
        todos: [Todo]
    }
`
const server = new ApolloServer({ typeDefs, resolvers })

server.listen().then(({ url }) => {
    console.log(`Server reday at ${url}`)
})
