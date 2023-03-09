const RESULTADO = document.querySelector('.result');

function inserir(valor){
    RESULTADO.innerHTML += valor;
}

function limpar(){
    RESULTADO.innerHTML = '';
}

function apagar(){
    if(RESULTADO.textContext){
        let remove = document.querySelector('result');
        RESULTADO.innerHTML = remove.substring(0, remove.lenght - 1);
    }
}

function confimar(){
    if (RESULTADO.textContent != 'Erro'){
        document.getElementById('resultado').innerHTML = eval(RESULTADO.innerHTML);
    }
}    