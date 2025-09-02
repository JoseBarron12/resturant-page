const displayHomePage = () => {
    const content = document.querySelector("#content");
    
    const background = document.createElement("div");
    background.classList.add("main-background");
    content.appendChild(background);
    
    const text = document.createElement("div");
    text.classList.add("main-text");
    background.appendChild(text);

    const header = document.createElement("h1");
    header.textContent = "Random Resturant Name";

    const paragraph = document.createElement("p");
    paragraph.textContent = "This is one of the best, if not best resturants ever.\r\nRated very highly by all.";
    
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