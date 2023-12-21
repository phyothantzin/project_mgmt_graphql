import { graphqlHTTP } from "express-graphql";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
import { schema } from "./schema/schema.js";
import connectDB from "./configs/db.js";

const port = process.env.PORT || 5000;

const app = express();
connectDB();

app.use(cors());

app.use(
  "/graphql",
  new graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === "development",
  })
);

app.listen(port, () =>
  console.log(`Server running at ${port} in ${process.env.NODE_ENV} mode`)
);
