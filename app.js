function registrar(){
    var email = document.getElementById('email').value;
    var pass = document.getElementById('pass').value;


    //firebase.auth().tenantId = 'TENANT_PROJECT_ID';
       alert("Correo: "+email + "\nContraseña:"+ pass);  

       firebase.auth().createUserWithEmailAndPassword(email, pass).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        if (errorCode == 'auth/weak-password') {
            alert('La contraseña es demasiado débil.');
          } else {
            alert(errorMessage);
          }
          console.log(error);
      }).then(function(){
        verificado();
      });

}

function acceso(){
  var emailA = document.getElementById('emailA').value;
  var passA = document.getElementById('passA').value;


  firebase.auth().signInWithEmailAndPassword(emailA, passA).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    if (errorCode == 'auth/weak-password') {
      alert('La contraseña es demasiado débil.');
    } else {
      alert(errorMessage);
    }
    console.log(error);
  });
}

function verificado(){
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      
    } else {
      
    }
  });
}

function cerrar(){
  firebase.auth().signOut()
  .then(function(){
    console.log('salir');
  })
  .catch(function(error){
    console.log(error);
  })
}



// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyA0Hn-2teZ3F978yS5LtNAt7dNC11cAjWE",
  authDomain: "selecciondesarrollodesw.firebaseapp.com",
  databaseURL: "https://selecciondesarrollodesw.firebaseio.com",
  projectId: "selecciondesarrollodesw",
  storageBucket: "selecciondesarrollodesw.appspot.com",
  messagingSenderId: "115528449533",
  appId: "1:115528449533:web:333092c68663ebfedded94"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);




//verificar usuarios
firebase.auth().onAuthStateChanged(function(user) {
if (user) {
var displayName = user.displayName;
var email = user.email;
var emailVerified = user.emailVerified;
//Verificar
var textoVerificado = "";
if(emailVerified == false){
  textoVerificado = "Email no verificado";
}else{
  textoVerificado = "Email verificado"
}
var photoURL = user.photoURL;
var isAnonymous = user.isAnonymous;
var uid = user.uid;
var providerData = user.providerData;


document.getElementById('botonAcceso').style.display = "none";
document.getElementById('checkLogin').style.display = "none";
document.getElementById('areaRegistro').style.display = "none";
document.getElementById('areaLogin').style.display = "";
document.getElementById('btnCerrar').style.display = "";
document.getElementById('passA').style.display = "";
document.getElementById('emailA').value = email;

console.log(user);
} else {

document.getElementById('botonAcceso').style.display = "";
document.getElementById('checkLogin').style.display = "";
document.getElementById('areaRegistro').style.display = "";
document.getElementById('areaLogin').style.display = "none";
document.getElementById('btnCerrar').style.display = "none";
document.getElementById('passA').style.display = "";

}
});


$(document).ready(function(){
$('#loginRegistrarse').change(function(){
  if($(this).is(':checked')){
    $('#areaLogin').hide();
    $('#areaRegistro').show();
  }else{
    $('#areaLogin').show();
    $('#areaRegistro').hide();
  }
});
});
