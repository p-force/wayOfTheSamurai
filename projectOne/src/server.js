import express from 'express';
import morgan from 'morgan';
import React from 'react';
import { renderToString } from 'react-dom/server';
import Layout from './components/Layout';
import { Blog } from './db/models';

const app = express();

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', async (req, res) => {
  const posts = await Blog.findAll();
  const initState = { posts };
  const layoutComponent = React.createElement(Layout, { initState });
  const html = renderToString(layoutComponent);
  res.send(`<!DOCTYPE html>${html}`);
});

app.post('/', async (req, res) => {
  console.log(req.body);
  // await Blog.create({ theme: req.body.theme, message: req.body.message });
  await Blog.create(req.body);
  res.redirect('/');
});

app.get('/post/:id', async (req, res) => {
  const postId = await Blog.findByPk(req.params.id);
  const initState = { postId };
  const layoutComponent = React.createElement(Layout, { initState });
  const html = renderToString(layoutComponent);
  res.send(`<!DOCTYPE html>${html}`);
});

app.listen(3000, console.log('listening port 3000'));
