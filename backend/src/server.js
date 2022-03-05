const express = require('express');
require('dotenv').config();
const viewEngine = require('./config/viewEngine');
const bodyParser = require('body-parser');
const cors = require('cors')

const app = express();

const homeRoutes = require('./routes/api');

// config middleware for app
viewEngine(app);
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false}));
// use this lib to resolve 'Access-Control-Allow-Origin' issue when API call made from React
app.use(cors());

// App Router
app.use(homeRoutes);

let port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`app running at port ${port}`);
});