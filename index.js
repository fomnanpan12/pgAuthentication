const bodyParser = require('body-parser');
const express = require('express');
const Pool = require('pg').Pool;
const ejs = require('ejs');
const Auth = require('./routes/authenticate');
const dotenv = require("dotenv");
dotenv.config();



PORT = process.env.PORT || 3000;

const pool = new Pool({
    user: process.env.PGUSER,
    host: process.env.PGHOST,
    database: process.env.PGDATABASE,
    password: process.env.PGPASSWORD,
    port: process.env.PGPORT,
})

// app
const app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true,}))
app.set("view engine", 'ejs');
app.set('views', './views');
app.use(bodyParser.json())


// app.get('/authenticate', Auth.Signup);
app.use(Auth);

app.listen(PORT, (err) => {
    if (err) {
        throw err;
    }
    console.log(`app listening on port ${PORT}`);
})
