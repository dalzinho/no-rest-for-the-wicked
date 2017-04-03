//since we don't have a database we'll use our front end models at the moment
var films = require('../client/src/models/films')();
var Film = require('../client/src/models/film');
var Review = require('../client/src/models/review');

var express = require('express');
var filmsRouter = express.Router();


filmsRouter.get('/:id', function(req, res){
  res.json(films[req.params.id]);
});

filmsRouter.get('/', function(req, res){
  res.json(films);
});

filmsRouter.put('/:id/addReview', function(req, res){
  var newReview = new Review({
    comment: req.body.comment,
    rating: req.body.rating,
    author: req.body.author
  });

  films[req.params.id].addReview(newReview);
  res.json(films);
});

filmsRouter.put('/:id', function(req, res){

  var putFilm = {
    title: req.body.title,
    actors: [],
    reviews: []
  };


  putFilm.actors.push(req.body.actor);
  films[req.params.id] = putFilm;
  res.json(films);
});

filmsRouter.delete('/:id', function(req, res){
  films.splice(req.params.id, 1);
  res.json(films)
});

filmsRouter.post('/', function(req, res){
  var newFilm = {
    title: req.body.title,
    actors: [],
    reviews: []
  };

  newFilm.actors.push(req.body.actor);
  films.push(newFilm);
  res.json(films);
})



module.exports = filmsRouter;