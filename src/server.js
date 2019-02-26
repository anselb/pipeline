const { GraphQLServer } = require('graphql-yoga')
const db = require('../db/models');

require('dotenv').config();

const Query = require('./resolvers/Query')
const Mutation = require('./resolvers/Mutation')

const resolvers = {
  Query,
  Mutation,
}

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
  context: request => {
    return request
  },
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
