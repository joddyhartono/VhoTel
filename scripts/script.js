console.log("js is connected");

let usernameElement = document.getElementById("usernameInput");
let emailElement = document.getElementById("emailInput");
let phoneElement = document.getElementById("phoneInput");
let peopleElement = document.getElementById("peopleInput");
let roomElement = document.getElementById("roomInput");
let checkinElement = document.getElementById("checkinInput");
let checkoutElement = document.getElementById("checkoutInput")
let errorElement = document.getElementById("errorMessage");

function onSubmitForm(e){
  e.preventDefault();

  errorElement.innerText = '';
  errorElement.style.color = "red";

  let usernameInput = usernameElement.value;
  let emailInput = emailElement.value;
  let phoneInput = phoneElement.value;
  let peopleInput = peopleElement.value;
  let roomInput = roomElement.value;
  let checkinInput = checkinElement.value;
  let checkoutInput = checkoutElement.value;


  if(usernameInput === ""){
    errorElement.innerText = "Please enter your full name.";
    return;
  } 
  else if(!emailInput.includes("@") && !emailInput.includes(".com")){
    errorElement.innerText = "Please enter your email address and must contains (@ and .com)";
    return;
  }
  else if(phoneInput.length < 10){
    errorElement.innerText = "Please enter a valid phone number.";
    return;
  }
  else if(peopleInput === "No. of People"){
    errorElement.innerText = "Please select the number of people.";
    return;
  }
  else if(roomInput === "Type of Rooms"){
    errorElement.innerText = "Please select the type of room.";
    return;
  }
  else if(checkinInput === ""){
    errorElement.innerText = "Please select the check-in date.";
    return;
  }
  else if(checkoutInput === ""){
    errorElement.innerText = "Please select the check-out date.";
    return;
  }

  
  errorElement.innerText = "Form submitted successfully!";
  errorElement.style.color = "green";

  console.log(usernameInput);

  usernameElement.value = "";
  emailElement.value = "";
  phoneElement.value = "";
  peopleElement.value = "No. of People";
  roomElement.value = "Type of Rooms";
  checkinElement.value = "";
  checkoutElement.value = "";
}