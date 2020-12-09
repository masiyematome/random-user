//Selectors
const generateUserButton = document.querySelector(".generate-user-button");
const nameText = document.querySelector(".name-text");
const lastNameText = document.querySelector(".last-name-text");
const locationText = document.querySelector(".location-text");
const phoneText = document.querySelector(".phone-text");
const emailText = document.querySelector(".email-text");

//Event Listeners

generateUserButton.addEventListener("click",getRandomUser);

//Variabels

//Functions

function generateRandomUser(usersObject){

}

function getRandomUser(theObject){
     theObject = [
         {
             userName: "Cyril",
             userLastName: "Ramaphosa",
             userLocation: "Joburg",
             userPhone: "0825886985",
             userEmail: "cyril.ramaphosa@gmail.com",
         },

         {
            userName: "Pravin",
            userLastName: "Gordhan",
            userLocation: "Durban",
            userPhone: "0608875524",
            userEmail: "pravin@yahoo.com",
         },
     ];

     generateRandomUser(theObject);

}
