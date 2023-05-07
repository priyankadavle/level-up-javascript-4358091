// Write your code here
// Write your code here
class Movie{
  constructor(title, director, genre, releaseYear, rating)
  {
    this.title = title;
    this.director = director; this.genre= genre;
    this.releaseYear=releaseYear; this.rating=rating;
  }
  getOverview(){
    return `${this.title}, a ${this.genre} film directed by ${this.director}    in year ${this.releaseYear} with ating ${this.rating}`;
  }

}
const movieInfo = new Movie("ABC", "director D", "simple", "1989", "***");
console.log(movieInfo.getOverview());
