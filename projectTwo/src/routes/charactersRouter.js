import express from 'express';
import { Naruto } from '../db/models';

const router = express.Router();

router.get('/all', async (req, res) => {
  const characters = await Naruto.findAll();
  const initState = { path: req.originalUrl, characters };
  res.layout(initState);
});

router.get('/info/:id', async (req, res) => {
  const onePers = await Naruto.findByPk(req.params.id);
  const initState = { path: req.originalUrl, onePers };
  res.layout(initState);
});

export default router;
