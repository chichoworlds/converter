app.factory('filmService',['$http', function($http){
  return $http.get('/videos.json')
    .success(function(data){
      return data;
    })
    .error(function(data){
      return data;
    });
}]);
