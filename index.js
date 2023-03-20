import express from 'express';
import mongoose from 'mongoose';
import {MONGO_URI} from "./config/keys.js";
const mongo_uri = MONGO_URI.mongo_uri;
import bodyParser from "body-parser";

const app = express();
const router = express.Router();

mongoose
  .connect(mongo_uri, {useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Ehhhh Buckle This')
})

const port = process.env.port || 5001;

app.listen(port, () => console.log(`Server is running on port ${port}`));