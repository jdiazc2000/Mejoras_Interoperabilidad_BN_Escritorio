let variableRecibida = getParameterByName("variable");

$(document).ready(function(){
    if(variableRecibida != "null" && variableRecibida != null){
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
             <td class="left"><img src="<%=request.getContextPath()%>/imagenes/verTransferenciaContacto/Svgs/bnlogo.svg"> Banco de la Naci&oacute;n</td>
           </tr>
           <tr>
             <td class="right">Nro. operaci&oacute;n:</td>
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
        $("#HeaderSubTitle").text('La afiliaci&oacute;n fue realizada con &eacute;xito.')
        $("#Title").text('N&uacute;mero de celular');
        $("#Number").text(variableRecibida);
        $(".thanks p").html("<strong>Recuerda que:</strong> Ahora recibir&aacute;s las transferencias de otros bancos a trav&eacute;s de tu nuevo n&uacute;mero de celular.");


        
 }else{
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
            <td class="left"><img src="<%=request.getContextPath()%>/imagenes/verTransferenciaContacto/Svgs/bnlogo.svg"> Banco de la Naci&oacute;n</td>
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
       $("#HeaderSubTitle").text('La desafiliaci&oacute;n fue realizada con &eacute;xito.')
       $("#Title").text('N&uacute;mero de celular');
       $(".thanks p").html("<strong>Recuerda que:</strong> Ya no podr&aacute;s recibir transferencias de otros bancos a trav&eacute;s de tu n&uacute;mero de celular.");
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
 