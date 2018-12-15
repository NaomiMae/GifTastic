var artists = ["BEYONCE", "SOLANGE", "JAY Z", "DRAKE", "NICKI MINAJ", "LIL WAYNE", "ELLA MAI","BIG SEAN"];
      $(document).on("click", ".furry", function () {
        var artist = $(this).attr("data-type");
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
          artist + "&api_key=aaHZzssXSGK36loVeYs8mncNaiGSy4VS&limit=10";
// where we pull the info from our url.//
        $.ajax({
          url: queryURL,
          method: "GET"
        }).then(function (response) {
          var results = response.data;
          console.log(results);
          for (var i = 0; i < results.length; i++) {
              // we create a div//
            var artistDiv = $("<div>");

            var p = $("<p>").text("RATINGS: " + results[i].rating);

            var artistImage = $("<img>");
            artistImage.addClass("art");
            artistDiv.addClass("card");
        
            artistImage.attr("src", results[i].images.fixed_height_still.url);
            artistImage.attr("data-still", results[i].images.fixed_height_still.url);
            artistImage.attr("data-animate", results[i].images.fixed_height.url);
            artistImage.attr("data-state", "still");
            artistDiv.prepend(artistImage);
            artistDiv.prepend(p);
            $("#gifs-appear-here").prepend(artistDiv);

          }
        });

        $("#gifs-appear-here").on("click", ".art", function () {
          var state = $(this).attr("data-state");
          if (state === "still") {
            $(this).attr("src", $(this).attr("data-animate"));
            $(this).attr("data-state", "animate");
          }
          else {
            $(this).attr("src", $(this).attr("data-still"));
            $(this).attr("data-state", "still");
          }
        })
      });

      function renderButtons() {

        $("#button-container").empty();

        for (var i = 0; i < artists.length; i++) {

          var a = $("<button>");
          a.addClass("furry");
          a.attr("data-type", artists[i]);
          a.text(artists[i]);
          $("#button-container").append(a);
        }
      }
      $("#add-artist").on("click", function (event) {
        event.preventDefault();
        // This line grabs the input from the textbox
        var artist = $("#artist-input").val().trim();
        artists.push(artist);
        console.log(artists);
        renderButtons();
        
      });


      renderButtons();

   