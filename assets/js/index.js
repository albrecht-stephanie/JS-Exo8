function controle(){
  var age = document.getElementById("age").value;

  if (isNaN(age)){ //verification que le champs contient un nombre
    alert("Veuillez saisir un nombre");
  }
  else if (age >= 18)
   {
      alert("Vous êtes majeur");
    }
  else {
    alert("Bye bye");
    }
  }
