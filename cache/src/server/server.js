const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(cors());
app.use(bodyParser.json());

const posts = [
  { id: 1, title: 'Post 1', content: 'This is first post.' },
  { id: 2, title: 'Post 2', content: 'This is second post.' },
  { id: 3, title: 'Post 3', content: 'This is third post.' },
];

app.get('/posts', (_, res) => {
  console.log('Recieved GET request at /posts');
  res.json(posts);
});

app.listen(4000, () => {
  console.log('Server listening on port 4000');
});
