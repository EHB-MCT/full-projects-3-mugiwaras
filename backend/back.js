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

app.get('/museumActivities', async (req, res) => {
    try {
        // Connectez-vous à la base de données
        await client.connect();

        // Récupérez les données de la collection
        const coll = client.db('museum').collection('museumActivities');
        const exhibitions = await coll.find({}).toArray();

        // Envoyez les données en réponse
        res.status(200).send(exhibitions);
    } catch (error) {
        // Gestion des erreurs
        res.status(500).send({ 
            error: 'Something went wrong',
            value: error
        });
    } finally {
        // Fermez la connexion à la base de données
        await client.close();
    }
});

app.get('/museumExhibitions', async (req, res) => {
    try {
        // Connectez-vous à la base de données
        await client.connect();

        // Récupérez les données de la collection
        const coll = client.db('museum').collection('museumExhibitions');
        const exhibitions = await coll.find({}).toArray();

        // Envoyez les données en réponse
        res.status(200).send(exhibitions);
    } catch (error) {
        // Gestion des erreurs
        res.status(500).send({
            error: 'Something went wrong',
            value: error
        });
    } finally {
        // Fermez la connexion à la base de données
        await client.close();
    }
});






app.listen(port);
console.log(`API is running at http://localhost:3000/museumExhibitions`);