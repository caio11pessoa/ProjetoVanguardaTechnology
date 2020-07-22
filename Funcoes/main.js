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
    if (botao === arrayButtons[0]) {
        condicao === false ? map.removeLayer(featureGroup) : featureGroup.addTo(map);
    }
}

function adicionar(e) {
    console.log(arrayButtons[1].condicao)
    if (!arrayButtons[1].condicao) {
        featureGroup.addLayer(L.marker(e.latlng))
    }
}

var map = L.map('map').setView([-3.7197137254680808, -38.529790341854095], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    id: "mapbox.streets"
}).addTo(map);

var markers = [];

if (positionMarkers) {
    positionMarkers.forEach(cord => {
        var marker = L.marker([cord.latitude, cord.longitude])
        markers.push(marker)
    });
}
var featureGroup = L.featureGroup(markers).addTo(map)

map.on('click', function (e) {
    adicionar(e);

})

