const express = require('express')
const router = express.Router()
const postgres = require('../postgres.js')

//Read Route
router.get('/', (req, res) => {
  postgres.query(`SELECT * FROM certificates ORDER BY certificate_id ASC;`, (error, results) => {
    res.json(results.rows)
  })
})

//Create Route
router.post('/', (req,res) => {
   postgres.query(`INSERT INTO certificates (cname, vp, application, issuer, expiration) VALUES ('${req.body.cname}', '${req.body.vp}', '${req.body.application}', '${req.body.issuer}', '${req.body.expiration}');`, (error, results) => {
      postgres.query('SELECT * FROM certificates ORDER BY certificate_id ASC;', (error, results) => {
         res.json({message:'Item successfully added', data: results.rows})
      })
   })
})


//Update Route
router.put('/:certificate_id', (req, res) => {
   postgres.query(`UPDATE tickets SET cname ='${req.body.cname}', vp ='${req.body.vp}', application ='${req.body.application}', issuer ='${req.body.issuer}', expiration ='${req.body.expiration}' WHERE certificate_id =${req.params.certificate_id}`, (error, results) => {
      postgres.query('SELECT * FROM certificates ORDER BY certificate_id ASC;', (error, results) => {
         res.json(results.rows)
      })
   })
})

//Delete Route
router.delete('/:certificate_id', (req, res) => {
   postgres.query(`DELETE FROM certificates WHERE certificate_id = ${req.params.certificate_id};`, (error, results) => {
      postgres.query('SELECT * FROM certificates ORDER BY certificate_id ASC;', (error, results) => {
         res.json(results.rows)
      })
   })
})

module.exports = router
