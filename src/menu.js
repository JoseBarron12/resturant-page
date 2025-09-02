const displayMenuPage = () => {
    const content = document.querySelector("#content");

    const background = document.createElement("div");
    background.classList.add("menu-background");
    content.appendChild(background);

    const menuHeader = document.createElement("div");
    menuHeader.classList.add("menu-header");
    background.appendChild(menuHeader);
    
    const header = document.createElement("h1");
    header.textContent = "Our Menu";
    menuHeader.appendChild(header);

    const menuInfo = document.createElement("div");
    menuInfo.classList.add("menu-info");
    background.appendChild(menuInfo);

    const menu = ["breakfast", "lunch", "dinner"];

    menu.forEach((menuType) => {

        const type = document.createElement("div");
        type.classList.add(`${menuType}`);
        menuInfo.appendChild(type);

        // Uppercase the first character of string
        const menuName = menuType.charAt(0).toUpperCase() + menuType.slice(1);
        const typeHeader = document.createElement("h2");
        typeHeader.textContent = `${menuName}`;
        type.appendChild(typeHeader);

        const menuItems = document.createElement("div");
        menuItems.classList.add("menu-items");
        type.appendChild(menuItems);

        
        
        
    });
}

export {displayMenuPage};