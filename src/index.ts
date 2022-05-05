import express from 'express';
import bodyParser from 'body-parser';
import router from './networks/routes';


const app = express();
app.use(bodyParser.json());
router(app)
  
app.listen(3000)

console.log("La app esta escuchando en el puerto 3000")
