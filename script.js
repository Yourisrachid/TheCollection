let film = [
    {
        name: "Interstellar",
        director: "Christopher Nolan",
        releaseYear: 2014,
        picture: "assets/interstellar.jpg",
        genre: ["Sci-Fi", "Adventure"],
        cast: [
          "Matthew McConaughey",
          "Jessica Chastain",
          "Anne Hathaway",
          "Timothée Chalamet",
        ],
      },

      {
        name: "Pulp Fiction",
        director: "Quentin Tarantino",
        releaseYear: 1994,
        picture: "assets/pulpfiction.jpg",
        genre: ["Crime", "Drama"],
        cast: [
          "John Travolta",
          "Samuel L Jackson",
          "Uma Thurman",
          "Amanda Plummer",
        ],
      },

      {
        name: "Shrek",
        director: "Andrew Adamson",
        releaseYear: 2001,
        picture: "assets/shrek.jpg",
        genre: ["Comedy", "Fantasy"],
        cast: [
          "Mike Myers",
          "Eddie Murphy",
          "Conrad Vernon",
          "Chris Miller",
        ],
      },

      {
        name: "Les visiteurs",
        director: "Jean-Marie Poiré",
        releaseYear: 1993,
        picture: "assets/lesvisiteurs.jpg",
        genre: ["Comedy", "Fantasy"],
        cast: [
          "Christian Clavier",
          "Valérie Lemercier",
          "Marie-Anne Chazel",
          "Jean Reno",
        ],
      },

      {
        name: "American Psycho",
        director: "Mary Harron",
        releaseYear: 2000,
        picture: "assets/americanpsycho.jpg",
        genre: ["Comedy", "Horror"],
        cast: [
          "Christian Bale",
          "Jared Leto",
          "Willem Dafoe",
          "Guinevere Turner",
        ],
      },

      {
        name: "Green Book",
        director: "Peter Farrelly",
        releaseYear: 2018,
        picture: "assets/greenbook.jpg",
        genre: ["Comedy", "Drama"],
        cast: [
          "Viggo Mortensen",
          "Mahershala Ali",
          "Nick Vallelonga",
          "Linda Cardellini",
        ],
      },

      {
        name: "The Pianist",
        director: "Roman Polanski",
        releaseYear: 1994,
        picture: "assets/thepianist.jpg",
        genre: ["Biographical", "Drama"],
        cast: [
          "Adrien Brody",
          "Thomas Kretschmann",
          "Emilia Fox",
          "Ed Stoppard",
        ],
      },

      {
        name: "The Hunger Games",
        director: "Gary Ross",
        releaseYear: 2012,
        picture: "assets/hungergames.jpg",
        genre: ["Action", "Adventure"],
        cast: [
          "Jennifer Lawrence",
          "Josh Hutcherson",
          "Liam Hemsworth",
          "Lenny Kravitz",
        ],
      },

      {
        name: "Your Name",
        director: "Makoto Shinkai",
        releaseYear: 2016,
        picture: "assets/yourname.jpg",
        genre: ["Fantasy", "Romance"],
        cast: [
          "Kamiki Ryunosuke",
          "Masami Nagasawa",
          "Etsuko Ichihara",
          "Mone Kamishiraishi",
        ],
      },

      {
        name: "Oppenheimer",
        director: "Christopher Nolan",
        releaseYear: 2023,
        picture: "assets/oppenheimer.jpg",
        genre: ["Thriller", "Historical Drama"],
        cast: [
          "Cillian Murphy",
          "Florence Pugh",
          "Robert Downey Jr.",
          "Emily Blunt",
        ],
      },
    
      
]


let article = document.createElement('article');
document.body.appendChild(article);


function createCard (array) {

    let article = document.querySelector('article');
    
    for (i=0; i<array.length; i++) {

        let div = document.createElement('div');
        div.className = 'card';
        article.appendChild(div);


        let titleElement = document.createElement('h2');
        titleElement.textContent = film[i].name;
        titleElement.style.color = 'white';
    
        let yearElement = document.createElement('p');
        yearElement.textContent = film[i].releaseYear;
        yearElement.style.color = 'white';

     
        let directorElement = document.createElement('p');
        directorElement.textContent = film[i].director;
        directorElement.style.color = 'white';

    
        let castElement = document.createElement('p');
        castElement.textContent = film[i].cast;
        castElement.style.color = 'white';


        let genreElement = document.createElement('p');
        genreElement.textContent = film[i].genre;
        genreElement.style.color = 'white';


        let pictureElement = document.createElement('img');
        pictureElement.src = film[i].picture;
        pictureElement.style.width = '100%';

   

    
        div.appendChild(titleElement);
        div.appendChild(directorElement);
        div.appendChild(yearElement);
        div.appendChild(castElement);
        div.appendChild(genreElement);
        div.appendChild(pictureElement);
        
    }

}


createCard(film);


