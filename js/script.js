$(document).ready(function(){

    var ctx = $("#temperatureReadings").get(0).getContext("2d");
    var ctx2 = $("#pressureReadings").get(0).getContext("2d");
    
    var data = {
        labels: ["Temp1","Temp2", "Temp3", "Temp4","Temp5","Temp6"],
        datasets: [
            {
                label: "One",
                fillColor: "rgba(220,220,220,0.3)",
                strokeColor: "rgba(220,220,220,1)",
                pointColor: "rgba(220,220,220,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(220,220,220,1)",
                data: [65, 65, 65, 65, 65, 65]
            }
        ]
    };
    var data2 = {
        labels: ["Press1","Press2", "Press3", "Press4","Press5","Press6"],
        datasets: [
            {
                label: "One",
                fillColor: "rgba(45,45,220,0.3)",
                strokeColor: "rgba(45,45,220,0.3)",
                pointColor: "rgba(220,220,220,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(220,220,220,1)",
                data: [120,120,120,120,120,120]
            }
        ]
    };
    
    var myLineChart = new Chart(ctx).Line(data, {
        scaleOverride: true, 
        scaleStartValue: 40, 
        scaleStepWidth: 10, 
        scaleSteps: 5
    });
    
    setInterval(function(){
        for(var i=0; i<myLineChart.datasets[0].points.length; i++){
            var thisOne = myLineChart.datasets[0].points[i].value;
            var upOrDown = Math.random();
            if(upOrDown > 0.5){
                thisOne = thisOne + (Math.random()/2);
            } else {
                thisOne = thisOne - (Math.random()/2);
            }
            myLineChart.datasets[0].points[i].value = thisOne;
        }
        myLineChart.update();
    },1000);

    var myLineChart2 = new Chart(ctx2).Line(data2, {
        scaleOverride: true, 
        scaleStartValue: 100, 
        scaleStepWidth: 10, 
        scaleSteps: 4
    });
    
    setInterval(function(){
        for(var i=0; i<myLineChart2.datasets[0].points.length; i++){
            var thisOne = myLineChart2.datasets[0].points[i].value;
            var upOrDown = Math.random();
            if(upOrDown > 0.5){
                thisOne = thisOne + (Math.random()/5);
            } else {
                thisOne = thisOne - (Math.random()/5);
            }
            myLineChart2.datasets[0].points[i].value = thisOne;
            if(myLineChart2.datasets[0].points[i].value>121){
                myLineChart2.datasets[0].points[i].fillColor = "rgba(255,45,45,0.5)";   
            } else {
                myLineChart2.datasets[0].points[i].fillColor="rgba(220,220,220,0.3)";
            }
        }
        myLineChart2.update();
    },1000);
    
    
    var map = L.map('map').setView([41.590963, -93.720354], 13);

L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// add a marker in the given location, attach some popup content to it and open the popup
var markers = [];
    
   markers.push(L.marker([41.590963, -93.720354]).addTo(map).bindPopup('{Dynamic info on this rig}'));
   markers.push(L.marker([41.614742, -93.642556]).addTo(map).bindPopup('{Dynamic info on this rig}'));
   markers.push(L.marker([41.534352, -93.847177]).addTo(map).bindPopup('{Dynamic info on this rig}'));
   markers.push(L.marker([41.675802, -93.650109]).addTo(map).bindPopup('{Dynamic info on this rig}'));
   markers.push(L.marker([41.639378, -93.494584]).addTo(map).bindPopup('{Dynamic info on this rig}'));
    
    var group = new L.featureGroup([markers[0],markers[1],markers[2],markers[3],markers[4]]);
    map.fitBounds(group.getBounds());
    
    
    
    
});