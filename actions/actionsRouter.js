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

  router.get('/:id', (req, res) => {
    actionsDb.get(req.params.id)
      .then(action => {
          res.status(200).json(action);
      })
      .catch(error => {
        res.status(500).json({message: 'Error'});
      })
  });

  router.post('/', (req, res) => {
    actionsDb.insert(req.body)
      .then(action => {
        if(req.body.project_id) {
            res.status(200).json(action);
        } else {
        res.status(500).json({message: 'Error'});

        }
      })
      .catch(error => {
        res.status(500).json({message: 'Error'});
      })
  });

  router.put('/:id', (req, res) => {
    actionsDb.update(req.params.id, req.body)
      .then(update => {
          res.status(200).json(update);
      })
      .catch(error => {
        res.status(500).json({message: 'Error'});
      })
  });

  router.delete('/:id', (req, res) => {
    actionsDb.remove(req.params.id)
      .then(remove => {
          res.status(200).json(remove);
      })
      .catch(error => {
        res.status(500).json({message: 'Error'});
      })
  })

module.exports = router;