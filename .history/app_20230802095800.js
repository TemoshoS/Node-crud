const {render} = require('ejs');
const express = require('express');
const port = 3000;
const app = express();

app.listen(3000);

app.set('view engine', 'ejs')