import express from 'express';
import userRoutes from './userRoutes';
import cheatRoutes from './cheatRoutes';

const router  = express.Router();

router.get('/', (req, res) => {
  res.status(200).send({ message: 'Welcome to the Git Cheat API' });
});

router.use('/v1/users/', userRoutes);
router.use('/v1/gitcheats/', cheatRoutes);

router.get('*', (req, res) => {
  res.status(404).send({
    message: 'The Route does not exist'
  });
});

export default router;