$(document).ready(function(){
       let variableRecibida = getParameterByName("variable");
       console.log(variableRecibida)

       if(variableRecibida === "BN"){
              $('#Entidad').append('<img src="../../../../../../../imagenes/verTransferenciaContacto/Svgs/bnlogo.svg"></img>' + '<strong style="color:rgba(39, 60, 78, 1);">' + 'Banco de la naci&oacute;n' + '</strong>')
       }else{
              $('#Entidad').append('<strong>' + variableRecibida + '</strong>')
       }
});

$('#checkbox').click(function() {
       if ($(this).is(':checked')) {
              console.log('ok')
       }else{
              console.log('no')
       }     
});

function getParameterByName(name, url) {
       if (!url) url = window.location.href;
       name = name.replace(/[\[\]]/g, "\\$&");
       let regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
           results = regex.exec(url);
       if (!results) return null;
       if (!results[2]) return '';
       return decodeURIComponent(results[2].replace(/\+/g, " "));
}