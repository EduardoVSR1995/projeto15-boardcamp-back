import insertCategories from '../controllers/insertCategories.js';
import nameValidation from '../middlewares/nameValidation.js';
import listsCategories from '../controllers/listsCategories.js';
import express from 'express';


const routCategori = express.Router();

routCategori.get("/categories", listsCategories);

routCategori.post("/categories", nameValidation, insertCategories)

export default routCategori;