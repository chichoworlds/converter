app.directive('filmTitle', function(){
  return {
    restrict: 'E', //New HTML element. If 'A' -> attribute. Ex: <h3 form-title></h3>
    templateUrl: 'views/theRest.html',
    controller: function(){

    },
    controllerAs: 'alias'
  };
});
