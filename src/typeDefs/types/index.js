const { gql } = require('apollo-server');

const types = gql`
    type Query {
      getConversationData : [Conversation!]!
      getConversationDataBy(id: ID!): Conversation!
    }

    type Conversation {
      id : Int
      message: String
      author: String
    }

    input ConversationInput {
      id :ID
      message: String!
      author: String!
    }

    type Mutation {
      createConversation(data: ConversationInput!): Conversation
      updateConversation(id: ID!, data: ConversationInput!): Conversation
      deleteConversation(id: ID!): Response!
    }

    type Response {
      code: Int!
      success: Boolean!
      message: String!

    }
  
`;

module.exports = { types }
