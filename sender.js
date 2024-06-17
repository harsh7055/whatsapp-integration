const axios = require('axios');

const sendWebhook = async () => {
    const webhookUrl = 'http://localhost:3000/webhook-receive'; // URL of the receiving webhook
    const data = {
        message: 'Hello, this is a webhook event!'
    };

    try {
        const response = await axios.post(webhookUrl, data);
        console.log('Webhook sent successfully:', response.data);
    } catch (error) {
        console.error('Error sending webhook:', error);
    }
};

sendWebhook();
