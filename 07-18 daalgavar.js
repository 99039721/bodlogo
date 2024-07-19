//Bodlogo: 1-3.
// Huvirgah  "2020 Toyota Coralla" gedeg shig

// const movie = {
//   title: "Inception",
//   director: "Christopher Nolan",
//   year: 2010,
// };
// const album = {
//   title: "Abbey Road",
//   artist: "The Beatles",
//   releaseYear: 1969,
// };
// const album2 = {
//   title: "Thriller",
//   artist: "Michael Jackson",
//   releaseYear: 1982,
//   genre: "Pop",
// };

// const movie1 = `${movie.year} ${movie.title} ${movie.director}`;
// const album11 = `${album.releaseYear} ${album.title} ${album.artist}`;
// const album22 = `${album2.releaseYear} ${album2.title} ${album2.artist} ${album2.genre}`;

// console.log(movie1);
// console.log(album11);
// console.log(album22);

// //Bodlogo: 4.

// Grade 60aas ih buyu tentsuu baih ueiin humuusiin neriig arrayd hadgal gedeg shig
// Salary 50000-aas ih buyu tentsuu

// const employees = [
//   { name: "John", salary: 50000 },
//   { name: "Jane", salary: 60000 },
//   { name: "Jim", salary: 45000 },
// ];

// const salary = employees
//   .filter((item) => item.salary >= 50000)
//   .map(({ name }) => name);
// console.log(salary);

// //Bodlogo: 5.

// Price 1000 aas ihiig
// const products = [
//   { name: "Laptop", price: 1200 },
//   { name: "Phone", price: 800 },
//   { name: "Tablet", price: 400 },
// ];

// const price = products
//   .filter((item) => item.price > 1000)
//   .map(({ name }) => name);
// console.log(price);

// //Bodlogo: 6.

// // title ni type ni number baival ter objectiig ol
// const books = [
//   { title: 1984, author: "George Orwell" },
//   { title: "Brave New World", author: "Aldous Huxley" },
//   { title: "Fahrenheit 451", author: "Ray Bradbury" },
// ];

// const number = books.find((item) => typeof item.title === "number");
// console.log(number);

// //Bodlogo: 7.

// Price 10 aas ih baigab baraanii nerig hevle. Hervee baihgui bol not found gej hevle. Ternary operator ashiglana gedeg bodlogo shig
// Price 150 aas ih iig

// const gadgets = [
//   { name: "Smartphone", price: 699 },
//   { name: "Smartwatch", price: 199 },
//   { name: "Bluetooth Speaker", price: 49 },
// ];

// const getProducts = () => {
//   const matchedProducts = gadgets
//     .filter(({ price }) => price > 10)
//     .map(({ name }) => name);

//   return matchedProducts.length ? matchedProducts : "Not found";
// };

// console.log(getProducts());

// //Bodlogo: 8.

// // Price 2 ih buyu tentsuu

// const groceries = [
//   { name: "Apple", price: 1 },
//   { name: "Milk", price: 3 },
//   { name: "Bread", price: 2 },
// ];

// const getProducts = () => {
//   const matchedProducts = groceries
//     .filter(({ price }) => price >= 2)
//     .map(({ name }) => name);

//   return matchedProducts.length ? matchedProducts : "Not found";
// };

// console.log(getProducts());

// //Bodlogo: 9.

// Price 100 as ih

// const furniture = [
//   { name: "Chair", price: 45 },
//   { name: "Table", price: 150 },
//   { name: "Lamp", price: 25 },
// ];

// const getProducts = () => {
//   const matchedProducts = furniture
//     .filter(({ price }) => price > 100)
//     .map(({ name }) => name);

//   return matchedProducts.length ? matchedProducts : "Not found";
// };

// console.log(getProducts());

// //Bodlogo: 10-12.

// Hun tus buriin  ovog neriig ashiglaad fullname iig ni hevle gedeg shig

// const authors = [
//   { firstName: "Mark", lastName: "Twain" },
//   { firstName: "Ernest", lastName: "Hemingway" },
//   { firstName: "Jane", lastName: "Austen" },
// ];

// const students = [
//   { firstName: "Alice", lastName: "Johnson" },
//   { firstName: "Bob", lastName: "Brown" },
//   { firstName: "Carol", lastName: "Davis" },
// ];
// const musicians = [
//   { firstName: "Ludwig", lastName: "Beethoven" },
//   { firstName: "Wolfgang", lastName: "Mozart" },
//   { firstName: "Johann", lastName: "Bach" },
// ];

// const fullnames1 = authors.map(
//   ({ firstName, lastName }) => `${firstName} ${lastName}`
// );
// const fullnames2 = students.map(
//   ({ firstName, lastName }) => `${firstName} ${lastName}`
// );
// const fullnames3 = musicians.map(
//   ({ firstName, lastName }) => `${firstName} ${lastName}`
// );

// console.log(fullnames1);
// console.log(fullnames2);
// console.log(fullnames3);

// //Bodlogo: 13-15.

// Zohiol tus buriig hden jiliin omno zohiogdoj baisniig ni hevle. Hugatsaag ni haruulsan shine keyless update hiine gedeg shig

// const movies = [
//   { title: "The Shawshank Redemption", year: 1994 },
//   { title: "The Godfather", year: 1972 },
//   { title: "The Dark Knight", year: 2008 },
// ];

// const albums = [
//   { title: "Abbey Road", year: 1969 },
//   { title: "The Wall", year: 1979 },
//   { title: "Thriller", year: 1982 },
// ];

// const plays = [
//   { title: "Hamlet", year: 1603 },
//   { title: "A Midsummer Night's Dream", year: 1595 },
//   { title: "Death of a Salesman", year: 1949 },
// ];

// const updatedmovies = movies.map((movie) => ({
//   writtenYear: new Date().getFullYear() - movie.year,
//   ...movie,
// }));

// const updatedalbums = albums.map((album) => ({
//   writtenYear: new Date().getFullYear() - album.year,
//   ...album,
// }));

// const updatedplays = plays.map((play) => ({
//   writtenYear: new Date().getFullYear() - play.year,
//   ...play,
// }));

// console.log(updatedmovies);
// console.log(updatedalbums);
// console.log(updatedplays);

// //Bodlogo: 16-17.

// Duriin id aar ni completed iig update hiih function bich

// const events = [
//   { id: 1, name: "Conference", attended: false },
//   { id: 2, name: "Workshop", attended: false },
//   { id: 3, name: "Meetup", attended: false },
// ];

// const appointments = [
//   { id: 1, description: "Dentist appointment", attended: false },
//   { id: 2, description: "Team meeting", attended: false },
//   { id: 3, description: "Lunch with a friend", attended: false },
// ];

// const updateEvent = (eventId) => {
//   const foundEvent = events.find(({ id }) => id === eventId);

//   if (!foundEvent) return "Not found";

//   foundEvent.attended = true;

//   return events;
// };

// const updateAppointment = (appointmentId) => {
//   const foundAppointment = appointments.find(({ id }) => id === appointmentId);

//   if (!foundAppointment) return "Not found";

//   foundAppointment.attended = true;

//   return appointments;
// };

// console.log(updateEvent(3));
// console.log(updateAppointment(2));
