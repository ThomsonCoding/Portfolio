class Fetch {
  async getCurrent(FilmName) {
    const myKey = "DJfD0u6q0JjFjO1nOx5CZc9LP6unGbNe";

    const response = await fetch(
      `https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=${FilmName}&api-key=${myKey}
        `
    );

    const data = await response.json();
    return data;
  }
}
