var audio = document.getElementById('audio');
var change = document.getElementById('change');
var playing = false;


//window.onload = function(){
    //document.getElementById('audio').play();
    //var audio2 = new Audio('media/theme.mp3');
    //audio2.play();
//}

//function play(){
    //var audio2 = new Audio('media/theme.mp3');
    //audio2.play();


    /*if(playing == false){
        audio.play();
        playing == true;
    }else{
        audio.pause();
        playing == false;
    }*/
//}

function playSong(){
    if(playing == false){
        audio.play();
        playing = true;
        change.innerText = 'Pause';
    }else{
        audio.pause();
        playing = false;
        change.innerText = 'Play';
    }
}