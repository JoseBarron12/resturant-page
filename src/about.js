import emailImage from "./images/email.png";
import phoneImage from "./images/phone.png";

const displayAboutPage = () => {
    const content = document.querySelector("#content");
    
    const background = document.createElement("div");
    background.classList.add("about-background");
    content.appendChild(background);

    const aboutHeader = document.createElement("div");
    aboutHeader.classList.add("about-header");
    background.appendChild(aboutHeader);

    const headerOne = document.createElement("h1");
    headerOne.textContent = "About Us";
    aboutHeader.appendChild(headerOne);

    const contactInfo = document.createElement("div");
    contactInfo.classList.add("contact-info");
    aboutHeader.appendChild(contactInfo);

    const address = document.createElement("div");
    contactInfo.appendChild(address);

    const addressHeader = document.createElement("h5");
    addressHeader.textContent = "123 Oakwood Lane, Springfield, IL 62704, USA";
    address.appendChild(addressHeader);

    const phone = document.createElement("div");
    contactInfo.appendChild(phone);

    const phoneImg = document.createElement("img");
    phoneImg.src = phoneImage;
    phone.appendChild(phoneImg);

    const phoneHeader = document.createElement("h5");
    phoneHeader.textContent = "+1 (555)-867-5309";
    phone.appendChild(phoneHeader);
    
    const email = document.createElement("div");
    contactInfo.appendChild(email);

    const emailImg = document.createElement("img");
    emailImg.src = emailImage;
    email.appendChild(emailImg);

    const emailHeader = document.createElement("h5");
    emailHeader.textContent = "harvesthearth@gmail.com";
    email.appendChild(emailHeader);

    const aboutUsSection = document.createElement("div");
    aboutUsSection.classList.add("about-us-section");
    aboutHeader.appendChild(aboutUsSection);

    const desc = document.createElement("p");
    desc.textContent = "At Harvest & Hearth, we believe that great food starts with simple, honest ingredients and a touch of warmth. Nestled in a cozy, rustic setting, our restaurant celebrates the beauty of farm-to-table dining, bringing you hearty dishes inspired by the changing seasons.From freshly baked bread straight from our hearth to locally sourced produce and meats, every plate tells a story of care, tradition, and community. Whether you’re gathering with friends, enjoying a family meal, or savoring a quiet moment, we’re here to make you feel right at home. Come for the flavors, stay for the comfort. Welcome to Harvest & Hearth.";
    aboutUsSection.appendChild(desc);

    const aboutMain = document.createElement("div");
    aboutMain.classList.add("about-main");
    background.appendChild(aboutMain);

    const mainHeader = document.createElement("h1");
    mainHeader.textContent = "Map & Hours";
    aboutMain.appendChild(mainHeader);

    const aboutSection = document.createElement("div");
    aboutSection.classList.add("about-section");
    aboutMain.appendChild(aboutSection);

    const hours = document.createElement("div");
    hours.classList.add("hours");
    aboutSection.appendChild(hours);

    const hoursOne = document.createElement("h3");
    hoursOne.textContent = "Monday – Thursday: 11:00 AM – 9:00 PM";
    hours.appendChild(hoursOne);

    const hoursTwo = document.createElement("h3");
    hoursTwo.textContent = "Friday: 11:00 AM – 10:00 PM";
    hours.appendChild(hoursTwo);

    const hoursThree = document.createElement("h3");
    hoursThree.textContent = "Saturday: 9:00 AM – 10:00 PM";
    hours.appendChild(hoursThree);

    const hoursFour = document.createElement("h3");
    hoursFour.textContent = "Sunday: 9:00 AM – 8:00 PM";
    hours.appendChild(hoursFour);

    const map = document.createElement("div");
    map.classList.add("map");
    aboutSection.appendChild(map);
}

export {displayAboutPage};