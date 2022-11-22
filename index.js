import express from 'express';
import mongoose from 'mongoose';
import morgan from 'morgan';
import router from './Routes/router.js';

const PORT = process.env.PORT || 4000;
// const PORT = 3000;
// const DB = process.env.MONGODB_URI || 'mongodb://127.0.0.1/Preguntados';
const DB = 'mongodb+srv://evagriodb:Jokerlal10@questions.q6gicwm.mongodb.net/?retryWrites=true&w=majority'

const app = express();

mongoose.connect(DB)
   .then(() => console.log("Todo bien por ahora"))
   .catch(err => console.log("Todo mal, anda para el culo"));

app.use(morgan('dev'));
app.use(express.json());

app.get('/', (req, res) => {
  res.send("Hermosa la página");
});

// app.get('/evagrio', (req, res) => {
//   res.send("Evagrio es el mejor personaje del mundo!!!");
// });

app.use('/', router);

app.listen(PORT, ()=> {
  console.log("Sigue yendo bien");
});
