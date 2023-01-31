import express from 'express';
import morgan from 'morgan';
import layoutMW from './middleware/layoutMW';
import apiRouter from './routes/apiRouter';
import indexRouter from './routes/indexRouter';
import charactersRouter from './routes/charactersRouter';

const app = express();
const PORT = 3000;

app.use(express.static('public'));
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(layoutMW);

app.use('/characters', charactersRouter);
app.use('/api/v1', apiRouter);
app.use('/', indexRouter);

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));
