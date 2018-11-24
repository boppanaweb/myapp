import Controller from '@ember/controller';

export default Controller.extend({
	appName:'test',
	data:2,
	  name: "Ember Controller",
	  edit:true,
	   pressCount: 0,
	  actions:{
	  	chnageEidt:function(val){
	  		console.log('changeEdit');
	  		//this.toggleProperty('edit');
	  		if(val==true){
	  		$('table>tr>td:first-child').css('background-color','#ff0000');
	  		}
	  		else
	  		{
	  			$('table>tr>td:first-child').css('background-color','#000000');
	  		}	
	  	},
	  	 buttonClick: function() {
      window.console.log("buttonClick() @ contr")    ;
      this.incrementProperty('pressCount');
    }

	  }
});
	  console.log("in Controller.") ;

