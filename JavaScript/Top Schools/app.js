//import top15 from "./top15.json" with {type: "json"};

const info = document.querySelector("#info");

fetch("top15.json")
  .then(response => response.json())
  .then(data => {
    let details = data.map(function(data){
      return `<div>${data.rank}: ${data.title}; ${data.city}, ${data.country}</div>`;
    });
    info.innerHTML = details.join("\n");
  });

//attempt to add logo
// const img = document.createElement("img");
// img.src = "https://www.topuniversities.com/sites/default/files/university-of-california-san-diego-ucsd_89_small.jpg";
// document.body.appendChild(img);
