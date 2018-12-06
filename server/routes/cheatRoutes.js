import express from 'express';
import controllers from '../controllers';

const cheatController = controllers.cheats;
const cheatRoutes = express.Router();

cheatRoutes
  .get('/', cheatController.getCheats)
  .post('/', cheatController.addCheat)
  .put('/:id', cheatController.editCheat)
  .delete('/:id', cheatController.deleteCheat)

export default cheatRoutes;