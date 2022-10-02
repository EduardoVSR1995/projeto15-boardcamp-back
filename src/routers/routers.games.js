import gameValidation from '../middlewares/gameValidation.js';
import insertGame from '../controllers/insertGame.js';
import listGames from '../controllers/listGames.js';
import express from 'express';


const routGame = express.Router();

routGame.get("/games", listGames)

routGame.post("/games", gameValidation, insertGame)

export default routGame;