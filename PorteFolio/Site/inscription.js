function W3docs()                                    
{ 
    var name = document.forms["Form"]["Nom"];               
    var email = document.forms["Form"]["Email"];    
    var phone = document.forms["Form"]["Téléphone"];  
    var what =  document.forms["Form"]["Sujet"];  
    var password = document.forms["Form"]["Mot de passe"];  
    var address = document.forms["Form"]["Adresse"];  
    var comment = document.forms["Form"]["Commentaire"];  

    if (name.value == "")                                  
    { 
        alert("Mettez votre nom."); 
        name.focus(); 
        return false; 
    }    
    if (address.value == "")                               
    { 
        alert("Mettez votre adresse."); 
        address.focus();  	/* fOCUS =  exécuter le code pour initialiser la fonctionnalité requise*/
        return false; 
    }        
    if (email.value == "")                                   
    { 
        alert("Mettez une adresse email valide."); 
        email.focus(); 
        return false; 
    }    
    if (email.value.indexOf("@", 0) < 0)                 
    { 
        alert("Mettez une adresse email valide."); 
        email.focus(); 
        return false; 
    }    
    if (email.value.indexOf(".", 0) < 0)                 
    { 
        alert("Mettez une adresse email valide."); 
        email.focus(); 
        return false; 
    }    
    if (phone.value == "")                           
    { 
        alert("Mettez votre numéro de téléphone."); 
        phone.focus(); 
        return false; 
    }    
    if (password.value == "")                        
    { 
        alert("Saisissez votre mot de passe"); 
        password.focus(); 
        return false; 
    }    
    if (what.selectedIndex < 1)                  
    { 
        alert("Mettez votre cours."); 
        what.focus(); 
        return false; 
    } 
    if (comment.value == "")                  
    { 
        alert("Écrivez un commentaire."); 
        comment.focus(); 
        return false; 
    } 
    return true; 
}