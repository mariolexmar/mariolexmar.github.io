function encriptar(){

    var texto = document.getElementById("inputtexto").value.toLowerCase();
    var txtcifrado = texto.replace(/e/igm,"enter");
    var txtcifrado = txtcifrado.replace(/o/igm,"ober");
    var txtcifrado = txtcifrado.replace(/i/igm,"imes");
    var txtcifrado = txtcifrado.replace(/a/igm,"ai");
    var txtcifrado = txtcifrado.replace(/u/igm,"ufat");

document.getElementById("imgder").style.display="none";
document.getElementById("texto").style.display="none";
document.getElementById("texto2").innerHTML=txtcifrado;
//document.getElementById("copiar").style.display="show";
//document.getElementById("copiar").style.display="inherit";


}


function desencriptar(){

    var texto = document.getElementById("inputtexto").value.toLowerCase();
    var txtcifrado = texto.replace(/enter/igm, "e");
    var txtcifrado = txtcifrado.replace(/ober/igm, "o");
    var txtcifrado = txtcifrado.replace(/imes/igm,"i");
    var txtcifrado = txtcifrado.replace(/ai/igm,"a");
    var txtcifrado = txtcifrado.replace(/ufat/igm,"u");

document.getElementById("imgder").style.display="none";
document.getElementById("texto").style.display="none";
document.getElementById("texto2").innerHTML=txtcifrado;
document.getElementById("copiar").style.display="show";
document.getElementById("copiar").style.display="inherit";



}

//function copiar(){

    //var contenido = document.querySelector("#texto2")
    //contenido.select();

       
    //var clipboard = new clipboard(".btn");
    
    //clipboard.on("success", function(e){
    //    console.info("accion:",e.action);
    //    console.info("texto:",e.texto);
    //    console.info("trigger:",e.trigger);

    //    e.clearselection();

    //});

    //clipboard.on("error",function(e){

    //    console.error("accion", e.action);
    //    console.error("trigger", e.trigger);

    //});

//}