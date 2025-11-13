import mongoose from "mongoose"
import express from "express"

const app = express();

mongoose.connect('mongodb://localhost:27017/mydb')
  .then(() => console.log('MongoDB connesso'))
  .catch(err => console.error('Errore MongoDB:', err));

app.get('/', (req, res) => {
  res.send("MongoDB & Express on Codespace!");
});

app.listen(3000, () => {console.log("Server in ascolto su porta 3000");});