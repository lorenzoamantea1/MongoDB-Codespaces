import mongoose from "mongoose"
import express from "express"

const app = express();
const PORT = process.env.PORT || 5000;

mongoose.connect('mongodb://localhost:27017/mydb')
  .then(() => console.log('MongoDB connesso'))
  .catch(err => console.error('Errore MongoDB:', err));

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Express + MongoDB!');
});

app.listen(PORT, () => {
  console.log(`Server in ascolto su porta ${PORT}`);
});