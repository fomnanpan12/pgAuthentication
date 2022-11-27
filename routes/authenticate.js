const express = require('express');
const { Pool } = require('pg');
const pool = new Pool({
    user: process.env.PGUSER,
    host: process.env.PGHOST,
    database: process.env.PGDATABASE,
    password: process.env.PGPASSWORD,
    port: process.env.PGPORT,
})

// app
var Router = express.Router();
// app.use(bodyParser.json())
// const app = express();



Router.get('/authenticate', (req, res) => {
    res.render('index.ejs')
})

// const emailExist = async(email) => {
//     await pool.query('SELECT * FROM auth_Users WHERE email = $1', [email], (result) =>{
//         if (result) {
//             console.log(result.rows[0]);
//             return true;
//         } else {
//             return false
//         }
//     })
// }

Router.post('/signup', async(req, res) => {
    const {username, email, password, check} = req.body;
    // console.log(username, email, password, check);
    if (!check) {
        console.log('you need to adree to our terms');
    }
    if (!username || !password || !email ) {
        console.log('all fields are required');
    }
    if (password =='') {
        console.log('need good pass');
    }
    await pool.query('SELECT * FROM auth_Users WHERE email =$1', [email], (err,results) =>{
        if (err) {
            throw err;
        }
        console.log( `dear ${email}, you are already a registered user, please login`);
        res.status(200).json(results.rows)
    })
        

    
    
})

module.exports = Router;
