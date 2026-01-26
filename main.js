

const generateBtn = document.getElementById("generate-btn");
const menuDisplay = document.getElementById("menu-display");
const themeToggleBtn = document.getElementById("theme-toggle-btn");

const dinnerMenus = [
    "Pizza",
    "Burger",
    "Sushi",
    "Pasta",
    "Tacos",
    "Steak",
    "Salad",
    "Kimchi Jjigae",
    "Bibimbap",
    "Fried Chicken"
];

themeToggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});

function getRecommendation() {
    const randomIndex = Math.floor(Math.random() * dinnerMenus.length);
    const recommendedMenu = dinnerMenus[randomIndex];
    
    menuDisplay.innerHTML = ""; // Clear previous content

    if (recommendedMenu === "Pizza") {
        const pizzaImg = document.createElement("img");
        pizzaImg.src = "pizzajpg.jpg";
        pizzaImg.alt = "Pizza";
        pizzaImg.style.maxWidth = "100%";
        pizzaImg.style.maxHeight = "150px"; // Limit image height
        menuDisplay.appendChild(pizzaImg);
    } else {
        menuDisplay.textContent = recommendedMenu;
    }
}

generateBtn.addEventListener("click", getRecommendation);
