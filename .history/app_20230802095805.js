const {render} = require('ejs');
const express = require('express');

const app = express();
const port = 3000;
app.listen(3000);

app.set('view engine', 'ejs')