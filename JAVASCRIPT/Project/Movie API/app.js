    let obj = {
      "Title": "Jumanji: Welcome to the Jungle",
      "Year": "2017",
      "Rated": "PG-13",
      "Released": "20 December 2017",
      "Runtime": "119 minutes",
      "Genre": "Action, Adventure, Comedy",
      "Director": "Jake Kasdan",
      "Writer": "Chris McKennaErik SommersScott Rosenberg",
      "Actors": "Dwayne Johnson , Kevin Hart , 	Karen Gillan , 	Jack Black , Nick Jonas",
      "Plot": "Four high school students find an old video game console and get sucked into the world of Jumanji, where they become adult avatars with unique abilities. To escape, they must survive the jungle, complete a dangerous quest by returning a magical jewel to its rightful place, and work together—discovering courage, teamwork, and self-confidence along the way.",
      "Language": "English",
      "Country": "United States of America (USA)",
      "Awards": "MTV Movie & TV Awards (2018)",
      "Poster": "https://cdn.cinematerial.com/p/297x/zeegh0s4/jumanji-welcome-to-the-jungle-movie-poster-md.jpg?v=1510596190",
      "Ratings": [
        { "Source": "Internet Movie Database", "Value": "6.9/10" },
        { "Source": "Metacritic", "Value": "58/100" },
        { "Source": "Rotten Tomatoes", "Value": "76%" }
      ],
      "Metascore": "58",
      "imdbRating": "6.9",
      "imdbVotes": "586,654",
      "imdbID": "tt2283362",
      "Type": "movie",
      "DVD": "N/A",
      "BoxOffice": "$962.5 million",
      "Response": "True"
    };

    localStorage.setItem("student", JSON.stringify([obj]));

    function moviecard() {
      let alldata = JSON.parse(localStorage.getItem("student"));
      let main = document.getElementById("main");

      alldata.forEach((item) => {
        let card = document.createElement("div");
        card.className = "w-[320px] m-[15px] bg-white rounded-[12px] shadow-md overflow-hidden transition-transform duration-300 hover:scale-105";

        let img = document.createElement("img");
        img.src = item.Poster;
        img.className = "w-full h-[460px] object-cover";

        let title = document.createElement("h2");
        title.className = "text-center p-2 text-xl bg-gray-100";
        title.innerText = item.Title;

        let details = document.createElement("div");
        details.className = "p-4 text-sm text-gray-800";

        [
          "Year", "Rated", "Released", "Runtime", "Genre", "Director",
          "Writer", "Actors", "Language", "Country", "Awards",
          "Metascore", "imdbRating", "imdbVotes", "BoxOffice", "Type"
        ].forEach(key => {
          let p = document.createElement("p");
          p.innerHTML = `<strong>${key}:</strong> ${item[key]}`;
          details.appendChild(p);
        });

        let ratingSection = document.createElement("div");
        ratingSection.className = "p-4 border-t border-gray-200 bg-gray-50";
        let ratingTitle = document.createElement("h3");
        ratingTitle.className = "mb-2 font-semibold";
        ratingTitle.innerText = "Ratings:";
        ratingSection.appendChild(ratingTitle);

        item.Ratings.forEach(r => {
          let rP = document.createElement("p");
          rP.innerHTML = `<strong>${r.Source}:</strong> ${r.Value}`;
          rP.className = "text-sm";
          ratingSection.appendChild(rP);
        });

        card.append(img, title, details, ratingSection);
        main.appendChild(card);
      });
    }

    moviecard();