let variableRecibida = getParameterByName("variable");
console.log(variableRecibida)

$(document).ready(function(){
       if(variableRecibida != "" && variableRecibida != null && variableRecibida != undefined){
              $('#Number').text(variableRecibida)

              $('#table').append(
               `<table>
               <tr>
               <td class="right">Número anterior:</td>
               <td class="left" style="color: rgba(39, 60, 78, 1);">947 058 652</td>
             </tr>
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
               <td class="right">Fecha:</td>
               <td class="left">19/01/2024</td>
             </tr>    
             <tr>
               <td class="right">Hora:</td>
               <td class="left">11:42:10</td>
             </tr>  
             </table>
              `)
       }else{

         $(".Number").text('947 058 652')

         $('#table').append(
            `<table>
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
       }
});

function On(){
   $(".btn2").html("CONTINUAR"+"<img src=" + "../../../../../../../imagenes/verTransferenciaContacto/Svgs/Vector.svg" + ">")
   $(".btn2").prop("disabled",false)
   $(".btn2").css({"color": "rgba(255, 255, 255, 1)"})
   $(".btn2").css({"background-color": "rgba(197, 20, 22, 1)"})
   $(".btn2").css({"border-color": "rgba(197, 20, 22, 1)"})
   $(".btn2").css({"cursor": "pointer"})
}

function Off(){
   $(".btn2").html("CONTINUAR"+"<img src=" + "../../../../../../../imagenes/verTransferenciaContacto/Svgs/Vector-1.svg" + ">")
   $(".btn2").prop("disabled",true)
   $(".btn2").css({"color": "rgba(79, 79, 79, 1)"})
   $(".btn2").css({"background-color": "rgba(215, 215, 215, 1)"})
   $(".btn2").css({"border-color": "rgba(215, 215, 215, 1)"})
   $(".btn2").css({"cursor": "default"})
}


$(".btn1").click(function(){
   document.location.href="../DatosAfiliados_0/DatosAfiliados_1.html"
})

$(".btn2").click(function(){
   document.location.href="../DatosAfiliados_3/DatosAfiliados_3.html?variable=" + encodeURIComponent(variableRecibida);
})

function getParameterByName(name, url) {
   if (!url) url = window.location.href;
   name = name.replace(/[\[\]]/g, "\\$&");
   let regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
       results = regex.exec(url);
   if (!results) return null;
   if (!results[2]) return '';
   return decodeURIComponent(results[2].replace(/\+/g, " "));
}
