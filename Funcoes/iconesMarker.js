function retornarIcon() {
    const icones = {
        shieldPequeno : L.icon({
            iconUrl: 'Imagens/shield.svg',
            iconSize: [32, 37],
            iconAnchor: [16, 37],//metade de 32 e 37
            popupAnchor: [0, -30]

        }),
        shieldGrand: L.icon({
            iconUrl: 'Imagens/shieldBlue.svg',
            iconSize: [42, 47],
            iconAnchor: [16, 37],//metade de 32 e 37
            popupAnchor: [0, -30]

        }),
        marker : L.icon({
            iconUrl: 'Imagens/marker.svg',
            iconSize: [32, 37],
            iconAnchor: [16, 37],//metade de 32 e 37
            popupAnchor: [0, -30]

        }),
        markerGrande : L.icon({
            iconUrl: 'Imagens/markerAzul.svg',
            iconSize: [42, 47],
            iconAnchor: [16, 37],
            popupAnchor: [0, -30]
        })
    }


    return icones;
}

