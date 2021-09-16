const data = require("./data");
const database = require("./database");
const express = require("express");

database.connection.query("select * from users", (errors, results) => {
  console.log(results);
});


let router = express.Router();

router.get("/user/all", (request, response) => {
  // let users = data.get_all_users();
  // response.status(200).send(users);
  database.connection.query("select * from user", (errors, results) => {
    if (errors) {
      console.log(errors);
      response.status(500).send("Some internal error occurred");
    } else {
      response.status(200).send(results);
    }
  });
});

router.get("/user/by-uid", (request, response) => {
  if (request.query.uid == null || request.query.uid.length == 0) {
    response.status(400).send("Invalid uid passed in the parameters");
  }

  let user = data.get_user_by_user_id(request.query.uid);
  response.status(200).send(user);
});

router.post("/add-user", (request, response) => {
  let user = request.body;
  if (JSON.stringify(user) === "{}") {
    response.status(400).send("Request's body content is invalid!");
  }
  data.add_user(user);
  response.status(200).send("Success!");
});

module.exports = { router };
