<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <title>Animal Buttons</title>
</head>

<body>
  <button data-animal="cat">meow</button>
  <button data-animal="dog">woof</button>
  <button data-animal="bird">chirp</button>
  <button data-animal="pomsky">grrr</button>
  <div id="gifs-appear-here">
  </div>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
  <script type="text/javascript">
    $("button").on("click", function() {
      var animal = $(this).attr("data-animal");
      var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        animal + "&api_key=dc6zaTOxFJmzC&limit=10";

      $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response) {
        // Step 1: Run this file, click a button, and see what the response object looks like in the browser's console.
        // Open up the data key, then open up the 0th, element. Study the keys and how the JSON is structured.
          var results = response.data;

          for (var i = 0; i < results.length; i++) {
            var animalDiv = $("<div>");

            // var rating = results[i].rating;

            var p = $("<p>").text("Rating: " +results[i].rating);

            var animalImage = $("<img>");
            animalImage.attr("src", results[i].images.fixed_height.url);

            animalDiv.prepend(p);
            animalDiv.prepend(animalImage);

            $("#gifs-appear-here").prepend(animalDiv);
          }
        });
    });
        // Step 2: since the image information is inside of the data key,
        // make a variable named results and set it equal to response.data

        // =============== put step 2 in between these dashes ==================

        // ========================

        // for (var i = 0; i < results.length; i++) {

        // Step 3: uncomment the for loop above and the closing curly bracket below.
        // Make a div with jQuery and store it in a variable named animalDiv.
        // Make a paragraph tag with jQuery and store it in a variable named p.
        // Set the inner text of the paragraph to the rating of the image in results[i].
        // Make an image tag with jQuery and store it in a variable named animalImage.
        // Set the image's src to results[i]'s fixed_height.url.
        // Append the p variable to the animalDiv variable.
        // Append the animalImage variable to the animalDiv variable.
        // Prepend the animalDiv variable to the element with an id of gifs-appear-here.

        // ============= put step 3 in between these dashes ======================

        // ==================================
        // }

    
  </script>
</body>

</html>
