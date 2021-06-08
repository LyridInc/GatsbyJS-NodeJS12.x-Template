const express = require('express')
const gatsyExpress = require('gatsby-plugin-express');

const app = express()

var morgan = require('morgan')
app.use(morgan('combined'))
// serve static files before gatsbyExpress
app.use(express.static('public/'));
app.use(gatsyExpress('config/gatsby-express.json', {
  publicDir: 'public/',
  template: 'public/404/index.html',

  // redirects all /path/ to /path
  // should be used with gatsby-plugin-remove-trailing-slashes
  redirectSlashes: true,
}));

module.exports = app;