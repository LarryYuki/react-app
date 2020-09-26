const express = require('express');
const app = express();
const PORT = process.env.PORT || 5001;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const apiRoute=require('./route/api-route')
app.use('/' ,apiRoute)

app.listen(PORT, () => { console.log('listening at http://localhost:' + PORT)});