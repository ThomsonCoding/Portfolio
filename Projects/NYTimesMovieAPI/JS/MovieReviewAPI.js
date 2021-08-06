const ft = new Fetch();
// const ui = new UI();

const search = document.getElementById("searchBox"); // This is so we can access the information within the search box, which will be used to search the API.
const button = document.getElementById("searchButton"); // This allows us to add the event listener to the search button.

button.addEventListener("click", () => {
  const currentVal = search.value;
  ft.getCurrent(currentVal).then((data) => {
    console.log(data);
  });
});
