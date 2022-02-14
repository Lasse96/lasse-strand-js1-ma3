const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=e452999af1e441efa51b1461d342e361";
const out = document.querySelector("#out");
const cors = "https://noroffcors.herokuapp.com/" + url;

listGames = (list) => {
    console.log(list);
    list.splice(8, 20);
    out.innerHTML = "";
    for (let item of list) {
        let newdiv = `<div>
        <h2>${item.name}</h2>
        <p>${item.rating}</p>
        <p>${item.tags.length}</p>
        </div>`;
        out.innerHTML += newdiv;
    }
};

fetch(cors)
    .then(response => response.json())
    .then(data => listGames(data.results))
    .catch(error =>{
        console.error(error.message);
        out.innerHTML =`<div class="error> Something wrong!</div>`;
    });

