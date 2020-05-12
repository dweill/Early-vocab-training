import express from 'express';
import { VocabWord } from './models/vocab-words/vocab-word';
import { vocabWords as vocabWords3 } from './vocab-words/words-3';

const path = require('path');

const port = process.env.PORT || 3000;

const app = express();

app.get('/api/words', (req, res) => {
  let data: VocabWord[] = [];
  switch (req.query.age) {
    case '3':
      data = vocabWords3;
      break;
      default:
        console.error('No data');
  }
  if (data) {
    res.send(data);
  } else {
    res.sendStatus(200);
  }
});

app.get('/api', (req, res) => {
  res.end();
});

app.listen(port, () => {
  console.log(`app is listening on port: ${port}`);
});
