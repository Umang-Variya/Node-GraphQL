const { ApolloServer, gql } = require('apollo-server');
const typeDefs = require('./typeDefs/index');
const { resolvers } = require('./resolvers/index');

const ConversationAPI = require('./datasources/user-api');

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => {
    return {
      conversationAPI: new ConversationAPI(),
    };
  },
});

server.listen().then(({ url }) => {
  console.log(`
  🚀  Server is running!
  🔉  Listening on port 4000
  📭  Query at ${url}
`);
});
