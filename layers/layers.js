var wms_layers = [];


        var lyr_GoogleRoads_0 = new ol.layer.Tile({
            'title': 'Google Roads',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=h&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleSatellite_1 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleSatelliteHybrid_2 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OpenTopoMap_3 = new ol.layer.Tile({
            'title': 'OpenTopoMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://opentopomap.org/about#datenstand">OpenTopoMap (CC-BY-SA)</a>',
                url: 'https://tile.opentopomap.org/{z}/{x}/{y}.png'
            })
        });
var format_Sungai_4 = new ol.format.GeoJSON();
var features_Sungai_4 = format_Sungai_4.readFeatures(json_Sungai_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sungai_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sungai_4.addFeatures(features_Sungai_4);
var lyr_Sungai_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sungai_4, 
                style: style_Sungai_4,
                popuplayertitle: 'Sungai',
                interactive: false,
                title: '<img src="styles/legend/Sungai_4.png" /> Sungai'
            });
var format_Jalan_5 = new ol.format.GeoJSON();
var features_Jalan_5 = format_Jalan_5.readFeatures(json_Jalan_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Jalan_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jalan_5.addFeatures(features_Jalan_5);
var lyr_Jalan_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Jalan_5, 
                style: style_Jalan_5,
                popuplayertitle: 'Jalan',
                interactive: false,
                title: '<img src="styles/legend/Jalan_5.png" /> Jalan'
            });
var format_AreaFungsional_6 = new ol.format.GeoJSON();
var features_AreaFungsional_6 = format_AreaFungsional_6.readFeatures(json_AreaFungsional_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AreaFungsional_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AreaFungsional_6.addFeatures(features_AreaFungsional_6);
var lyr_AreaFungsional_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AreaFungsional_6, 
                style: style_AreaFungsional_6,
                popuplayertitle: 'Area Fungsional',
                interactive: true,
                title: '<img src="styles/legend/AreaFungsional_6.png" /> Area Fungsional'
            });
var format_KETERANGANKERUSAKANSALURAN_7 = new ol.format.GeoJSON();
var features_KETERANGANKERUSAKANSALURAN_7 = format_KETERANGANKERUSAKANSALURAN_7.readFeatures(json_KETERANGANKERUSAKANSALURAN_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KETERANGANKERUSAKANSALURAN_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KETERANGANKERUSAKANSALURAN_7.addFeatures(features_KETERANGANKERUSAKANSALURAN_7);
var lyr_KETERANGANKERUSAKANSALURAN_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KETERANGANKERUSAKANSALURAN_7, 
                style: style_KETERANGANKERUSAKANSALURAN_7,
                popuplayertitle: 'KETERANGAN KERUSAKAN SALURAN',
                interactive: true,
    title: 'KETERANGAN KERUSAKAN SALURAN<br />\
    <img src="styles/legend/KETERANGANKERUSAKANSALURAN_7_0.png" /> Baik<br />\
    <img src="styles/legend/KETERANGANKERUSAKANSALURAN_7_1.png" /> Rusak Ringan<br />\
    <img src="styles/legend/KETERANGANKERUSAKANSALURAN_7_2.png" /> Rusak Sedang<br />\
    <img src="styles/legend/KETERANGANKERUSAKANSALURAN_7_3.png" /> Rusak Berat<br />' });
var format_JENISSALURAN_8 = new ol.format.GeoJSON();
var features_JENISSALURAN_8 = format_JENISSALURAN_8.readFeatures(json_JENISSALURAN_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JENISSALURAN_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JENISSALURAN_8.addFeatures(features_JENISSALURAN_8);
var lyr_JENISSALURAN_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JENISSALURAN_8, 
                style: style_JENISSALURAN_8,
                popuplayertitle: 'JENIS SALURAN',
                interactive: true,
    title: 'JENIS SALURAN<br />\
    <img src="styles/legend/JENISSALURAN_8_0.png" /> Saluran Primer<br />\
    <img src="styles/legend/JENISSALURAN_8_1.png" /> Saluran Sekunder<br />\
    <img src="styles/legend/JENISSALURAN_8_2.png" /> Saluran Primer SP Ngunut 2<br />\
    <img src="styles/legend/JENISSALURAN_8_3.png" /> Saluran Sekunder SP Ngunut 2<br />' });
var format_AREA_NOMENKLATUR_9 = new ol.format.GeoJSON();
var features_AREA_NOMENKLATUR_9 = format_AREA_NOMENKLATUR_9.readFeatures(json_AREA_NOMENKLATUR_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AREA_NOMENKLATUR_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AREA_NOMENKLATUR_9.addFeatures(features_AREA_NOMENKLATUR_9);
var lyr_AREA_NOMENKLATUR_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AREA_NOMENKLATUR_9, 
                style: style_AREA_NOMENKLATUR_9,
                popuplayertitle: 'AREA_NOMENKLATUR',
                interactive: true,
                title: '<img src="styles/legend/AREA_NOMENKLATUR_9.png" /> AREA_NOMENKLATUR'
            });
var format_BANGUNAN_NOMENKLATUR_FULL_10 = new ol.format.GeoJSON();
var features_BANGUNAN_NOMENKLATUR_FULL_10 = format_BANGUNAN_NOMENKLATUR_FULL_10.readFeatures(json_BANGUNAN_NOMENKLATUR_FULL_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BANGUNAN_NOMENKLATUR_FULL_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BANGUNAN_NOMENKLATUR_FULL_10.addFeatures(features_BANGUNAN_NOMENKLATUR_FULL_10);
var lyr_BANGUNAN_NOMENKLATUR_FULL_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BANGUNAN_NOMENKLATUR_FULL_10, 
                style: style_BANGUNAN_NOMENKLATUR_FULL_10,
                popuplayertitle: 'BANGUNAN_NOMENKLATUR_FULL',
                interactive: false,
                title: '<img src="styles/legend/BANGUNAN_NOMENKLATUR_FULL_10.png" /> BANGUNAN_NOMENKLATUR_FULL'
            });
var format_Tikungan_11 = new ol.format.GeoJSON();
var features_Tikungan_11 = format_Tikungan_11.readFeatures(json_Tikungan_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Tikungan_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tikungan_11.addFeatures(features_Tikungan_11);
var lyr_Tikungan_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Tikungan_11, 
                style: style_Tikungan_11,
                popuplayertitle: 'Tikungan',
                interactive: true,
                title: '<img src="styles/legend/Tikungan_11.png" /> Tikungan'
            });
var format_Beda_Pasangan_12 = new ol.format.GeoJSON();
var features_Beda_Pasangan_12 = format_Beda_Pasangan_12.readFeatures(json_Beda_Pasangan_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Beda_Pasangan_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Beda_Pasangan_12.addFeatures(features_Beda_Pasangan_12);
var lyr_Beda_Pasangan_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Beda_Pasangan_12, 
                style: style_Beda_Pasangan_12,
                popuplayertitle: 'Beda_Pasangan',
                interactive: true,
                title: '<img src="styles/legend/Beda_Pasangan_12.png" /> Beda_Pasangan'
            });
var format_Gorong__Gorong_13 = new ol.format.GeoJSON();
var features_Gorong__Gorong_13 = format_Gorong__Gorong_13.readFeatures(json_Gorong__Gorong_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Gorong__Gorong_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Gorong__Gorong_13.addFeatures(features_Gorong__Gorong_13);
var lyr_Gorong__Gorong_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Gorong__Gorong_13, 
                style: style_Gorong__Gorong_13,
                popuplayertitle: 'Gorong_-_Gorong',
                interactive: true,
                title: '<img src="styles/legend/Gorong__Gorong_13.png" /> Gorong_-_Gorong'
            });
var format_Titik_Per_50_m_14 = new ol.format.GeoJSON();
var features_Titik_Per_50_m_14 = format_Titik_Per_50_m_14.readFeatures(json_Titik_Per_50_m_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Titik_Per_50_m_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Titik_Per_50_m_14.addFeatures(features_Titik_Per_50_m_14);
var lyr_Titik_Per_50_m_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Titik_Per_50_m_14, 
                style: style_Titik_Per_50_m_14,
                popuplayertitle: 'Titik_Per_50_m',
                interactive: true,
                title: '<img src="styles/legend/Titik_Per_50_m_14.png" /> Titik_Per_50_m'
            });
var format_Bangunan_Air_15 = new ol.format.GeoJSON();
var features_Bangunan_Air_15 = format_Bangunan_Air_15.readFeatures(json_Bangunan_Air_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bangunan_Air_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bangunan_Air_15.addFeatures(features_Bangunan_Air_15);
var lyr_Bangunan_Air_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bangunan_Air_15, 
                style: style_Bangunan_Air_15,
                popuplayertitle: 'Bangunan_Air',
                interactive: true,
                title: '<img src="styles/legend/Bangunan_Air_15.png" /> Bangunan_Air'
            });
var format_Bangunan_Bagi_16 = new ol.format.GeoJSON();
var features_Bangunan_Bagi_16 = format_Bangunan_Bagi_16.readFeatures(json_Bangunan_Bagi_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bangunan_Bagi_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bangunan_Bagi_16.addFeatures(features_Bangunan_Bagi_16);
var lyr_Bangunan_Bagi_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bangunan_Bagi_16, 
                style: style_Bangunan_Bagi_16,
                popuplayertitle: 'Bangunan_Bagi',
                interactive: true,
                title: '<img src="styles/legend/Bangunan_Bagi_16.png" /> Bangunan_Bagi'
            });
var format_Bangunan_Sadap_17 = new ol.format.GeoJSON();
var features_Bangunan_Sadap_17 = format_Bangunan_Sadap_17.readFeatures(json_Bangunan_Sadap_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bangunan_Sadap_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bangunan_Sadap_17.addFeatures(features_Bangunan_Sadap_17);
var lyr_Bangunan_Sadap_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bangunan_Sadap_17, 
                style: style_Bangunan_Sadap_17,
                popuplayertitle: 'Bangunan_Sadap',
                interactive: true,
                title: '<img src="styles/legend/Bangunan_Sadap_17.png" /> Bangunan_Sadap'
            });
var format_Rumah_Pompa_18 = new ol.format.GeoJSON();
var features_Rumah_Pompa_18 = format_Rumah_Pompa_18.readFeatures(json_Rumah_Pompa_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rumah_Pompa_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rumah_Pompa_18.addFeatures(features_Rumah_Pompa_18);
var lyr_Rumah_Pompa_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Rumah_Pompa_18, 
                style: style_Rumah_Pompa_18,
                popuplayertitle: 'Rumah_Pompa',
                interactive: true,
                title: '<img src="styles/legend/Rumah_Pompa_18.png" /> Rumah_Pompa'
            });
var group_TITIKAKSESORIS = new ol.layer.Group({
                                layers: [lyr_Bangunan_Air_15,lyr_Bangunan_Bagi_16,lyr_Bangunan_Sadap_17,lyr_Rumah_Pompa_18,],
                                fold: 'open',
                                title: 'TITIK AKSESORIS'});
var group_TITIKKETERANGAN = new ol.layer.Group({
                                layers: [lyr_Tikungan_11,lyr_Beda_Pasangan_12,lyr_Gorong__Gorong_13,lyr_Titik_Per_50_m_14,],
                                fold: 'open',
                                title: 'TITIK KETERANGAN'});
var group_SKEMANOMENKLATUR = new ol.layer.Group({
                                layers: [lyr_AREA_NOMENKLATUR_9,lyr_BANGUNAN_NOMENKLATUR_FULL_10,],
                                fold: 'open',
                                title: 'SKEMA NOMENKLATUR'});

lyr_GoogleRoads_0.setVisible(true);lyr_GoogleSatellite_1.setVisible(true);lyr_GoogleSatelliteHybrid_2.setVisible(true);lyr_OpenTopoMap_3.setVisible(true);lyr_Sungai_4.setVisible(true);lyr_Jalan_5.setVisible(true);lyr_AreaFungsional_6.setVisible(true);lyr_KETERANGANKERUSAKANSALURAN_7.setVisible(true);lyr_JENISSALURAN_8.setVisible(true);lyr_AREA_NOMENKLATUR_9.setVisible(true);lyr_BANGUNAN_NOMENKLATUR_FULL_10.setVisible(true);lyr_Tikungan_11.setVisible(true);lyr_Beda_Pasangan_12.setVisible(true);lyr_Gorong__Gorong_13.setVisible(true);lyr_Titik_Per_50_m_14.setVisible(true);lyr_Bangunan_Air_15.setVisible(true);lyr_Bangunan_Bagi_16.setVisible(true);lyr_Bangunan_Sadap_17.setVisible(true);lyr_Rumah_Pompa_18.setVisible(true);
var layersList = [lyr_GoogleRoads_0,lyr_GoogleSatellite_1,lyr_GoogleSatelliteHybrid_2,lyr_OpenTopoMap_3,lyr_Sungai_4,lyr_Jalan_5,lyr_AreaFungsional_6,lyr_KETERANGANKERUSAKANSALURAN_7,lyr_JENISSALURAN_8,group_SKEMANOMENKLATUR,group_TITIKKETERANGAN,group_TITIKAKSESORIS];
lyr_Sungai_4.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'TIPSNG': 'TIPSNG', 'KLSSNG': 'KLSSNG', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'NAMWS': 'NAMWS', 'NAMDAS': 'NAMDAS', 'STATUS': 'STATUS', 'WMAX': 'WMAX', 'DBTMAX': 'DBTMAX', 'SLPRT': 'SLPRT', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_Jalan_5.set('fieldAliases', {'NAMRJL': 'NAMRJL', 'KONRJL': 'KONRJL', 'MATRJL': 'MATRJL', 'FGSRJL': 'FGSRJL', 'UTKRJL': 'UTKRJL', 'TOLRJL': 'TOLRJL', 'WLYRJL': 'WLYRJL', 'AUTRJL': 'AUTRJL', 'KLSRJL': 'KLSRJL', 'SPCRJL': 'SPCRJL', 'JPARJL': 'JPARJL', 'ARHRJL': 'ARHRJL', 'STARJL': 'STARJL', 'KLLRJL': 'KLLRJL', 'MEDRJL': 'MEDRJL', 'LOCRJL': 'LOCRJL', 'JARRJL': 'JARRJL', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_AreaFungsional_6.set('fieldAliases', {'Id': 'Id', 'FUNGSI': 'FUNGSI', 'LUAS': 'LUAS', 'PEMBAGIAN': 'PEMBAGIAN', 'SATUAN': 'SATUAN', });
lyr_KETERANGANKERUSAKANSALURAN_7.set('fieldAliases', {'Id': 'Id', 'JENIS': 'JENIS', 'KATEGORI': 'KATEGORI', 'KETERANGAN': 'KETERANGAN', 'PANJANG': 'PANJANG', });
lyr_JENISSALURAN_8.set('fieldAliases', {'Id': 'Id', 'JENIS': 'JENIS', 'KATEGORI': 'KATEGORI', 'KETERANGAN': 'KETERANGAN', 'PANJANG': 'PANJANG', });
lyr_AREA_NOMENKLATUR_9.set('fieldAliases', {'Id': 'Id', 'FUNGSI': 'FUNGSI', 'LUAS': 'LUAS', 'PEMBAGIAN': 'PEMBAGIAN', 'SATUAN': 'SATUAN', });
lyr_BANGUNAN_NOMENKLATUR_FULL_10.set('fieldAliases', {'NAME': 'NAME', 'X': 'X', 'Y': 'Y', 'BUJUR': 'BUJUR', 'LINTANG': 'LINTANG', 'PANJANG': 'PANJANG', 'URUTAN': 'URUTAN', 'PEMBAGIAN': 'PEMBAGIAN', });
lyr_Tikungan_11.set('fieldAliases', {'NAME': 'NAME', 'Descriptio': 'Descriptio', 'pdfmaps_ph': 'pdfmaps_ph', 'X': 'X', 'Y': 'Y', 'BUJUR': 'BUJUR', 'LINTANG': 'LINTANG', 'PANJANG': 'PANJANG', 'FOTO_1': 'FOTO_1', 'FOTO_2': 'FOTO_2', 'FOTO_3': 'FOTO_3', 'FOTO_4': 'FOTO_4', 'FOTO_5': 'FOTO_5', 'FOTO_6': 'FOTO_6', 'FOTO_7': 'FOTO_7', 'FOTO_8': 'FOTO_8', });
lyr_Beda_Pasangan_12.set('fieldAliases', {'NAME': 'NAME', 'Descriptio': 'Descriptio', 'pdfmaps_ph': 'pdfmaps_ph', 'X': 'X', 'Y': 'Y', 'BUJUR': 'BUJUR', 'LINTANG': 'LINTANG', 'PANJANG': 'PANJANG', 'FOTO_1': 'FOTO_1', 'FOTO_2': 'FOTO_2', 'FOTO_3': 'FOTO_3', 'FOTO_4': 'FOTO_4', 'FOTO_5': 'FOTO_5', 'FOTO_6': 'FOTO_6', 'FOTO_7': 'FOTO_7', 'FOTO_8': 'FOTO_8', });
lyr_Gorong__Gorong_13.set('fieldAliases', {'NAME': 'NAME', 'Descriptio': 'Descriptio', 'pdfmaps_ph': 'pdfmaps_ph', 'X': 'X', 'Y': 'Y', 'BUJUR': 'BUJUR', 'LINTANG': 'LINTANG', 'PANJANG': 'PANJANG', 'FOTO_1': 'FOTO_1', 'FOTO_2': 'FOTO_2', 'FOTO_3': 'FOTO_3', 'FOTO_4': 'FOTO_4', 'FOTO_5': 'FOTO_5', 'FOTO_6': 'FOTO_6', 'FOTO_7': 'FOTO_7', 'FOTO_8': 'FOTO_8', });
lyr_Titik_Per_50_m_14.set('fieldAliases', {'NAME': 'NAME', 'Descriptio': 'Descriptio', 'pdfmaps_ph': 'pdfmaps_ph', 'X': 'X', 'Y': 'Y', 'BUJUR': 'BUJUR', 'LINTANG': 'LINTANG', 'PANJANG': 'PANJANG', 'FOTO_1': 'FOTO_1', 'FOTO_2': 'FOTO_2', 'FOTO_3': 'FOTO_3', 'FOTO_4': 'FOTO_4', 'FOTO_5': 'FOTO_5', 'FOTO_6': 'FOTO_6', 'FOTO_7': 'FOTO_7', 'FOTO_8': 'FOTO_8', });
lyr_Bangunan_Air_15.set('fieldAliases', {'NAME': 'NAME', 'Descriptio': 'Descriptio', 'pdfmaps_ph': 'pdfmaps_ph', 'X': 'X', 'Y': 'Y', 'BUJUR': 'BUJUR', 'LINTANG': 'LINTANG', 'PANJANG': 'PANJANG', 'FOTO_1': 'FOTO_1', 'FOTO_2': 'FOTO_2', 'FOTO_3': 'FOTO_3', 'FOTO_4': 'FOTO_4', 'FOTO_5': 'FOTO_5', 'FOTO_6': 'FOTO_6', 'FOTO_7': 'FOTO_7', 'FOTO_8': 'FOTO_8', });
lyr_Bangunan_Bagi_16.set('fieldAliases', {'NAME': 'NAME', 'Descriptio': 'Descriptio', 'pdfmaps_ph': 'pdfmaps_ph', 'X': 'X', 'Y': 'Y', 'BUJUR': 'BUJUR', 'LINTANG': 'LINTANG', 'PANJANG': 'PANJANG', 'FOTO_1': 'FOTO_1', 'FOTO_2': 'FOTO_2', 'FOTO_3': 'FOTO_3', 'FOTO_4': 'FOTO_4', 'FOTO_5': 'FOTO_5', 'FOTO_6': 'FOTO_6', 'FOTO_7': 'FOTO_7', 'FOTO_8': 'FOTO_8', });
lyr_Bangunan_Sadap_17.set('fieldAliases', {'NAME': 'NAME', 'Descriptio': 'Descriptio', 'pdfmaps_ph': 'pdfmaps_ph', 'X': 'X', 'Y': 'Y', 'BUJUR': 'BUJUR', 'LINTANG': 'LINTANG', 'PANJANG': 'PANJANG', 'FOTO_1': 'FOTO_1', 'FOTO_2': 'FOTO_2', 'FOTO_3': 'FOTO_3', 'FOTO_4': 'FOTO_4', 'FOTO_5': 'FOTO_5', 'FOTO_6': 'FOTO_6', 'FOTO_7': 'FOTO_7', 'FOTO_8': 'FOTO_8', });
lyr_Rumah_Pompa_18.set('fieldAliases', {'NAME': 'NAME', 'Descriptio': 'Descriptio', 'pdfmaps_ph': 'pdfmaps_ph', 'X': 'X', 'Y': 'Y', 'BUJUR': 'BUJUR', 'LINTANG': 'LINTANG', 'PANJANG': 'PANJANG', 'FOTO_1': 'FOTO_1', 'FOTO_2': 'FOTO_2', 'FOTO_3': 'FOTO_3', 'FOTO_4': 'FOTO_4', 'FOTO_5': 'FOTO_5', 'FOTO_6': 'FOTO_6', 'FOTO_7': 'FOTO_7', 'FOTO_8': 'FOTO_8', });
lyr_Sungai_4.set('fieldImages', {'NAMOBJ': 'TextEdit', 'TIPSNG': 'TextEdit', 'KLSSNG': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'NAMWS': 'TextEdit', 'NAMDAS': 'TextEdit', 'STATUS': 'TextEdit', 'WMAX': 'TextEdit', 'DBTMAX': 'TextEdit', 'SLPRT': 'TextEdit', 'SHAPE_Leng': 'TextEdit', });
lyr_Jalan_5.set('fieldImages', {'NAMRJL': 'TextEdit', 'KONRJL': 'TextEdit', 'MATRJL': 'TextEdit', 'FGSRJL': 'TextEdit', 'UTKRJL': 'TextEdit', 'TOLRJL': 'TextEdit', 'WLYRJL': 'TextEdit', 'AUTRJL': 'TextEdit', 'KLSRJL': 'TextEdit', 'SPCRJL': 'TextEdit', 'JPARJL': 'TextEdit', 'ARHRJL': 'TextEdit', 'STARJL': 'TextEdit', 'KLLRJL': 'TextEdit', 'MEDRJL': 'TextEdit', 'LOCRJL': 'TextEdit', 'JARRJL': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'SHAPE_Leng': 'TextEdit', });
lyr_AreaFungsional_6.set('fieldImages', {'Id': 'Range', 'FUNGSI': 'TextEdit', 'LUAS': 'TextEdit', 'PEMBAGIAN': 'TextEdit', 'SATUAN': 'TextEdit', });
lyr_KETERANGANKERUSAKANSALURAN_7.set('fieldImages', {'Id': 'Range', 'JENIS': 'TextEdit', 'KATEGORI': 'TextEdit', 'KETERANGAN': 'TextEdit', 'PANJANG': 'TextEdit', });
lyr_JENISSALURAN_8.set('fieldImages', {'Id': 'Range', 'JENIS': 'TextEdit', 'KATEGORI': 'TextEdit', 'KETERANGAN': 'TextEdit', 'PANJANG': 'TextEdit', });
lyr_AREA_NOMENKLATUR_9.set('fieldImages', {'Id': 'Range', 'FUNGSI': 'TextEdit', 'LUAS': 'TextEdit', 'PEMBAGIAN': 'TextEdit', 'SATUAN': 'TextEdit', });
lyr_BANGUNAN_NOMENKLATUR_FULL_10.set('fieldImages', {'NAME': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'BUJUR': 'TextEdit', 'LINTANG': 'TextEdit', 'PANJANG': 'TextEdit', 'URUTAN': 'TextEdit', 'PEMBAGIAN': 'TextEdit', });
lyr_Tikungan_11.set('fieldImages', {'NAME': 'TextEdit', 'Descriptio': 'TextEdit', 'pdfmaps_ph': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'BUJUR': 'TextEdit', 'LINTANG': 'TextEdit', 'PANJANG': 'TextEdit', 'FOTO_1': 'ExternalResource', 'FOTO_2': 'ExternalResource', 'FOTO_3': 'ExternalResource', 'FOTO_4': 'ExternalResource', 'FOTO_5': 'ExternalResource', 'FOTO_6': 'ExternalResource', 'FOTO_7': 'ExternalResource', 'FOTO_8': 'ExternalResource', });
lyr_Beda_Pasangan_12.set('fieldImages', {'NAME': 'TextEdit', 'Descriptio': 'TextEdit', 'pdfmaps_ph': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'BUJUR': 'TextEdit', 'LINTANG': 'TextEdit', 'PANJANG': 'TextEdit', 'FOTO_1': 'ExternalResource', 'FOTO_2': 'ExternalResource', 'FOTO_3': 'ExternalResource', 'FOTO_4': 'ExternalResource', 'FOTO_5': 'ExternalResource', 'FOTO_6': 'ExternalResource', 'FOTO_7': 'ExternalResource', 'FOTO_8': 'ExternalResource', });
lyr_Gorong__Gorong_13.set('fieldImages', {'NAME': 'TextEdit', 'Descriptio': 'TextEdit', 'pdfmaps_ph': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'BUJUR': 'TextEdit', 'LINTANG': 'TextEdit', 'PANJANG': 'TextEdit', 'FOTO_1': 'ExternalResource', 'FOTO_2': 'ExternalResource', 'FOTO_3': 'ExternalResource', 'FOTO_4': 'ExternalResource', 'FOTO_5': 'ExternalResource', 'FOTO_6': 'ExternalResource', 'FOTO_7': 'ExternalResource', 'FOTO_8': 'ExternalResource', });
lyr_Titik_Per_50_m_14.set('fieldImages', {'NAME': 'TextEdit', 'Descriptio': 'TextEdit', 'pdfmaps_ph': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'BUJUR': 'TextEdit', 'LINTANG': 'TextEdit', 'PANJANG': 'TextEdit', 'FOTO_1': 'ExternalResource', 'FOTO_2': 'ExternalResource', 'FOTO_3': 'ExternalResource', 'FOTO_4': 'ExternalResource', 'FOTO_5': 'ExternalResource', 'FOTO_6': 'ExternalResource', 'FOTO_7': 'ExternalResource', 'FOTO_8': 'ExternalResource', });
lyr_Bangunan_Air_15.set('fieldImages', {'NAME': 'TextEdit', 'Descriptio': 'TextEdit', 'pdfmaps_ph': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'BUJUR': 'TextEdit', 'LINTANG': 'TextEdit', 'PANJANG': 'TextEdit', 'FOTO_1': 'ExternalResource', 'FOTO_2': 'ExternalResource', 'FOTO_3': 'ExternalResource', 'FOTO_4': 'ExternalResource', 'FOTO_5': 'ExternalResource', 'FOTO_6': 'ExternalResource', 'FOTO_7': 'ExternalResource', 'FOTO_8': 'ExternalResource', });
lyr_Bangunan_Bagi_16.set('fieldImages', {'NAME': 'TextEdit', 'Descriptio': 'TextEdit', 'pdfmaps_ph': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'BUJUR': 'TextEdit', 'LINTANG': 'TextEdit', 'PANJANG': 'TextEdit', 'FOTO_1': 'ExternalResource', 'FOTO_2': 'ExternalResource', 'FOTO_3': 'ExternalResource', 'FOTO_4': 'ExternalResource', 'FOTO_5': 'ExternalResource', 'FOTO_6': 'ExternalResource', 'FOTO_7': 'ExternalResource', 'FOTO_8': 'ExternalResource', });
lyr_Bangunan_Sadap_17.set('fieldImages', {'NAME': 'TextEdit', 'Descriptio': 'TextEdit', 'pdfmaps_ph': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'BUJUR': 'TextEdit', 'LINTANG': 'TextEdit', 'PANJANG': 'TextEdit', 'FOTO_1': 'ExternalResource', 'FOTO_2': 'ExternalResource', 'FOTO_3': 'ExternalResource', 'FOTO_4': 'ExternalResource', 'FOTO_5': 'ExternalResource', 'FOTO_6': 'ExternalResource', 'FOTO_7': 'ExternalResource', 'FOTO_8': 'ExternalResource', });
lyr_Rumah_Pompa_18.set('fieldImages', {'NAME': 'TextEdit', 'Descriptio': 'TextEdit', 'pdfmaps_ph': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'BUJUR': 'TextEdit', 'LINTANG': 'TextEdit', 'PANJANG': 'TextEdit', 'FOTO_1': 'ExternalResource', 'FOTO_2': 'ExternalResource', 'FOTO_3': 'ExternalResource', 'FOTO_4': 'ExternalResource', 'FOTO_5': 'ExternalResource', 'FOTO_6': 'ExternalResource', 'FOTO_7': 'ExternalResource', 'FOTO_8': 'ExternalResource', });
lyr_Sungai_4.set('fieldLabels', {'NAMOBJ': 'no label', 'TIPSNG': 'no label', 'KLSSNG': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'NAMWS': 'no label', 'NAMDAS': 'no label', 'STATUS': 'no label', 'WMAX': 'no label', 'DBTMAX': 'no label', 'SLPRT': 'no label', 'SHAPE_Leng': 'no label', });
lyr_Jalan_5.set('fieldLabels', {'NAMRJL': 'no label', 'KONRJL': 'no label', 'MATRJL': 'no label', 'FGSRJL': 'no label', 'UTKRJL': 'no label', 'TOLRJL': 'no label', 'WLYRJL': 'no label', 'AUTRJL': 'no label', 'KLSRJL': 'no label', 'SPCRJL': 'no label', 'JPARJL': 'no label', 'ARHRJL': 'no label', 'STARJL': 'no label', 'KLLRJL': 'no label', 'MEDRJL': 'no label', 'LOCRJL': 'no label', 'JARRJL': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', });
lyr_AreaFungsional_6.set('fieldLabels', {'Id': 'hidden field', 'FUNGSI': 'hidden field', 'LUAS': 'inline label - visible with data', 'PEMBAGIAN': 'hidden field', 'SATUAN': 'inline label - visible with data', });
lyr_KETERANGANKERUSAKANSALURAN_7.set('fieldLabels', {'Id': 'hidden field', 'JENIS': 'inline label - visible with data', 'KATEGORI': 'hidden field', 'KETERANGAN': 'hidden field', 'PANJANG': 'inline label - visible with data', });
lyr_JENISSALURAN_8.set('fieldLabels', {'Id': 'hidden field', 'JENIS': 'hidden field', 'KATEGORI': 'inline label - visible with data', 'KETERANGAN': 'inline label - visible with data', 'PANJANG': 'inline label - visible with data', });
lyr_AREA_NOMENKLATUR_9.set('fieldLabels', {'Id': 'hidden field', 'FUNGSI': 'inline label - visible with data', 'LUAS': 'inline label - visible with data', 'PEMBAGIAN': 'inline label - visible with data', 'SATUAN': 'inline label - visible with data', });
lyr_BANGUNAN_NOMENKLATUR_FULL_10.set('fieldLabels', {'NAME': 'no label', 'X': 'no label', 'Y': 'no label', 'BUJUR': 'no label', 'LINTANG': 'no label', 'PANJANG': 'no label', 'URUTAN': 'no label', 'PEMBAGIAN': 'no label', });
lyr_Tikungan_11.set('fieldLabels', {'NAME': 'inline label - visible with data', 'Descriptio': 'hidden field', 'pdfmaps_ph': 'hidden field', 'X': 'inline label - visible with data', 'Y': 'inline label - visible with data', 'BUJUR': 'inline label - visible with data', 'LINTANG': 'inline label - visible with data', 'PANJANG': 'inline label - visible with data', 'FOTO_1': 'no label', 'FOTO_2': 'no label', 'FOTO_3': 'no label', 'FOTO_4': 'no label', 'FOTO_5': 'no label', 'FOTO_6': 'no label', 'FOTO_7': 'no label', 'FOTO_8': 'no label', });
lyr_Beda_Pasangan_12.set('fieldLabels', {'NAME': 'inline label - visible with data', 'Descriptio': 'hidden field', 'pdfmaps_ph': 'hidden field', 'X': 'inline label - visible with data', 'Y': 'inline label - visible with data', 'BUJUR': 'inline label - visible with data', 'LINTANG': 'inline label - visible with data', 'PANJANG': 'inline label - visible with data', 'FOTO_1': 'no label', 'FOTO_2': 'no label', 'FOTO_3': 'no label', 'FOTO_4': 'no label', 'FOTO_5': 'no label', 'FOTO_6': 'no label', 'FOTO_7': 'no label', 'FOTO_8': 'no label', });
lyr_Gorong__Gorong_13.set('fieldLabels', {'NAME': 'inline label - visible with data', 'Descriptio': 'hidden field', 'pdfmaps_ph': 'hidden field', 'X': 'inline label - visible with data', 'Y': 'inline label - visible with data', 'BUJUR': 'inline label - visible with data', 'LINTANG': 'inline label - visible with data', 'PANJANG': 'inline label - visible with data', 'FOTO_1': 'no label', 'FOTO_2': 'no label', 'FOTO_3': 'no label', 'FOTO_4': 'no label', 'FOTO_5': 'no label', 'FOTO_6': 'no label', 'FOTO_7': 'no label', 'FOTO_8': 'no label', });
lyr_Titik_Per_50_m_14.set('fieldLabels', {'NAME': 'inline label - visible with data', 'Descriptio': 'hidden field', 'pdfmaps_ph': 'hidden field', 'X': 'inline label - visible with data', 'Y': 'inline label - visible with data', 'BUJUR': 'inline label - visible with data', 'LINTANG': 'inline label - visible with data', 'PANJANG': 'inline label - visible with data', 'FOTO_1': 'no label', 'FOTO_2': 'no label', 'FOTO_3': 'no label', 'FOTO_4': 'no label', 'FOTO_5': 'no label', 'FOTO_6': 'no label', 'FOTO_7': 'no label', 'FOTO_8': 'no label', });
lyr_Bangunan_Air_15.set('fieldLabels', {'NAME': 'inline label - visible with data', 'Descriptio': 'hidden field', 'pdfmaps_ph': 'hidden field', 'X': 'inline label - visible with data', 'Y': 'inline label - visible with data', 'BUJUR': 'inline label - visible with data', 'LINTANG': 'inline label - visible with data', 'PANJANG': 'inline label - visible with data', 'FOTO_1': 'no label', 'FOTO_2': 'no label', 'FOTO_3': 'no label', 'FOTO_4': 'no label', 'FOTO_5': 'no label', 'FOTO_6': 'no label', 'FOTO_7': 'no label', 'FOTO_8': 'no label', });
lyr_Bangunan_Bagi_16.set('fieldLabels', {'NAME': 'inline label - visible with data', 'Descriptio': 'hidden field', 'pdfmaps_ph': 'hidden field', 'X': 'inline label - visible with data', 'Y': 'inline label - visible with data', 'BUJUR': 'inline label - visible with data', 'LINTANG': 'inline label - visible with data', 'PANJANG': 'inline label - visible with data', 'FOTO_1': 'no label', 'FOTO_2': 'no label', 'FOTO_3': 'no label', 'FOTO_4': 'no label', 'FOTO_5': 'no label', 'FOTO_6': 'no label', 'FOTO_7': 'no label', 'FOTO_8': 'no label', });
lyr_Bangunan_Sadap_17.set('fieldLabels', {'NAME': 'inline label - visible with data', 'Descriptio': 'hidden field', 'pdfmaps_ph': 'hidden field', 'X': 'inline label - visible with data', 'Y': 'inline label - visible with data', 'BUJUR': 'inline label - visible with data', 'LINTANG': 'inline label - visible with data', 'PANJANG': 'inline label - visible with data', 'FOTO_1': 'no label', 'FOTO_2': 'no label', 'FOTO_3': 'no label', 'FOTO_4': 'no label', 'FOTO_5': 'no label', 'FOTO_6': 'no label', 'FOTO_7': 'no label', 'FOTO_8': 'no label', });
lyr_Rumah_Pompa_18.set('fieldLabels', {'NAME': 'inline label - visible with data', 'Descriptio': 'hidden field', 'pdfmaps_ph': 'hidden field', 'X': 'inline label - visible with data', 'Y': 'inline label - visible with data', 'BUJUR': 'inline label - visible with data', 'LINTANG': 'inline label - visible with data', 'PANJANG': 'inline label - visible with data', 'FOTO_1': 'no label', 'FOTO_2': 'no label', 'FOTO_3': 'no label', 'FOTO_4': 'no label', 'FOTO_5': 'no label', 'FOTO_6': 'no label', 'FOTO_7': 'no label', 'FOTO_8': 'no label', });
lyr_Rumah_Pompa_18.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});