var bullets = [];
var enemies = [];

let player = document.getElementById("player");
//let enemy = document.getElementById("enemy");
//let bullet = document.getElementById("bullet");
var score = document.getElementById('score');


//ss
var shoot = document.getElementById('shoot');
//shoot.volume = 0.5;
var enemyDie = document.getElementById('enemyDie');
//enemyDie.volume = 0.5;
var playerDie = document.getElementById('playerDie');
//playerDie.volume = 0.5;
var gameSound = document.getElementById('gameSound');
//gameSound.play();
gameSound.autoplay = true;
gameSound.loop = true;
gameSound.volume = 0.2;

/*var theme = document.getElementById('theme');
theme.autoplay = true;
theme.loop = true;
theme.volume = 0.2;*/
//ss

player.style.position = 'absolute';
player.style.height = 50+'px';
player.style.width = 50+'px';
player.style.top = 550+'px';
player.style.left = 375+'px';

//let bulletCounter = 0;
let enemyCounter = 10;
//bullets[0] = bullet;
//var wrapper = document.getElementsByClassName("wrapper");
var pause = false;
let killed = 0;
var counter = 10;
//var gameover = false;

var btnMenu = document.getElementById('btnMenu');
btnMenu.style.visibility = 'hidden';
//btnMenu.style.display = "none";

window.onload = function(){
    //const canvas = document.getElementById("canvas");
    //const gameBoard = canvas.getContext("2d");
    //let body = document.getElementById("body");
    //var wrapper = document.getElementsByClassName("wrapper");

    //var background = new Image();
    //var character = new Image();
    //var enemy = new Image();
    //var bullet = new Image();
    
    //background.src = "imgs/background.png";
    //character.src = "imgs/player1.png";
    //enemy.src = "imgs/player2.png";
    //bullet.src = "imgs/player3.png";

    /*character.onload = function(){
        player = new player();
    }*/

    //var bullets = [];
    //bullets[0] = bullet;

    /*bullet.style.position = 'absolute';
    bullet.style.top = 0;
    bullet.style.left = 0;*/
}

document.addEventListener("keydown", moveCharacter)

function moveCharacter(event){
    switch(event.key){
        case "w": //"ArrowUp"
            if(pause == false){
                //console.log("Move up");
                if(parseInt(player.style.top) > 0){
                    player.style.top = parseInt(player.style.top) - 10 + 'px';
                }
            }
            break;
        case "s": //"ArrowDown"
            if(pause == false){
                //console.log("Move down");
                if(parseInt(player.style.top) < 550){//canvas.height
                    player.style.top = parseInt(player.style.top) + 10 + 'px';
                }
            }
            break;
        case "d": //"ArrowRight"
            if(pause == false){
                //console.log("Move right");
                if(parseInt(player.style.left) < 750){
                    player.style.left = parseInt(player.style.left) + 10 + 'px';
                }
            }
            break;
        case "a": //"ArrowLeft"
            if(pause == false){
                //console.log("Move left");
                if(parseInt(player.style.left) > 0){
                    player.style.left = parseInt(player.style.left) - 10 + 'px';
                }
            }
            break;
        case "p":
            if(pause == false){
                pause = true;
            }else{
                pause = false;
            }
            break;
        case "Enter":
            if(pause == false){
                bullet.style.position = 'absolute';
        
                bullet.style.top = parseInt(player.style.top) + 'px';
                bullet.style.left = parseInt(player.style.left) + 20 +'px';
                bullets.push(bullet);
            }
            break;
        case "-":
            gameSound.volume -= 0.1;
            theme.volume = theme.volume - 0.1;
            break;
    }
}

setInterval(update, 100);
function update(){
    moveEnemies();
    moveBullets();
    bulletCollision();
    playerCollision();
    
    //counter = killed / 10;
    if(counter == killed){
        counter += 10;
        enemyCounter = enemyCounter + 1;
    }
}

setInterval(createEnemies, 1000);

function createEnemies(){
    if(pause == false && enemies.length < enemyCounter){
        const enemy = new Image()
        enemy.src = "imgs/enemy.png"
        enemy.style.width = '30px'
        enemy.style.height = '30px'
        enemy.style.position = 'absolute';
        enemy.style.top = Math.floor(Math.random() * -150) - 50 + 'px';
        enemy.style.left = Math.floor(Math.random() * 770) + 'px';
        enemies.push(enemy);

        document.querySelector('.wrapper').appendChild(enemy)
    }
    /*
    enemy.style.position = 'absolute';
    enemy.style.top = Math.floor(Math.random() * -200) + 'px';
    enemy.style.left = 0;
    */
}

//setInterval(moveEnemies, 100);

function moveEnemies(){
    if(pause == false){
        /*if (!enemies) {
            //console.log('hola');
            if(enemy.style.top >= 650){ //enemies.parseInt(enemy.style.top) < 650
                //enemy.style.top = parseInt(enemy.style.top) + 10 + 'px';
                enemies.forEach(enemy => enemy.style.top = parseInt(enemy.style.top) + 10 + 'px');
                console.log('hola');
            }else{
                //enemy.style.top = Math.floor(Math.random() * -200) + 'px';
                //enemy.style.left = Math.floor(Math.random() * 750) + 'px';
                console.log('hola');
                //enemies.forEach(enemy => enemy.style.top = Math.floor(Math.random() * -150) - 50 + 'px');
                //enemies.forEach(enemy => enemy.style.left = Math.floor(Math.random() * 770) + 'px');
            }
        }*/
        //bullets.forEach(bullet => bullet.style.top = parseInt(bullet.style.top) - 20 + 'px');
        enemies.forEach(enemy => enemy.style.top = parseInt(enemy.style.top) + 10 + 'px');
        /*if(parseInt(enemy.style.top) > 650){
            enemies.forEach(enemy => enemy.style.top = Math.floor(Math.random() * -150) - 50 + 'px');
            enemies.forEach(enemy => enemy.style.left = Math.floor(Math.random() * 770) + 'px');
        }*/
        enemies.forEach(function(enemy) {
            if (parseInt(enemy.style.top) > 650) {
                enemy.style.top = Math.floor(Math.random() * -150) - 50 + 'px';
                enemy.style.left = Math.floor(Math.random() * 770) + 'px';
            }
        });
    }
}

document.addEventListener("click", createBullet);
function createBullet(){
    if(pause == false){
        const bullet = new Image()
        bullet.src = "imgs/bullet.png"
        bullet.style.width = '10px'
        bullet.style.height = '10px'
        bullet.style.position = 'absolute';
        bullet.style.top = parseInt(player.style.top) + 'px';
        bullet.style.left = parseInt(player.style.left) + 20 +'px';
        bullets.push(bullet);

        document.querySelector('.wrapper').appendChild(bullet)
        shoot.play();
    }
}

//setInterval(moveBullets, 100);

function moveBullets() {
    if(pause == false){
        bullets.forEach(bullet => bullet.style.top = parseInt(bullet.style.top) - 20 + 'px');

        bullets.forEach(function(bullet) {
            if (parseInt(bullet.style.top) < -20) {
                bullets.shift();
                bullet.parentNode.removeChild(bullet);
            }
        });

        /*
        if (!bullets) {
            if (parseInt(bullet.style.top) < -20) {
                delete bullets[0];
                console.log('hola');
            }
        } else {
            bullets.forEach(bullet => bullet.style.top = parseInt(bullet.style.top) - 20 + 'px')
        }
        */
    }
}
/*function createBullet(){
    //console.log("CLICK");
    //bullets[bulletCounter] = bullet;
    //bulletCounter++;
    //Element.innerHTML
    //document.wrapper.innerHTML = "";
    //bullet = element.innerHTML;
    //var bullet = document.createElement('image');
    //bullet.id = 'bullet';
    //document.getElementsByClassName("wrapper").innerHTML = bullet;

    //bullet = document.createElement('img');

    //let bullet = document.getElementsByClassName("wrapper").innerHTML = '<img id="bullet" src="imgs/player3.png"/>';

    //document.getElementsByClassName("wrapper").innerHTML = document.getElementById("bullet"); 
    //let bullet = document.getElementById("bullet");

    if(pause == false){
        document.createElement('img', bullet);

        bullet.style.position = 'absolute';
        //bullet.style.top = 0;
        //bullet.style.left = 0;

        bullet.style.top = parseInt(player.style.top) + 'px';
        bullet.style.left = parseInt(player.style.left) + 20 +'px';
        bullets.push(bullet);
    }
}*/


//function moveBullets(){
    //if(pause == false){
        /*if(bullets[0] != null){
            if(parseInt(bullet.style.top) < -20){
                delete bullets[0];
                //bullets[0] = null;
            }else{
                bullet.style.top = parseInt(bullet.style.top) - 20 + 'px';
            }
        }*/

        /*if(bullets.length > 0){
            bullets.forEach(function(i){
                //bullets.push(bullet);
                if(bullet.style.top < -20){
                    delete bullets[i];
                }
            });
            bullets = bullets.filter(item => item !== undefined);
        }

        if(parseInt(bullet.style.top) > -20){
            bullet.style.top = parseInt(bullet.style.top) - 20 + 'px';
        }else{
            delete bullets[0];
        }
    }
}*/


/*setInterval(moveBackground, 100);

function moveBackground(){
    if(parseInt(bullet.style.top) > 0){
        //enemy.style.top = parseInt(enemy.style.top) + 10 + 'px';
    }else{
        bullet.style.top = parseInt(bullet.style.top) - 10 + 'px';
        //enemy.style.top = Math.floor(Math.random() * -20) - enemy.style.height + 'px';
        //enemy.style.left = Math.floor(Math.random() * 800) + 'px';
    }
}*/

/*setInterval(collisions,0);
function collisions(){
    bulletCollision();
    playerCollision();
}*/

function bulletCollision(){
    if(pause == false){
        /*bullets.forEach(function(bullet) {
            enemies.forEach(function(enemy) {
                if (parseInt(bullet.style.top) == (parseInt(enemy.style.top) + parseInt(enemy.style.height)) &&
                    (parseInt(bullet.style.left) - parseInt(bullet.style.width) + 1) > parseInt(enemy.style.left) &&
                    parseInt(bullet.style.left) < (parseInt(enemy.style.left) + parseInt(enemy.style.width) - 1)) {
                        console.log('hola');
                        enemy.parentNode.removeChild(enemy);
                        bullet.parentNode.removeChild(bullet);
                        kda++;
                        score.innerText = 'Score: ' + kda;
                }
            });
        });*/

        /*for(let i = 0; i < enemies.length ; i++){
            for(let j = 0; j < bullets.length ; j++){
                if(enemies[i].style.left == bullets[j].style.left && enemies[i].style.top == bullets[j].style.top){
                    console.log('hola');
                    enemies.splice(i, 1);
                    bullets.splice(j, 1);
                    //delete bullets[j];
                    //delete enemies[i];
                }
            }
        }*/

        for(let i = 0; i < enemies.length ; i++){
            for(let j = 0; j < bullets.length ; j++){
                if(parseInt(enemies[i].style.left) <= (parseInt(bullets[j].style.left) + parseInt(bullets[j].style.width) + 1)
                && (parseInt(enemies[i].style.left) + parseInt(enemies[i].style.width) - 1) >= parseInt(bullets[j].style.left)

                && (parseInt(enemies[i].style.top) + parseInt(enemies[i].style.height)) > parseInt(bullets[j].style.top)
                && (parseInt(enemies[i].style.top)) < parseInt(bullets[j].style.top) + parseInt(bullets[j].style.height)){
                    //console.log('chau');

                    const explosion = new Image()
                    explosion.src = "imgs/explosion.gif"
                    explosion.style.width = '50px'
                    explosion.style.height = '50px'
                    explosion.style.position = 'absolute';
                    explosion.style.top = (parseInt(enemies[i].style.top)) + 'px';
                    explosion.style.left = (parseInt(enemies[i].style.left)) +'px';
                    document.querySelector('.wrapper').appendChild(explosion);
                    setTimeout(function(){ explosion.parentNode.removeChild(explosion); }, 1000);

                    killed++;
                    score.innerText = 'Score: ' + killed;
                    enemies[i].style.top = Math.floor(Math.random() * -150) - 50 + 'px';
                    enemies[i].style.left = Math.floor(Math.random() * 770) + 'px';
                    //enemies[i].parentNode.removeChild(enemy);
                    //enemies.splice(i, 1);
                    //enemy.parentNode.removeChild(enemy);

                    //bullets[j].style.top = -200 + 'px';
                    bullets[j].parentNode.removeChild(bullets[j]);
                    bullets.splice(j, 1);
                    enemyDie.play();

                    //bullet.parentNode.removeChild(bullet);

                    //kda++;
                    //score.innerText = 'Score: ' + kda;

                    //delete bullets[j];
                    //delete enemies[i];
                }
            }
        }
    }
}

function playerCollision(){
    if(pause == false){
        for(let i = 0; i < enemies.length ; i++){
            if(parseInt(enemies[i].style.left) <= (parseInt(player.style.left) + parseInt(player.style.width) + 1)
            && (parseInt(enemies[i].style.left) + parseInt(enemies[i].style.width) - 1) >= parseInt(player.style.left)

            && (parseInt(enemies[i].style.top) + parseInt(enemies[i].style.height)) >= parseInt(player.style.top)
            && parseInt(enemies[i].style.top) <= (parseInt(player.style.top) + parseInt(player.style.height))){
                pause = true;
                playerDie.play();
                gameSound.pause();
                //gameover = true;
                //if (gameover == true) {

                    //rect(0, 0, 800, 600, 'black');
                    //text('GAME OVER', '75px Comic Sans MS', 200, 300, 'white');
                    document.getElementById('gameOver').style.visibility = 'visible';
                    btnMenu.style.visibility = 'visible';
                    score.style.top = 250+'px';
                    score.style.left = 290+'px';
                    //btnMenu.style.display = "block";
                    //document.getElementById('btnMenu').style.visibility = 'visible';
                    //console.log('gameover');

                //}
            }
            //pause = true;
            //console.log(parseInt(enemies[i].style.top));
        }
    }
}




