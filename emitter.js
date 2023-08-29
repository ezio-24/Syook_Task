const socket = require('socket.io-client');
const crypto = require('crypto');
const data = require('./data.json');

const io = socket.connect('http://localhost:3001'); // Adjust the URL to match the Listener Service's URL

function generateRandomIndex(arr) {
    return Math.floor(Math.random() * arr.length);
}

function generateEncryptedMessage() {
    const randomIndex = generateRandomIndex(data.names);
    const name = data.names[randomIndex];
    const origin = data.cities[generateRandomIndex(data.cities)];
    const destination = data.cities[generateRandomIndex(data.cities)];

    const originalMessage = {
        name,
        origin,
        destination,
    };

    const secretKey = crypto.createHash('sha256').update(JSON.stringify(originalMessage)).digest('hex');
    originalMessage.secret_key = secretKey;

    // Encrypt the message using AES-256-CTR

    // Emit the encrypted message
    io.emit('encryptedMessage', encryptedMessage);
}

setInterval(generateEncryptedMessage, 10000); // Emit a new message every 10 seconds
