const displayHomePage = () => {
    const content = document.querySelector("#content");
    
    const background = document.createElement("div");
    background.classList.add("main-background");
    content.appendChild(background);
    
    const text = document.createElement("div");
    text.classList.add("main-text");
    background.appendChild(text);

    const header = document.createElement("h1");
    header.textContent = "Harvest & Hearth";

    const paragraph = document.createElement("p");
    paragraph.textContent = "Welcome to Harvest & Hearth — where fresh ingredients, comforting flavors, and thoughtful presentation come together in every dish.\r\n From sunrise breakfasts to cozy dinners, our menu brings the warmth of homemade meals with a modern twist. \r\nWhether you're grabbing a bite or settling in for a full dining experience, you're always home here.";
    
    const buttons = document.createElement("div");
    buttons.classList.add("main-buttons");
    
    text.appendChild(header);
    text.appendChild(paragraph);
    text.appendChild(buttons);

    const reviewBtn = document.createElement("button");
    reviewBtn.textContent = "Reviews";
    
    const learnBtn = document.createElement("button");
    learnBtn.textContent = "Learn More";

    buttons.appendChild(reviewBtn);
    buttons.appendChild(learnBtn);
};

export {displayHomePage};