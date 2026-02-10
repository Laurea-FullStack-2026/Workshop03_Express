const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

// Task 2: Serve static files from public/.
//app.use(express.static("public"));

// Optional: basic root response to verify the server is up.
app.get("/", (req, res) => {
  res.send("FullStack on kivaa!.");
});

// Uncomment to run this example.
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
