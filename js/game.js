//Una viva con 2 o 3 vecinas vivas sigue viva, si no, muere.
//Una muerta con exactamente 3 vecinas vivas, nace, al turno siguiente estará viva.

//build grid with arrays
var grid = new Array(ancho);

for (var i = 0; i < ancho; i++){
    grid[i] = new Array(alto);
}