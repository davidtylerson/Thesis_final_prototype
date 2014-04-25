var data = searchResults.results;



function updateResults(filters) {
	var mixMethodSet = _.filter(data, function (item) {
		if (filters.mixMethod) {
			return _.contains(filters.mixMethod, item.Mix);
		} else {
			return true;
		}
	});
	var glassSet = _.filter(mixMethodSet, function (item) {
		if (filters.glass) {
			return _.contains(filters.glass, item.Glass);
		} else {
			return true;
		}
	});

	// base
	var spiritSet = _.filter(glassSet, function (item) {
		if (filters.spirit) {
			return _.contains(filters.spirit, item.base);
		} else {
			return true;
		}
	});

	// flavor
	var profileSet = _.filter(spiritSet, function (item) {
		if (filters.profile) {
			return !_.isUndefined(_.find(item.profile, function (profileItem) {
				return _.contains(filters.profile, profileItem);
			}));
		} else {
			return true;
		}
	});		
	
	var combinedSets = profileSet; //.concat(glassSet).concat(spiritSet).concat(mixMethodSet);

//console.log(combinedSets)
	return _.uniq(combinedSets, 'id');		
}
