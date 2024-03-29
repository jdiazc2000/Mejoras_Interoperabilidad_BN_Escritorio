<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1"/>
    <title>Afiliación Celular</title>
    <link rel="stylesheet" type="text/css" href="<%=request.getContextPath()%>/css/verTransferenciaContacto/TransferenciaACelular/TransferenciaACelular_0/TransferenciaACelular_0.css">
  </head>
  <body>
    <div id="maindiv">
      <h1>TRANSFIERE A CELULAR</h1>

      <div class="container">
        <p class="label">1. Cuenta origen</p>

        <div class="CuentaContainer">
          <div class="container1">
            <h2>Cuenta ahorro soles</h2>
            <p>01-1001-000000</p>
          </div>
          <div class="container2">
            <h2>S/ 450.52</h2>
            <p>Saldo disponible</p>
          </div>
        </div>
      </div>

      <div class="operationcontainer">
        <p class="label">2. Tipo de operaci&oacute;n</p>
        <p class="Description">
          Elige &quot;Frecuentes&quot;; si ya tienes el n&uacute;mero registrado como operaci&oacute;n
          frecuente; o &quot;Nuevo&quot; si a&uacute;n no lo tienes registrado.
        </p>

      <div class="checkboxesContainer">
        <div class="radio-item">
          <input type="radio" id="Frecuente" name="ritem" value="Frecuente" />
          <label for="Frecuente">Frecuente</label>
        </div>

        <div class="radio-item">
          <input type="radio" id="Nuevo" name="ritem" value="Nuevo" />
          <label for="Nuevo">Nuevo</label>
        </div>
      </div>
    </div>

    <div class="DestiBeneficontainer">
        <p class="label">3. Destinatario / Beneficiario</p>
        <div class="DestiBene">
            <input maxlength="9" type="text" name="" id="Celular" placeholder="Ingrese el nro. de celular del contacto">
            <div class="AyudaContainer">
                <img src="../../../../../../../imagenes/verTransferenciaContacto/Imgs/Vector-15.png" alt="">
                <a href="">Ayuda</a>
            </div>
        </div>
    </div>


      <div id="btndiv">
        <button class="btn1">
          <img src="../../../../../../../imagenes/verTransferenciaContacto/Imgs/Vector-2.png" />REGRESAR
        </button>
        <button class="btn2">
          CONTINUAR <img src="../../../../../../../imagenes/verTransferenciaContacto/Imgs/Vector-1.png" />
        </button>
      </div>

    </div>

    <script src="https://code.jquery.com/jquery-1.10.2.min.js"></script>
    <script type="text/javascript" src="<%=request.getContextPath()%>/js/verTransferenciaContacto/TransferenciaACelular/TransferenciaACelular_0/TransferenciaACelular_0.js"></script>
  </body>
</html>
