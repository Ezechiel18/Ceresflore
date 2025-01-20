var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 0.333000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_ZNIEFF2zones_fonctionnelles_de_nature_remarquable_znieff2_1 = new ol.format.GeoJSON();
var features_ZNIEFF2zones_fonctionnelles_de_nature_remarquable_znieff2_1 = format_ZNIEFF2zones_fonctionnelles_de_nature_remarquable_znieff2_1.readFeatures(json_ZNIEFF2zones_fonctionnelles_de_nature_remarquable_znieff2_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZNIEFF2zones_fonctionnelles_de_nature_remarquable_znieff2_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZNIEFF2zones_fonctionnelles_de_nature_remarquable_znieff2_1.addFeatures(features_ZNIEFF2zones_fonctionnelles_de_nature_remarquable_znieff2_1);
var lyr_ZNIEFF2zones_fonctionnelles_de_nature_remarquable_znieff2_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZNIEFF2zones_fonctionnelles_de_nature_remarquable_znieff2_1, 
                style: style_ZNIEFF2zones_fonctionnelles_de_nature_remarquable_znieff2_1,
                popuplayertitle: 'ZNIEFF2 — zones_fonctionnelles_de_nature_remarquable_znieff2',
                interactive: true,
                title: '<img src="styles/legend/ZNIEFF2zones_fonctionnelles_de_nature_remarquable_znieff2_1.png" /> ZNIEFF2 — zones_fonctionnelles_de_nature_remarquable_znieff2'
            });
var format_DPF_officiel_L93_2 = new ol.format.GeoJSON();
var features_DPF_officiel_L93_2 = format_DPF_officiel_L93_2.readFeatures(json_DPF_officiel_L93_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DPF_officiel_L93_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DPF_officiel_L93_2.addFeatures(features_DPF_officiel_L93_2);
var lyr_DPF_officiel_L93_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DPF_officiel_L93_2, 
                style: style_DPF_officiel_L93_2,
                popuplayertitle: 'DPF_officiel_L93',
                interactive: true,
                title: '<img src="styles/legend/DPF_officiel_L93_2.png" /> DPF_officiel_L93'
            });
var format_acces_BD_3 = new ol.format.GeoJSON();
var features_acces_BD_3 = format_acces_BD_3.readFeatures(json_acces_BD_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_acces_BD_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_acces_BD_3.addFeatures(features_acces_BD_3);
cluster_acces_BD_3 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_acces_BD_3
});
var lyr_acces_BD_3 = new ol.layer.Vector({
                declutter: false,
                source:cluster_acces_BD_3, 
                style: style_acces_BD_3,
                popuplayertitle: 'acces_BD',
                interactive: true,
                title: '<img src="styles/legend/acces_BD_3.png" /> acces_BD'
            });
var format_Salix_4 = new ol.format.GeoJSON();
var features_Salix_4 = format_Salix_4.readFeatures(json_Salix_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Salix_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Salix_4.addFeatures(features_Salix_4);
cluster_Salix_4 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_Salix_4
});
var lyr_Salix_4 = new ol.layer.Vector({
                declutter: false,
                source:cluster_Salix_4, 
                style: style_Salix_4,
                popuplayertitle: 'Salix',
                interactive: true,
                title: '<img src="styles/legend/Salix_4.png" /> Salix'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_ZNIEFF2zones_fonctionnelles_de_nature_remarquable_znieff2_1.setVisible(true);lyr_DPF_officiel_L93_2.setVisible(true);lyr_acces_BD_3.setVisible(true);lyr_Salix_4.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_ZNIEFF2zones_fonctionnelles_de_nature_remarquable_znieff2_1,lyr_DPF_officiel_L93_2,lyr_acces_BD_3,lyr_Salix_4];
lyr_ZNIEFF2zones_fonctionnelles_de_nature_remarquable_znieff2_1.set('fieldAliases', {'fid': 'fid', 'id_mnhn': 'id_mnhn', 'nom': 'nom', 'url': 'url', });
lyr_DPF_officiel_L93_2.set('fieldAliases', {});
lyr_acces_BD_3.set('fieldAliases', {'Nom': 'Nom', 'Rive': 'Rive', 'Remarques': 'Remarques', 'Communes': 'Communes', 'Usagers': 'Usagers', 'com_ceres': 'com_ceres', });
lyr_Salix_4.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'site': 'site', 'SP_salix': 'SP_salix', 'date': 'date', 'Ramille': 'Ramille', 'Branche': 'Branche', 'Bouture': 'Bouture', 'comment': 'comment', 'qte cp': 'qte cp', 'qte rami': 'qte rami', 'qte branch': 'qte branch', 'qte bout': 'qte bout', 'qte': 'qte', 'layer': 'layer', 'path': 'path', });
lyr_ZNIEFF2zones_fonctionnelles_de_nature_remarquable_znieff2_1.set('fieldImages', {'fid': 'TextEdit', 'id_mnhn': 'TextEdit', 'nom': 'TextEdit', 'url': 'TextEdit', });
lyr_DPF_officiel_L93_2.set('fieldImages', {});
lyr_acces_BD_3.set('fieldImages', {'Nom': 'TextEdit', 'Rive': 'TextEdit', 'Remarques': 'TextEdit', 'Communes': 'TextEdit', 'Usagers': 'TextEdit', 'com_ceres': 'TextEdit', });
lyr_Salix_4.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'site': 'TextEdit', 'SP_salix': 'TextEdit', 'date': 'DateTime', 'Ramille': 'TextEdit', 'Branche': 'TextEdit', 'Bouture': 'TextEdit', 'comment': 'TextEdit', 'qte cp': 'TextEdit', 'qte rami': 'TextEdit', 'qte branch': 'TextEdit', 'qte bout': 'TextEdit', 'qte': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_ZNIEFF2zones_fonctionnelles_de_nature_remarquable_znieff2_1.set('fieldLabels', {'fid': 'inline label - visible with data', 'id_mnhn': 'hidden field', 'nom': 'hidden field', 'url': 'hidden field', });
lyr_DPF_officiel_L93_2.set('fieldLabels', {});
lyr_acces_BD_3.set('fieldLabels', {'Nom': 'inline label - always visible', 'Rive': 'hidden field', 'Remarques': 'hidden field', 'Communes': 'hidden field', 'Usagers': 'hidden field', 'com_ceres': 'hidden field', });
lyr_Salix_4.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'site': 'inline label - visible with data', 'SP_salix': 'hidden field', 'date': 'hidden field', 'Ramille': 'hidden field', 'Branche': 'hidden field', 'Bouture': 'hidden field', 'comment': 'hidden field', 'qte cp': 'hidden field', 'qte rami': 'hidden field', 'qte branch': 'hidden field', 'qte bout': 'hidden field', 'qte': 'hidden field', 'layer': 'hidden field', 'path': 'hidden field', });
lyr_Salix_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});