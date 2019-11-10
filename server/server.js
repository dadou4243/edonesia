const express = require('express');
const app = express();

const morgan = require('morgan');
const bodyParser = require('body-parser');
const http = require('http');
const path = require('path');
const passport = require('passport');
const mongoose = require('mongoose');
const cors = require('cors');

const Database = require('./core/database.core');
const AuthCore = require('./core/auth.core');

app.use(
  cors({
    origin: ['http://localhost:4200', 'http://localhost:4201'],
    credentials: true
  })
);

// Middlewares
app.use(morgan('dev'));
app.use(
  bodyParser.json({
    limit: '50mb'
  })
);
app.use(
  bodyParser.urlencoded({
    limit: '50mb',
    extended: true,
    parameterLimit: 50000
  })
);

// Initialize passport
app.use(passport.initialize());

app.use(AuthCore.getUserID());

function createServer() {
  // const port = Number(process.env.PORT || 4000);
  const port = process.env.PORT || 4000;
  app.set('port', port);

  // Create the http Server
  const server = http.createServer(app);

  server.listen(port, (req, res) => {
    console.log(`RUNNING on port ${port}`);
  });
}

connectMongo();

async function checkInternet(cb) {
  const isConnected = await Database.init();
  cb(isConnected);
}

function connectMongo() {
  checkInternet(function(isConnected) {
    if (isConnected === true) {
      console.log('Connection to Mongo OK');
      createServer();
    } else {
      console.log('Not connected to mongo....');
      setTimeout(connectMongo, 3000);
    }
  });
}

app.get('/toto', function(req, res) {
  return res.status(200).send('toto');
});

// On export l'app
exports.app = app;

// On charge les routes
require('./web/index');

// Static Angular Build
app.use(express.static(path.join(__dirname, './client/dist/')));

// Serve the index.html Angular file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './client/dist/index.html'));
});

// Handling Errors
app.use((req, res, next) => {
  const error = new Error('Not found');
  error.status = 404;
  next(error);
});

// Handling Errors
app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message
    }
  });
});
