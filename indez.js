
let arrayusers = []


const formu = document.querySelector("#formulario");
const users = document.querySelector("#usersregister");
//funciones

const CrateItem = (gamertag) => {
    let item = {
        gamertag:gamertag,
        Status:false
    }
    arrayusers.push (item);

    return item;
}


const Savegamertag = () => {
    localStorage.setItem ("Users", JSON.stringify(arrayusers));
    MostrarData();
}

const MostrarData = () => {
    users.innerHTML="";
    arrayusers = JSON.parse (localStorage.getItem("Users"));
    if (arrayusers === null) {arrayusers = []
    }
    else {
        arrayusers.forEach(element => {
            if (element.Status) {
            users.innerHTML+= `<div class="alert alert-warning" role="alert"><span class="material-icons float-left">sports_esports</span><b>${element.gamertag}</b> ${element.Status}<span class="material-icons float-end">edit</span><span class="material-icons float-end">delete_forever</span></div>`
            }
            else {
            users.innerHTML += `<div class="alert alert-primary" role="alert"><span class="material-icons float-left">sports_esports</span><b>${element.gamertag}</b> ${element.Status}<span class="material-icons float-end">edit</span><span class="material-icons float-end">delete_forever</span></div>`
            };
        });
        };
    }

const eliminar= ((gamertag) => {
    let indexArray;
    arrayusers.forEach((elemento, index) => {

    if(elemento.gamertag === gamertag){
        indexArray = index;
    }
    
    });

    arrayusers.splice(indexArray,1);
    Savegamertag();

}
);



const EditStatus= (gamertag) =>{
    let indexarray = arrayusers.findIndex((el)=> {return el.gamertag === gamertag}
    );
    arrayusers [indexarray].Status = true;
    
    Savegamertag();
}




formu.addEventListener ("submit", (e) => {
    e.preventDefault ();
    let gamertagu= document.querySelector("#gamer").value;
    console.log (gamertagu)
    CrateItem (gamertagu);
    Savegamertag();
    formu.reset();
    
});

document.addEventListener ("DOMContentLoaded", MostrarData);

users.addEventListener("click",(e) => {

e.preventDefault();
if (e.target.innerHTML === "delete_forever" || e.target.innerHTML === "edit" ) {

    let texto = e.path[1].childNodes[1].innerHTML;
    if (e.target.innerHTML === "delete_forever") {
        eliminar(texto);
    }
    if (e.target.innerHTML === "edit") {
        EditStatus(texto)}
    }
    }  
    );