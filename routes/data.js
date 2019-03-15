// Dependencies
const express = require('express');
//var CKAN = require('ckan');
const router = express.Router();
const axios = require('axios');

//var clientCkan = new CKAN.Client('http://35.197.231.222/dataset/projettgv');
//clientCkan.requestType = 'GET';


router.get('/data', (req, res) => {
    axios.get('http://35.197.231.222/dataset/b71ed655-de8b-4dd0-afcf-c92aadf780a0/resource/6051abab-a64d-4ce1-b44d-a9f86ea748d5/download/regularite-mensuelle-tgv-aqst.json').
    then(result => {
        var gare1 = req.query.gare1;
        var gare2 = req.query.gare2;
        var data = result.data;
        var listA = [];
        var retardDepart = 0;
        var nombreMax =  0;
        var retardArr =  0;
        var trajet = "ok";

        for (i = 0; i < data.length; i++){
            if(gare1 === (data[i]['fields']['gare_de_depart_en_majuscules_sans_espaces_si_tiret'])){
                if(gare2 === (data[i]['fields']['gare_d_arrivee_en_majuscules_sans_espaces_si_tiret'])){
                    listA.push(data[i]);
                    retardDepart += data[i]['fields']['nombre_de_trains_en_retard_au_depart'];
                    retardArr += data[i]['fields']['nombre_de_trains_en_retard_a_l_arrivee'];
                    nombreMax += data[i]['fields']['nombre_de_circulations_prevues'];
                }
            }
        }

        var pourcD = Math.round((retardDepart/nombreMax)*100);
        var pourcA = Math.round((retardArr/nombreMax)*100);
        if (listA.length === 0){
            trajet = "erreur"
        }
        res.render('data', { data: listA, trajet: trajet, gare1: gare1, gare2: gare2, retardDepart:retardDepart, retardArr:retardArr, nombreMax:nombreMax, pourcA:pourcA, pourcD:pourcD });
    })
});

module.exports = router;

// nombre_de_trains_en_retard_au_depart / nombre_de_circulations_prevues
