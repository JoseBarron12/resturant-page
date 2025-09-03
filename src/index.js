import "./styles.css";
import { displayHomePage } from "./home";
import { displayMenuPage } from "./menu";
import { displayAboutPage } from "./about";

displayHomePage();

const navButtons = document.querySelectorAll("nav>button");
navButtons.forEach((button)=> {
    button.addEventListener("click", () => {
        const content = document.querySelector("#content");
        content.replaceChildren();

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