"use strict";

//Variables de cartes
var msc, bleu, flag = true;

//Fonction de chargement de la carte Mouscron
function carte_Mouscron() {
    var echelleMouscron = 'Echelle Mouscron_A.svg';
    var ElementBounds = [[50.76257, 3.1699], [50.7208, 3.2705]];
    msc = L.imageOverlay(echelleMouscron, ElementBounds).addTo(mymap);
}

//Fonction de chargement de la carte Bleu
function carte_Bleu() {
    var echelleBleu = 'Echelle Carré Bleu_A-01.svg';
    var ElementBounds = [[51.1, 2.9268], [50.355, 3.5]];
    bleu = L.imageOverlay(echelleBleu, ElementBounds).addTo(mymap);

    //gare de Mouscron
    var bounds_mouscron = [[50.749042, 3.216006], [50.735754, 3.237073]];
    var gare_mouscron = L.rectangle(bounds_mouscron, {
        color: 'white',
        colorOpacity: 0,
        weight: 0
    }).addTo(mymap);
    gare_mouscron.bindPopup('<img src="Gare+.jpg" width="800px">');
    
    //Tombrouck
    var bounds_tomb = [[50.755758, 3.254305], [50.742781, 3.274230]];
    var tombrouck = L.rectangle(bounds_tomb, {
        color: 'white',
        colorOpacity: 0,
        weight: 0
    }).addTo(mymap);
    tombrouck.bindPopup('<img src="Tombrouck+.jpg" width="800px">');
    
    //Métro local europe
    var bounds_metro = [[50.749849, 3.174069], [50.736873, 3.192054]];
    var metro_local = L.rectangle(bounds_metro, {
        color: 'white',
        colorOpacity: 0,
        weight: 0
    }).addTo(mymap);
    metro_local.bindPopup('<img src="Métro local Europe+.jpg" width="800px">');

    //Lys
    var bounds_lys = [[50.8016, 3.151238], [50.788214, 3.170772]];
    var lys = L.rectangle(bounds_lys, {
        color: 'white',
        colorOpacity: 0,
        weight: 0
    }).addTo(mymap);
    lys.bindPopup('<img src="Lys+.jpg" width="800px">');

    //Entre vallées
    var bounds_ev = [[50.752091, 3.195916], [50.735799, 3.217064]];
    var ev = L.rectangle(bounds_ev, {
        color: 'white',
        colorOpacity: 0,
        weight: 0
    }).addTo(mymap);
    ev.bindPopup('<img src="Entre-vallées+.jpg" width="800px">');

    //Escaut
    var bounds_escaut = [[50.724049, 3.349129], [50.709548, 3.369554]];
    var escaut = L.rectangle(bounds_escaut, {
        color: 'white',
        colorOpacity: 0,
        weight: 0
    }).addTo(mymap);
    escaut.bindPopup('<img src="Escaut+.jpg" width="800px">');

    /** Images associés aux vecteurs */

    //By pass escaut
    var bpe = L.circle([50.714845, 3.361879], {
        color: '#143c68',
        colorOpacity: 0.4,
        fillcolor: '#143c68',
        fillOpacity: 0.4,
        radius: 175
    }).addTo(mymap);
    bpe.bindPopup('<img src="1.jpg" width="500px">');

    //By pass lys
    var bpl = L.circle([50.791991, 3.141260], {
        color: '#143c68',
        colorOpacity: 0.4,
        fillcolor: '#143c68',
        fillOpacity: 0.4,
        radius: 175
    }).addTo(mymap);
    bpl.bindPopup('<img src="1.jpg" width="500px">');

    //Local Europe
    var le = L.circle([50.745877, 3.177840], {
        weight: 0,
        fillOpacity: 0,
        radius: 175
    }).addTo(mymap);
    le.bindPopup('<img src="2.jpg" width="800px">');

    //Tombrouck
    var tb = L.circle([50.752697, 3.255079], {
        weight: 0,
        fillOpacity: 0,
        radius: 175
    }).addTo(mymap);
    tb.bindPopup('<img src="2.jpg" width="800px">');

    //Eurometropolis centre
    var ec = L.circle([50.738679, 3.225286], {
        weight: 0,
        fillOpacity: 0,
        radius: 175
    }).addTo(mymap);
    ec.bindPopup('<img src="3.jpg" width="800px">');

    //Tourcoing
    var tourcoing = L.circle([50.718339, 3.168301], {
        weight: 0,
        fillOpacity: 0,
        radius: 175
    }).addTo(mymap);
    tourcoing.bindPopup('<img src="4.jpg" width="600px">');

    //Courtrai
    var kt = L.circle([50.804317, 3.219006], {
        color: '#FAB600',
        colorOpacity: 0.4,
        fillcolor: '#FAB600',
        fillOpacity: 0.7,
        radius: 175,
        weight: 2
    }).addTo(mymap);
    kt.bindPopup('<img src="4.jpg" width="600px">');

    //Herseaux
    var hx = L.circle([50.713466, 3.241783], {
        weight: 0,
        fillOpacity: 0,
        radius: 175
    }).addTo(mymap);
    hx.bindPopup('<img src="5.jpg" width="800px">');

    //Roubaix
    var rx = L.circle([50.691919, 3.178599], {
        weight: 0,
        fillOpacity: 0,
        radius: 175
    }).addTo(mymap);
    rx.bindPopup('<img src="6.jpg" width="500px">');
}

//Init carte
L.mapbox.accessToken = 'pk.eyJ1IjoiY2FkZXJvbmFzIiwiYSI6ImNrYTE3eGl6OTA4d20zZW55ajg5NWwzYTEifQ.XyvH5AxdNxq0lVS-zwSY0g';
var mymap = L.mapbox.map('map')
    .setView([50.6911133, 3.1162672], 12)
    .addLayer(L.mapbox.styleLayer('mapbox://styles/caderonas/ckbjo4umu2mvu1iqh5r0i71zw').setOpacity(0.4))
    //event listener sur le zoom pour adapter l'opacité
    .on('zoom', function () {
        if (mymap._zoom >= 14 && flag) {
            msc.setOpacity(1);
            bleu.setOpacity(0);
            //mymap.setView([50.7378547, 3.2180207], 14);
            flag = !flag;
        }
        if (mymap._zoom < 14 && !flag) {
            msc.setOpacity(0);
            bleu.setOpacity(1);
            //mymap.setView([50.6911133, 3.1162672], 13);
            flag = !flag;
        }
    });

//Echelle
L.control.scale().addTo(mymap);

//chargements des 2 cartes
carte_Bleu();
carte_Mouscron();

//init opacity
bleu.on('load', function () {
    bleu.setOpacity(1);
});
msc.on('load', function () {
    msc.setOpacity(0);
});
