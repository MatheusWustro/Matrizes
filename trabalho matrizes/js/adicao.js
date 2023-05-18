
var linha, coluna;

linha = parseInt(prompt("insira o número de linhas das matrizes que você quer somar"));
coluna = parseInt(prompt("insira o número de colunas das matrizes que você quer somar"));

var matriz = new Array();
var matriz2 = new Array();
var matrizsoma = new Array();


//primeira matriz
document.write("<table>");

for(var i=0; i<linha; i++){

    matriz[i] = [];
    document.write( "<tr>");

    for(var j=0; j<coluna; j++){
        
        matriz[i][j] = (parseInt(Math.random() * 100));
        document.write("<td>" + matriz[i][j] + "</td>");    
    }
    document.write("</tr>");
}
console.table(matriz);

document.write("</table>");

document.write("<br>");

document.write("<h1>+</h1>");

//Segunda Matriz
document.write("<table>");
for(var i=0; i<linha; i++){

    matriz2[i] = [];
    document.write( "<tr>");

    for(var j=0; j<coluna; j++){
        
        matriz2[i][j] = (parseInt(Math.random() * 100));
        document.write("<td>" + matriz2[i][j] + "</td>");    
    }
    document.write("</tr>");
}
console.table(matriz);
document.write("</table>");

document.write("<br>");

//Matriz da soma
document.write("<h1>=</h1>");

document.write("<table>");
for(var i=0; i<linha; i++){

    matrizsoma[i] = [];
    document.write( "<tr>");

    for(var j=0; j<coluna; j++){
        
        matrizsoma[i][j] = (matriz[i][j] + matriz2[i][j]);
        document.write("<td>" + matrizsoma[i][j] + "</td>");    
    }
    document.write("</tr>");
}
console.table(matriz);
document.write("</table>");
