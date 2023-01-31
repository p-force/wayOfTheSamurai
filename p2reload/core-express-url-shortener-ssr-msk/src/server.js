import express from 'express';
import morgan from 'morgan';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { Link } from './db/models';
import Layout from './components/Layout';

const app = express();
const PORT = 3000;

app.set('view engine', 'hbs');

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));

const renderUrl = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

app.get('/', (req, res) => {
  // Отображает список коротких 'Url'
  const initState = { title: 'Url shortener' };
  const layout = React.createElement(Layout, { initState });
  const html = renderToString(layout);
  res.write('<!DOCTYPE html>');
  res.end(html);
});

app.get('/urls/:param', async (req, res) => {
  const { param } = req.params;
  const urlDB = await Link.findOne({ where: { code: param } });
  res.redirect(urlDB.dataValues.url);
  // Сделать redirect
});

app.post('/urls', async (req, res) => {
  const { url } = req.body;
  let code = '';
  for (let i = 0; i < 9; i++) { code += renderUrl[Math.floor(Math.random() * renderUrl.length)]; }
  const [user, created] = await Link.findOrCreate({
    where: { url },
    defaults: {
      url,
      code,
    },
  });
  const urlDB = await Link.findAll();
  const initState = { title: 'Url shortener', urlDB };
  const layout = React.createElement(Layout, { initState });
  const html = renderToString(layout);
  res.write('<!DOCTYPE html>');
  res.end(html);
  // Создать новый объект 'Url'
  // Автоматически создаются короткие 'Url'
});

app.listen(PORT, () => {
  console.log(`server started PORT: ${PORT}`);
});
