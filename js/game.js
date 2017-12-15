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
function position(x, y){

}

//play game
function playGame(){
    //
}

// stop game
function stopGame(){
    //
}

ctx.fillStyle = "#FF0000";
ctx.fillRect(x,y,width,height);