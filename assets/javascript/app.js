//GLOBAL VARIABLES
//***************************************************************
var topics = ["Vince McMahon",
"Stephanie McMahon",
"Becky Lynch",
"Chris Jericho",
"Shane McMahon",
"RKO",
"Trinity Fatu",
"Alexa Bliss",
"Dean Ambrose",
"The Undertaker"]

//FUNCTIONS + CONDITIONAL STATEMENTS
//***************************************************************
$(document).ready(function() {
	for (var i=0; i<topics.length; i++){
	    var topicBtn = $("<button>").attr("data-name", topics[i]).text(topics[i]).appendTo("#buttons");
	};	

	$("button").on("click", function() {
		var buttonValue = $(this).data("name");
		var queryURL = "http://api.giphy.com/v1/gifs/search?q=" +
        buttonValue + "&api_key=dc6zaTOxFJmzC&limit=10";
        console.log(buttonValue)
        console.log(this)
       

        $.ajax({
          url: queryURL,
          method: "GET"
        })
        .done(function(response) {
          console.log(response)
          var results = response.data;

          	for (var i = 0; i < results.length; i++) {
	            var gifDiv = $("<div class='item'>");

	            var rating = results[i].rating;

	            var p = $("<p>").text("Rating: " + rating);

	            var gifImage = $("<img>");
	            gifImage.attr("src", results[i].images.fixed_height.url);

	            gifDiv.prepend(p);
	            gifDiv.prepend(gifImage);

            	$("#gifContainer").prepend(gifDiv);
          		}
      		});
		});
	
});	

//MAIN PROCESSES
//***************************************************************

