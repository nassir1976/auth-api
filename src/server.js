'use strict';

const express = require('express');
const cors = require('cors')
const morgan = require('morgan')
const notFoundHandler = require('./auth/error-handlers/404.js');
const errorHandler = require('./auth/error-handlers/500.js');
const logger = require('./auth/middleware/logger.js');

const authRoutes = require('./auth/routes/routes.js');
const v1Routes = require('./auth/routes/v1.js');

//app level middleware
const app = express();
app.use(logger);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//app level middleware
app.use(cors())
app.use(morgan())
// Routes
app.use('/api/v1', v1Routes);
app.use(authRoutes);

// Catchalls
app.use('*', notFoundHandler);
app.use(errorHandler);

module.exports = {
  server: app,
  start: port => {
    if (!port) { throw new Error("Missing Port"); }
    app.listen(port, () => console.log(`Listening on ${port}`));
  },
};

