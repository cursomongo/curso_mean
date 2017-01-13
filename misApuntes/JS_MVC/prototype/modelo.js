var FormModel = function(){};
 
FormModel.prototype.getInputText = function(){
   return $('#inputtext').val();
};
 
FormModel.prototype.setInputText = function(value){
   $('#inputtext').val(value);
};