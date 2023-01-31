import express from 'express';
import { Naruto } from '../db/models';

const router = express.Router();

router.get('/allChar', async (req, res, next) => {
  const characters = await Naruto.findAll();
  res.json(characters);
});

export default router;
