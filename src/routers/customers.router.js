import customersValidation from '../middlewares/customersValidation.js';
import atualizeCustomers from '../controllers/atualizeCustomers.js';
import insertCustomers from '../controllers/insertCustomers.js';
import listsCustomers from '../controllers/listCustomer.js';
import express from 'express';


const routCustomers = express.Router();


routCustomers.get("/customers", listsCustomers);

routCustomers.get("/customers/:id", listsCustomers);

routCustomers.put("/customers/:id", customersValidation, atualizeCustomers);

routCustomers.post("/customers", customersValidation, insertCustomers)

export default routCustomers;