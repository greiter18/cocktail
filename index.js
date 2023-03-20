import express from 'express';

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Ehhhh Buckle This')
})

const port = process.env.port || 5001;

app.listen(port, () => console.log(`Server is running on port ${port}`));