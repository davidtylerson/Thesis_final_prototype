// global functions

(function ($) {
    /*
     * The following code demonstrates how to dynamically generate html from
     * JSON data. Note, however that this is the hard way. See the example
     * named "handlebars" for a simpler approach.
     */
    function displayDrinks(results) {
        var results = searchResults.results;
        var numResults = results.length;
        var elements = [];
        var element;
        var htmlString;

        // log the JSON data so you can explore it in the console.
        console.log(results);

        // note that there is no appending of html to the dom in this loop,
        // an HTML string is created for each result in the data set and added
        // to an array.

        for (var i = 0; i < numResults; i++) {
            // create an html string. Note use of single vs double quotes.
            element = "<div class='glass-type'><img src='" + results[i].glasstype+ "'></div>";
            element += "<div class='box'>";
            element += "<p class='name'>"+ results[i].name +"</p>";
            element += "<p class='base'>Base Spirit:"+ results[i].base +"</p>";
            element += "<p class='profile'>Profile:"+ results[i].profile +"</p>";
            element += "</div>";
            // add each string to an array
            elements.push(element);
        }

        // join the strings from the array, adding a div around each html string
        htmlString = "<div class='drink-tag'>" + elements.join("</div><div class='drink-tag'>") + "</div>";

        // append the assembled string to the DOM
        $('.drink-container').append(htmlString);
    }

    // twitterSample is included in the first script in index.html
    displayDrinks(window.searchResults);


}(window.jQuery));