var email = window.document.getElementById('email_user');

var subscribe = window.document.getElementById('subscribe_newsletter');
var dimiss = window.document.getElementById('dmss');

var invalidEmail = window.document.getElementById("invalid_email");

var containerAll = window.document.getElementById("ctnr_all");
var containerImage = window.document.getElementById('ctnr_img');
var containerContent = window.document.getElementById('ctnr_content');


var successStates = window.document.getElementById('success_states');
var sendToEmail = window.document.getElementById('sendto');

var regex = /^([A-Za-z0-9]+)+@[A-Za-z0-9.-]+\.[A-Za-z0-9.-]+$/gm;
subscribe.addEventListener('click', (e)=>{
  e.preventDefault();
  if(email.value.match(regex)){
    containerImage.style.display = "none";
    containerContent.style.display = "none";
    successStates.style.display = "block";
    sendToEmail.innerHTML = email.value;
    sendToEmail.style.fontWeight = "bold";
    containerAll.style.width = "28.438rem";
    containerAll.style.height = "30.563rem";
  }else{
    email.style.backgroundColor = "rgb(255, 232, 230, 100%)";
    email.style.border = "1px solid red";
    invalidEmail.style.display = "block";
    invalidEmail.style.color = "red";
  }
});

dimiss.addEventListener('click', ()=>{
  window.location.reload();
});