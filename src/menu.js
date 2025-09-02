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

        if(menuType == "breakfast")
        {
            const breakfastMenu = [
            {
                name: "Classic Pancake Stack",
                price: 8.50,
                description: "Fluffy buttermilk pancakes served with maple syrup and a pat of butter."
            },
            {
                name: "Sunrise Breakfast Burrito",
                price: 9.25,
                description: "Scrambled eggs, cheddar cheese, sausage, and hash browns wrapped in a warm tortilla."
            },
            {
                name: "Avocado Toast Deluxe",
                price: 10.00,
                description: "Sourdough topped with smashed avocado, cherry tomatoes, feta, and a drizzle of olive oil."
            },
            {
                name: "Bacon & Egg Breakfast Sandwich",
                price: 7.75,
                description: "Crispy bacon, fried egg, and American cheese on a toasted brioche bun."
            },
            {
                name: "Veggie Omelette",
                price: 9.00,
                description: "Three-egg omelette filled with spinach, mushrooms, tomatoes, and bell peppers."
            },
            {
                name: "Belgian Waffle",
                price: 8.00,
                description: "Golden waffle topped with whipped cream and seasonal berries."
            },
            {
                name: "Steel-Cut Oatmeal",
                price: 6.50,
                description: "Served with brown sugar, raisins, and a splash of cream."
            },
            {
                name: "Smoked Salmon Bagel",
                price: 11.50,
                description: "Toasted bagel with cream cheese, smoked salmon, capers, and red onion."
            },
            {
                name: "French Toast Bites",
                price: 7.25,
                description: "Cinnamon-sugar coated bites served with warm syrup."
            },
            {
                name: "Breakfast Bowl",
                price: 9.75,
                description: "Layers of eggs, potatoes, cheese, and your choice of bacon or sausage."
            }
            ];

            breakfastMenu.forEach((breakfast) => {
                const menuItem = document.createElement("div");
                menuItem.classList.add("menu-item");
                menuItems.appendChild(menuItem);
                
                const div = document.createElement("div");
                menuItem.appendChild(div);

                const name = document.createElement("h5");
                name.textContent = `${breakfast.name}`;
                div.appendChild(name);

                const price = document.createElement("p");
                price.textContent = breakfast.price.toFixed(2);
                div.appendChild(price);

                const description = document.createElement("p");
                description.textContent = `${breakfast.description}`;
                menuItem.appendChild(description);
            });
 
        }
        else if (menuType == "lunch")
        {
            const lunchMenu = [
            {
                name: "Grilled Chicken Sandwich",
                price: 11.50,
                description: "Marinated grilled chicken breast with lettuce, tomato, and garlic aioli on a toasted bun."
            },
            {
                name: "Classic Cheeseburger",
                price: 12.00,
                description: "Juicy beef patty with cheddar cheese, pickles, lettuce, tomato, and house sauce."
            },
            {
                name: "Caesar Salad",
                price: 9.75,
                description: "Crisp romaine lettuce tossed in Caesar dressing with croutons and parmesan cheese."
            },
            {
                name: "Turkey Club Wrap",
                price: 10.50,
                description: "Sliced turkey, bacon, lettuce, tomato, and ranch dressing wrapped in a flour tortilla."
            },
            {
                name: "BBQ Pulled Pork Sandwich",
                price: 11.00,
                description: "Slow-cooked pulled pork smothered in BBQ sauce, topped with coleslaw on a brioche bun."
            },
            {
                name: "Margherita Flatbread",
                price: 10.25,
                description: "Fresh mozzarella, basil, and tomato sauce on a crispy flatbread."
            },
            {
                name: "Veggie Power Bowl",
                price: 10.75,
                description: "Brown rice, quinoa, roasted vegetables, hummus, and tahini drizzle."
            },
            {
                name: "Fish Tacos",
                price: 12.50,
                description: "Three corn tortillas filled with grilled fish, cabbage slaw, and chipotle mayo."
            },
            {
                name: "Mac & Cheese",
                price: 9.00,
                description: "Creamy five-cheese macaroni baked with a crispy breadcrumb topping."
            }
            ];
            
            lunchMenu.forEach((lunch) => {
                const menuItem = document.createElement("div");
                menuItem.classList.add("menu-item");
                menuItems.appendChild(menuItem);
                
                const div = document.createElement("div");
                menuItem.appendChild(div);

                const name = document.createElement("h5");
                name.textContent = `${lunch.name}`;
                div.appendChild(name);

                const price = document.createElement("p");
                price.textContent = lunch.price.toFixed(2);
                div.appendChild(price);

                const description = document.createElement("p");
                description.textContent = `${lunch.description}`;
                menuItem.appendChild(description);
            });
        }
        else
        {
            const dinnerMenu = [
            {
                name: "Grilled Ribeye Steak",
                price: 22.50,
                description: "12oz ribeye grilled to perfection, served with garlic mashed potatoes and seasonal vegetables."
            },
            {
                name: "Lemon Herb Salmon",
                price: 19.00,
                description: "Pan-seared salmon with a lemon herb butter sauce, served with wild rice and asparagus."
            },
            {
                name: "Chicken Alfredo Pasta",
                price: 16.75,
                description: "Fettuccine tossed in creamy Alfredo sauce with grilled chicken and parmesan cheese."
            },
            {
                name: "Eggplant Parmesan",
                price: 15.50,
                description: "Breaded eggplant slices baked with marinara sauce and mozzarella, served over spaghetti."
            },
            {
                name: "Beef Stir-Fry",
                price: 17.25,
                description: "Sliced beef sautéed with bell peppers, onions, and broccoli in a savory soy-ginger sauce."
            },
            {
                name: "Shrimp Tacos",
                price: 16.00,
                description: "Grilled shrimp in corn tortillas with mango salsa, cabbage slaw, and chipotle crema."
            },
            {
                name: "Stuffed Bell Peppers",
                price: 14.75,
                description: "Bell peppers filled with seasoned rice, ground beef, and tomato sauce, topped with cheese."
            },
            {
                name: "Pesto Chicken Risotto",
                price: 18.25,
                description: "Creamy risotto with grilled chicken, basil pesto, and sun-dried tomatoes."
            },
            {
                name: "Vegetarian Lasagna",
                price: 15.00,
                description: "Layers of pasta with ricotta, spinach, zucchini, marinara, and melted mozzarella."
            },
            {
                name: "Seared Tuna Bowl",
                price: 20.00,
                description: "Sesame-crusted tuna served rare over jasmine rice with avocado, cucumber, and soy glaze."
            }
            ];

            dinnerMenu.forEach((dinner) => {
                const menuItem = document.createElement("div");
                menuItem.classList.add("menu-item");
                menuItems.appendChild(menuItem);
                
                const div = document.createElement("div");
                menuItem.appendChild(div);

                const name = document.createElement("h5");
                name.textContent = `${dinner.name}`;
                div.appendChild(name);

                const price = document.createElement("p");
                price.textContent = dinner.price.toFixed(2);
                div.appendChild(price);

                const description = document.createElement("p");
                description.textContent = `${dinner.description}`;
                menuItem.appendChild(description);
            });
        }
        
    });
}

export {displayMenuPage};