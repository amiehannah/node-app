const findAll = {
  tags: ["Students"],
  description: "GET all students - receive a list of all the students",
  operationId: "findAll",
  responses: {
    200: {
      description: "The students were received",
      content: "application/json", //format will be coming back as json
    },
  },
};

const find = {
  tags: ["Students"],
  description: "GET one student - receive a particular student using their id",
  operationId: "find",
  responses: {
    200: {
      description: "The student was received",
      content: "application/json",
    },
  },
};

const create = {
  tags: ["Students"],
  description: "POST a student - adds a student to the list of students",
  operationId: "create",
  responses: {
    201: {
      //note the 201 code
      description: "The student was successfully created",
      content: "application/json",
    },
  },
};

const destroy = {
  tags: ["Students"],
  description:
    "DELETE one student - remove a student from the list of students using their id",
  operationId: "destroy",
  responses: {
    202: {
      description: "This student was successfully destroyed",
      content: "application/json",
    },
  },
};

module.exports = { findAll, find, create, destroy };



