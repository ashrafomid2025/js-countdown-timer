const API = "420f898b11154858acbbb5c89a6bca6f";
const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API}`
fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=420f898b11154858acbbb5c89a6bca6f").then(response=>{
    const data = response.json();
    data.then(data=>{
        console.log(data);
        const ul = document.getElementById("ul");
        data.articles.forEach(element => {
            const div = document.createElement("div");
            div.innerHTML = 
            `
            <h1>${element.title}</h1>
            <img src = "${element.urlToImage}">
            <h2>${element.description}</h2>
            `
            ul.appendChild(div);
        });
    })
});
