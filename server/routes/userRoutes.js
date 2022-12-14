const express = require("express");
const router = express.Router();
const UserData = require("../models/userModel");

router.post("/save_data", (req, res) => {
  const { name, email, mobile, topic, helptext } = req.body;
  const newUser = new UserData({
    name,
    email,
    mobile,
    topic,
    helptext,
  });
  newUser.save();
  res.send({ newUser });
});

router.get("/get-users", async (req, res) => {
  const allUsers = await UserData.find();
  res.send(allUsers);
});

router.get("/get-current-user/:id", async (req, res) => {
  await UserData.findOne({ _id: req.params.id }).then((user) => res.json(user));
});

router.delete("/delete-user/:id", async (req, res) => {
  await UserData.findByIdAndDelete(req.params.id);
  res.send("User deleted");
});

module.exports = router;
