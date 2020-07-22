
//Criando o mapa

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




map.on('click', e => { adicionar(e); })//evento que ocorre quando o mapa sofre um click

function adicionar(e) {
    if (!arrayButtons[1].condicao) {//Testa se o botao de adicionar está ativado ou desativado
        var marker = L.marker(e.latlng, { icon: icones.marker })//criando os markers que o usuário adicionou
            .on('mousemove', e => { e.target.setIcon(icones.markerGrande); })//evento que quando o mouse passa por cima do marker ele fica maior
            .on('mouseout', e => { e.target.setIcon(icones.marker); });//evento que quando tira o mouse de cima o marker fica menor
        featureGroup.addLayer(marker);
    }
}

function apagar(e) {
    if (!arrayButtons[2].condicao) {//teste se o botao de apagar está ativado
        featureGroup.removeLayer(e.layer)
    }
}

var markers = [];

if (positionMarkers) {
    positionMarkers.forEach(cord => {
        var marker = L.marker([cord.latitude, cord.longitude], { icon: icones.shieldPequeno })//criando os markers que vieram do endpoint
            .on('mousemove', e => { e.target.setIcon(icones.shieldGrand); })//evento que quando o mouse passa por cima do marker ele fica maior
            .on('mouseout', e => { e.target.setIcon(icones.shieldPequeno); });//evento que quando tira o mouse de cima o marker fica menor
        markers.push(marker)
    });
}

var featureGroup = L.featureGroup(markers)
    .on('click', e => { apagar(e); })//caso um dos markers tenha sido clickado ele ativa a função apagar()
    .addTo(map)//adicionando todos os markers ao mapa

//evento para mostrar a latitude e longitude no quadrinho em baixo do mapa
map.on("moveend", e => {
    $('#lat-long').val(map.getCenter().lat.toFixed(3) + ' , ' + map.getCenter().lng.toFixed(3));
});//utilizo JQuery para facilitar na criação do evento

//função que quando o mapa é iniciado ele ajusta a posição para um local que possa visualizar todos os markers
map.fitBounds(featureGroup.getBounds(), { padding: [5, 5] });

