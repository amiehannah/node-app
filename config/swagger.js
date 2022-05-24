const students = require("../docs/student.swagger");

const swaggerDocument = {
  openapi: "3.0.1",
  info: {
    version: "1.0.0",
    title: "Amie's Node API",
    description:
      "The documentation for the Node API built on the self-paced course, designed to introduce server-side programming",
    contact: {
      name: "Amie Edwards",
      email: "amie.edwards17@gmail.com",
      url: "https://nology.io",
    },
  },
  servers: {
      url: "https://localhost:3000",
      description: "Local Server",
  },
  tags: {
      name: "Students"
  },
  //we need to give it the available paths for the API users to interact with
  paths: {
      "/api/students": {
          get: students.findAll,
          post: students.create,
      },
      "/api/students/:id" : {
        get: students.find,
        delete: students.destroy,
      },
  }
};

module.exports = swaggerDocument;
