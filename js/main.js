
var map = L.map('map',{maxZoom: 23});

var attr = "<a href='http://www.gsi.go.jp/kikakuchousei/kikakuchousei40182.html' target='_blank'>国土地理院 地理院地図</a>";

L.tileLayer('http://cyberjapandata.gsi.go.jp/xyz/std/{z}/{x}/{y}.png', {
   attribution: attr
}).addTo(map);

map.setView([36.06, 139.3440306], 10);

//ポリゴンの基本的な色を設定する
function style(feature) {
   return {
      fillColor: '#2A4EFC',
      weight: 1,
      opacity: 1,
      color: 'white',
      fillOpacity: 0.5
   }
}

//マウスオーバー、マウスアウト、クリックのイベントを登録する
function onEachFeature(feature, layer) {
   var props = feature.properties;
   layer.bindPopup('<b>' + props.施設名称 + '</b><br />' + props.住所)
}

var geojson;
geojson = L.geoJson(points, {
   onEachFeature: onEachFeature
}).addTo(map);