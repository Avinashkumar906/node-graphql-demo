const graphql = require('graphql')

//required constants
const { GraphQLString,GraphQLObjectType,GraphQLList } = graphql;
//custom object type
const UserType = require('./types/user');
const ImageType = require('./types/image')

const rootquery = new GraphQLObjectType({
    name:'RootQueryType',
    fields: ()=>({
        user:{
            type:new GraphQLList(UserType),
            // args:{
            //     id: {type: GraphQLString}
            // },
            resolve(parentValue,args){
                return [{name:'sandy',age:16,_id:'55'},{name:'handy',age:17,_id:'56'}]
            }
        },
        image:{
            type:new GraphQLList(ImageType),
            // args:{
            //     id: {type: GraphQLString}
            // },
            resolve(parentValue,args){
                return [{image:'sunset.jpg',_id:'454'},{image:'sunset.jpg',_id:'45'}]
            }
        }
    })
})

module.exports = rootquery;