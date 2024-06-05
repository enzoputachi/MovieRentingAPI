class Movie {
    constructor(title, genre) {
        this.title = title,
        this.genre = genre,
        this.available = true
    }
}

class movieStore {
    constructor() {
        this.movies = [];
    }

    addMovie(title, genre) {
        //create an object of the movie class
        const movie = new Movie(title, genre)
        //add the new moviue to the empty list
        this.movies.push(movie);
    }
}

//import the readline module
const readline = require('readline')
//create an object of movie store
const myMovieStore = new movieStore;
//set up the readline interface to read stdin and write stdout
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//create function to prompt the user for movie details
function askForMovie() {
    rl.question('Enter movie title: ', (title) => {
        rl.question('Enter movie genre: ', (genre) => {
            myMovieStore.addMovie(title, genre);
            console.log(`Added ${title}, ${genre}`);

            //Ask user if they want to add another movie
            rl.question('Do you want to add another movie? (yes/no): ', (answer) => {
                if(answer.toLowerCase() === 'yes') {
                    askForMovie();
                } else {
                    console.log('Final movie list: ', myMovieStore.movies);
                    //close the app
                    rl.close();
                }
            })
        })
    })
}

//
askForMovie();

//handle termination gracefully
rl.on('close', () => {
    console.log('Exiting app now. Odabo!');
    process.exit(0);
})