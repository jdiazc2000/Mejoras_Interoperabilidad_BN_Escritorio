<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1"/>
    <title>Afiliación Celular</title>
    <link rel="stylesheet" type="text/css" href="<%=request.getContextPath()%>/css/verTransferenciaContacto/TransferenciaACelular/TransferenciaACelular_2/TransferenciaACelular_2.css">
  </head>
  <body>
    <div id="maindiv">
      <h1 style="font-family: 'daxcompact-mediumregular'; font-size: 20px;">RESUMEN DE TRANSFERENCIA</h1>

      <p class="label">
        ¿Est&aacute;s seguro que deseas realizar la transferencia al celular?
      </p>

      <div class="container">
        <div class="CelularContainer">
          <div class="h2div">
            <h2>Rosa Garc&iacute;a Zevallos</h2>
          </div>
          <div class="pdiv">
            <p class="CelNum">980287644</p>
          </div>
          <div class="pdiv">
            <p id="entidaddestino">Entidad destino:  </p>
          </div>
        </div>
      </div>

      <div class="Cuentacontainer">
        <div class="Cuentacontainer_Info">
          <p class="number">S/ 320.00</p>
          <p>Cuenta origen: <strong>01-1001-000000</strong></p>
        </div>
      </div>

      <div class="ComiMontocontainer">
        <div class="ComiMontocontainer_Info">
          <p>Comisi&oacute;n: <strong>Gratis</strong></p>
          <p>Monto a cargar: <strong>S/ 320.00</strong></p>
        </div>
      </div>

      <div>
        <form id="CodeValidation" name="CodeValidation">
          <label for="code">Clave din&aacute;mica digital </label>
          <div class="codeContainer">
            <input
              type="password"
              name="code"
              id="code"
              required
              maxlength="6"
            />
            <img src="<%=request.getContextPath()%>/imagenes/verTransferenciaContacto/Svgs/Exclamation.svg" alt="" />
            <p>¿Nunca lleg&oacute; la clave?</p>
          </div>
          <div class="Reenviar">
            <a href="">Reenviar c&oacute;digo</a>
          </div>
        </form>
      </div>

      <div id="btndiv">
        <button class="btn1">
          <img src="<%=request.getContextPath()%>/imagenes/verTransferenciaContacto/Svgs/Vector-2.svg" />REGRESAR
        </button>
        <button class="btn2" disabled>
          CONTINUAR<img src="<%=request.getContextPath()%>/imagenes/verTransferenciaContacto/Svgs/Vector-1.svg" />
        </button>
      </div>
    </div>

    <script src="https://code.jquery.com/jquery-1.10.2.min.js"></script>
    <script type="text/javascript" src="<%=request.getContextPath()%>/js/verTransferenciaContacto/TransferenciaACelular/TransferenciaACelular_2/TransferenciaACelular_2.js"></script>
  </body>
</html>
