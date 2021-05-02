const detailsContainer = document.querySelector(".coctailDetails");

const queryString = document.location.search;
console.log(queryString);

const params = new URLSearchParams(queryString);
console.log(params);

const id = params.get("id");
console.log(id);

const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" + id;
console.log(url);


async function coctailId() {

    try{
    const response = await fetch(url);
    const details = await response.json();

    console.log(details);
    createHtml(details.drinks[0]);

} catch (error) {
    console.log(error);
    detailsContainer.innerHTML = "Error"
    }
}

coctailId();

function createHtml(details) {
    detailsContainer.innerHTML = `  <h1><br></br>${details.idDrink}</h1>
                                    <div class="information">
                                    <b>Instructions:</b>${details.strInstructions}
                                    <b>Ingredients:</b> ${details.strIngredient1}
                                    <b>Second Ingredient:</b>${details.strIngredient2}
                                    </div>`;
}