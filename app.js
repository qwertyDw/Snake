const canvas=document.querySelector('.canvas');
let onoo=document.querySelector('.onoo');
let onooEl=0
const ctx = canvas.getContext("2d");
const gridSize = 20;
const snakeColor= "green"
const foodColor ="red"
let snake = [{x:10, y:10}];
let food = {x:1, y:1};
let dx=0, dy=0;
function drawFood(){
    ctx.fillStyle=foodColor;
    ctx.fillRect(food.x*gridSize, food.y*gridSize, gridSize, gridSize);
}
function drawSnake(snakeEl, color){
    snakeEl.forEach(segment =>{
        ctx.fillStyle=color;
        ctx.fillRect(segment.x*gridSize, segment.y*gridSize, gridSize, gridSize);
    })
}
function update(){
    let head = {x:snake[0].x+dx, y:snake[0].y+dy}
    snake.unshift(head);
    if(head.x==food.x && head.y==food.y){
        food= {x:Math.floor(Math.random()*20), y:Math.floor(Math.random()*20)}
        onooEl++
        onoo.innerText="Onoo: "+onooEl
    }else{
        snake.pop();
    }
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    drawFood();
    drawSnake(snake, snakeColor);
    if(head.x<0){
        alert("You lose.")
        snake=[{x:Math.floor(Math.random()*20),y:Math.floor(Math.random()*19)}]
        dx=0
        dy=0
        onooEl=0
        onoo.innerText="Onoo: "+onooEl
    }if(head.x>20){
        alert("You lose.")
        snake=[{x:Math.floor(Math.random()*20),y:Math.floor(Math.random()*19)}]
        dx=0
        dy=0
        onooEl=0
        onoo.innerText="Onoo: "+onooEl
    }if(head.y<0){
        alert("You lose.")
        snake=[{x:Math.floor(Math.random()*20),y:Math.floor(Math.random()*19)}]
        dx=0
        dy=0
        onooEl=0
        onoo.innerText="Onoo: "+onooEl
    }if(head.y>20){
        alert("You lose.")
        snake=[{x:Math.floor(Math.random()*20),y:Math.floor(Math.random()*19)}]
        dx=0
        dy=0
        onooEl=0
        onoo.innerText="Onoo: "+onooEl
    }
}
setInterval(update,200);
document.addEventListener("keydown",(event)=>{
    console.log(event.key);
    switch(event.key){
        case "ArrowUp":
            if(dy!=1){
                dx=0;
                dy=-1
            }if(dy==1){
                dx=0;
                dy=-1;
            }
            break;
        case "ArrowDown":
            if(dy!=1){
                dx=0;
                dy=1
            }if(dy==1){
                dx=0;
                dy=1;
            }
            break;
        case "ArrowRight":
            if(dx!=1){
                dx=1;
                dy=0
            }if(dx==1){
                dx=1;
                dy=0;
            }
            break;
        case "ArrowLeft":
            if(dx!=1){
                dx=-1;
                dy=0
            }if(dx==1){
                dx=-1;
                dy=0;
            }
            break;
    }
})