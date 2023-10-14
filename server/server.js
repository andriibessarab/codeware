const express = require('express');
const cors = require('cors');
const db = require("./db");

const app = express();

let corsOptions = {
    origin: "http://localhost:5000"
};

app.use(cors(corsOptions));

// Parse requests of content-type - application/json
app.use(express.json());

// Parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({extended: false}));

app.use('/api/users', require('./routes/api/users'));

db.sync({force: true}) // Note: remove force: true for production
    .then(() => {
        console.log("Synced models.");
    })
    .catch((err) => {
        console.log("Failed to sync models: " + err.message);
    });

// Set port, listen for requests
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
