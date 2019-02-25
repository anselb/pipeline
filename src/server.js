const { GraphQLServer } = require('graphql-yoga')
const db = require('../db/models');

require('dotenv').config();

const typeDefs = `
type Query {
  info: String!
}
`

const resolvers = {
  Query: {
    info: () => `Hello World`
  }
}

const server = new GraphQLServer({
  typeDefs,
  resolvers,
})

db.sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

server.start({ port: process.env.PORT }, ({ port }) => {
  console.log(`Server started, listening on port ${port} for incoming requests.`);
});
