import "./styles.css";
import { displayHomePage } from "./home";
import { displayMenuPage } from "./menu";
import { displayAboutPage } from "./about";


const navButtons = document.querySelectorAll("nav>button");

navButtons.forEach((button)=> {
    button.addEventListener("click", () => {
        const buttonName = button.getAttribute("class");
        if(buttonName == "home-button")
        {
            displayHomePage();
        }
        else if (buttonName == "menu-button")
        {
            displayMenuPage();
        }
        else
        {
            displayAboutPage();
        }
    });
});