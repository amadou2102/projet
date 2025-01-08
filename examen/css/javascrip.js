


const form = document.getElementById("formulair")

    // Récupération des champs
    const prenom = document.getElementById("prenom")
    const nom = document.getElementById("nom")
    const tel = document.getElementById("tel")
    const adresse = document.getElementById("adresse")
    const mail = document.getElementById("mail")
    const resultat = document.getElementById("resultat")

    form.addEventListener( "submit",
    function(e){
        e.preventDefault()
       
        if
        (prenom.value !=="" && nom.value !=="" && tel.value !=="" && adresse.value !=="" && mail.value !==""){
            resultat.innerHTML="envoi reçu"
        }
        else{
             resultat.innerHTML="ATTENTION REMPLISSEZ LES CHAMPS"
             
        }

        

    }
      
  
)
