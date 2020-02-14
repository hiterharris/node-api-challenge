const express = require('express');
const actionsDb = require('../data/helpers/actionModel');
const router = express.Router();

router.get('/', (req, res) => {
    actionsDb.get()
      .then(action => {
        if(action) {
          res.status(200).json(action);
        } else {
          res.status(404).json({ message: 'No actions found' });
        }
      })
      .catch(err => {
        res.status(500).json({message: 'Error: could not access data'});
      })
  });

module.exports = router;