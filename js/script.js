const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
const resultContainer = document.querySelector(".drinksMenu");

async function fetchDrinks() {
    try{
    const response = await fetch(url);
    const json = await response.json();

    console.log(json);

    const drinksMenu = json.drinks;

  
    drinksMenu.forEach(function(result) {
        resultContainer.innerHTML += `<div class="information">
                                      <a href="details.html?id=${result.idDrink}">
                                        <b>Drink:</b>${result.strDrink}
                                        <b>Alchol/Non alcohol:</b> ${result.strAlcoholic}
                                        <b>Glass:</b>${result.strGlass}
                                        </a>
                                     </div>`;
    }); 
} catch (error) {
    console.log(error);
    resultContainer.innerHTML = "Error"
}
}

fetchDrinks();