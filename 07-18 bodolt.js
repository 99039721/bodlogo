// Bodlogo 1
// const sales = [
//   { product: "Apple", quantity: 10 },
//   { product: "Apple", quantity: 7 },
//   { product: "Banana", quantity: 5 },
//   { product: "Banana", quantity: 3 },
// ];

// const totalQuantities = sales.reduce((acc, { product, quantity }) => {
//   if (acc[product]) {
//     acc[product] += quantity;
//   } else {
//     acc[product] = quantity;
//   }
//   return acc;
// }, {});

// // Bodlogo 2
// const book = {
//   title: "To Kill a Mockingbird",
//   author: "Harper Lee",
//   year: 1960,
// };

// const getValue = (key) => book[key];

// console.log(getValue);

// // Bodlogo 3

// const students = [
//   { name: "Bob", grade: 59 },
//   { name: "Alice", grade: 85 },
//   { name: "Charlie", grade: 72 },
// ];

// const names = students
//   .filter((item) => item.grade >= 60)
//   .map(({ name }) => name);

// // Bodlogo 4

// const products = [
//   { name: "Pen", price: 5 },
//   { name: "Eraser", price: 1 },
//   { name: "Notebook", price: 12 },
// ];

// const getProducts = () => {
//   const matchedProducts = products
//     .filter(({ price }) => price > 10)
//     .map(({ name }) => name);

//   return matchedProducts.length ? matchedProducts : "Not found";
// };

// // Bodlogo 5

// const people = [
//   { firstName: "John", lastName: "Doe" },
//   { firstName: "Jane", lastName: "Smith" },
//   { firstName: "Emily", lastName: "Jones" },
// ];

// const fullnames = people.map(
//   ({ firstName, lastName }) => `${firstName} ${lastName}`
// );

// // Bodlogo 6

// const employees = [
//   { name: "Eve", department: "HR" },
//   { name: "Bob", department: "Sales" },
//   { name: "David", department: "Sales" },
//   { name: "Alice", department: "Engineering" },
//   { name: "Charlie", department: "Engineering" },
// ];

// const groupedemployees = employees.reduce((acc, { department, name }) => {
//   if (!acc[department]) {
//     acc[department] = [];
//   }

//   acc[department].push(name);

//   return acc;
// }, {});

// // Bodlogo 7

// const books = [
//   { title: "1984", year: 1949 },
//   { title: "The Great Gatsby", year: 1925 },
//   { title: "To Kill a Mockingbird", year: 1960 },
// ];

// const updatedBooks = books.map((book) => ({
//   writtenYear: new Date().getFullYear() - book.year,
//   ...book,
// }));

// // Bodlogo 8

// const tasks = [
//   { id: 1, description: "Do laundry", completed: false },
//   { id: 2, description: "Clean dishes", completed: false },
//   { id: 3, description: "Buy groceries", completed: false },
// ];

// const updateTask = (taskId) => {
//   const foundTask = tasks.find(({ id }) => id === taskId);

//   if (!foundTask) return "Not found";

//   foundTask.completed = true;

//   return tasks;
// };

// console.log(updateTask(2));

// // Bodlogo 9

// const users1 = [
//   { id: 1, name: "Alice", email: "alice@example.com" },
//   { id: 2, name: "Bob", email: "bob@example.com" },
// ];
// const users2 = [
//   { id: 2, name: "Bob", email: "bob@example.com" },
//   { id: 3, name: "Charlie", email: "charlie@example.com" },
// ];

// const concat = users1.concat(users2).reduce((acc, item) => {
//   const foundItem = acc.find((el) => el?.email === item.email);

//   if (!foundItem) {
//     acc.push(item);
//   }
//   return acc;
// }, []);
