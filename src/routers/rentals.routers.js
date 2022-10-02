import RentalsValidation from '../middlewares/rentalsValidation.js';
import atualizeRentals from '../controllers/atualizeRentals.js';
import insertRentals from '../controllers/insertRentals.js';
import listsRentals from '../controllers/listCustomer.js';
import express from 'express';


const routRentals = express.Router();


routRentals.get("/rentals", listsRentals);

//routRentals.get("/rentals/:id", listsRentals);

//routRentals.put("/rentals/:id", RentalsValidation, atualizeRentals);

//routRentals.post("/rentals", RentalsValidation, insertRentals)

export default routRentals;