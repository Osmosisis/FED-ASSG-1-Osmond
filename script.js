const recipes = [
    {
        id: "tonkatsu",
        title: "Tonkatsu Recipe",
        img: "images/Tonkatsu YIPPEE.jpg",
        instructions: `
            <h3>Ingredients:</h3>
            <ul>
                <li>Pork (Chop)</li>
                <li>Flour</li>
                <li>Egg</li>
                <li>Panko bread crumbs</li>
                <li>Oil for frying</li>
                <li>Lettuce</li>
            </ul>
            <h3>Instructions:</h3>
            <ol>
                <li>Pound the pork loin or pork chop flat until it's about ¾ inch thick.</li> 
                <br><li>Using scissors or a knife, cut slits into the outer white membrane of the pork. This prevents it from curling up as it cooks.</li> 
                <br><li>Next, coat it with flour and shake off the excess.</li>
                <br><li>Add a tablespoon of flour to the egg and mix them together. This creates a thicker egg wash that allows for more breadcrumbs to stick to. Dip the pork into the beaten egg and let the excess drip off.</li>
                <br><li>Transfer the pork to the panko bread crumbs and press firmly to create a thick layer of bread crumbs that won't flake off in the fryer. Be sure to cover any bare spots with breading.</li>
                <br><li>Heat the oil to 340 degrees F over medium heat. Medium heat is essential to cook the pork thoroughly without burning the bread crumbs.</li>
                <br><li>Gently lower the pork cutlet into the fryer and deep fry it for about 5 minutes.</li>
                <br><li>Flip and fry the other side until the pork is fully cooked and the panko coating is golden brown, about 5 more minutes. Try to keep the temperature at 340 degrees F for even cooking. Repeat with any remaining cutlets.</li>
                <br><li>Shred the Lettuce and serve with the Tonkatsu</li>
            </ol>`
    },
    {
        id: "braisedpork",
        title: "Braised Pork Rice Recipe",
        img: "images/Braised-Pork.jpg",
        instructions: `
            <h3>Ingredients:</h3>
            <ul>
                <li>Pork (Belly)</li>
                <li>Egg</li>
                <li>Light & dark soy sauce</li>
                <li>Chinese five-spice powder & white pepper</li>
                <li>Rock sugar</li>
            </ul>
            <h3>Instructions:</h3>
            <ol>
                <li>Put the pork strips into an empty wok/pan over medium-high heat (you don't need any oil). Stir occasionally to evenly heat the meat. You’ll see it changing colour and some oil appearing. So what you’re doing is actually frying the meat with its own fat.</li>
                <br><li>Once the pork gets golden slightly, add minced garlic and rock sugar (or white sugar). Fry until the garlic becomes fragrant and the sugar is melted.</li>
                <br><li>Add the rest of the ingredients: light soy sauce, dark soy sauce, Shaoxing rice wine, five-spice powder, white pepper, diced shiitake mushroom, hard-boiled eggs and fried shallots.</li>
                <br><li>To add more aroma to the dish, use the water in which the mushrooms were soaked as the braising liquid. Top up with more water if necessary to fully immerse the meat.</li>
                <br><li>Once it comes to a full boil. Cover with a lid and turn down the heat to low. Leave to simmer for at least 1 hour until the pork becomes very tender and a little gelatinous.</li>
                <br><li>If there is still a lot of liquid left when the pork is fully cooked, turn the heat to high and boil uncovered to reduce its volume and thicken. However, do not dry it out as it’s nice to serve a little thick broth over the rice.</li>
            </ol>`
    },
    {
        id: "k-bulgogi",
        title: "Korean Bulgogi Recipe",
        img: "images/Korean beef.jpg",
        instructions: `
            <h3>Ingredients:</h3>
            <ul>
                <li>Beef (skirt)</li>
                <li>1 tablespoon toasted sesame oil</li>
                <li>2 tablespoons soy sauce</li>
                <li>4 garlic cloves, minced</li>
                <li>½ teaspoon ground black pepper</li>
                <li>1 tablespoon toasted sesame seeds, coarsely ground</li>
                <li>2 green onion, chopped</li>
                <li>2 tablespoons sugar</li>
            </ul>
            <h3>Instructions:</h3>
            <ol>
                <li>Make marinade by combining the garlic, green onion, soy sauce, sugar, water, sesame oil, sesame seeds, and ground black pepper in a large bowl. Mix it well with a spoon until the sugar is well dissolved.</li>
                <br><li>Add the sliced beef and mix everything by hand until the beef is covered in the marinade. Keep in the fridge at least 30 minutes.</li>
                <br><li>Cook on a pan or a grill, and transfer to a plate or a cast iron plate to serve with rice, lettuce</li>
            </ol>`
    },
    {
        id: "chicken curry",
        title: "Indian Chicken Curry Recipe",
        img: "images/Indian chicken curry.jpg",
        instructions: `
            <h3>Ingredients:</h3>
            <ul>
                    <li>3 tablespoons olive oil</li>
                    <li>1 small onion, chopped</li>
                    <li>2 cloves garlic, minced</li>
                    <li>3 tablespoons curry powder</li>
                    <li>1 teaspoon ground cinnamon</li>
                    <li>1 teaspoon paprika</li>
                    <li>1 bay leaf</li>
                    <li>½ teaspoon grated fresh ginger root</li>
                    <li>½ teaspoon white sugar</li>
                    <li>Salt to taste</li>
                    <li>2 skinless, boneless chicken breast halves - cut into bite-size pieces</li>
                    <li>1 tablespoon tomato paste</li>
                    <li>1 cup plain yogurt</li>
                    <li>¾ cup coconut milk</li>
                    <li>½ lemon, juiced</li>
                    <li>½ teaspoon cayenne pepper</li>
            </ul>
            <h3>Instructions:</h3>
            <ol>
                <li>Heat olive oil in a skillet over medium heat. Sauté onion until lightly browned.</li>
                <br><li>Stir in garlic, curry powder, cinnamon, paprika, bay leaf, ginger, sugar, and salt. Continue stirring for 2 minutes.</li>
                <br><li>Add chicken pieces, tomato paste, yogurt, and coconut milk. Bring to a boil, reduce heat, and simmer for 20 to 25 minutes.</li>
                <br><li>Remove bay leaf, and stir in lemon juice and cayenne pepper. Simmer 5 more minutes.</li>
                <br><li>Serve hot and enjoy!</li>
            </ol>`
    },
    {
        id: "kimbap",
        title: "Kimbap Recipe",
        img: "images/Kimbap.jpg",
        instructions: `
            <h3>Ingredients:</h3>
            <ul>
                <li>5 sheets of gim (seaweed paper), roasted slightly (sometimes called “nori” from Japanese)</li>
                <li>4 cups cooked rice (the recipe is here, but make with 2 cups of short grain rice instead of 1 cup)</li>
                <li>½ pound beef skirt steak (or tenderloin, or ground beef)</li>
                <li>1 large carrot, cut into matchsticks (about 1½ cup)</li>
                <li>5 strips of yellow pickled radish (use pre-cut danmuji or cut into 8 inch long strips)</li>
                <li>8 to 10 ounces spinach (1 small bunch), blanched, rinsed in cold water, and strained</li>
                <li>3 eggs</li>
                <li>3 garlic cloves</li>
                <li>2 teaspoons soy sauce</li>
                <li>1 tablespoon plus 1 teaspoon brown (or white) sugar</li>
                <li>1½ teaspoon kosher salt</li>
                <li>2½ tablespoons toasted sesame oil</li>
                <li>vegetable oil</li>
            </ul>
            <h3>Instructions:</h3>
            <ol>
                <li>Place freshly made rice in a large, shallow bowl. Gently mix in ½ teaspoon kosher salt and 2 teaspoons toasted sesame oil over top with a rice scoop or a wooden spoon. Let it cool down enough so it’s no longer steaming. Cover and set aside.</li>
                <br><li>Combine the blanched spinach, 2 minced garlic cloves, ½ teaspoon kosher salt, and 2 teaspoons toasted sesame oil in a bowl. Mix well by hand and put it on a large platter with the sliced yellow pickled radish.</li>
                <br><li>Combine the carrot matchsticks with ¼ teaspoon kosher salt. Mix well and let it sweat for 5 to 10 minutes. Heat a pan and add a few drops vegetable oil.</li> 
                <br><li>Squeeze out excess water from the carrot, then sauté for about 1 minute. Put it on the platter next to the spinach.</li>
                <br><li>Trim the fat from the skirt steaks and slice into ¼ inch wide, 3 to 5 inch strips. Put the strips into a bowl.</li> 
                <br><li>Add 2 teaspoons soy sauce, 1 minced garlic clove, ¼ teaspoon ground black pepper, 1 tablespoon plus 1 teaspoon brown (or white) sugar, and 2 teaspoons toasted sesame oil. Mix well by hand. Set aside, and let them marinate while we do the egg strips.</li>
                <br><li>Crack 3 eggs in a bowl and add ¼ teaspoon kosher salt. Beat it with a fork and remove the stringy chalaza.</li> 
                <br><li>Drizzle a few drops of oil on a heated 10 to 12 inch non-stick pan. Wipe off the excess with a paper towel so only a thin sheen of oil remains. Turn down the heat to low and pour the egg mixture into the pan. Spread it into a large circle so it fills the pan.</li>
                <br><li>When the bottom of the egg is cooked, flip it over with a spatula. Remove from the heat and let it cook slowly in the hot pan for about 5 minutes, with the ultimate goal of keeping the egg as yellow as possible, and not brown.</li> 
                <br><li>Cut it into ½ inch wide strips. Put it next to the spinach on the platter.</li>
                <br><li>Finish cooking steak.</li>
                <br><li>Roll up and Enjoy!</li>
            </ol>`
    },
    {
        id: "yakisoba",
        title: "Yakisoba Recipe",
        img: "images/Yakisoba.jpg",
        instructions: `
            <h3>Ingredients:</h3>
            <ul>
                <li>Pork (Belly)</li>
                <li>Soba noodles</li>
                <li>Yakisoba sauce</li>
                <li>Various vegetables</li>
            </ul>
            <h3>Instructions:</h3>
            <ol>
                <li>Cut the ingredients into bite-size pieces.</li>
                <br><li>Warm up the noodles and transfer them to a dish.</li>
                <br><li>Cook the protein, followed by the tough vegetables, and then the soft vegetables.</li>
                <br><li>Put back the noodles and season them with Yakisoba Sauce.</li>
                <br><li>Toss them all together and serve.</li>
            </ol>`
    },
];

// Function to open the overlay with the selected recipe
function openRecipeOverlay(recipeId) {
    // Find the recipe data based on the recipe id
    const recipe = recipes.find(r => r.id === recipeId);

    // Set the overlay content with the selected recipe's details
    if (recipe) {
        document.getElementById("overlayImage").src = recipe.img;
        document.getElementById("overlayTitle").textContent = recipe.title;
        document.getElementById("overlayInstructions").innerHTML = recipe.instructions;

        // Show the overlay and dimmed background
        document.querySelector(".bg-dim").classList.add("active");
        document.querySelector(".overlay-box").classList.add("active");
    }
}

// Function to close the overlay
function closeOverlay() {
    document.querySelector(".bg-dim").classList.remove("active");
    document.querySelector(".overlay-box").classList.remove("active");
}

// Add click event listeners to each recipe box
document.querySelectorAll(".recipebox").forEach(box => {
    box.addEventListener("click", () => {
        openRecipeOverlay(box.id);
    });
});

// Close overlay when the dimmed background is clicked
document.querySelector(".bg-dim").addEventListener("click", closeOverlay);


//Recipe filtering system

document.addEventListener("DOMContentLoaded", () => {
    // Select all checkboxes and recipe boxes
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    const recipeBoxes = document.querySelectorAll(".recipebox");

    // Function to filter recipes
    function filterRecipes() {
        // Get selected values for each filter category
        const selectedCuisine = Array.from(document.querySelectorAll('input[data-group="Cuisine"]:checked')).map(cb => cb.value.toLowerCase());
        const selectedMeal = Array.from(document.querySelectorAll('input[data-group="Meal"]:checked')).map(cb => cb.value.toLowerCase());
        const selectedIngredients = Array.from(document.querySelectorAll('input[data-group="Ingredients"]:checked')).map(cb => cb.value.toLowerCase());

        // Iterate through all recipe boxes and check if they match the selected filters
        recipeBoxes.forEach(box => {
            const recipeCuisine = box.dataset.cuisine.toLowerCase();
            const recipeMealType = box.dataset.meal.toLowerCase();
            const recipeIngredients = box.dataset.ingredients.toLowerCase().split(",");

            // Check matches
            const matchesCuisine = selectedCuisine.length === 0 || selectedCuisine.includes(recipeCuisine);
            const matchesMeal = selectedMeal.length === 0 || selectedMeal.includes(recipeMealType);
            const matchesIngredients = selectedIngredients.length === 0 || selectedIngredients.some(ingredient => recipeIngredients.includes(ingredient));

            // Show or hide the recipe box based on matches
            if (matchesCuisine && matchesMeal && matchesIngredients) {
                box.style.display = "flex"; // Show matching recipes
            } else {
                box.style.display = "none"; // Hide non-matching recipes
            }
        });
    }

    // Add event listeners to all checkboxes
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener("change", filterRecipes);
    });

    // Initial filter to display all recipes on load
    filterRecipes();
});
