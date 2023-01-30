const express = require('express')
const app = express()
const cors = require('cors')
const {
    MongoClient
} = require('mongodb')
require('dotenv').config()
const client = new MongoClient(process.env.FINAL_URL)
app.use(express.urlencoded({
    extended: false
}));
app.use(cors())
app.use(express.json())
const port = process.env.PORT || 1337;

app.get('/museumExhibitions', async (req, res) => {
    try {
        //connect to the db
        await client.connect();
        //retrieve the muzzys collection data
        const colli = client.db('museum').collection('museumExhibitions');
        const muzzys = await colli.find({}).toArray();

        //send back the data with response
        res.status(200).send(muzzys);
        console.log("Data from Museum Exhibitions Collection: ", muzzys);
    } catch (error) {

        res.status(500).send({
            error: 'something went wrong',
            value: error
        });
    } finally {
        await client.close();
    }
})



app.listen(port);
console.log(`API is running at http://localhost:3000/museumExhibitions`);