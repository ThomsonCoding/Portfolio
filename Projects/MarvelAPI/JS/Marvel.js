const ft = new Fetch();

const button = document.getElementById("searchButton");

button.addEventListener("click", () => {
  console.log(ft.getCurrent());
});
