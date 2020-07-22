<!DOCTYPE html>
<html lang="ot-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="CSS\estilo.css">
    <link
        href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
        rel="stylesheet">

    <title>Mapa</title>
</head>

<body>
    <div class="content">
        <header class="cabecalho">
            <h1>VANGUARDA TECHNOLOGY</h1>
            <h2>Mapa contendo os markers</h2>
        </header>
        <div class="map"></div>
        <div class="content-button">
            <div class="lat-long">
                <label for="lat-long">
                    <h4>Latitude e Longitude</h4>
                </label>
                <input type="text" id="lat-long" placeholder="Latitude | Longitude">
            </div>
            <div class="button-toggle">
                <div class="hidde">
                    <label for="hidde" id="hidden">
                        <h4>Esconder</h2>
                            <div class="toggle" id="toggle1">
                                <div class="button" id="button1"></div>
                            </div>
                    </label>
                    <input type="checkbox" id="hidde" class="hidden-toggle">
                </div>

                <div class="add">
                    <h4>Adicionar</h2>
                        <label for="add" id="added">
                            <div class="toggle" id="toggle2">
                                <div class="button" id="button2"></div>
                            </div>
                        </label>
                        <input type="checkbox" id="add">
                </div>

                <div class="clear">
                    <h4>Apagar</h2>
                        <label for="clear" id="clean">
                            <div class="toggle" id="toggle3">
                                <div class="button" id="button3"></div>
                            </div>
                        </label>
                        <input type="checkbox" id="clear">
                </div>
            </div>
        </div>
        <footer class="rodape">
            CAIO A. PESSOA
        </footer>
    </div>

    <script src="Funcoes\main.js"></script>
</body>

</html>