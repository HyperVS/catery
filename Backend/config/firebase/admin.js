const { initializeApp, credential } = require('firebase-admin/app');
const serviceAccount = require("./catery-9be91-firebase-adminsdk-10fky-df83294f58.json");

initializeApp({
    credential: credential.cert(serviceAccount)
});

module.exports = admin;

