import routCategori from './routers/categries.routers.js'
import routGame from './routers/routers.games.js';
import express from 'express';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors())

app.use(routCategori);

app.use(routGame)

app.listen(process.env.PORT , ()=> console.log('Server listening on port 4000.') )