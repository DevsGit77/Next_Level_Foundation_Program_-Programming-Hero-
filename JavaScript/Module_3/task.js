let movies = [
    {title: "Inception", year: 2010, rating: 8.8, genre: "Sci-Fi"},
    {title: "Titanic", year: 1997, rating: 7.9, genre: "Romance"},
    {title: "The Matrix", year: 1999, rating: 8.7, genre: "Sci-Fi"},
    {title: "Avatar", year: 2009, rating:7.8, genre: "Sci-Fi"},
    {title: "NoteBook", year: 2004, rating:7.8, genre: "Romance"},
];

let topSciFi = movies?.filter((m) => m.genre ==="Sci-Fi")?.sort((a, b) => b.rating - a.rating)?.map((m) => `${m.title} , ${m.rating}`)?.forEach((m) => console.log(`Dekbo ki dekbo na ${m}`));

// console.log(topSciFi);