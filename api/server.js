const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

// Configure CORS options
const corsOptions = {
  origin: 'https://chat-widget-lilac-one.vercel.app',
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Server is running!');
});

app.options('/api/page-content', cors(corsOptions)); // Preflight request handling

app.post('/api/page-content', (req, res) => {
  const pageContent = req.body.content;
  console.log('Received page content:', pageContent);

  res.status(200).json({ message: 'Page content received successfully' });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
