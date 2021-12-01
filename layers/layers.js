var wms_layers = [];

var format_Mergebrgyandmuni_0 = new ol.format.GeoJSON();
var features_Mergebrgyandmuni_0 = format_Mergebrgyandmuni_0.readFeatures(json_Mergebrgyandmuni_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Mergebrgyandmuni_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Mergebrgyandmuni_0.addFeatures(features_Mergebrgyandmuni_0);
var lyr_Mergebrgyandmuni_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Mergebrgyandmuni_0, 
                style: style_Mergebrgyandmuni_0,
                interactive: true,
                title: '<img src="styles/legend/Mergebrgyandmuni_0.png" /> Merge brgy and muni'
            });

lyr_Mergebrgyandmuni_0.setVisible(true);
var layersList = [lyr_Mergebrgyandmuni_0];
lyr_Mergebrgyandmuni_0.set('fieldAliases', {'fid': 'fid', 'NAME_1': 'NAME_1', 'NAME_2': 'NAME_2', 'ID_3': 'ID_3', 'Location': 'Location', 'Target Votes': 'Target Votes', 'Cost': 'Cost', 'ID_2': 'ID_2', 'Municipality': 'Municipality', 'Contact Person': 'Contact Person', 'Initial Payment': 'Initial Payment', 'layer': 'layer', 'path': 'path', });
lyr_Mergebrgyandmuni_0.set('fieldImages', {'fid': 'TextEdit', 'NAME_1': 'TextEdit', 'NAME_2': 'TextEdit', 'ID_3': 'TextEdit', 'Location': 'TextEdit', 'Target Votes': '', 'Cost': 'TextEdit', 'ID_2': 'TextEdit', 'Municipality': 'TextEdit', 'Contact Person': 'TextEdit', 'Initial Payment': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_Mergebrgyandmuni_0.set('fieldLabels', {'fid': 'no label', 'NAME_1': 'no label', 'NAME_2': 'no label', 'ID_3': 'no label', 'Location': 'inline label', 'Target Votes': 'inline label', 'Cost': 'inline label', 'ID_2': 'no label', 'Municipality': 'inline label', 'Contact Person': 'inline label', 'Initial Payment': 'inline label', 'layer': 'no label', 'path': 'no label', });
lyr_Mergebrgyandmuni_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});