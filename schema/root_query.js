const graphql = require('graphql')

//required constants
const { GraphQLString,GraphQLObjectType,GraphQLList } = graphql;
//custom object type
const muser = require('./types/muser');
const mimage = require('./types/mimage')

const rootquery = new GraphQLObjectType({
    name:'RootQueryType',
    fields: ()=>({
        muser:{
            type:new GraphQLList(muser),
            // args:{
            //     id: {type: GraphQLString}
            // },
            resolve(parentValue,args){
                return [{name:'sandy',age:16,id:'55'},{name:'handy',age:17,id:'56'}]
            }
        },
        mimage:{
            type:new GraphQLList(mimage),
            // args:{
            //     id: {type: GraphQLString}
            // },
            resolve(parentValue,args){
                return [{image:'sunset.jpg',id:'454'},{image:'sunset.jpg',id:'45'}]
            }
        }
    })
})

module.exports = rootquery;