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

    userImage.src = usersObject[randomIndex].userImage;
    nameText.innerText = "Name : " + usersObject[randomIndex].userName;
    lastNameText.innerText = "Last Name : " + usersObject[randomIndex].userLastName;
    locationText.innerText = "Location : " + usersObject[randomIndex].userLocation;
    phoneText.innerText = "Phone : " + usersObject[randomIndex].userPhone;
    emailText.innerText = "Email : " + usersObject[randomIndex].userEmail;

}

function getRandomUser(theObject,theMin,theMax){
    theMin = 0;
    theMax = 4;

     theObject = [
         {
             userName: "Cyril",
             userLastName: "Ramaphosa",
             userLocation: "Joburg",
             userPhone: "0825886985",
             userEmail: "cyril.ramaphosa@gmail.com",
             userImage: "pics/cyrilRamaphosa.jpg",
         },

         {
            userName: "Pravin",
            userLastName: "Gordhan",
            userLocation: "Durban",
            userPhone: "0608875524",
            userEmail: "pravin@yahoo.com",
            userImage: "pics/pravinGordhan.jpg",
         },

         {
            userName: "Denzel",
            userLastName: "Washington",
            userLocation: "New York",
            userPhone: "1(646)8878875",
            userEmail: "denzel.washington@gmail.com",
            userImage: "pics/denzelWashington.jpeg",
         },

         {
            userName: "Donald",
            userLastName: "Trump",
            userLocation: "New York",
            userPhone: "1(646)2256658",
            userEmail: "trump.donald@gmail.com",
            userImage: "pics/donaldTrump.jpg",
         },

         {
            userName: "Jeff",
            userLastName: "Bezzos",
            userLocation: "New mexico",
            userPhone: "505-995-7017",
            userEmail: "jeff.bezzos@yahoo.com",
            userImage: "pics/jeffBezos.jpg",
         },
     ];

     generateRandomUser(theObject,theMin,theMax);

}
