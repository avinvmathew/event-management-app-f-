const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 4002;
const eventModel = require('./model/eventData');
require('./connection');
app.use(cors());
app.use(express.json());

app.post("/logins", (req, res) => {
  const { username, password } = req.body;
  eventModel.findOne({ username: username })
    .then((user) => { 
      if (user) {
        if (user.password === password) {
          res.status(200).json({ message: "success" }); // Changed to JSON object with status 200
        } else {
          res.status(401).json({ message: "Incorrect password" }); // Changed to JSON object with status 401
        }
      } else {
        res.status(404).json({ message: "No record exists" }); // Changed to JSON object with status 404
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ message: "Internal Server Error" }); // Added error handling for database errors
    });
});

app.post('/events', (req, res) => {
  eventModel.create(req.body)
    .then((signup) => res.status(201).json(signup)) // Changed to status 201
    .catch((err) => {
      console.error(err);
      res.status(500).json({ message: "Internal Server Error" });
    });
});

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`); // use template literals
});
