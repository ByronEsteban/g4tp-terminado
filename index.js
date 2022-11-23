import express from 'express';
import mongoose from 'mongoose';
import morgan from 'morgan';
import router from './Routes/router.js';

const PORT = process.env.PORT || 4000;
const DB = process.env.DB;

const app = express();

mongoose.connect(DB)
   .then(() => console.log("Sigue yendo bien"))
   .catch(err => console.log(err));

app.use(morgan('dev'));
app.use(express.json());
app.use(express.static('public'));

app.use('/', router);

app.get('/', (req, res) => {
  res.send('Hello world');
});

app.listen(PORT, ()=> {
  console.log("Todo bien");
});
