const graphQL = require('graphql')
const { GraphQLSchema} = require('graphql')

// Root query
const query = require('./root_query')

//Schema

module.exports = new GraphQLSchema({query})