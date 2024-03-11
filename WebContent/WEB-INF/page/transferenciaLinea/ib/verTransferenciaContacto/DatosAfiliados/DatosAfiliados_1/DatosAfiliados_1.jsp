<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Afiliación Celular</title>
    <<link rel="stylesheet" type="text/css" href="<%=request.getContextPath()%>/css/verTransferenciaContacto/AfiliacionDeCelular/AfiliacionCelular_2/AfiliacionCelular_2.css">
</head>
<body>
    <div id="maindiv">
        <h1>Confirma el cambio de tu n&uacute;mero celular</h1>
        
        <div class="container">
            <p>Para continuar con el proceso de afiliaci&oacute;n te hemos enviado un c&oacute;digo de verificaci&oacute;n SMS al nuevo n&uacute;mero celular.</p>

            <div class="CelularContainer">
                 <h2>947 058 652</h2>
            </div>
        </div>

    <form id="CodeValidation" name="CodeValidation">
        <label for="code">C&oacute;digo de verificaci&oacute;n</label>
        <div class="codeContainer">
            <input type="password" name="code" id="code" required maxlength="6">
            <a href="">Reenviar c&oacute;digo</a>
        </div>
    </form>
    </div>


<script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>   
<script type="text/javascript" src="<%=request.getContextPath()%>/js/verTransferenciaContacto/DatosAfiliados/DatosAfiliados_1/DatosAfiliados_1.js"></script>
</body>
</html>