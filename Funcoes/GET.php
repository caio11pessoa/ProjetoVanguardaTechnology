<?php
    $url = "https://middleware.vanguardatech.com/api/search/retorno_posicoes/";
    $ch = curl_init($url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
    curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "GET");
    $positionMarkers = json_decode(curl_exec($ch));

//aqui faço o método GET para receber os dados do endpoint