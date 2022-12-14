import routCustomers from './routers/customers.router.js';
import routCategori from './routers/categries.routers.js';
import routRentals from './routers/rentals.routers.js';
import routGame from './routers/routers.games.js';
import express from 'express';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors())

app.use(routCategori);

app.use(routGame)

app.use(routRentals)

app.use(routCustomers)

app.listen(process.env.PORT , ()=> console.log('Server listening on port 4000.') )