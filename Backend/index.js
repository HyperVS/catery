const app = require("./src/app");
const connection = require("./src/db/connection");

// Connect to Mongo database and start express server
connection.once("open", () => {
    const server = app.listen(process.env.PORT || 8080, () => {
        console.log("Connected and listening on port " + server.address().port);
    });

    // Handle upgrading HTTP connections to WS
    // server.on("upgrade", (req, socket, head) => {
    //     wss.handleUpgrade(req, socket, head, (websocket) => {
    //         wss.emit("connection", websocket, req);
    //     });
    // });
});