app.controller('formController', function(){
  this.text = "";
  this.addData = function(product) {
    product.reviews.push(this.text);
    this.text = "";
  };
});
