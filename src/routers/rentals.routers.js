import rentalsValidation from '../middlewares/rentalsValidation.js';
import finishRentals from '../controllers/finishRentals.js';
import insertRentals from '../controllers/insertRentals.js';
import deleteRentals from '../controllers/deleteRentals.js';
import listRentals from '../controllers/listRentals.js';
import express from 'express';


const routRentals = express.Router();


routRentals.get("/rentals", listRentals);

routRentals.delete("/rentals/:id", deleteRentals);

routRentals.post("/rentals/:id/return", finishRentals);

routRentals.post("/rentals",rentalsValidation ,insertRentals)

export default routRentals;