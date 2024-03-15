let variableRecibida = getParameterByName("variable");
console.log(variableRecibida)

// $(document).ready(function(){
//        if(variableRecibida != "null" && variableRecibida != null){
//            $(".Number").text('947 058 652')

//               $('#table').append(
//                `<table>
//                <tr style="padding-bottom: 8px;">
//                <td style="padding-bottom: 8px;" class="right">N&uacute;mero anterior:</td>
//                <td style="padding-bottom: 8px;"class="left" style="color: rgba(39, 60, 78, 1);">947 058 652</td>
//              </tr>
//              <tr style="padding-bottom: 8px;">
//                <td style="padding-bottom: 8px;" class="right">Cuenta afiliada:</td>
//                <td style="padding-bottom: 8px;" class="left">01-1001-000001</td>
//              </tr>
//              <tr style="padding-bottom: 8px;">
//                <td style="padding-bottom: 8px;" class="right">Tipo de cuenta:</td>
//                <td style="padding-bottom: 8px;" class="left">Cuenta ahorro soles</td>
//              </tr>
//              <tr style="padding-bottom: 8px;">
//                <td style="padding-bottom: 8px;" class="right"></td>
//                <td style="padding-bottom: 8px;" class="left"><img src="<%=request.getContextPath()%>/imagenes/verTransferenciaContacto/Imgs/bnlogo.png"> Banco de la Naci&oacute;n</td>
//              </tr>
//              <tr style="padding-bottom: 8px;">
//                <td style="padding-bottom: 8px;" class="right">Fecha:</td>
//                <td  style="padding-bottom: 8px;"class="left">19/01/2024</td>
//              </tr>    
//              <tr style="padding-bottom: 8px;">
//                <td style="padding-bottom: 8px;" class="right">Hora:</td>
//                <td style="padding-bottom: 8px;" class="left">11:42:10</td>
//              </tr>  
//              </table>
//               `)
//        }else{
//          $('#table').append(
//             `<table>
//           <tr style="padding-bottom: 8px;">
//             <td style="padding-bottom: 8px;" class="right">Cuenta afiliada:</td>
//             <td style="padding-bottom: 8px;" class="left">01-1001-000001</td>
//           </tr>
//           <tr style="padding-bottom: 8px;">
//           <td style="padding-bottom: 8px;" class="right">CCI de la cuenta afiliada:</td>
//           <td style="padding-bottom: 8px;" class="left">018 000 001001000001 06</td>
//          </tr>
//           <tr style="padding-bottom: 8px;">
//             <td style="padding-bottom: 8px;" class="right">Tipo de cuenta:</td>
//             <td style="padding-bottom: 8px;" class="left">Cuenta ahorro soles</td>
//           </tr>
//           <tr style="padding-bottom: 8px;">
//             <td style="padding-bottom: 8px;" class="right"></td>
//             <td style="padding-bottom: 8px;" class="left"><img src="<%=request.getContextPath()%>/imagenes/verTransferenciaContacto/Imgs/bnlogo.png"> Banco de la Naci&oacute;n</td>
//           </tr>
//           <tr style="padding-bottom: 8px;">
//             <td style="padding-bottom: 8px;" class="right">Fecha:</td>
//             <td style="padding-bottom: 8px;" class="left">19/01/2024</td>
//           </tr>    
//           <tr style="padding-bottom: 8px;">
//             <td style="padding-bottom: 8px;" class="right">Hora:</td>
//             <td style="padding-bottom: 8px;" class="left">11:42:10</td>
//           </tr>  
//           </table>
//            `)
//            $(".Number").text('947 058 652')
//        }
// });

function On() {
  $(".btn2").html("CONTINUAR" + '<img src="/BNWeb/imagenes/verTransferenciaContacto/Imgs/Vector.png">');
  $(".btn2").prop("disabled", false);
  $(".btn2").css({ color: "rgba(255, 255, 255, 1)", "background-color": "rgba(197, 20, 22, 1)", "border-color": "rgba(197, 20, 22, 1)", cursor: "pointer" });
}

function Off() {
  $(".btn2").html("CONTINUAR" + '<img src="/BNWeb/imagenes/verTransferenciaContacto/Imgs/Vector-1.png">');
  $(".btn2").prop("disabled", true);
  $(".btn2").css({ color: "rgba(79, 79, 79, 1)", "background-color": "rgba(215, 215, 215, 1)", "border-color": "rgba(215, 215, 215, 1)", cursor: "default" });
}


$(".btn1").click(function(){
  document.location.href="../DatosAfiliados_0/DatosAfiliados_0.html"
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
