$(document).ready(function(){
});

$('input[name="ritem"]').on('change', function() {
       var valorSeleccionado = $('input[name="ritem"]:checked').val();
       console.log('Seleccionaste:', valorSeleccionado);
    
       $("#Formulario").empty();
       $("#Alerta").empty();
    
       if (valorSeleccionado === "Cambiar") {
          $("#Formulario").append(`    
             <h1>Ingresa el nuevo número celular</h1>
             <div class="input-container">
                <input type="tel" id="numeroCelular" maxlength="9" oninput="validarNumeroCelular()">
                <span id="checkIcon"><img src="../../../../../../../imagenes/verTransferenciaContacto/Svgs/Vector-18.svg" alt=""></span>
             </div>`
          );
    
          $('input[type="tel"]').on('input', function() {
             console.log(this.value);
          });
       } else {
          $("#Formulario").append(`       
             <h1>Selecciona el motivo de desafiliación</h1>
             <select id="motivo" class="select-css" name="motivo" place>
                <option value="" hidden disabled selected>Seleccione un motivo</option>
                <option value="Cambio">Cambio de celular</option>
                <option value="Perdida">Pérdida de celular</option>
                <option value="Robo">Robo</option>
             </select>`);
          
          $('#motivo').on('change', function() {
             let motivoSeleccionado = $(this).val();
             console.log('Motivo seleccionado:', motivoSeleccionado);
          });
       }
    
       $("#Alerta").append(`
          <div class="thanks">
             <p>
                Si tienes algún inconveniente al cambiar tu número celular, contáctate al 0-800-10700.
             </p>
          </div>`);
    });

    
$("#AfiliarBtn").click(function(){
       document.location.href="AfiliacionDeCelular/AfiliacionCelular_0/AfiliacionCelular_0.html"
})


$("#TransferenciaBtn").click(function(){
       document.location.href="TransferenciaACelular/TransferenciaACelular_0/TransferenciaACelular_0.html"
})

$("#DatosAfiliadosBtn").click(function(){
       document.location.href="DatosAfiliados/DatosAfiliados_0/DatosAfiliados_0.html"
})

function validarNumeroCelular() {
       let inputNumeroCelular = document.getElementById('numeroCelular');
       let checkIcon = document.getElementById('checkIcon');

       if (inputNumeroCelular.value.length === 9) {
           checkIcon.style.display = 'inline';
       } else {
           checkIcon.style.display = 'none';
       }
}
