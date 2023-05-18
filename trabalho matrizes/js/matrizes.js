

var linha, coluna, linha2, coluna2;

linha = parseInt(prompt("insira o número de linhas da primeira matriz"));
coluna = parseInt(prompt("insira o número de colunas da primeira matriz"));

linha2 = parseInt(prompt("insira o número de linhas da segunda matriz"));
coluna2 = parseInt(prompt("insira o número de colunas da segunda matriz"));

var matriz = new Array();
var matriz2 = new Array();


//Matriz 1
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
document.write("<p> a primeira matriz é uma matriz de " + linha + " linhas e " + coluna + " colunas </p>");

document.write("<br>");

//Matriz 2
document.write("<table>");
for(var i=0; i<linha2; i++){

    matriz2[i] = [];
    document.write( "<tr>");

    for(var j=0; j<coluna2; j++){
        
        matriz2[i][j] = (parseInt(Math.random() * 100));
        document.write("<td>" + matriz2[i][j] + "</td>");    
    }
    document.write("</tr>");
}
console.table(matriz);
document.write("</table>");
document.write("<p> a segunda matriz é uma matriz de " + linha2 + " linhas e " + coluna2 + " colunas </p>");
