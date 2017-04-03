var express = require('express');
var router = new express.Router();

router.use('/api/films', require('./films'));

router.get('/api', function(req, res){
  res.json({data: 'hello dere'});
})

module.exports = router;