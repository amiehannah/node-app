const express = require("express");
const swaggerUI = require("swagger-ui-express");
const router = require("./routes/students.js");

// import swagger doc (that we have made)
const swaggerDocument = require("./config/swagger.js");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use("/api/students", router);

app.get("/api", (req, res) => {
  res.send("Welcome to my API!!");
});
// add route for swagger docs
app.use("/api/docs", swaggerUI.serve, swaggerUI.setup(swaggerDocument));

// add 404 route
app.get("*", (req, res) =>
  res.status(404).send("There is no content at this route")
);

app.listen(port, () => console.log(`Server is running on port: ${port}`));

// in index.js change import to const router (a variable) is equal to require (this file)
// in students.js using the commonjs and require syntax for importing, changing the first line - to require('express')
