var filters = {
	profile: ['Sweet', 'Bitter', 'Spirit Forward', 'Bubbly', 'Fruity', 'Sour'],
	glass: ['Coupe', 'Collins', 'Rocks', 'Flute'],
	spirit: ['Rye', 'Bourbon', 'Gin', 'Rum'],
	mixMethod: ['Shaken', 'Stirred']
};

// function showFormValues(selection) {
	var fields = $("#"+selection).find( ":checkbox" ).serializeArray();

	filters.selection=[]

	for (var i=0;i<fields.length;i++){ 
		filters.selection.push(profileFields[i].value);
	};		

}

// function showProfileValues() {
// 	var fields = $("#profile").find( ":checkbox" ).serializeArray();

// 	filters.profile=[]

// 	for (var i=0;i<fields.length;i++){ 
// 		filters.profile.push(profileFields[i].value);
// 	};		

// }

// function showSpiritValues() {
// 	var fields = $("#spirit").find( ":checkbox" ).serializeArray();

// 	filters.spirit=[]

// 	for (var i=0;i<fields.length;i++){ 
// 		filters.spirit.push(spiritFields[i].value);
// 	};		

// }