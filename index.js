import express from 'express';
import mongoose from 'mongoose';
import {MONGO_URI} from "./config/keys.js";
const mongo_uri = MONGO_URI.mongo_uri;
import bodyParser from "body-parser";
import {users} from "./routes/api/users.js"

const app = express();
const router = express.Router();

mongoose
  .connect(mongo_uri, {useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Ehhhh Buckle This')
})

app.use("/api/users", users);

const port = process.env.port || 5001;
app.listen(port, () => console.log(`Server is running on port ${port}`));