const mongoose = require("mongoose");

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/movieApp");
  console.log("connection open");
}

const movieSchema = new mongoose.Schema({
  title: String,
  year: Number,
  score: Number,
  rating: String,
});

const Movie = mongoose.model("Movie", movieSchema);

// testing purposes

// const amadeus = new Movie({
//   title: "Amadeus",
//   year: 1986,
//   score: 9.2,
//   rating: "R",
// });

// const inception = new Movie({
//   title: "Inception",
//   year: 2010,
//   score: 8.8,
//   rating: "PG-13",
// });

// const theMatrix = new Movie({
//   title: "The Matrix",
//   year: 1999,
//   score: 8.7,
//   rating: "R",
// });

// const shawshankRedemption = new Movie({
//   title: "The Shawshank Redemption",
//   year: 1994,
//   score: 9.3,
//   rating: "R",
// });

// const fightClub = new Movie({
//   title: "Fight Club",
//   year: 1999,
//   score: 8.8,
//   rating: "R",
// });

// await inception.save();
// await theMatrix.save();
// await shawshankRedemption.save();
// await fightClub.save();

// testing purposes