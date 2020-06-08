import compression from 'compression';
import express from 'express';
import { VocabWord } from './interfaces/vocab-words/vocab-word';
import { vocabWords } from './vocab-words/words';

const port = process.env.PORT || 3000;

const app = express();
app.use(compression());

app.get('/api/words', (req, res) => {
  const data: VocabWord[]  = vocabWords;
  res.send(data);
});

app.get('/api', (req, res) => {
  res.end();
});

app.listen(port, () => {
  console.log(`app is listening on port: ${port}`);
});
