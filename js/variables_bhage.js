const jsonUrl = "https://Laila72.github.io/Park_data/bhg.json";
const direct = "https://emiljnsan.github.io/bhage_kart/";
const grunnkart = "https://services.geodataonline.no/arcgis/rest/services/Geocache_WMAS_WGS84/GeocacheBasis/MapServer/tile/{z}/{y}/{x}";
const attribution_tag = '©️ Geodata AS, Kartverket, Geovekst og kommunene, OpenStreetMap';
const marker_oransje = "css/images/icon/marker-icon_oransje.png";
const marker_blaa = "css/images/icon/marker-icon_blaa.png";
const marker_gron = "css/images/icon/marker-icon_gron.png";
const shadow = "css/images/marker-shadow.png";
const testtekst = "test ok";

var publicCluster = L.markerClusterGroup({
    maxClusterRadius: 55,
    disableClusteringAtZoom: 16
});

var privateCluster = L.markerClusterGroup({
    maxClusterRadius: 55,
    disableClusteringAtZoom: 16
});

var openCluster = L.markerClusterGroup({
    maxClusterRadius: 55,
    disableClusteringAtZoom: 16
});
var allcluster = L.markerClusterGroup({
    maxClusterRadius: 55,
    disableClusteringAtZoom: 16
});

var blaatikon = L.icon({
    iconUrl: `${direct}${marker_blaa}`,
    shadowUrl: `${direct}${shadow}`,
    iconSize: [25, 41],
    shadowSize: [25, 41]
});

var gronikon = L.icon({
    iconUrl: `${direct}${marker_gron}`,
    shadowUrl: `${direct}${shadow}`,
    iconSize: [25, 41],
    shadowSize: [25, 41]
});

var oransjeikon = L.icon({
    iconUrl: `${direct}${marker_oransje}`,
    shadowUrl: `${direct}${shadow}`,
    iconSize: [25, 41],
    shadowSize: [25, 41]
});
