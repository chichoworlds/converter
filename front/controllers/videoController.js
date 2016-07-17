app.controller('videoController', ['filmService', function(film){
  var store = this;
  store.videos = [];
  film.success(function(data){
    store.videos = data;
  });
}]);
