const express = require("express");
const router = express.Router();
const Person = require("../models/person");
const bodyParser = require("body-parser");

router.use(bodyParser.json());

// This is the router for the people collection
router.get("/", async (req, res) => {
  //   res.send("People");
  try {
    const people = await Person.find();
    res.json(people);
  } catch (err) {
    res.send("Error " + err);
  }
});

router.get("/:id", async (req, res) => {
  //   res.send(req.params.id);
  try {
    const person = await Person.findById(req.params.id);
    res.json(person);
  } catch (err) {
    res.send("Error " + err);
  }
});

router.post("/", async (req, res) => {
//   console.log(req.body);
  const person = new Person({
    name: req.body.name,
    age: req.body.age,
    address: req.body.address,
  });
  try {
    const p1 = await person.save();
    res.json(p1);
  } catch (err) {
    res.send("Error");
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const person = await Person.findById(req.params.id);
    person.name = req.body.name;
    const p1 = await person.save();
    res.json(p1);
  } catch (err) {
    res.send("Error");
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const person = await Person.findById(req.params.id);
    const p1 = await person.remove();
    res.json(p1);
  } catch (err) {
    res.send("Error");
  }
});

router.get("/search/:name", async (req, res) => {
  try {
    const person = await Person.find({ name: req.params.name });
    res.json(person);
  } catch (err) {
    res.send("Error");
  }
});

router.put("/:id", async (req, res) => {
  try {
    const person = await Person.findById(req.params.id);
    person.name = req.body.name;
    person.age = req.body.age;
    person.address = req.body.address;
    const p1 = await person.save();
    res.json(p1);
  } catch (err) {
    res.send("Error");
  }
});

module.exports = router;
