'use strict';

const express = require('express');
require('dotenv').config();
// small change
const app = express();
const build = process.env.CDN_URL || `${__dirname}/build`;
app.use(express.static(build));
// all the routes will be handled by the frontend
app.get('*', (request, response) => {
  response.sendFile(`${build}/index.html`);
});
app.listen(process.env.PORT, () => {
  console.log('__SERVER_UP__', process.env.PORT);
});


const fs = require('fs');
const pdf = require('html-pdf');

const html = fs.readFileSync('./test.html', 'utf8');
const options = { format: 'Letter' };
 
pdf.create(html, options).toFile('./test.pdf', (err, res) => {
  if (err) return console.log(err);
  console.log(res); // { filename: '/app/businesscard.pdf' }
});
