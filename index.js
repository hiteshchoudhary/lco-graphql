// Start your es6 scripts here
import express from "express";
import resolvers from "./resolvers";
import schema from "./schema";
import { graphqlHTTP } from "express-graphql";

const app = express();
const root = resolvers;
app.get("/", (req, res) => {
  res.send("Up and running with graphql crash course");
});

app.use('/graphql',graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
}))

app.listen(8082, () => console.log("Running at 8082"));

// mutation {
//     createCourse(input:{
//       courseName:"JS Bootcamp"
//       price: 199
//       stack: MOBILE
//       teachingAssists: [
//         {
//           firstName: "hitesh"
//           lastName: "sharma"
//           experience: 1
//         },
//         {
//           firstName: "abhi"
//           lastName: "chaudhary"
//           experience: 4
//         }
//       ]
//     }){
//       id,
//       courseName
//     }
//   }

// query{
//     getCourse(id: "sJHcWdG7UuI9JX8VoqY-K"){
//       id
//       teachingAssists{
//         experience
//       }
//     }
//   }