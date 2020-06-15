interface IUser {
    id: number
    name: string
}

interface ITodo {
    author: number
    title: string
    description: string
}

const users: Array<IUser> = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Lisa' },
]

const todos: Array<ITodo> = [
    { author: 1, title: 'graphql study', description: 'with apollo' },
    { author: 1, title: 'go to gym', description: 'go to gym' },
    { author: 2, title: 'order pizza', description: 'order pizza' },
]

export { users, todos }
