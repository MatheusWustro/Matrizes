var linha, coluna;

linha = parseInt(prompt("insira o número de linhas da matriz"));
coluna = parseInt(prompt("insira o número de colunas da matriz"));

var matriz = new Array();
var matriztrans = new Array();

//Matriz 
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

//Matriz transposta

document.write("<table>");

for(var i=0; i<coluna; i++){

    matriztrans[i] = [];
    document.write( "<tr>");

    for(var j=0; j<linha; j++){
        
        matriztrans[i][j] = matriz[j][i];
        document.write("<td>" + matriztrans[i][j] + "</td>");    
    }
    document.write("</tr>");
}
console.table(matriz);
document.write("</table>");

document.write("<br>");
