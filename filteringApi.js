const express = require("express");
const fs = require("fs");
const app = express();

// Load student details from the JSON file
const studentData = JSON.parse(fs.readFileSync("studentData.json"));

// API endpoint for server-side filtering
app.get("/students/filter", function (req, res) {
    // Extract filter criteria from query parameters
    const filterCriteria = req.query.criteria;
  
    // Check if filter criteria is provided
    if (!filterCriteria) {
      return res.status(400).json({ error: "Filter criteria not provided"});
    }
  
    // Filter the student data based on the criteria
    const filteredStudents = studentData.filter((student) =>
      student.name.toLowerCase().includes(filterCriteria.toLowerCase())
    );
  
    // Return the filtered student details in the API response
    res.json(filteredStudents);
  });
  

// Start the server
app.listen(3000, function() {
  console.log("Server started on port 3000");
});
