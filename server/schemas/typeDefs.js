const typeDefs = `
    type User {
        id: ID!
        username: String!
        password: String!
    }

    type Event {
        eventName: String!
        description: String!
        date: String!
    }

    type Auth {
        token: ID!
        user: User
    }

    type Query {
    
    }

    type Mutation {
    
    }
`;

module.exports = typeDefs;