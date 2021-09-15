const express = require("express");
const { join } = require("path");
const app = express();


// ------ Geoffre 15/09 try to install API  ----
// -------- Start ----------

// This is to tell that the body of of post will be in JSON format and will transform in JS
const { response, request } = require('express');
server = express();
// This is to tell that the body of of post will be in JSON format and will transform in JS
server.use(express.json());

router = express.Router();

router.get('/apihello', (request, response) => {
    response.status(200).send("Hello!");
} );

server.use(router);

server.listen(3000, () => console.log("API running on port 3000"));

// ------ End ------------

// Serve static assets from the /public folder
app.use(express.static(join(__dirname, "public")));

// Endpoint to serve the configuration file
app.get("/auth_config.json", (req, res) => {
  res.sendFile(join(__dirname, "auth_config.json"));
});

// Serve the index page for all other requests
app.get("/*", (_, res) => {
  res.sendFile(join(__dirname, "index.html"));
});

// Listen on port 5500
app.listen(5500, () => console.log("Application running on port 5500"));