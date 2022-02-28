const express = require('express');
require('dotenv').config();
const viewEngine = require('./config/viewEngine');
const bodyParser = require('body-parser');

const app = express();

const homeRoutes = require('./routes/api');

// config middleware for app
viewEngine(app);
app.use(bodyParser.urlencoded({ extended: false}));

// App Router
app.use(homeRoutes);

let port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`app running at port ${port}`);
});