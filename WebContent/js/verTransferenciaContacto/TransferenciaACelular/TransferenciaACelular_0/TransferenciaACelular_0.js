$(document).ready(function(){
    Off();
});

let IsRadioSelected = false;
let IsCodeFull = false;

$("#Celular").on("input", function() {  
    if($("#Celular").val().length == 9){
           IsCodeFull = true;
    }else{
           IsCodeFull = false;
    }

    if(IsCodeFull && IsRadioSelected){
           On()
    }else{
           Off()
    }

    console.log(IsCodeFull)  
});


$('input[type="radio"]').change(function() {
    if($('input[name="ritem"]:checked').val() !== null){
        var valorSeleccionado = $('input[name="ritem"]:checked').val();
        //console.log("Valor seleccionado: " + valorSeleccionado);
        IsRadioSelected = true
    }else{
        //console.log("no")
        IsRadioSelected = false
    }

        
    if(IsCodeFull && IsRadioSelected){
        On()
    }else{
        Off()
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
    document.location.href="../../../index.html"
})

$(".btn2").click(function(){
    let radiobuttonselectedvalue = $('input[name="ritem"]:checked').val()
    
    //NOTA ELIMINAR SIGUIENTE CONDICIONAL EN PROD - SOLO HECHO PARA PRUEBAS DE NÚMERO SOLO AFILIADO AL BANCO
    
    if($("#Celular").val() === '000000000'){
        radiobuttonselectedvalue = "Banco"
    }

    document.location.href="../TransferenciaACelular_1/TransferenciaACelular_1.html?variable="  + encodeURIComponent(radiobuttonselectedvalue);
})

