const admin = require('firebase-admin');
const serviceAccount = require("./catery-9be91-firebase-adminsdk-10fky-df83294f58.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

module.exports = admin;

