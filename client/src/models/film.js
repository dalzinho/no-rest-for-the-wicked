var Film = function(options){
  this.title = options.title;
  this.actors = options.actors;
  this.genre = options.genre;
  this.reviews = options.reviews || [];
}

Film.prototype = {
  addReview: function(review){
    this.reviews.push(review)
  }
}

module.exports = Film;