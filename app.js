var bullets = [];
var enemies = [];
let player = document.getElementById("player");
var score = document.getElementById('score');

player.style.position = 'absolute';
player.style.top = 550+'px';
player.style.left = 375+'px';

let enemyCounter = 30;
var pause = false;
let kda = 0;


document.addEventListener("keydown", moveCharacter)

function moveCharacter(event){
    switch(event.key){
        case "w": //"ArrowUp"
            if(pause == false){
                if(parseInt(player.style.top) > 0){
                    player.style.top = parseInt(player.style.top) - 10 + 'px';
                }
            }
            break;
        case "s": //"ArrowDown"
            if(pause == false){
                if(parseInt(player.style.top) < 550){
                    player.style.top = parseInt(player.style.top) + 10 + 'px';
                }
            }
            break;
        case "d": //"ArrowRight"
            if(pause == false){
                if(parseInt(player.style.left) < 750){
                    player.style.left = parseInt(player.style.left) + 10 + 'px';
                }
            }
            break;
        case "a": //"ArrowLeft"
            if(pause == false){
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
    }
}

setInterval(update, 100);
function update(){
    moveEnemies();
    moveBullets();
    //colision();
}

setInterval(createEnemies, 1000);

function createEnemies(){
    if(pause == false && enemies.length < enemyCounter){
        const enemy = new Image()
        enemy.src = "imgs/player2.png"
        enemy.style.width = '30px'
        enemy.style.height = '30px'
        enemy.style.position = 'absolute';
        enemy.style.top = Math.floor(Math.random() * -150) - 50 + 'px';
        enemy.style.left = Math.floor(Math.random() * 770) + 'px';
        enemies.push(enemy);

        document.querySelector('.wrapper').appendChild(enemy)
    }
}

function moveEnemies(){
    if(pause == false){
        enemies.forEach(enemy => enemy.style.top = parseInt(enemy.style.top) + 10 + 'px');
        
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
        bullet.src = "imgs/player3.png"
        bullet.style.width = '10px'
        bullet.style.height = '10px'
        bullet.style.position = 'absolute';
        bullet.style.top = parseInt(player.style.top) + 'px';
        bullet.style.left = parseInt(player.style.left) + 20 +'px';
        bullets.push(bullet);

        document.querySelector('.wrapper').appendChild(bullet)
    }
}

function moveBullets() {
    if(pause == false){
        bullets.forEach(bullet => bullet.style.top = parseInt(bullet.style.top) - 20 + 'px');

        bullets.forEach(function(bullet) {
            if (parseInt(bullet.style.top) < -20) {
                bullets.shift();
                bullet.parentNode.removeChild(bullet);
            }
        });
    }
}

setInterval(colision,0);
function colision(){
    /*bullets.forEach(function(bullet) {
        enemies.forEach(function(enemy) {
            if (parseInt(bullet.style.top) + 'px' == (parseInt(enemy.style.top) + parseInt(enemy.style.height)) + 'px' &&
                (parseInt(bullet.style.left) - parseInt(bullet.style.width) + 1) + 'px' > parseInt(enemy.style.left) + 'px' &&
                parseInt(bullet.style.left) + 'px' < (parseInt(enemy.style.left) + parseInt(enemy.style.width) - 1) + 'px') {
                    enemy.parentNode.removeChild(enemy);
                    bullet.parentNode.removeChild(bullet);
                    kda++;
                    score.innerText = 'Score: ' + kda;
            }
        });
    });*/

    for(let i = 0; i < enemies.length ; i++){
        for(let j = 0; j < bullets.length ; j++){
            if(parseInt(enemies[i].style.left) < (parseInt(bullets[j].style.left) + parseInt(bullets[j].style.width) + 1)
            && (parseInt(enemies[i].style.left) + parseInt(enemies[i].style.width) - 1) > parseInt(bullets[j].style.left)
            && (parseInt(enemies[i].style.top) + parseInt(enemies[i].style.height)) == parseInt(bullets[j].style.top)){
                enemies.splice(i, 1);
                enemy.parentNode.removeChild(enemy);
                bullets.splice(j, 1);
                bullet.parentNode.removeChild(bullet);
                kda++;
                score.innerText = 'Score: ' + kda;
                //delete bullets[j];
                //delete enemies[i];
            }
        }
    }
}
