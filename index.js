const bodyParser = require('body-parser');
const express = require('express');
const Pool = require('pg').Pool;
const ejs = require('ejs');
const dotenv = require("dotenv");
dotenv.config()


// app
const app = express();
