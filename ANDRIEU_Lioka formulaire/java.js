let passwordImput = document.getElementById('password');
function validatePPassword() {
let passwordError = document.getElementById('mdpError');
//Expression assez régulière pour virifier la présence d'au moins une majuscule,une minuscule et un caractère spécial
let passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=,*[!@#$%^*()_+/[/]:<>,.?]).{8,}$/;

if (passwordRegex.test(passwordImput.value) && passwordImput.value.length >=8)
{
    passwordError.testContent = ''; //le mot de passe est valide
    } else {
        passwordError.textContent = 'le mot de passe doit contenir au moins une majuscule, une minuscule et un caractère spécial, et faire au moins 8 charactères de long.';

    }

}


 //Obtient les références de l'Icône du Menu Burger et du Menu de Navigation
 const burgerIcon = document.getElementById('burger-icon');
 const menu = document.getElementById('menu');
 
 //Ajoute un écouteur d'évenement au clic sur l'icone du menu burger
 burgerIcon.addEventListener('click', function() {
     //Bascule la classe 'active' pour afficher/masquer le menu de navigation
         menu.classList.toggle('active');
     });
 
const switchThemeBtn = document.querySelector('.allezla')
const body=document.querySelector('.telais')
let toggleTheme = 0;

function darkMode(){
    var sepas = document.body;
    sepas.classList.toggle("telais2")
}

//switchThemeBtn.addEventListener('click', () => {

   // if(toggleTheme === 0) {
       // body.classList.toggle("telais");
      //  toggleTheme++;

   // } else {

    //    body.classList.toggle("telais2");
     //   toggleTheme--;

    //}


    //})