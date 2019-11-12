//carte openstretmap avec leafletjs

// initialisation des valeurs de geolocalisation avec niveau de zoom 
var mymap = L.map('mapid').setView([47.6121, 6.1646], 17);

//affichage carte
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
maxZoom: 19,
attribution: ' <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(mymap);

// pointer un point sur la carte
var marker = L.marker([47.6121, 6.1646]).addTo(mymap);

// ajouter un text au pointer
marker.bindPopup("<b>Love House</b>").openPopup();