const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Server is running!');
});

app.post('/api/page-content', (req, res) => {
  const pageContent = req.body.content;
  console.log('Received page content:', pageContent);

  res.status(200).json({ message: 'Page content received successfully' });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
