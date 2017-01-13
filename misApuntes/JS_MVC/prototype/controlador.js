var FormController = function(pModel){
 
    this.model = pModel || new FormModel();
     
    this.fill_clicked = function(){
        this.model.setInputText('Hello World');
    };
 
    this.clear_clicked = function(){
        this.model.setInputText('');
    }
};
 
FormController.prototype.init = function(){
 
    var self = this;
 
    $('#fillbutton').click(function(){ self.fill_clicked(); });
    $('#clearbutton').click(function(){ self.clear_clicked(); });
};
 
FormController.prototype.getModel = function(){
    return this.model;
};