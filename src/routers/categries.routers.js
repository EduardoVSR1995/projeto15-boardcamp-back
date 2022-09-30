import insertCategories from '../controllers/insertCategories.js';
import nameValidation from '../middlewares/nameValidation.js';
import listenCategori from '../controllers/listenCategori.js';
import express from 'express';


const routCategori = express.Router();

routCategori.get("/categories", listenCategori);

routCategori.post("/categories", nameValidation, insertCategories)

export default routCategori;