import express from 'express';
import controllers from '../controllers';

const cheatController = controllers.cheats;
const cheatRoutes = express.Router();

cheatRoutes.get('/', cheatController.getCheats);

export default cheatRoutes;