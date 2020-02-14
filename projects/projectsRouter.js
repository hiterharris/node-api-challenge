const express = require('express');
const projectsDb = require('../data/helpers/projectModel');
const router = express.Router();

router.get('/', (req, res) => {
    projectsDb.get()
      .then(project => {
        if(project) {
          res.status(200).json(project);
        } else {
          res.status(404).json({ message: 'No projects found' });
        }
      })
      .catch(error => {
        res.status(500).json({message: 'Error'});
      })
  });

  router.get('/:id', (req, res) => {
      projectsDb.get(req.params.id)
      .then(project => {
          res.status(200).json(project);
      })
      .catch(error => {
        res.status(500).json({message: 'Error'});
      })
  });

  router.post('/', (req, res) => {
      projectsDb.insert(req.body)
      .then(project => {
          res.status(200).json(project);
      })
      .catch(error => {
        res.status(500).json({message: 'Error'});
      })
  });

  router.put('/:id', (req, res) => {
      projectsDb.update(req.params.id, req.body)
      .then(update => {
          res.status(200).json(update);
      })
      .catch(error => {
        res.status(500).json({message: 'Error'});
      })
  });

  router.delete('/:id', (req, res) => {
      projectsDb.remove(req.params.id)
      .then(remove => {
          res.status(200).json(remove);
      })
      .catch(error => {
        res.status(500).json({message: 'Error'});
      })
  })

module.exports = router;