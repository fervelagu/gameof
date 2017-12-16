//Una viva con 2 o 3 vecinas vivas sigue viva, si no, muere.
//Una muerta con exactamente 3 vecinas vivas, nace, al turno siguiente estará viva.


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
    var newGrid = new Array(ancho);

    for (var i = 0; i < ancho; i++){
        newGrid[i] = new Array (alto);
    }

    for (var x = 0; x < ancho; x++){
        for (var y = 0; y < alto; y++){
            newGrid[x][y] = grid[x][y];
        }
    }
    return newGrid;
}

// stablish random position of the cells
function randomFill(){
    for (var y = 0; y < alto; y++) { //rows
        for (var x = 0; x < ancho; x++) { //columns
            //
        }
    }  
}

//play game
function playGame(){
    //
}

// stop game
function stopGame(){
    //
}

function drawGrid(){
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    
    var ancho = canvas.width;
    var alto = canvas.height;
    
    ctx.clearRect(0, 0, 400, 400);

    for (var y = 1; y < alto; y++) { 
        for (var x = 1; x < ancho; x++) {
            if (grid[x][y] === 1) {
                ctx.fillStyle = "#FF0000";
                ctx.fillRect(x,y,3,3);
            }
        }
    }
}