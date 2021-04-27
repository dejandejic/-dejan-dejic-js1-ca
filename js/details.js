const detailsContainer = document.querySelector(".drinks-details");

const queryString = document.location.search;
console.log(queryString);

const params = new URLSearchParams(queryString);
console.log(params);

const id = params.get("id");
console.log(id);

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + id;
console.log(url);


async function drinkId() {

    try{
    const response = await fetch(url);
    const details = await response.json();

    console.log(details);
    createHtml(details);

} catch (error) {
    console.log(error);
    detailsContainer.innerHTML = "Error"
    }
}

drinkId();

function createHtml(details) {
    detailsContainer.innerHTML = `  <h1>${details.idDrink}</h1>
                                    <div class="information">
                                    <b>Drink:</b>${details.strInstructions}
                                    <b>Alchol/Non alcohol:</b> ${details.strAlcoholic}
                                    <b>Glass:</b>${details.strGlass}
                                    </div>`;
}