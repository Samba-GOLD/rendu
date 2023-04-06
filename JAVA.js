const form=document.querySelector("form");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let bus = document.getElementById("bus").value;



if (!name || !email || !bus){
    alert("veuillez renseigner les pages");
}
else{
    alert("Demande envoyée! Un créneau vous sera envoyé par email. A bientôt à la Basse Cour Royale!");
    
}
});