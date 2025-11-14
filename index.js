import mongoose from "mongoose"
import express from "express"

const app = express();
const PORT = 3000;

mongoose.connect('mongodb://localhost:27017/mydb')
  .then(() => console.log('✅ Connesso a MongoDB'))
  .catch(err => console.error('Errore MongoDB:', err));

app.get('/', (req, res) => {
  res.send("MongoDB & Express on Codespace!");
});

app.listen(PORT, () => {console.log(`Server in ascolto su porta :${PORT}`);});