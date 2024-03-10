let IsRadioSelected = false;
let IsCodeFull = false;
let ultimoCheckboxSeleccionado = "";
let checkboxValueAEnviar = "";
let variableRecibida = getParameterByName("variable");

$(document).ready(function () {
  Off();
  console.log("Variable recibida:", variableRecibida);

  if(variableRecibida == "Nuevo"){
  aparecerBN();  
  aparecerPLIN();
  aparecerYAPE();
  aparecerCAJAAREQUIPA();
  aparecerBANCOPICHINCHA();
  }else if(variableRecibida == "Banco"){
    aparecerBN();
  }
  else{
    SOLOPLINSIMULACION();
  }
});

$(document).on("click", 'input[type="checkbox"]', function () {
  $('input[type="checkbox"]').not(this).prop("checked", false);
});

$(document).on("change", '.EntidadSquare input[type="checkbox"], #BN', function () {
  let checkboxValue = $(this).val();

  if ($(this).attr('id') === 'BN') {
    if ($(this).is(":checked")) {
      ocultarTodosLosElementosP();
      IsRadioSelected = true;
    } else if ($('.EntidadSquare input[type="checkbox"]:checked').not('#BN').length === 0) {
      IsRadioSelected = false;
      checkboxValue = "";
    }
  } else {
    var targetId = $(this).data("target");
    $('.EntidadSquare p').not('#' + targetId).css("visibility", "hidden");

    if ($('.EntidadSquare input[type="checkbox"]:checked').not('#BN').length === 0) {
      ocultarTodosLosElementosP();
      IsRadioSelected = false;
      checkboxValue = "";
    } else {
      $("#" + targetId).css("visibility", "visible");
      IsRadioSelected = true;
    }
  }

  checkboxValueAEnviar = checkboxValue.toUpperCase();
  console.log("Checkbox Value:", checkboxValue.toUpperCase());
  NextButton();
});

$("#monto").on("input", function () {
  let montoValue = $("#monto").val().replace(/\D+/g, '');
  const minValue = 20;
  const maxValue = 50000;

  if (montoValue.toString().startsWith("00")) {
    montoValue = '';
  }

  if (montoValue !== '' && !isNaN(montoValue)) {
    montoValue = parseInt(montoValue, 10);

    if (montoValue >= minValue && montoValue <= maxValue) {
      IsCodeFull = true;
    } else {
      IsCodeFull = false;
    }
  } else {
    IsCodeFull = false;
  }
  NextButton();
});

$('input[type="checkbox"]').change(function () {
  if ($('input[name="ritem"]:checked').val() !== undefined) {
    console.log($('input[name="ritem"]:checked').val())
    IsRadioSelected = true;
  } else {
    console.log("no");
    IsRadioSelected = false;
  }
  console.log(IsRadioSelected)
  NextButton()
});

$(".btn1").click(function () {
  document.location.href =
    "../../TransferenciaACelular/TransferenciaACelular_0";
});

$(".btn2").click(function () {
  document.location.href="../TransferenciaACelular_3/TransferenciaACelular_3.html?variable="  + encodeURIComponent(checkboxValueAEnviar);
});

$('input[type="number"]').on('input', function() {
  onlyNumberAmount(this);
});

function onlyNumberAmount(input) {
  let v = $(input).val().replace(/\D+/g, '');
  if (v.length > 14) v = v.slice(0, 14);
  $(input).val(
    v.replace(/(\d)(\d\d)$/, "$1.$2")
     .replace(/(^\d{1,3}|\d{3})(?=(?:\d{3})+(?:\.|$))/g, '$1.')
  );
}

$("#BN").change(function () {
  if ($(this).is(":checked")) {
      ocultarTodosLosElementosP()
  }
});

function ocultarTodosLosElementosP() {
  $(".EntidadSquare p").css("visibility", "hidden");
}

function getParameterByName(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, "\\$&");
  let regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
      results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}

function NextButton(){
  if (IsCodeFull && IsRadioSelected) {
    On();
  } else {
    Off();
  }
}

function On() {
  if(checkboxValueAEnviar != "")
  $(".btn2").html(
    "CONTINUAR" +
      "<img src=" +
      "../../../../../../../imagenes/verTransferenciaContacto/Svgs/Vector.svg" +
      ">"
  );
  $(".btn2").prop("disabled", false);
  $(".btn2").css({ color: "rgba(255, 255, 255, 1)" });
  $(".btn2").css({ "background-color": "rgba(197, 20, 22, 1)" });
  $(".btn2").css({ "border-color": "rgba(197, 20, 22, 1)" });
  $(".btn2").css({ cursor: "pointer" });
}

function Off() {
  $(".btn2").html(
    "CONTINUAR" +
      "<img src=" +
      "../../../../../../../imagenes/verTransferenciaContacto/Svgs/Vector-1.svg" +
      ">"
  );
  $(".btn2").prop("disabled", true);
  $(".btn2").css({ color: "rgba(79, 79, 79, 1)" });
  $(".btn2").css({ "background-color": "rgba(215, 215, 215, 1)" });
  $(".btn2").css({ "border-color": "rgba(215, 215, 215, 1)" });
  $(".btn2").css({ cursor: "default" });
}

function aparecerBN(){
  if(variableRecibida == "Banco"){
    $('#OptionContent').append(`
    <div class="container">
      <p class="label">1. Entidad a transferir</p>
      <div>
        <div class="checkbox solobn">
          <label class="container checkboxlabel">
            <input type="checkbox" class="black" name="ritem" id="BN" value="BN" data-target="BN">
            <span class="checkmark"></span>
            <label class="BnLabel"><img src="../../../../../../../imagenes/verTransferenciaContacto/Svgs/bnlogo.svg" alt=""> Banco de la Nación</label>
          </label>
        </div>
      </div>
    </div>`)
  }else{
    $('#OptionContent').append(`
    <div class="container">
     <p class="label">1. Entidad a transferir</p>
     <div>
       <div class="checkbox">
         <label class="container checkboxlabel">
           <input type="checkbox" class="black" name="ritem" id="BN" value="BN" data-target="BN">
           <span class="checkmark"></span>
           <label class="BnLabel"><img src="../../../../../../../imagenes/verTransferenciaContacto/Svgs/bnlogo.svg" alt=""> Banco de la Nación</label>
         </label>
       </div>
     </div>
   </div>
  <div style="margin-bottom: 20.26px;">
    <img src="../../../../../../../imagenes/verTransferenciaContacto/Svgs/Line.svg" alt="">
  </div>
 `)
  }
}

function aparecerPLIN(){ 
  $("#EntidadesCarousel").append(`
<div class="EntidadSquare">
      <img src="../../../../../../../imagenes/verTransferenciaContacto/Svgs/plinlogo.svg" alt="">
      <label class="container checkboxlabel">
        <input type="checkbox" class="black" name="ritem" value="Plin" data-target="Plin">
        <span class="checkmark"></span>
      </label>
      <p id="Plin">PLIN</p>
  </div>
`)
}

function aparecerYAPE(){ 
  $("#EntidadesCarousel").append(`
  <div class="EntidadSquare">
      <img src="../../../../../../../imagenes/verTransferenciaContacto/Svgs/yapelogo.svg" alt="">
      <label class="container checkboxlabel">
        <input type="checkbox" class="black" name="ritem" value="Yape" data-target="Yape">
        <span class="checkmark"></span>
      </label>
      <p id="Yape">YAPE</p>
    </div>
  `)
}

function aparecerCAJAAREQUIPA(){
  $("#EntidadesCarousel").append(`
<div class="EntidadSquare">
    <img src="../../../../../../../imagenes/verTransferenciaContacto/Svgs/cajaarequipalogo.svg" alt="">
    <label class="container checkboxlabel">
      <input type="checkbox" class="black" name="ritem" value="Caja Arequipa" data-target="CajaArequipa">
      <span class="checkmark"></span>
    </label>
    <p id="CajaArequipa">CAJA AREQUIPA</p>
  </div>
`)
}

function aparecerBANCOPICHINCHA(){
  $("#EntidadesCarousel").append(`
  <div class="EntidadSquare">
    <img src="../../../../../../../imagenes/verTransferenciaContacto/Svgs/bancopichinchalogo.svg" alt="">
    <label class="container checkboxlabel">
      <input type="checkbox" class="black" name="ritem" value="Banco Pichincha" data-target="BancoPichincha">
      <span class="checkmark"></span>
    </label>
    <p id="BancoPichincha">BANCO PICHINCHA</p>
  </div>
`)
}

function SOLOPLINSIMULACION(){
  $('#OptionContent').append(` 
  <div class="container">
    <p class="label">1. Entidad a transferir</p>
    <div id="EntidadesCarousel" style="display: flex; justify-content: flex-start;">
      <div class="EntidadSquare">
        <img src="../../../../../../../imagenes/verTransferenciaContacto/Svgs/plinlogo.svg" alt="">
        <label class="container checkboxlabel">
          <input type="checkbox" class="black" name="ritem" value="Plin" data-target="Plin">
          <span class="checkmark"></span>
        </label>
        <p id="Plin">PLIN</p>
      </div>
  </div> 
`)
}