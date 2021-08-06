class UI {
  constructor() {
    this.uiMovieContainer = document.getElementById("MovieContainer");
  }

  populateUI(data, i = 0, imageSrc = "/Photos/NewYorkTimes.jpeg") {
    this.uiMovieContainer.innerHTML = "";
    for (i; i < data.results.length; i++) {
      let filmName = data.results[i].display_title;
      let imageSrc = data.results[i].multimedia.src;
      let filmSummary = data.results[i].summary_short;
      let filmPublicationDate = data.results[i].publication_date;
      let filmMPAA = data.results[i].mpaa_rating;
      let filmLinkText = data.results[i].link.suggested_link_text;
      let filmLink = data.results[i].link.url;
      console.log(data.results[i]);
      this.uiMovieContainer.innerHTML += `<div class="grid-item-film">
     <h3>${filmName}</h3>
     <img src=${imageSrc} alt="${filmName} image">
     <p><b>Film Summary:</b> ${filmSummary}</p>
     <p><b>Publication Date:</b> ${filmPublicationDate}</p>
     <p><b>Age Rating:</b> ${filmMPAA}</p>
     <a href="${filmLink}" target="_blank">${filmLinkText}</a>
    </div>`;
    }
  }
}
