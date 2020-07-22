
/*             Mapa Markers
Caio de Almeida Pessoa 22/07/2019 Versão 1*/

var map = L.map('map').setView([-3.7197137254680808, -38.529790341854095], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    id: "mapbox.streets"
}).addTo(map);

//recebe os ícones escritos no arquivo iconesMarker.js
var icones = retornarIcon()

/*Toggle: é o checkbox;
Label: são as classes toggle1 a toogle3;
button: são os botões que ficam da esquerda para direita*/

const arrayButtons = [
    {
        Toggle: document.getElementById('hidde'),
        Label: document.getElementById('toggle1'),
        Button: document.getElementById('button1'),
        condicao: true
    },
    {
        Toggle: document.getElementById('add'),
        Label: document.getElementById('toggle2'),
        Button: document.getElementById('button2'),
        condicao: true
    },
    {
        Toggle: document.getElementById('clear'),
        Label: document.getElementById('toggle3'),
        Button: document.getElementById('button3'),
        condicao: true
    }
]


function valida(validacao) {
    if (validacao.condicao) {
        validacao.condicao = false;
        validacao.Label.style.backgroundColor = "#55d069";
        validacao.Button.style.left = '25px';
        esconder(validacao, validacao.condicao);


    } else {
        validacao.condicao = true
        validacao.Label.style.backgroundColor = "#900";
        validacao.Button.style.left = '3px';
        esconder(validacao, validacao.condicao);
    }
}

arrayButtons.forEach(element => {
    element.Toggle.addEventListener('click', () => {
        valida(element)
    })
})

function esconder(botao, condicao) {
    if (botao === arrayButtons[0]) {//Testando se o botao que foi ativado foi o botao de esconder
        condicao === false ? map.removeLayer(featureGroup) : featureGroup.addTo(map);//dependendo da condição, os markers se escondem ou aparece na tela
    }
}

map.on('click', e => { adicionar(e); })//clique no mapa

function adicionar(e) {
    if (!arrayButtons[1].condicao) {//Testa se o botao de adicionar está ativado ou desativado
        var marker = L.marker(e.latlng, { icon: icones.marker })//cria os markers que o usuário adicionou
            .on('mousemove', e => { e.target.setIcon(icones.markerGrande); })//quando o mouse passa por cima do marker ele fica maior
            .on('mouseout', e => { e.target.setIcon(icones.marker); })//quando tira o mouse de cima o marker volta ao normal
            .bindPopup("latitude: "+e.latlng.lat.toFixed(3)+"  longitude: "+e.latlng.lng.toFixed(3));//Popup que aparece quando clica em cima do market
            featureGroup.addLayer(marker);
    }
}

function apagar(e) {
    if (!arrayButtons[2].condicao) {//testa se o botao de apagar está ativado
        featureGroup.removeLayer(e.layer)
    }
}

var markers = [];

if (positionMarkers) {
    positionMarkers.forEach(cord => {
        var marker = L.marker([cord.latitude, cord.longitude], { icon: icones.shieldPequeno })//cria os markers que vieram do endpoint
            .on('mousemove', e => { e.target.setIcon(icones.shieldGrand); })//quando o mouse passa por cima do marker ele fica maior
            .on('mouseout', e => { e.target.setIcon(icones.shieldPequeno); })//quando tira o mouse de cima o marker fica menor
            .bindPopup("Latitude: "+parseFloat(cord.latitude).toFixed(3) +"  Longitude: "+ parseFloat(cord.longitude).toFixed(3));        
            markers.push(marker)
    });
}

var featureGroup = L.featureGroup(markers)
    .on('click', e => { apagar(e); })//caso um dos markers tenha sido clickado ele ativa a função apagar()
    .addTo(map)//adicionando todos os markers ao mapa

//evento para mostrar a latitude e longitude no quadrinho em baixo do mapa
map.on("moveend", e => {
    $('#lat-long').val(map.getCenter().lat.toFixed(6) + ' , ' + map.getCenter().lng.toFixed(6));
});//JQuery para criação do evento

//quando o mapa é iniciado a posição é ajustada para um local que possa visualizar todos os markers
map.fitBounds(featureGroup.getBounds(), { padding: [5, 5] });

