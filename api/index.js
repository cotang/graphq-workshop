const express = require('express');
const graphqlMiddleware = require('express-graphql');
const schema = require('./schema');
const resolvers = require('./resolvers');
const api = express();

api.all('/graphql', graphqlMiddleware({
  graphiql: true,
  rootValue: resolvers,
  schema
}))

module.exports = api;