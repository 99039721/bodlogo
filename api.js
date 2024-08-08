const searchs = document.getElementById("search");
const input = document.getElementById("myInput");

search.addEventListener("click", () => {
  const inputValue = input.value;
  console.log(inputValue);
});

// Giphy API
// https://api.giphy.com/v1/videos/search?q=${variable}&limit=20&api_key=Gc7131jiJuvI7IdN0HZ1D7nh0ow5BU6g
