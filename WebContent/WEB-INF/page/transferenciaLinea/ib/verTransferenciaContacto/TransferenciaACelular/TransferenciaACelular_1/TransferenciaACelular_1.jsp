<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Afiliación Celular</title>
    <link rel="stylesheet" type="text/css" href="<%=request.getContextPath()%>/verTransferenciaContacto/TransferenciaACelular/TransferenciaACelular_1/TransferenciaACelular_1.css">
  </head>
  <body>
    <div id="maindiv">
      <h1>TRANSFIERE A</h1>
    <header>
      <h3>Rosa Gisela Garc&iacute;a Zevallos</h3>
      <p>980287644</p>
    </header>

    <div id="OptionContent">
      
    </div>

    <div class="gallery-wrap">
        <img src="../../../../../../../imagenes/verTransferenciaContacto/Svgs/Vector-12.svg" alt="" id="backBtn">
        <div class="gallery">
        <div id="EntidadSPAN">

        </div>
        <div id="EntidadSPAN2">
           
          <span>
            <div class="EntidadSquare">
                  <img src="../../../../../../../imagenes/verTransferenciaContacto/Svgs/plinlogo.svg" alt="">
                  <label class="container checkboxlabel">
                    <input type="checkbox" class="black" name="ritem" value="Plin" data-target="Plin">
                    <img class="checkbox-image" src="../../../../../../../imagenes/verTransferenciaContacto/Svgs/CheckOff.svg" alt="">
                  </label>
                  <p id="Plin">PLIN</p>
              </div>
            </span>

          </div>
        </div>
        <img src="../../../../../../../imagenes/verTransferenciaContacto/Svgs/Vector-13.svg" alt="" id="nextBtn">
    </div>

    
      <div class="MontoContainer">
        <p class="label">2. Monto a transferir</p>
        <div class="MontoSolesContainer">
          <p>S/</p>
          <input type="number" placeholder="0.00" id="monto" min="020" max="50000" onkeyup="onlyNumberAmount(this)">
        </div>
        <h1>(Monto a transferir entre S/0.20 y S/ 500.00)</h1>
      </div>

      <div id="btndiv">
        <button class="btn1">
          <img src="../../../../../../../imagenes/verTransferenciaContacto/Svgs/Vector-2.svg" />REGRESAR
        </button>
        <button class="btn2">
          CONTINUAR <img src="../../../../../../../imagenes/verTransferenciaContacto/Svgs/Vector-1.svg" />
        </button>
      </div>
    </div>
  </div>
    <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
    <script type="text/javascript" src="<%=request.getContextPath()%>/verTransferenciaContacto/TransferenciaACelular/TransferenciaACelular_1/TransferenciaACelular_1.js"></script>
  </body>
</html>
