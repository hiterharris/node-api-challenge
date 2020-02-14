const express = require('express');

const projectsRouter = require('./projects/projectsRouter');
const actionsRouter = require('./actions/actionsRouter');

const server = express();

server.use(express.json());

server.get('/', (req, res) => {
    res.send('<h1>Node API Challenge</h1>');
})

server.use('/projects', projectsRouter);
server.use('/actions', actionsRouter);

const port = process.env.PORT || 3001;
server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
