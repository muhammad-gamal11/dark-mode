const button = document.querySelector(".btn");
// import articles from "./data";

// adding dark theme
button.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
});

const articlesData = articles
  .map((article) => {
    const {length, title, date, snippet } = article;
    // console.log(article);

    return `
    <article class="post">
      <h2>${title}</h2>
      <div class="post-info">
        <span>${date}</span>
        <span>${length} mins read</span>
      </div>
      <p>
        ${snippet}
      </p>
    </article>
  
`;
  })
  .join("");

document.querySelector(".articles").innerHTML = articlesData;
