<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1"/>
    <title>Afiliación Celular</title>
    <link rel="stylesheet" type="text/css" href="%=request.getContextPath()%>/css/verTransferenciaContacto/AfiliacionDeCelular/AfiliacionCelular_3/AfiliacionCelular_3.css">
  </head>
  <body>
    <div id="maindiv">
  <h1 style="font-family: 'daxcompact-mediumregular'; font-size: 20px;margin-bottom: 19px;">Confirma tu afiliaci&oacute;n</h1>

      <p class="label">
        ¿Est&aacute;s seguro que deseas afiliar este celular para realizar tus
        operaciones asociadas a tu cuenta?
      </p>

      <div class="container">
        <div class="CelularContainer">
          <h2>947 058 652</h2>
        </div>
      </div>

      <div class="Cuentacontainer">
        <div class="Cuentacontainer_Info">
          <p>Cuenta ahorro soles</p>
          <p class="number">01-001-000001</p>
          <p>CCI: 018 000 001001000001 06</p>
          <p>0000 - BANCO DE LA NACION</p>
        </div>
      </div>

      <div>
        <p class="label">
          &quot;Para continuar con la afiliaci&oacute;n, debes de leer y aceptar los
          t&eacute;rminos y condiciones que te brindamos a continuaci&oacute;n&quot;
        </p>

        <h5 style="font-family: 'daxcompact-mediumregular';">T&eacute;rminos y condiciones del servicio de Transferencia a celular.</h5>

        <iframe
        style="margin-top: 20px;border: solid 1px black;"
        width="100%"
        height="188px"
        srcdoc="
            <p>
                1. EL CLIENTE declara conocer y aceptar los Términos y Condiciones del
                Servicio de Transferencias Interbancarias Inmediatas e Interoperabilidad
                (Transferencias Interbancarias a CCI y números de celulares, y Pago de
                Tarjeta de Crédito de Otros Bancos), en adelante EL SERVICIO, explicado y
                detallado en los numerales siguientes.
                <br>
                2. EL CLIENTE acepta que el Banco de la Nación, en adelante EL BANCO, no
                tiene ni asume ninguna responsabilidad por errores, abonos errados o
                demoras en el procesamiento de la Transferencia Interbancaria o Pago de
                Tarjeta de Crédito de Otro Banco ocasionados por: a) la información
                consignada por EL CLIENTE; b) las limitaciones tecnológicas de los equipos
                <br>
                1. EL CLIENTE declara conocer y aceptar los Términos y Condiciones del
                Servicio de Transferencias Interbancarias Inmediatas e Interoperabilidad
                (Transferencias Interbancarias a CCI y números de celulares, y Pago de
                Tarjeta de Crédito de Otros Bancos), en adelante EL SERVICIO, explicado y
                detallado en los numerales siguientes.
                <br>
                2. EL CLIENTE acepta que el Banco de la Nación, en adelante EL BANCO, no
                tiene ni asume ninguna responsabilidad por errores, abonos errados o
                demoras en el procesamiento de la Transferencia Interbancaria o Pago de
                Tarjeta de Crédito de Otro Banco ocasionados por: a) la información
                consignada por EL CLIENTE; b) las limitaciones tecnológicas de los equipos
            </p>
        "
    ></iframe>

        <div class="checkbox">
          <label class="container checkboxlabel"
            >He le&iacute;do y aceptado los
            <strong>t&eacute;rminos y condiciones </strong>
            del servicio de Transferencia a celular.
            <input type="checkbox" class="black" id="checkbox"/>
            <span class="checkmark"></span>
          </label>
        </div>

        <form id="CodeValidation" name="CodeValidation">
          <label for="code" style="font-family: 'daxcompact-mediumregular';">Clave din&aacute;mica digital </label>
          <div class="codeContainer">
            <input type="password" name="code" id="code" required maxlength="6" />
            <img src="<%=request.getContextPath()%>/imagenes/verTransferenciaContacto/Imgs/Exclamation.png" alt="">
            <p>¿Nunca lleg&oacute; la clave?</p>
          </div>
          <div class="Reenviar">
            <a href="">Reenviar c&oacute;digo</a>
          </div>
        </form>
      </div>

      <div id="btndiv">
        <button class="btn1"><img src="<%=request.getContextPath()%>/imagenes/verTransferenciaContacto/Imgs/Vector-2.png"> REGRESAR</button>
        <button class="btn2" disabled>QUIERO AFILIARME <img src="<%=request.getContextPath()%>/imagenes/verTransferenciaContacto/Imgs/Vector-1.png"></button>
      </div>
    </div>

    <script src="https://code.jquery.com/jquery-1.10.2.min.js"></script>
    <script type="text/javascript" src="<%=request.getContextPath()%>/js/verTransferenciaContacto/AfiliacionDeCelular/AfiliacionCelular_3/AfiliacionCelular_3.js"></script>   
  </body>
</html>
