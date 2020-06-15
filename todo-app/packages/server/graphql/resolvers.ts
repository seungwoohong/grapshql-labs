import { users, todos } from '../constants/data'

const resolvers = {
    Query: {
        todos: () => todos,
        users: () => users,
    },
}

export default resolvers
