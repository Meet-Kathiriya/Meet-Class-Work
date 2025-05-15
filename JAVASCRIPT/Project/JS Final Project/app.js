let recipes = [];

document.getElementById('recipeForm').addEventListener('submit', function(event) {
  event.preventDefault();

  let title = document.getElementById('title').value.trim();
  let ingredients = document.getElementById('ingredients').value.trim();
  let instructions = document.getElementById('instructions').value.trim();
  let cuisine = document.getElementById('cuisine').value.trim();

  let recipe = {
    id: Date.now(),
    title: title,
    ingredients: ingredients,
    instructions: instructions,
    cuisine: cuisine
  };

  recipes.push(recipe);
  showRecipes(recipes);
  this.reset();
});

function showRecipes(list) {
  let recipeList = document.getElementById('recipeList');
  recipeList.innerHTML = '';

  if (list.length === 0) {
    recipeList.innerHTML = '<p>No recipes found.</p>';
    return;
  }

  for (let i = 0; i < list.length; i++) {
    let r = list[i];
    let recipeDiv = document.createElement('div');
    recipeDiv.innerHTML = `
      <h3>${r.title}</h3>
      <p><strong>Ingredients:</strong> ${r.ingredients}</p>
      <p><strong>Instructions:</strong> ${r.instructions}</p>
      <p><strong>Cuisine:</strong> ${r.cuisine}</p>
    `;
    recipeList.appendChild(recipeDiv);
  }
}

document.getElementById('searchForm').addEventListener('submit', function(event) {
  event.preventDefault();

  let searchTerm = document.getElementById('searchInput').value.trim().toLowerCase();

  if (searchTerm === '') {
    showRecipes(recipes);
    return;
  }

  let filtered = recipes.filter(recipe => {
    return recipe.title.toLowerCase().includes(searchTerm) ||
           recipe.ingredients.toLowerCase().includes(searchTerm);
  });

  showRecipes(filtered);
});

showRecipes(recipes);
