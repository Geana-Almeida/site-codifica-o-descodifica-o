var vogais = ["a", "e", "i", "o", "u"];
var descript = ["ai", "enter", "imes", "ober", "ufat"];


function auto_grow(element){
    element.style.height = "5px";
    element.style.height = (element.scrollHeight) + "px";
}

function verifica_conteudo(el1, el2){
    var texto = document.getElementById('texto');
    texto = String(texto.value);
    const regex = /[^a-zA-Z 0-9]+/g;
    ver_carac_esp = regex.test(texto); //se existe caracteres especiais passa valor true para a variavél 
    if(texto == texto.toLowerCase() && ver_carac_esp == false){ //verifica se o texto digitado está minusculo e se não existe caracteres especiais nele. 
        document.getElementById(el1).style.display = 'block';
        document.getElementById(el2).style.display = 'none';
    }

    else{
        document.getElementById(el1).style.display = 'none';
        document.getElementById(el2).style.display = 'block';
    }
}

//função responsavel em verificar se o texto esta todo em minusculo e se existe caracteres especiais.
function verifica_texto(n1){
    var texto = document.getElementById('texto');
    texto = String(texto.value);
    const regex = /[^a-zA-Z 0-9]+/g;
    ver_carac_esp = regex.test(texto); //se existe caracteres especiais passa valor true para a variavél 
    if(texto == texto.toLowerCase() && ver_carac_esp == false){ //verifica se o texto digitado está minusculo e se não existe caracteres especiais nele. 
        //verifica se é pra criptografar ou descriptografar
        if(n1==1){
            criptografar(texto);

        }
        else if(n1==2){
            descriptografar(texto);

        }
    }

}

//Função responsavel em lidar com a criptografia do texto
function criptografar(texto){
    texto_cripto = "";
    
    for(i=0; i<texto.length; i++){//verifica cada letra que esta no texto para fazer a criptografia.
        if(texto[i]==vogais[0]){
            texto_cripto = texto_cripto  + "ai";
        }

        else if(texto[i]==vogais[1]){
            texto_cripto = texto_cripto  + "enter";
        }

        else if(texto[i]==vogais[2]){
            texto_cripto = texto_cripto  + "imes";
        }

        else if(texto[i]==vogais[3]){
            texto_cripto = texto_cripto  + "ober";
        }

        else if(texto[i]==vogais[4]){
            texto_cripto = texto_cripto  + "ufat";
        }

        
        else{
            texto_cripto = texto_cripto  + texto[i];
        }

        
        document.getElementById('res_text').value = texto_cripto;
    }
    
    
    
    
}


//Função responsavel por descriptografar. OBS: não precisa verificar cada letra para descriptografar pois o para fazer a descriptografia tem que verificar mais de uma letra e usar o modo replaceAll verifica não apenas um caracter mas mais de um.
function descriptografar(texto){
    texto_descriptografado = " ";
    
    var texto_descriptografado = texto.replaceAll(descript[0], vogais[0]).replaceAll(descript[1], vogais[1]).replaceAll(descript[2], vogais[2]).replaceAll(descript[3], vogais[3]).replaceAll(descript[4], vogais[4]);
    document.getElementById('res_text').value = texto_descriptografado;
}


function btn_copiar(){
    let textoCopiado = document.getElementById("res_text");
    textoCopiado.select();
    textoCopiado.setSelectionRange(0, 99999);
    document.execCommand("copy");
}
    
    
  


    

    



