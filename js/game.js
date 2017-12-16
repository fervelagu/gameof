//Una viva con 2 o 3 vecinas vivas sigue viva, si no, muere.
//Una muerta con exactamente 3 vecinas vivas, nace, al turno siguiente estará viva.
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var ancho = canvas.width;
var alto = canvas.height;

//build grid with arrays
var grid = new Array(ancho);

for (var i = 0; i < ancho; i++){
    grid[i] = new Array(alto);
}

for (var x = 0; x < ancho; x++){
    for (var y = 0; y < alto; y++){
        grid[x][y] = false;
    }
}

//copy grid for update
function copyGrid() {
    var newGrid = new Array(40);

    for (var i = 0; i < 40; i++){
        newGrid[i] = new Array (alto);
    }

    for (var x = 0; x < 40; x++){
        for (var y = 0; y < 40; y++){
            newGrid[x][y] = grid[x][y];
        }
    }
    return newGrid;
}

// stablish random position of the cells
function randomFill(){
    for (var y = 0; y < 40; y++) {
        for (var x = 0; x < 40; x++) { 
            var ranNum = Math.random(); 
            var improvedNum = (ranNum * 2); 
            var randomBinary = Math.floor(improvedNum);
            if (randomBinary === 1) {
                grid[x][y] = 1;
            } else {
                grid[x][y] = 0;
            } 
        }
    }  
}

//Update grid
function updateGrid() {
    mirrorGrid = copyGrid();
       for (var x = 1; x < 40 - 1; x++) {
           for (var y = 1; y < 40 - 1; y++) {
               var totalCells = 0;

               totalCells += grid[x - 1][y - 1]; //top left
               totalCells += grid[x - 1][y]; //top center
               totalCells += grid[x - 1][y + 1]; //top right
               totalCells += grid[x][y - 1]; //middle left
               totalCells += grid[x][y + 1]; //middle right
               totalCells += grid[x + 1][y - 1]; //bottom left
               totalCells += grid[x + 1][y]; //bottom center
               totalCells += grid[x + 1][y + 1]; //bottom right

               //apply the rules to each cell
               if (grid[x][y] === 0) {
                   switch (totalCells) {
                       case 3:
                       mirrorGrid[x][y] = 1; //if cell is dead and has 3 neighbours, live
                       break;
                       default:
                       mirrorGrid[x][y] = 0; //leave it dead
                    }
                } else if (grid[x][y] === 1) { //apply rules to living cell
                    switch (totalCells) {
                        case 0:
                        case 1:
                        mirrorGrid[x][y] = 0; //die of loneliness
                        break;
                        case 2:
                        case 3:
                        mirrorGrid[x][y] = 1; //keep living
                        break;
                        case 4:
                        case 5:
                        case 6:
                        case 7:
                        case 8:
                        mirrorGrid[x][y] = 0; //die of overcrowding
                        break;
                        default:
                        mirrorGrid[x][y] = 0; //
                    }
                }
            }
        }

    //copy mirrorGrid to grid
        for (var x = 0; x < 40; x++) { //rows
            for     (var y = 0; y < 40; y++) { //columns
                grid[x][y] = mirrorGrid[x][y];
            }
        }
    }

    // Game loop
    function tick() {
        drawGrid();   
        updateGrid();   
        requestAnimationFrame(tick);    
    }
    var myInterval;
    
    //play game
    function playGame(){
        myInterval = setInterval(function(){
            updateGrid();
            drawGrid();
            },50)
    }

    // stop game
    function stopGame(){
        clearInterval(myInterval);
    }

    function drawGrid(){
        ctx.clearRect(0, 0, 400, 400);
        for (var y = 1; y < alto; y++) { 
            for (var x = 1; x < ancho; x++) {
                if (grid[x][y] === 1) {
                    ctx.fillStyle = "#FF0000";
                    ctx.fillRect(x*10,y*10,10,10);
                }
            }
        }
    }

    randomFill();
    drawGrid();