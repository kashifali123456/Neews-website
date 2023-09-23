let key = "3beefb34338249c7b417a606678b0a9a";
cardData = document.querySelector(".cardData");
searchBtn = document.getElementById("searchBtn");
inputText = document.getElementById("inputData");
searchTitle = document.getElementById("type");

const getData = async (input) => {
  let res = await fetch(
    `https://newsapi.org/v2/everything?q=${input}&apiKey=${key}`
  );
  let jsonData = await res.json();
  //   console.log(jsonData.articles);
  searchTitle.innerText = "Search : " + input;
  inputText.value = "";
  cardData.innerHTML = "";
  jsonData.articles.forEach(function (article) {
    // console.log(article);
    let divs = document.createElement("div");
    divs.classList.add("card");
    cardData.appendChild(divs);

    divs.innerHTML = `
        <img src="${article.urlToImage}" alt="">
        <h3>${article.title}</h3>
        <p>${article.description}</p>
      `;
    divs.addEventListener("click", function () {
      window.open(article.url);
    });
  });
};
window.addEventListener("load", function () {
  getData("Pakistan");
});
searchBtn.addEventListener("click", function () {
  let inputData = inputText.value;
  getData(inputData);
});

function navClick(navLink) {
  if (navLink === "politics") {
    document.getElementById("politics").style.color = "rgb(0,140,255)";
    document.getElementById("technology").style.color = "white";
    document.getElementById("sports").style.color = "white";
  } else if (navLink === "sports") {
    document.getElementById("sports").style.color = "rgb(0,140,255)";
    document.getElementById("politics").style.color = "white";
    document.getElementById("technology").style.color = "white";
  } else if (navLink === "technology") {
    document.getElementById("technology").style.color = "rgb(0,140,255)";
    document.getElementById("sports").style.color = "white";
    document.getElementById("politics").style.color = "white";
  }
  getData(navLink);
}
