    var filters = {
    	profile: ['Sweet', 'Bitter', 'Spirit Forward', 'Bubbly', 'Fruity', 'Sour'],
    	glass: ['Coupe', 'Collins', 'Rocks', 'Flute'],
    	spirit: ['Absinthe', 'Bourbon', 'Brandy', 'Gin', 'Pisco', 'Rum', 'Rye', 'Scotch', 'Tequila', 'Vodka'],
    	mixMethod: ['Shaken', 'Stirred']
    };

    var noFilters = {
    	profile: ['Sweet', 'Bitter', 'Spirit Forward', 'Bubbly', 'Fruity', 'Sour'],
    	glass: ['Coupe', 'Collins', 'Rocks', 'Flute'],
    	spirit: ['Absinthe', 'Bourbon', 'Brandy', 'Gin', 'Pisco', 'Rum', 'Rye', 'Scotch', 'Tequila', 'Vodka'],
    	mixMethod: ['Shaken', 'Stirred']
    };


    var fields;
    var profileArr;

    function showProfileValues(_filter , _form) {

    	var fields = $(_form).find( ":checkbox" ).serializeArray();
    	
    	if(fields.length<1){
    		filters[_filter] = noFilters[_filter];
    		
    	} else {
    		filters[_filter]=[];

    		for (var i=0;i<fields.length;i++)
    		{ 	
    			filters[_filter].push(fields[i].value);
    		}
    	}
    }

    function clearFilters(){

    	filters = {
    	profile: ['Sweet', 'Bitter', 'Spirit Forward', 'Bubbly', 'Fruity', 'Sour'],
    	glass: ['Coupe', 'Collins', 'Rocks', 'Flute'],
    	spirit: ['Absinthe', 'Bourbon', 'Brandy', 'Gin', 'Pisco', 'Rum', 'Rye', 'Scotch', 'Tequila', 'Vodka'],
    	mixMethod: ['Shaken', 'Stirred']
    }
    };


        var i = 0;                  
    function myLoop () {           
       setTimeout(function () {    
          $('.drink-tag').eq(i).fadeIn(300);;          
          i++;                     
          if (i < $('.drink-container').children().length) {                                
             myLoop();                                   
          }                                         
       }, 20)
    }