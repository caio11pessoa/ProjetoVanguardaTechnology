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
var icones = retornarIcon()

function adicionar(e) {
    if (!arrayButtons[1].condicao) {
        var marker = L.marker(e.latlng, { icon: icones.marker }).on('mousemove', function (e) {
                    e.target.setIcon(icones.markerGrande);
                }).on('mouseout', function (e) {
                    e.target.setIcon(icones.marker);
                });
        featureGroup.addLayer(marker)
    }
}
function apagar(e) {
    if (!arrayButtons[2].condicao) {
        featureGroup.removeLayer(e.layer)
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
        var marker = L.marker([cord.latitude, cord.longitude], { icon: icones.shieldPequeno })
            .on('mousemove', function (e) {
                e.target.setIcon(icones.shieldGrand);
            })
            .on('mouseout', function (e) {
                e.target.setIcon(icones.shieldPequeno);
            });
        markers.push(marker)
    });
}
var featureGroup = L.featureGroup(markers).on('click', e => {
    apagar(e);
}).addTo(map)

map.on('click', function (e) {
    adicionar(e);
})

map.on("moveend", function (e) {
    $('#lat-long').val(map.getCenter().lat.toFixed(3) + ' , ' + map.getCenter().lng.toFixed(3));
});

map.fitBounds(featureGroup.getBounds(), {
    padding: [5, 5]
});

