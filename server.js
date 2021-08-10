/*
*
*/
const express = require('express')
const app     = express()
const mysql   = require('mysql');
//
const port = process.env.PORT || 3000
const db = mysql.createConnection ({
  host:  process.env.MYSQL_SERVER || "ec2-34-207-253-112.compute-1.amazonaws.com" ,
  user:  'testuser',
  password: 'qaz11qaz',
  database: 'dbex180'
});
//
app.get('/', (req, res) => {
  res.send('*** HOLA   *****')
}) ;
//
app.listen(port, () => {
  console.log(`**** Ejecutandose ****`) ;
}) ;
//