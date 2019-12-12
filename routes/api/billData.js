const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
// Load input validation
const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");
// Load User model
const Bill = require("../../models/BillData");

router.post("/submitbill", (req, res) => {
    // Form validation
        const newbill = new Bill({
          userid: req.body.userid,
          month: req.body.month,
          year: req.body.year,
          watts: req.body.watts
        });
        newbill.save().then(res.json({
          success: true
        }))
        });

router.get("/submitbill", (req, res) => {
    // Form validation
    Bill.find({}, function(err, result) {
    if (err) throw err;
    console.log(result);
    })
});

module.exports = router;