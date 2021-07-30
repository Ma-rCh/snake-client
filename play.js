//const net = require("net");
const client = require("../client.js");
const { setupInput } = require("./input");
const connect = client.connect;
// establishes a connection with the game server


console.log("Connecting ...");
connect();
setupInput();
