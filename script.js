// Fonctionnalité 1 :
const footer = document.getElementsByTagName('footer')[0];    
let count = 0;
footer.addEventListener('click', function() {   
  count += 1
  console.log(`clique ${count}`);
});


// Fonctionnalité 2 :
const navbarHeader = document.getElementById('navbarHeader'); 
const hamburgerMenu = document.querySelector('button.navbar-toggler'); 
hamburgerMenu.addEventListener('click', function() {      
  navbarHeader.classList.toggle("collapse");
});


// Fonctionnalité 3 :
const card1 = document.querySelectorAll('div.col-md-4')[0]; 
const editCard1 = document.querySelector('div.col-md-4 button.btn-outline-secondary'); 
editCard1.addEventListener('click', function() {     
  card1.style.color = "red";
});


// Fonctionnalité 4 :
const card2 = document.querySelectorAll('div.col-md-4')[1]; 
const editCard2 = document.querySelectorAll('div.col-md-4 button.btn-outline-secondary')[1]; 
editCard2.addEventListener('click', function() {     
  if (card2.style.color === "green") {
    card2.style.color = "black";
  } else {
    card2.style.color = "green";
  }
});


// Fonctionnalité 5 :
const navbar = document.querySelector('div.navbar'); 
const bootstrap = document.querySelector('head link'); 
const main = document.querySelector('main'); 

navbar.addEventListener('dblclick', function() {     
  bootstrap.setAttribute('disabled', 'disabled');
}); 

main.addEventListener('dblclick', function() {     
  bootstrap.removeAttribute("disabled");
}); 

// Fonctionnalité 6 :
const viewButtons = document.querySelector("div.col-md-4 button.btn-success"); 
const cardTexts = document.querySelector("div.col-md-4 p.card-text");
const cardImgs = document.querySelector("div.col-md-4 img.card-img-top"); 

viewButtons.addEventListener('mouseover', function() {     
  cardTexts.style.display === "none";
  cardImgs.style.width === "20%";
}); 
