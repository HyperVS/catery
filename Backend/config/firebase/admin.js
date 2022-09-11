const admin = require('firebase-admin');
const serviceAccount = require("./catery-9be91-firebase-adminsdk-10fky-c6861bc249.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

module.exports = admin;

