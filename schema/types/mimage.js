const graphql = require('graphql')

//required constants
const { GraphQLObjectType,GraphQLString,GraphQLID } = graphql

const mimage = new GraphQLObjectType({
    name:'mimage',
    fields:()=>({
        id:{type:GraphQLID},
        image:{type:GraphQLString},
        // user:{
        //     type:require('./muser'),
        //     resolve(parentValue,ars){
        //         // return null;
        //     }
        // }
    })
})

module.exports = mimage;