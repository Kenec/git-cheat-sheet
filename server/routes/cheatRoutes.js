import express from 'express';
import controllers from '../controllers';
import cheat from '../middlewares/cheat';
import jwtAuth from '../middlewares/jwtAuth';

const cheatController = controllers.cheats;
const cheatRoutes = express.Router();

cheatRoutes
  .get('/', jwtAuth, cheatController.getCheats)
  .post('/', jwtAuth,
             cheat.validateOwner,
             cheat.validateTitle,
             cheat.validateDetail,
             cheatController.addCheat)
  .put('/:id', jwtAuth, cheatController.editCheat)
  .delete('/:id', jwtAuth, cheatController.deleteCheat)

export default cheatRoutes;