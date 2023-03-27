import express from 'express';
import mongoose from 'mongoose';
import {MONGO_URI} from "./config/keys.js";
const mongo_uri = MONGO_URI.mongo_uri;
import bodyParser from "body-parser"; // tells our app what sort of requests it should respond to
import passport from "passport";
import {users} from "./routes/api/users.js"
import { cocktails } from './routes/api/cocktails.js';

const app = express();

mongoose
  .connect(mongo_uri, {useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));
//we told our app to respond to json requests and url encoded is so our app responds from other request ie. postman
app.use(bodyParser.urlencoded({extended: false})); 
app.use(bodyParser.json());

app.use(passport.initialize());
import passportConfig from './config/passport.js'
passportConfig(passport)

//import {passport} from'./config/passport.js';

app.use(express.json());

app.get('/', (req, res) => {res.send('Ehhhh Buckle This')})

app.use("/api/cocktails", cocktails);
app.use("/api/users", users);


const port = process.env.port || 5001;
app.listen(port, () => console.log(`Server is running on port ${port}`));