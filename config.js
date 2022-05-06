var admin = require("firebase-admin");

var serviceAccount = require("./push-notifications-b613c-firebase-adminsdk-hvj6k-eb3b993d96.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

module.exports.admin = admin;
