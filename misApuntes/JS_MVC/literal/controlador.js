var FormController = function(pModel){
 
    var model = pModel || new FormModel();
 
    function fill_clicked(){
        model.setInputText('Hello World');
    }
 
    function clear_clicked(){
        model.setInputText('');
    }
 
    function init(){
 
        $('#fillbutton').click(function(){ fill_clicked(); });
        $('#clearbutton').click(function(){ clear_clicked(); });
    }
 
    return {
        init: init,
        model : model
    };
};