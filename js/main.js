'use strict'
//model : 
var gId = 0 ; 
var gBalloons = generateBalloons()
var intervalId

function generateBalloons(){
    var balloons = [];
    for (var i = 0 ; i <5 ; i++){
        var balloon ={
            id : gId++,
            distance : 0,
            speed : i
        }
        balloons.push(balloon);
    }
    return balloons;
}   

function init() {
    renderBalloons()
}
function renderBalloons() {
    var strHTML = '';
    for (var i = 0; i < gBalloons.length; i++) {
        strHTML += '<div class="balloon balloon' + (i + 1) +
            '" onclick="pop(' + i + ')"></div>';
    }
    var elSky = document.querySelector('.sky');
    elSky.innerHTML = strHTML;
}
function startRace() {
    console.log('Start');
    intervalId = setInterval(moveBalloons, 41)
}

function speedUp(index) {
    var balloon = gBalloons[index]
    balloon.speed += 10
}

function moveBalloons() {
    var elBalloons = document.querySelectorAll('.balloon');
    for (var i = 0; i < gBalloons.length; i++) {
        var balloon = gBalloons[i]
        var elBalloon = elBalloons[i]
        balloon.distance += balloon.speed
        elBalloon.style.bottom = balloon.distance + 'px'
        if (balloon.distance > 900) {
            console.log('Victory !', balloon.id);
            clearInterval(intervalId)


        }

    }
}


function pop(index) {
    console.log(gBalloons[index]);
    gBalloons.splice(index,1)
    renderBalloons()
    var audio = new Audio('pop.wav');
    audio.play();
}