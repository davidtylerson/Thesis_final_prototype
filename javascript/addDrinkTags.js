// global functions

function makeItRain() {

    var results = searchResults.results;
    
    //console.log(results);
    
    var elementTemplate = $('#resultsTemplate').html();
    var $drinkContainer = $('.drink-container');

    //console.log(filters)
    /*
     * The following code demonstrates how to dynamically generate html from
     * JSON data. Note, however that this is the hard way. See the example
     * named "handlebars" for a simpler approach.
     */
    function displayDrinks(results) {
        //console.log(filters);
        var results = updateResults(filters);
        var numResults = results.length;

        for (var i = 0; i < numResults; i++) {
            var compiled = _.template(elementTemplate, results[i]);
            $drinkContainer.append(compiled);

            //console.log(results[i])
        }

    }

    // twitterSample is included in the first script in index.html
    displayDrinks(window.searchResults);

    // to do: on update, empty the drink container element
    // before calling displayDrinks with the updated results
    //$drinkContainer.html('');


}



//For the selector

            var iStart=0; 
        var iEnd =3;

function makeItSuggest() {

    var results = searchResults.results;
    
    //console.log(results);
    
    var elementTemplate = $('#resultsTemplate').html();
    var $drinkContainer = $('.drink-container');


    //console.log(filters)
    /*
     * The following code demonstrates how to dynamically generate html from
     * JSON data. Note, however that this is the hard way. See the example
     * named "handlebars" for a simpler approach.
     */
    function displayFirstSuggestions(results) {
        //console.log(filters);
        var results = updateResults(filters);
        var numResults = results.length;



        for (var i = iStart; i < iEnd; i++) {
            var compiled = _.template(elementTemplate, results[i]);
            $drinkContainer.append(compiled);

            //console.log(results[i])
        }
       

    }

    // twitterSample is included in the first script in index.html
    displayFirstSuggestions(window.searchResults);
     iStart +=3;
        iEnd +=6;

    // to do: on update, empty the drink container element
    // before calling displayDrinks with the updated results
    //$drinkContainer.html('');


}