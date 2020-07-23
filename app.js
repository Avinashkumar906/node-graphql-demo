const express = require('express')
const app = express()
const { graphqlHTTP } = require('express-graphql'); 
const bodyParser = require('body-parser')
const mySchema = require('./schema/index')

//middleware for body parsing
app.use(bodyParser.json())


app.use('/graphiql',graphqlHTTP({
    schema:mySchema,
    graphiql: true
}))

app.use('',(req,res)=>{
    res.status(200).json({message:"hellow from express js app file!"})
})


//module Export
module.exports = app;
