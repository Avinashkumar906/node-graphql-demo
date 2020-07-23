const graphql = require('graphql')

//required constants
const { GraphQLObjectType,GraphQLString,GraphQLID,GraphQLList } = graphql

const muser = new GraphQLObjectType({
    name:'muser',
    fields:()=>({
        id:{type:GraphQLID},
        name:{type:GraphQLString},
        age:{type:GraphQLString},
        // mimage:new GraphQLList(require('./mimage')),
        // resolve(parentValue, args){
        //     // return null;
        // }
    })
})

module.exports = muser;