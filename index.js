const express = require("express");
const path = require("path");

const app = express();

// Serve static files from the "Source Code" directory
app.use(express.static(path.join(__dirname, "Source Code")));

// Send the index.html for any request
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "Source Code", "index.html"));
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
