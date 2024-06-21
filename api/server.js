const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

// Configure CORS options
const corsOptions = {
  origin: 'https://chat-widget-lilac-one.vercel.app',
  optionsSuccessStatus: 200, // Some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.use(cors(corsOptions));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Server is running!');
});

app.options('/api/page-content', cors(corsOptions)); // Enable preflight for this route

app.post('/api/page-content', (req, res) => {
  const pageContent = req.body.content;
  console.log('Received page content:', pageContent);

  res.status(200).json({ message: 'Page content received successfully' });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
