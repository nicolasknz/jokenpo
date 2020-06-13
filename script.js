// Função Retorna 0 para empate, 1 para vitoria do usuario e 2 para vitoria do PC
const battle = (user,pc) => {

    // Caso de empate
    if ( user === pc) {
        return 0;
    }
    // Se usuario escolher pedra
    if ( user === 1) {
        if ( pc === 2) {
            return 2;
        } else {
            return 1;
        }
    }
    // Se usuario escolher papel
    if (user === 2) {
        if ( pc === 1) {
            return 1;
        } else {
            return 2;
        }
    }
    // Se usuario escolher tesoura
    if ( user === 3) {
        if ( pc === 1) {
            return 2;
        } else {
            return 1;
        }
    }
}
// Escolha da maquina
const compChoice = () => {
    let pc = Math.floor(Math.random() * 3 ) + 1;
    return pc;
}
// Escolha usuario
const choice = (e) => {
    if (e.target.classList.contains("pedra")){
        userChoice = 1;
    } else if (e.target.classList.contains("papel")){
        userChoice = 2;  
    } else if (e.target.classList.contains("tesoura")){
        userChoice = 3;
    }
    return userChoice;
}

// Seleciona imagens
const selectImg = (userChoice, computerChoice) => {
  


    // Imagens  usuario
    if (userChoice === 1) {
        let userImg = document.getElementById("userImg");
        userImg.src = "img/pedra.png";
    } else if (userChoice === 2) {
        let userImg = document.getElementById("userImg");
        userImg.src = "img/papel.png";
    } else {
        let userImg = document.getElementById("userImg");
        userImg.src = "img/tesoura.png";
    }
    // Versus img
    let versus = document.getElementById("versus");
    versus.src = "img/versus.png"
    // Imagens maquina
    if (computerChoice === 1) {
        let computerImg = document.getElementById("computerImg");
        computerImg.src = "img/pedra.png";
    } else if ( computerChoice === 2) {
        let computerImg = document.getElementById("computerImg");
        computerImg.src = "img/papel.png";
    } else if ( computerChoice === 3) {
        let computerImg = document.getElementById("computerImg");
        computerImg.src = "img/tesoura.png";
    }
}

// Limpa o conteudo 

const clear = (div) => {
    while (div.firstChild) {
        div.removeChild(div.firstChild)
    }
}

// Usuario clica em algum botao
const container = document.getElementById("buttons_container");
container.addEventListener('click', function (e) {

    // Cria div a qual o texto de vitoria/derrota sera inserido
    let resultDiv = document.getElementById("resultDiv");

    // Limpa as div's com o resultado 
    clear(resultDiv);

    // "Você escolheu"  
    const voceEscolheu = document.getElementById("voceEscolheu")
    clear(voceEscolheu);
    let txt = document.createElement("h2");
    txt.textContent = "Você escolheu";
    voceEscolheu.appendChild(txt);

    // "A maquina escolheu";
    const maquinaEscolheu = document.getElementById("maquinaEscolheu")
    clear(maquinaEscolheu);
    txt = document.createElement("h2");
    txt.textContent = "A maquina escolheu";
    maquinaEscolheu.appendChild(txt);

    // Gera a escolha da maquina
    let computerChoice = compChoice();

    // Retorna a escolha do usuario
    let userChoice = choice(e);
    selectImg(userChoice,computerChoice);
    let result = battle( userChoice, computerChoice );
    let resultado = document.createElement ("div");
    if (result === 0) {
        resultado.textContent = "Empatou";
        resultado.classList.add("empate");
    } else if (result === 1) {
        resultado.textContent = "Parabéns você venceu";
        resultado.classList.add("vitoria")
    } else {
        resultado.textContent = "Você perdeu";
        resultado.classList.add("derrota");
    }
    resultDiv.appendChild(resultado);

       


})

