let IsRadioSelected = false;
let IsCodeFull = false;
let ultimoCheckboxSeleccionado = "";

$(document).ready(function () {
  Off();

  $("#BN").change(function () {
    if ($(this).is(":checked")) {
        ocultarTodosLosElementosP()
    }
  });
  
  $('.EntidadSquare input[type="checkbox"]').change(function () {
    var targetId = $(this).data("target");
    if ($('.EntidadSquare input[type="checkbox"]:checked').length === 0) {
      ocultarTodosLosElementosP();
    } else {
      ocultarTodosLosElementosP();
      $("#" + targetId).css("visibility", "visible");
    }
  });
});

$(document).on("click", 'input[type="checkbox"]', function () {
  $('input[type="checkbox"]').not(this).prop("checked", false);
});

$("#monto").on("input", function () {
  if ($("#monto").val() <= 500.00) {
    IsCodeFull = true;
  } else {
    IsCodeFull = false;
  }

  console.log(IsCodeFull);

  if (IsCodeFull && IsRadioSelected) {
    On();
  } else {
    Off();
  }
});

$('input[type="checkbox"]').change(function () {
  if ($('input[name="ritem"]:checked').val() !== undefined) {
    console.log($('input[name="ritem"]:checked').val())
    IsRadioSelected = true;
  } else {
    console.log("no");
    IsRadioSelected = false;
  }

  if (IsCodeFull && IsRadioSelected) {
    On();
  } else {
    Off();
  }
});

function ocultarTodosLosElementosP() {
    $(".EntidadSquare p").css("visibility", "hidden");
}

function On() {
  $(".btn2").html(
    "CONTINUAR" +
      "<img src=" +
      "../../../assets/VECTOR-ICON-MV/Vector.svg" +
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
      "../../../assets/VECTOR-ICON-MV/Vector-1.svg" +
      ">"
  );
  $(".btn2").prop("disabled", true);
  $(".btn2").css({ color: "rgba(79, 79, 79, 1)" });
  $(".btn2").css({ "background-color": "rgba(215, 215, 215, 1)" });
  $(".btn2").css({ "border-color": "rgba(215, 215, 215, 1)" });
  $(".btn2").css({ cursor: "default" });
}

$(".btn1").click(function () {
  document.location.href =
    "../../TransferenciaACelular/TransferenciaACelular_0";
});

$(".btn2").click(function () {
  //document.location.href="../../TransferenciaACelular/TransferenciaACelular_0"
});
