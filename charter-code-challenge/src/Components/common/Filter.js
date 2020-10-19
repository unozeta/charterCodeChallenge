
const createStatesList = (...args) => {
    var statesList = [];
    args.map(restaurant => {
        restaurant.map(r => {
            if (!statesList.includes(r.state)) {
                statesList.push(r.state);
            }; 
        })
    })
    return statesList.sort();
}

const createAttiresList = (...args) => {
    var attiresList = [];
    args.map(restaurant => {
        restaurant.map(r => {
            if (!attiresList.includes(r.attire)) {
                attiresList.push(r.attire);
            }; 
        })
    })
    return attiresList.sort();
}

const createGenresList = (...args) => {
    var genresList = [];
    var genre = [];
    args.map(restaurant => {
        restaurant.map(r => {
            genre = [];
            genre = r.genre.split(',');
            genre.map(g => {
                if (!genresList.includes(g)) {
                    genresList.push(g);
                };                 
            })
        })
    })
    return genresList.sort();
}

  
export { createStatesList,  createAttiresList, createGenresList };