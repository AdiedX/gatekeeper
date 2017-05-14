'use strict';

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const winston = require('winston');
const sequelize = require('sequelize');
const logger = require('./lib/utils/logger');

/* Logging middleware */
if (app.get('env') === 'production') {
  app.use(morgan('combined', { stream: logger.stream }));
} else {
  app.use('dev');
}

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/* Connect to database */
