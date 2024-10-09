// Obter elementos do DOM
const gameBoard = document.getElementById('game-board');
const movesCounter = document.getElementById('moves');
const timerElement = document.getElementById('timer');
const restartButton = document.getElementById('restart');
const levelElement = document.getElementById('level');
const scoreElement = document.getElementById('score');
const levelModal = document.getElementById('level-modal');
const modalMessage = document.getElementById('modal-message');
const nextLevelButton = document.getElementById('next-level');
const playAgainButton = document.getElementById('play-again');
const inputModal = document.getElementById('input-modal');
const userInput = document.getElementById('user-input');
const submitInputButton = document.getElementById('submit-input');
const gameCompleteModal = document.getElementById('game-complete-modal');
const finalScoreElement = document.getElementById('final-score');
const restartGameButton = document.getElementById('restart-game');

let wordPairs = [
    { emoji: '💧', word: 'Água' },
    { emoji: '🧊', word: 'Gelo' },
    { emoji: '🔥', word: 'Fogo' },
    { emoji: '🌊', word: 'Onda' },
    { emoji: '🍚', word: 'Arroz' },
    { emoji: '🍞', word: 'Pão' },
    { emoji: '🥐', word: 'Croissant' },
    { emoji: '🥖', word: 'Baguete' },
    { emoji: '🧈', word: 'Manteiga' },
    { emoji: '🥯', word: 'Bagel' },
    { emoji: '🧃', word: 'Suco' },
    { emoji: '🥛', word: 'Leite' },
    { emoji: '🍯', word: 'Mel' },
    { emoji: '🍇', word: 'Uva' },
    { emoji: '🍉', word: 'Melancia' },
    { emoji: '🍌', word: 'Banana' },
    { emoji: '🥭', word: 'Manga' },
    { emoji: '🍍', word: 'Abacaxi' },
    { emoji: '🥥', word: 'Coco' },
    { emoji: '🥑', word: 'Abacate' },
    { emoji: '🍆', word: 'Berinjela' },
    { emoji: '🥕', word: 'Cenoura' },
    { emoji: '🌽', word: 'Milho' },
    { emoji: '🥔', word: 'Batata' },
    { emoji: '🧅', word: 'Cebola' },
    { emoji: '🥬', word: 'Alface' },
    { emoji: '🍋', word: 'Limão' },
    { emoji: '🍊', word: 'Laranja' },
    { emoji: '🍒', word: 'Cereja' },
    { emoji: '🍑', word: 'Pêssego' },
    { emoji: '🍄', word: 'Cogumelo' },
    { emoji: '🧄', word: 'Alho' },
    { emoji: '🍖', word: 'Carne' },
    { emoji: '🍗', word: 'Frango' },
    { emoji: '🥩', word: 'Bife' },
    { emoji: '🥓', word: 'Bacon' },
    { emoji: '🍤', word: 'Camarão' },
    { emoji: '🧆', word: 'Falafel' },
    { emoji: '🍣', word: 'Sushi' },
    { emoji: '🍜', word: 'Lámen' },
    { emoji: '🥗', word: 'Salada' },
    { emoji: '🍿', word: 'Pipoca' },
    { emoji: '🥧', word: 'Torta' },
    { emoji: '🍪', word: 'Biscoito' },
    { emoji: '🍬', word: 'Doce' },
    { emoji: '🍭', word: 'Pirulito' },
    { emoji: '🍹', word: 'Coquetel' },
    { emoji: '🥤', word: 'Refrigerante' },
    { emoji: '🍵', word: 'Chá' },
    { emoji: '🧋', word: 'Boba' },
    { emoji: '👕', word: 'Camiseta' },
    { emoji: '👔', word: 'Gravata' },
    { emoji: '👖', word: 'Calça' },
    { emoji: '🧣', word: 'Cachecol' },
    { emoji: '🧤', word: 'Luva' },
    { emoji: '🧦', word: 'Meia' },
    { emoji: '👗', word: 'Vestido' },
    { emoji: '👘', word: 'Quimono' },
    { emoji: '👙', word: 'Biquíni' },
    { emoji: '🩱', word: 'Maiô' },
    { emoji: '🩳', word: 'Shorts' },
    { emoji: '👠', word: 'Salto' },
    { emoji: '👡', word: 'Sandália' },
    { emoji: '👞', word: 'Sapato' },
    { emoji: '👟', word: 'Tênis' },
    { emoji: '🧳', word: 'Mala' },
    { emoji: '🎒', word: 'Mochila' },
    { emoji: '👛', word: 'Bolsa' },
    { emoji: '👜', word: 'Bolsa' },
    { emoji: '🧲', word: 'Ímã' },
    { emoji: '🔑', word: 'Chave' },
    { emoji: '💳', word: 'Cartão' },
    { emoji: '🖊️', word: 'Caneta' },
    { emoji: '📌', word: 'Alfinete' },
    { emoji: '📏', word: 'Régua' },
    { emoji: '📂', word: 'Pasta' },
    { emoji: '📆', word: 'Calendário' },
    { emoji: '🖍️', word: 'Lápis de cera' },
    { emoji: '📎', word: 'Clipes' },
    { emoji: '📐', word: 'Compasso' },
    { emoji: '✏️', word: 'Lápis' },
    { emoji: '✂️', word: 'Tesoura' },
    { emoji: '🖌️', word: 'Pincel' },
    { emoji: '🏠', word: 'Casa' },
    { emoji: '🏢', word: 'Prédio' },
    { emoji: '🏛️', word: 'Museu' },
    { emoji: '⛪', word: 'Igreja' },
    { emoji: '🏖️', word: 'Praia' },
    { emoji: '🌄', word: 'Montanha' },
    { emoji: '🗻', word: 'Vulcão' },
    { emoji: '🌋', word: 'Erupção' },
    { emoji: '🌵', word: 'Cacto' },
    { emoji: '🌲', word: 'Pinheiro' },
    { emoji: '🌿', word: 'Erva' },
    { emoji: '🌻', word: 'Girassol' },
    { emoji: '🌼', word: 'Flor' },
    { emoji: '🦋', word: 'Borboleta' },
    { emoji: '🐝', word: 'Abelha' },
    { emoji: '🐒', word: 'Macaco' },
    { emoji: '🐷', word: 'Porco' },
    { emoji: '🦁', word: 'Leão' },
    { emoji: '🐎', word: 'Cavalo' },
    { emoji: '🦆', word: 'Pato' },
    { emoji: '🐔', word: 'Galinha' },
    { emoji: '🦉', word: 'Coruja' },
    { emoji: '🦅', word: 'Águia' },
    { emoji: '🐦', word: 'Pássaro' },
    { emoji: '🐍', word: 'Cobra' },
    { emoji: '🦑', word: 'Lula' },
    { emoji: '🐠', word: 'Peixe' },
    { emoji: '🦞', word: 'Lagosta' },
    { emoji: '🐛', word: 'Lagarta' },
    { emoji: '🌌', word: 'Galáxia' },
    { emoji: '🌍', word: 'Mundo' },
    { emoji: '🪐', word: 'Planeta' },
    { emoji: '🌑', word: 'Lua Nova' },
    { emoji: '🌒', word: 'Crescente' },
    { emoji: '🌓', word: 'Quarto Crescente' },
    { emoji: '🌕', word: 'Lua Cheia' },
    { emoji: '🌤️', word: 'Sol e Nuvens' },
    { emoji: '🌧️', word: 'Chuva' },
    { emoji: '⛈️', word: 'Tempestade' },
    { emoji: '☃️', word: 'Boneco de Neve' },
    { emoji: '💨', word: 'Vento' },
    { emoji: '⚡', word: 'Relâmpago' },
    { emoji: '💥', word: 'Explosão' },
    { emoji: '🎈', word: 'Balão' },
    { emoji: '🎀', word: 'Laço' },
    { emoji: '🎂', word: 'Bolo' },
    { emoji: '🎁', word: 'Presente' },
    { emoji: '🎫', word: 'Bilhete' },
    { emoji: '💌', word: 'Carta' },
    { emoji: '💎', word: 'Diamante' },
    { emoji: '🔮', word: 'Cristal' },
    { emoji: '💍', word: 'Anel' },
    { emoji: '🚩', word: 'Bandeira' },
    { emoji: '📫', word: 'Correio' },
    { emoji: '🔑', word: 'Chave' },
    { emoji: '🌸', word: 'Flor de Cerejeira' },
    { emoji: '🌺', word: 'Hibisco' },
    { emoji: '🎥', word: 'Câmera' },
    { emoji: '📷', word: 'Fotografia' },
    { emoji: '📸', word: 'Câmera Fotográfica' },
    { emoji: '🔍', word: 'Lupa' },
    { emoji: '🔬', word: 'Microscópio' },
    { emoji: '🔭', word: 'Telescópio' },
    { emoji: '🚗', word: 'Carro' },
    { emoji: '🚌', word: 'Ônibus' },
    { emoji: '🚚', word: 'Caminhão' },
    { emoji: '🚲', word: 'Bicicleta' },
    { emoji: '🛵', word: 'Moto' },
    { emoji: '✈️', word: 'Avião' },
    { emoji: '⛵', word: 'Barco' },
    { emoji: '🚁', word: 'Helicóptero' },
    { emoji: '🚤', word: 'Lancha' },
    { emoji: '🛰️', word: 'Satélite' },
    { emoji: '🚀', word: 'Foguete' },
    { emoji: '🛸', word: 'OVNI' },
    { emoji: '⛲', word: 'Fonte' },
    { emoji: '🏰', word: 'Castelo' },
    { emoji: '⛺', word: 'Barraca' },
    { emoji: '🎆', word: 'Fogos de Artifício' },
    { emoji: '🏆', word: 'Troféu' },
    { emoji: '⚽', word: 'Futebol' },
    { emoji: '🎾', word: 'Tênis' },
    { emoji: '🏀', word: 'Basquete' },
    { emoji: '🎮', word: 'Videogame' },
    { emoji: '🎲', word: 'Dado' },
    { emoji: '🎹', word: 'Teclado' },
    { emoji: '🥁', word: 'Bateria' },
    { emoji: '🎺', word: 'Trompete' },
    { emoji: '🎷', word: 'Saxofone' },
    { emoji: '🪕', word: 'Banjo' },
    { emoji: '📺', word: 'Televisão' },
    { emoji: '📱', word: 'Celular' },
    { emoji: '💻', word: 'Computador' },
    { emoji: '⌚', word: 'Relógio' },
    { emoji: '🕹️', word: 'Controle' },
    { emoji: '🔋', word: 'Bateria' },
    { emoji: '🔌', word: 'Plugue' },
    { emoji: '📞', word: 'Telefone' },
    { emoji: '☎️', word: 'Telefone' },
    { emoji: '📠', word: 'Fax' },
    { emoji: '📟', word: 'Pager' },
];

// Variável para armazenar a palavra correspondente atual
let currentMatchedWord = '';

// Variáveis de estado do jogo
let currentLevel = 1;
const pairsPerLevel = 10; // Número de pares por nível
const totalLevels = Math.ceil(wordPairs.length / pairsPerLevel);
let score = 0;
let moves = 0;
let matches = 0;
let timer;
let seconds = 0;
let firstCard = null;
let secondCard = null;
let lockBoard = false;

// Inicializar o jogo
function initGame() {
    // Redefinir variáveis de estado do jogo
    currentLevel = 1;
    score = 0;
    moves = 0;
    matches = 0;
    seconds = 0;

    // Atualizar elementos da interface
    levelElement.textContent = currentLevel;
    scoreElement.textContent = score;
    movesCounter.textContent = moves;
    timerElement.textContent = formatTime(seconds);

    // Embaralhar o array wordPairs
    wordPairs = shuffle(wordPairs);

    // Configurar o primeiro nível
    setupLevel();

    // Iniciar o temporizador
    startTimer();
}

// Configurar o nível atual
function setupLevel() {
    gameBoard.innerHTML = '';

    const startIndex = (currentLevel - 1) * pairsPerLevel;
    const endIndex = startIndex + pairsPerLevel;
    const currentPairs = wordPairs.slice(startIndex, endIndex);

    let cardArray = [];
    currentPairs.forEach((pair, index) => {
        cardArray.push({
            id: index,
            type: 'emoji',
            content: pair.emoji,
            pairId: index
        });
        cardArray.push({
            id: index + pairsPerLevel,
            type: 'word',
            content: pair.word,
            pairId: index
        });
    });

    cardArray = shuffle(cardArray);

    cardArray.forEach((card) => {
        const cardElement = document.createElement('div');
        cardElement.classList.add('card');
        cardElement.dataset.id = card.id;
        cardElement.dataset.type = card.type;
        cardElement.dataset.pairId = card.pairId;

        cardElement.innerHTML = `
            <div class="front">${card.content}</div>
            <div class="back"></div>
        `;

        cardElement.addEventListener('click', flipCard);
        gameBoard.appendChild(cardElement);
    });
}

// Função de embaralhar usando o algoritmo de Fisher-Yates
function shuffle(array) {
    let currentIndex = array.length, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;
}

// Função para virar carta
function flipCard() {
    if (lockBoard) return;
    if (this === firstCard) return;
    if (this.classList.contains('matched')) return;

    this.classList.add('flip');

    if (!firstCard) {
        firstCard = this;
        return;
    }

    secondCard = this;
    lockBoard = true;
    moves++;
    movesCounter.textContent = moves;

    checkForMatch();
}

// Verificar se duas cartas selecionadas combinam
function checkForMatch() {
    const isSamePair = firstCard.dataset.pairId === secondCard.dataset.pairId;
    const isDifferentType = firstCard.dataset.type !== secondCard.dataset.type;

    if (isSamePair && isDifferentType) {
        currentMatchedWord = getCorrectWord();
        promptUserInput();
    } else {
        setTimeout(() => {
            firstCard.classList.remove('flip');
            secondCard.classList.remove('flip');
            resetBoard();
        }, 1000);
    }
}

// Redefinir o estado do tabuleiro
function resetBoard() {
    [firstCard, secondCard] = [null, null];
    lockBoard = false;
}

// Solicitar ao usuário para digitar a palavra correta após uma correspondência
function promptUserInput() {
    inputModal.style.display = 'block';
    userInput.value = '';
    userInput.focus();
}

// Lidar com a entrada do usuário para o par correspondente
function handleUserInput() {
    const userAnswer = userInput.value.trim().toLowerCase();
    const correctWord = currentMatchedWord.toLowerCase();

    if (userAnswer === correctWord) {
        score += calculateScore(true, seconds);
        scoreElement.textContent = score;
        inputModal.style.display = 'none';
        markAsMatched();
        checkLevelCompletion();
    } else {
        alert('Resposta incorreta. Tente novamente.');
        inputModal.style.display = 'none';
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
        resetBoard();
    }
}

// Marcar as cartas correspondentes como combinadas
function markAsMatched() {
    firstCard.classList.add('matched');
    secondCard.classList.add('matched');
    resetBoard();
    matches++;
}

// Obter a palavra correta para o par correspondente
function getCorrectWord() {
    if (firstCard.dataset.type === 'word') {
        return firstCard.textContent.trim();
    } else {
        return secondCard.textContent.trim();
    }
}

// Calcular a pontuação com base na entrada do usuário
function calculateScore(isCorrect, timeTaken) {
    if (isCorrect) {
        const timeBonus = Math.max(100 - timeTaken, 20);
        return timeBonus;
    } else {
        return -20;
    }
}

// Verificar se o nível atual está concluído após a entrada do usuário
function checkLevelCompletion() {
    if (matches === pairsPerLevel) {
        clearInterval(timer);
        setTimeout(() => {
            levelModal.style.display = 'block';
            modalMessage.textContent = `Você completou o nível ${currentLevel}.`;
        }, 500);
    }
}

// Funções do temporizador
function startTimer() {
    timer = setInterval(() => {
        seconds++;
        timerElement.textContent = formatTime(seconds);
    }, 1000);
}

function resetTimer() {
    clearInterval(timer);
    seconds = 0;
    timerElement.textContent = '00:00';
}

function formatTime(sec) {
    const minutes = Math.floor(sec / 60);
    const seconds = sec % 60;
    return `${pad(minutes)}:${pad(seconds)}`;
}

function pad(num) {
    return num < 10 ? '0' + num : num;
}

// Prosseguir para o próximo nível
function nextLevel() {
    levelModal.style.display = 'none';
    currentLevel++;
    if (currentLevel > totalLevels) {
        endGame();
    } else {
        matches = 0;
        moves = 0;
        seconds = 0;
        levelElement.textContent = currentLevel;
        movesCounter.textContent = moves;
        timerElement.textContent = formatTime(seconds);
        setupLevel();
        resetTimer();
        startTimer();
    }
}

// Encerrar o jogo após o último nível
function endGame() {
    gameCompleteModal.style.display = 'block';
    finalScoreElement.textContent = score;
}

// Jogar novamente a partir do nível 1
function playAgain() {
    levelModal.style.display = 'none';
    gameCompleteModal.style.display = 'none';
    currentLevel = 1;
    score = 0;
    moves = 0;
    matches = 0;
    seconds = 0;
    levelElement.textContent = currentLevel;
    scoreElement.textContent = score;
    movesCounter.textContent = moves;
    timerElement.textContent = formatTime(seconds);
    wordPairs = shuffle(wordPairs);
    setupLevel();
    resetTimer();
    startTimer();
}

// Redefinir o jogo inteiro
function resetGame() {
    clearInterval(timer);
    currentLevel = 1;
    score = 0;
    moves = 0;
    matches = 0;
    seconds = 0;
    levelElement.textContent = currentLevel;
    scoreElement.textContent = score;
    movesCounter.textContent = moves;
    timerElement.textContent = formatTime(seconds);
    wordPairs = shuffle(wordPairs);
    setupLevel();
    resetTimer();
    startTimer();
    levelModal.style.display = 'none';
    gameCompleteModal.style.display = 'none';
}

// Adicionar ouvintes de eventos
restartButton.addEventListener('click', () => {
    resetGame();
});

nextLevelButton.addEventListener('click', () => {
    nextLevel();
});

playAgainButton.addEventListener('click', () => {
    playAgain();
});

submitInputButton.addEventListener('click', () => {
    handleUserInput();
});

userInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        handleUserInput();
    }
});

window.onload = initGame;
