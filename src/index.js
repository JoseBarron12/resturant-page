import "./styles.css";
import { displayHomePage } from "./home";
import { displayMenuPage } from "./menu";
import { displayAboutPage } from "./about";


displayHomePage();
const headerText = document.querySelector("nav>button.home-button>h4");
headerText.classList.add("active");

const navButtons = document.querySelectorAll("nav>button");
navButtons.forEach((button)=> {
    button.addEventListener("click", () => {
        const content = document.querySelector("#content");
        content.replaceChildren();

        const headerTexts = document.querySelectorAll("nav>button>h4");
        headerTexts.forEach((navbarText) => {
            navbarText.classList.remove("active");
        });

        const buttonName = button.getAttribute("class");
        
        if(buttonName == "home-button")
        {
            const headerText = document.querySelector("nav>button.home-button>h4");
            headerText.classList.add("active");
            displayHomePage();
        }
        else if (buttonName == "menu-button")
        {
            const headerText = document.querySelector("nav>button.menu-button>h4");
            headerText.classList.add("active");
            displayMenuPage();
        }
        else
        {
            const headerText = document.querySelector("nav>button.about-button>h4");
            headerText.classList.add("active");
            displayAboutPage();
        }
    });
});