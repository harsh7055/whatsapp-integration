const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

// Endpoint to receive webhook events
app.get('/webhook-receive', (req, res) => {
    // console.log('Received webhook event:', req.body);

    // // Respond with a 200 status to acknowledge receipt of the event
    // res.status(200).send('Webhook received');
    // let mode=req.query["hub.mode"];
    // let challange=req.query["hub.challenge"];
    // let token=req.query["hub.verify_token"];
 
 
    //  if(mode && token){
 
    //      if(mode==="subscribe" && token===mytoken){
    //          res.status(200).send(challange);
    //      }else{
    //          res.status(403);
    //      }
 
    //  }
    res.json("heygit add ")
 
});
app.post

app.listen(port, () => {
    console.log(`Receiver server listening at http://localhost:${port}`);
});
