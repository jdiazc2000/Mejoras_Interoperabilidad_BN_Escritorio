<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1"/>
    <title>Afiliación Celular</title>
    <link rel="stylesheet" type="text/css" href="<%=request.getContextPath()%>/css/verTransferenciaContacto/TransferenciaACelular/TransferenciaACelular_1/TransferenciaACelular_1.css">
  </head>
  <body>
    <div id="maindiv">
      <h1>TRANSFIERE A</h1>
    <header>
      <h3>Rosa Gisela Garc&iacute;a Zevallos</h3>
      <p>980287644</p>
    </header>

    <div id="OptionContent">
      <div class="container">
        <p class="label">1. Entidad a transferir</p>
        <div>
          <div class="checkbox">
            <label class="container checkboxlabel">
              <input type="checkbox" class="black" name="ritem" id="BN" value="BN" data-target="BN">
              <img class="checkbox-image" src="<%=request.getContextPath()%>/imagenes/verTransferenciaContacto/Svgs/CheckOff.svg" alt="">
              <label class="BnLabel"><img src="<%=request.getContextPath()%>/imagenes/verTransferenciaContacto/Svgs/bnlogo.svg" alt=""> Banco de la Naci&oacute;n</label>
            </label>
          </div>
        </div>
      </div>
     <div style="margin-bottom: 26.26px;">
       <img src="<%=request.getContextPath()%>/imagenes/verTransferenciaContacto/Svgs/Line.svg" alt="">
     </div>
    </div>

    <div class="gallery-wrap">
        <img src="<%=request.getContextPath()%>/imagenes/verTransferenciaContacto/Svgs/Vector-12.svg" alt="" id="backBtn">
        <div class="gallery">
        <div id="EntidadSPAN">
          <span>
            <div class="EntidadSquare">
                  <img src="<%=request.getContextPath()%>/imagenes/verTransferenciaContacto/Svgs/plinlogo.svg" alt="">
                  <label class="container checkboxlabel">
                    <input type="checkbox" class="black" name="ritem" value="Plin" data-target="Plin">
                    <img class="checkbox-image" src="<%=request.getContextPath()%>/imagenes/verTransferenciaContacto/Svgs/CheckOff.svg" alt="">
                  </label>
                  <p id="Plin">PLIN</p>
              </div>
              </span>
          <span>
            <div class="EntidadSquare">
                <img src="<%=request.getContextPath()%>/imagenes/verTransferenciaContacto/Svgs/yapelogo.svg" alt="">
                <label class="container checkboxlabel">
                  <input type="checkbox" class="black" name="ritem" value="Yape" data-target="Yape">
                  <img class="checkbox-image" src="<%=request.getContextPath()%>/imagenes/verTransferenciaContacto/Svgs/CheckOff.svg" alt="">
                </label>
                <p id="Yape">YAPE</p>
              </div>
            </span>
            <span>
              <div class="EntidadSquare">
                  <img src="<%=request.getContextPath()%>/imagenes/verTransferenciaContacto/Svgs/cajaarequipalogo.svg" alt="">
                  <label class="container checkboxlabel">
                    <input type="checkbox" class="black" name="ritem" value="Caja Arequipa" data-target="CajaArequipa">
                    <img class="checkbox-image" src="<%=request.getContextPath()%>/imagenes/verTransferenciaContacto/Svgs/CheckOff.svg" alt="">
                  </label>
                  <p id="CajaArequipa">CAJA AREQUIPA</p>
                </div>
                </span>
                <span>
                  <div class="EntidadSquare">
                    <img src="<%=request.getContextPath()%>/imagenes/verTransferenciaContacto/Svgs/bancopichinchalogo.svg" alt="">
                    <label class="container checkboxlabel">
                      <input type="checkbox" class="black" name="ritem" value="Banco Pichincha" data-target="BancoPichincha">
                      <img class="checkbox-image" src="<%=request.getContextPath()%>/imagenes/verTransferenciaContacto/Svgs/CheckOff.svg" alt="">
                    </label>
                    <p id="BancoPichincha">BANCO PICHINCHA</p>
                  </div>
                  </span>
        </div>
        <div id="EntidadSPAN2">
             <span>
            <div class="EntidadSquare">
                  <img src="<%=request.getContextPath()%>/imagenes/verTransferenciaContacto/Svgs/plinlogo.svg" alt="">
                  <label class="container checkboxlabel">
                    <input type="checkbox" class="black" name="ritem" value="Plin" data-target="Plin">
                    <img class="checkbox-image" src="<%=request.getContextPath()%>/imagenes/verTransferenciaContacto/Svgs/CheckOff.svg" alt="">
                  </label>
                  <p id="Plin">PLIN</p>
              </div>
              </span>
          </div>
        </div>
        <img src="<%=request.getContextPath()%>/imagenes/verTransferenciaContacto/Svgs/Vector-13.svg" alt="" id="nextBtn">
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
          <img src="<%=request.getContextPath()%>/imagenes/verTransferenciaContacto/Svgs/Vector-2.svg" />REGRESAR
        </button>
        <button class="btn2">
          CONTINUAR <img src="<%=request.getContextPath()%>/imagenes/verTransferenciaContacto/Svgs/Vector-1.svg" />
        </button>
      </div>
    </div>
  </div>
    <script src="https://code.jquery.com/jquery-1.10.2.min.js"></script>
    <script type="text/javascript" src="<<%=request.getContextPath()%>/js/verTransferenciaContacto/TransferenciaACelular/TransferenciaACelular_1/TransferenciaACelular_1.js"></script>
  </body>
</html>
