const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

// Endpoint to receive webhook events
app.post('/webhook-receive', (req, res) => {
    console.log('Received webhook event:', req.body);

    // Respond with a 200 status to acknowledge receipt of the event
    res.status(200).send('Webhook received');
});

app.listen(port, () => {
    console.log(`Receiver server listening at http://localhost:${port}`);
});
