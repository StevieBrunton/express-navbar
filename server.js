// server.js

const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

// Root route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Route for Climate Crisis
app.get("/climate-crisis", (req, res) => {
    res.redirect('https://regal-dusk-c6a442.netlify.app/');
  });
  

// Route for Typesetting
app.get("/typesetting", (req, res) => {
  res.redirect('https://steviebrunton.github.io/typesetting/');
});

// Route for Four Algorithms
app.get("/four-algorithms", (req, res) => {
  res.redirect('https://steviebrunton.github.io/four-sorting-algo/');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
