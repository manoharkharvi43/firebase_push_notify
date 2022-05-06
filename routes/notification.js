const express = require("express");
const { Router } = require("express");
const route = Router();

const { admin } = require("../config");

route.post("/sendnotification", (req, res) => {
  const {
    registrationToken,
    message,
    title,
    imageUrl,
    senderName,
    amount,
    mobileNumber,
  } = req.body;
  admin
    .messaging()
    .send({
      token: registrationToken,
      data: {
        type: "Notification",
        senderName,
        amount,
        mobileNumber,
      },
      notification: {
        title,
        body: message,
        imageUrl,
      },
    })
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      res.status(500).send({
        status: 500,
        message: error.message,
      });
    });
});

module.exports = route;
