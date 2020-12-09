//Selectors
const generateUserButton = document.querySelector(".generate-user-button");
const userImage = document.querySelector(".image");
const nameText = document.querySelector(".name-text");
const lastNameText = document.querySelector(".last-name-text");
const locationText = document.querySelector(".location-text");
const phoneText = document.querySelector(".phone-text");
const emailText = document.querySelector(".email-text");

//Event Listeners

generateUserButton.addEventListener("click",getRandomUser);

//Variabels

//Functions

function generateRandomUser(usersObject,min,max){
    const randomIndex = Math.floor(Math.random() * (max - min + 1)) + min;

}

function getRandomUser(theObject,theMin,theMax){
    theMin = 0;
    theMax = 5;

     theObject = [
         {
             userName: "Cyril",
             userLastName: "Ramaphosa",
             userLocation: "Joburg",
             userPhone: "0825886985",
             userEmail: "cyril.ramaphosa@gmail.com",
             userImage: "pics/cyrilRamaphosa",
         },

         {
            userName: "Pravin",
            userLastName: "Gordhan",
            userLocation: "Durban",
            userPhone: "0608875524",
            userEmail: "pravin@yahoo.com",
         },
     ];

     generateRandomUser(theObject,theMin,theMax);

}
