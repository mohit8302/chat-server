const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

// Middleware setup
app.use(cors());
app.use(bodyParser.json());

// Sample route to test the server
app.get('/', (req, res) => {
  res.send('Server is running!');
});

// Endpoint to handle the received page content
app.post('/api/page-content', (req, res) => {
  const pageContent = req.body.content;
  console.log('Received page content:', pageContent);

  // Process the page content as needed
  // For example, save to a database or perform some analysis
  // ...

  res.status(200).json({ message: 'Page content received successfully' });
});


app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
