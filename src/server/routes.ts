import * as express from 'express';
const bodyParser = require('body-parser');
const router = express.Router();
const lines = require('./data/lines.json')
const jsonParser = bodyParser.json();

router.put('/api/winner', jsonParser, async(req, res, next) => {
    // The determine logic of reaching to draw is actually implemented
    // in the front end as it was a bit easier. with more time I think I will 
    // integrate it in the api.
    const payload = await req.body;
    if (!payload && Object.keys(payload).length === 0) {
        res.sendStatus(400);
    }
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (payload[a] && payload[a] === payload[b] && payload[a] === payload[c]) {
          res.status(200).send({ status: payload[a]});
      }
    }
    res.status(200).send({ status: null});
});

export default router;