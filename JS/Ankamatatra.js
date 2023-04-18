var question = document.getElementById("question");
var reponse = document.getElementById("reponse");
var boutonValider = document.getElementById("boutonValider");
var boutonAbondonner = document.getElementById("boutonAbondonner");
var faux = document.getElementById("faux");
var juste = document.getElementById("juste");
var n = 0 ; //initialisation 
var nbJuste=0; //initialisation 
var nbFaux=0;//initialisation 
 
const hiddenContainer = document.getElementById('hider');

var questRep =[
    {
        quest:"Na kely na ngeza dia lazaina kely foana",
        rep:"varavarakely"
    },
    {
        quest:"Manana vava ihinanana fa tsy manana kibo itahiry",
        rep:"hety"
    },
    {
        quest:"Maty nefa ifaliana ny fahafatesany",
        rep:"baolina"
    },
    {
        quest:"Elo be tsy mipika",
        rep:"lanitra"
    },
    {
        quest:"Bataina tsy zaka, afindra mora foana",
        rep:"aloka"
    },
    {
        quest:"Dobokelin'Andriamanitra tsy azo anasan-damba",
        rep:"maso"
    },
]


function resetGame () {
    n = 0 ;
    nbJuste = 0; 
    nbFaux = 0;
    question.textContent = questRep[n].quest;//initialisation à la première question du tableau
    juste.textContent = nbJuste ;
    faux.textContent = nbFaux ;
    reponse.value = "",
    boutonValider.textContent="VALIDER";
    boutonAbondonner.textContent="AFA-PO";
    boutonAbondonner.classList.remove('hide');
    resetReponse() 
}
resetGame();

function resetReponse () {

    boutonValider.addEventListener('click',valider);
    boutonAbondonner.addEventListener('click',abondonner);
    reponse.addEventListener('keydown',validationEntrer);
    reponse.removeAttribute('readOnly');
    reponse.value="";  
   
}

//fonction d'incrementation
function questionSuivante (){
   if (n <( questRep.length-1)) {
    n+=1;
    question.textContent = questRep[n].quest;
} else {
        reponse.value="Game Over !";
        reponse.setAttribute('readonly',true);
        question.textContent="";
        boutonValider.textContent="HAMERINA";
        boutonAbondonner.classList.add('hide');
    }
   
}

function valider () {

    if( reponse.value.toLowerCase() === questRep[n].rep){
        reponse.value="BRAVO !!";
        setTimeout (questionSuivante, 2100);
        nbJuste += 1 ;
        juste.textContent = nbJuste ;
    }
    else if (reponse.value.toLowerCase() === "game over !") {
            setTimeout(  resetGame, 1000);
    }
    else {
        reponse.value=":-("; 
    }

    boutonValider.removeEventListener('click',valider);
    boutonAbondonner.removeEventListener('click',abondonner);
    reponse.removeEventListener('keydown',validationEntrer);
    reponse.setAttribute('readonly',true);
    setTimeout(resetReponse, 900);
}

function abondonner () {

        nbFaux += 1;
        faux.textContent = nbFaux ;
        reponse.value=questRep[n].rep;
        setTimeout(resetReponse, 900);
        setTimeout (questionSuivante, 1000);
        
}

function validationEntrer (e) {
    if (e.key ==="Enter") {valider()}
}
reponse.addEventListener('keydown',validationEntrer);