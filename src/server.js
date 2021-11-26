import express from 'express';

const app = express();
const PORT = 8080;

const users = [];

app.use(express.json());

app.get('/user', (req, res) => {
  return res.send({ users: users });
});

app.post('/user', (req, res) => {
  const { name, age } = req.body;
  users.push({ name, age });
  return res.send({ success: true });
});

app.listen(PORT, () => {
  console.log(`Server listening on port http://localhost:${PORT}`);
});
