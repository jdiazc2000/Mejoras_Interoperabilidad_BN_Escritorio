let variableRecibida = getParameterByName("variable");

$(document).ready(function(){
    if(variableRecibida != "" && variableRecibida != null && variableRecibida != undefined){
      console.log('Entro a la primera tabla')
        $('#Number').text(variableRecibida)

        $('#container').append(
         ` 
         <h2 id="Title"></h2>
         <p id="Number"></p>
 
         <table>
           <tr>
             <td class="right">Cuenta afiliada:</td>
             <td class="left">01-1001-000001</td>
           </tr>
           <tr>
             <td class="right">Tipo de cuenta:</td>
             <td class="left">Cuenta ahorro soles</td>
           </tr>
           <tr>
             <td class="right"></td>
             <td class="left"><img src="../../../../../../../imagenes/verTransferenciaContacto/Svgs/bnlogo.svg"> Banco de la Nación</td>
           </tr>
           <tr>
             <td class="right">Nro. operación:</td>
             <td class="left">01281</td>
           </tr>  
           <tr>
             <td class="right">Fecha:</td>
             <td class="left">19/01/2024</td>
           </tr>    
           <tr>
             <td class="right">Hora:</td>
             <td class="left">11:42:10</td>
           </tr>    
         </table>
        `)
        
        $("#maindiv").css("width","440px");
        $("#HeaderSubTitle").text('La afiliación fue realizada con éxito.')
        $("#Title").text('Número de celular');
        $("#Number").text(variableRecibida);
        $(".thanks p").html("<strong>Recuerda que:</strong> Ahora recibirás las transferencias de otros bancos a través de tu nuevo número de celular.");


        
 }else{

  console.log('Entro a la segunda tabla')
    $('#container').append(
        ` 
        <h2 id="Title"></h2>
        <p id="Number">947 058 652</p>

        <table>
          <tr>
            <td class="right">Cuenta afiliada:</td>
            <td class="left">01-1001-000001</td>
          </tr>
          <tr>
          <td class="right">CCI de la cuenta afiliada:</td>
          <td class="left">018 000 001001000001 06</td>
        </tr>
          <tr>
            <td class="right">Tipo de cuenta:</td>
            <td class="left">Cuenta ahorro soles</td>
          </tr>
          <tr>
            <td class="right"></td>
            <td class="left"><img src="../../../../../../../imagenes/verTransferenciaContacto/Svgs/bnlogo.svg"> Banco de la Nación</td>
          </tr>
          <tr>
            <td class="right">Fecha:</td>
            <td class="left">19/01/2024</td>
          </tr>    
          <tr>
            <td class="right">Hora:</td>
            <td class="left">11:42:10</td>
          </tr>    
        </table>
       `)
       
       $("#maindiv").css("width","640px");
       $("#HeaderSubTitle").text('La desafiliación fue realizada con éxito.')
       $("#Title").text('Número de celular');
       $(".thanks p").html("<strong>Recuerda que:</strong> Ya no podrás recibir transferencias de otros bancos a través de tu número de celular.");
       $(".thanks").css("width","640px");
       $(".Btnscontainer").css("margin-left","auto")
       $(".Btnscontainer").css("margin-right","auto")
       $(".Btnscontainer").css("width","440px")

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
 