const express = require("express");
const fs = require("fs");
const app = express();

// Load student details from the JSON file
const studentData = JSON.parse(fs.readFileSync("studentData.json"));

// API endpoint for loading student details with pagination
app.get("/students", function (req, res) {
  // Extract pagination parameters from query parameters
  const page = parseInt(req.query.page) || 1;
  const pageSize = parseInt(req.query.pageSize) || 10;

  // Calculate the start and end indices for pagination
  const startIndex = (page - 1) * pageSize;
  const endIndex = startIndex + pageSize;

  // Slice the student data to get the paginated results
  const paginatedStudents = studentData.slice(startIndex, endIndex);

  // Return the paginated student details in the API response
  res.json(paginatedStudents);
});

// Start the server
app.listen(3000, function() {
  console.log("Server started on port 3000");
});
