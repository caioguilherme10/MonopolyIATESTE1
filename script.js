// Constantes do jogo
const STARTING_MONEY = 2000000;
const GO_MONEY = 200;
const JAIL_POSITION = 10;
const GO_TO_JAIL_POSITION = 30;

// Dados das propriedades
const properties = [
    { id: 'property-1', name: 'Abu Dhabi EMIRADOS ÁRABES', price: 300000, rent: [6, 30, 90, 270, 400, 550], houseCost: 50, group: 'brown', position: 1 },
    { id: 'property-2', name: 'Riade ARÁBIA SAUDITA', price: 300000, rent: [8, 40, 100, 300, 450, 600], houseCost: 50, group: 'brown', position: 3 },
    { id: 'property-3', name: 'Doha CATAR', price: 320000, rent: [10, 50, 150, 450, 625, 750], houseCost: 100, group: 'brown', position: 5 },
    { id: 'property-4', name: 'Cidade do Cabo AFRICA DO SUL', price: 60000, rent: [12, 60, 180, 500, 700, 900], houseCost: 100, group: 'light-blue', position: 6 },
    { id: 'property-5', name: 'Luanda ANGOLA', price: 75000, rent: [14, 70, 200, 550, 750, 950], houseCost: 100, group: 'light-blue', position: 8 },
    { id: 'property-6', name: 'Cairo EGITO', price: 100000, rent: [16, 80, 220, 600, 800, 1000], houseCost: 150, group: 'light-blue', position: 9 },
    { id: 'property-7', name: 'Cidade da Guatemala GUATEMALA', price: 100000, rent: [18, 90, 250, 700, 875, 1050], houseCost: 150, group: 'purple-dark', position: 11 },
    { id: 'property-8', name: 'Wellington NOVA ZELÂNDIA', price: 350000, rent: [18, 90, 250, 700, 875, 1050], houseCost: 150, group: 'purple', position: 12 },
    { id: 'property-9', name: 'Camberra AUSTRÁLIA', price: 400000, rent: [20, 100, 300, 750, 925, 1100], houseCost: 150, group: 'purple', position: 13 },
    { id: 'property-10', name: 'Buenos Aires ARGENTINA', price: 180000, rent: [22, 110, 330, 800, 975, 1150], houseCost: 150, group: 'orange', position: 15 },
    { id: 'property-11', name: 'Montevidéu URUGUAY', price: 180000, rent: [22, 110, 330, 800, 975, 1150], houseCost: 150, group: 'orange', position: 17 },
    { id: 'property-12', name: 'Santiago CHILE', price: 200000, rent: [24, 120, 360, 850, 1025, 1200], houseCost: 200, group: 'orange', position: 18 },
    { id: 'property-13', name: 'São José COSTA RICA', price: 120000, rent: [26, 130, 390, 900, 1100, 1275], houseCost: 200, group: 'purple-dark', position: 21 },
    { id: 'property-14', name: 'Paris FRANÇA', price: 220000, rent: [26, 130, 390, 900, 1100, 1275], houseCost: 200, group: 'red', position: 25 },
    { id: 'property-15', name: 'Berlin ALEMANHA', price: 220000, rent: [28, 150, 450, 1000, 1200, 1400], houseCost: 200, group: 'red', position: 26 },
    { id: 'property-16', name: 'Londres INGLATERRA', price: 240000, rent: [35, 175, 500, 1100, 1300, 1500], houseCost: 200, group: 'red', position: 28 },
    { id: 'property-17', name: 'Seul COREIA DO SUL', price: 140000, rent: [50, 200, 600, 1400, 1700, 2000], houseCost: 200, group: 'green', position: 31 },
    { id: 'property-18', name: 'Pequim CHINA', price: 160000, rent: [55, 225, 650, 1500, 1800, 2100], houseCost: 300, group: 'green', position: 33 },
    { id: 'property-19', name: 'Tóquio JAPÂO', price: 140000, rent: [60, 240, 720, 1700, 2000, 2300], houseCost: 300, group: 'green', position: 34 },
    { id: 'property-20', name: 'Cidade do México MÉXICO', price: 280000, rent: [60, 240, 720, 1700, 2000, 2300], houseCost: 300, group: 'dark-blue', position: 35 },
    { id: 'property-21', name: 'Ottawa CANADA', price: 260000, rent: [60, 240, 720, 1700, 2000, 2300], houseCost: 300, group: 'dark-blue', position: 37 },
    { id: 'property-22', name: 'Washington EUA', price: 260000, rent: [60, 240, 720, 1700, 2000, 2300], houseCost: 300, group: 'dark-blue', position: 39 }
];

// Dados das ferrovias
const railroads = [
    { id: 'railroad-1', name: 'OMC', price: 200000, position: 2 },
    { id: 'railroad-2', name: 'ONU', price: 200000, position: 14 },
    { id: 'railroad-3', name: 'OIT', price: 200000, position: 22 },
    { id: 'railroad-4', name: 'OTAN', price: 200000, position: 36 }
];

// Dados das companhias de serviços
const utilities = [
    { id: 'utilitie-1', name: 'IPCC', price: 150000, position: 7 },
    { id: 'utilitie-2', name: 'OMS', price: 150000, position: 29 }
];

// Cartas de Sorte e Cofre
const chanceCards = [
    { text: 'Avance para o Início. Receba $200.', action: 'move', destination: 0 },
    { text: 'Vá para a Av. Paulista. Se passar pelo Início, receba $200.', action: 'move', destination: 26 },
    { text: 'Vá para a Prisão. Não passe pelo Início. Não receba $200.', action: 'jail' },
    { text: 'Seu edifício e empréstimo vencem. Receba $150.', action: 'collect', amount: 150 },
    { text: 'Você foi eleito presidente do conselho. Pague $50 a cada jogador.', action: 'payEach', amount: 50 },
    { text: 'Faça reparos em todas as suas propriedades. Pague $25 por casa e $100 por hotel.', action: 'repairs', house: 25, hotel: 100 },
    { text: 'Você ganhou o segundo prêmio em um concurso de beleza. Receba $10.', action: 'collect', amount: 10 },
    { text: 'Receba $50 de dividendos.', action: 'collect', amount: 50 }
];

const communityChestCards = [
    { text: 'Avance para o Início. Receba $200.', action: 'move', destination: 0 },
    { text: 'Erro do banco a seu favor. Receba $200.', action: 'collect', amount: 200 },
    { text: 'Taxa médica. Pague $50.', action: 'pay', amount: 50 },
    { text: 'Venda de ações. Receba $50.', action: 'collect', amount: 50 },
    { text: 'Vá para a Prisão. Não passe pelo Início. Não receba $200.', action: 'jail' },
    { text: 'Restituição de imposto de renda. Receba $20.', action: 'collect', amount: 20 },
    { text: 'É seu aniversário. Receba $10 de cada jogador.', action: 'collectEach', amount: 10 },
    { text: 'Seguro de vida vence. Receba $100.', action: 'collect', amount: 100 }
];

// Estado do jogo
let gameState = {
    players: [],
    currentPlayerIndex: 0,
    diceRolled: false,
    gameStarted: false,
    chanceCards: [...chanceCards],
    communityChestCards: [...communityChestCards],
    doubleCount: 0
};

// Elementos do DOM
const playersListElement = document.getElementById('players-list');
const addPlayerButton = document.getElementById('add-player');
const startGameButton = document.getElementById('start-game');
const rollDiceButton = document.getElementById('roll-dice');
const endTurnButton = document.getElementById('end-turn');
const buyPropertyButton = document.getElementById('buy-property');
const buildHouseButton = document.getElementById('build-house');
const mortgageButton = document.getElementById('mortgage');
const tradeButton = document.getElementById('trade');
const currentPropertyElement = document.getElementById('current-property');
const dice1Element = document.getElementById('dice-1');
const dice2Element = document.getElementById('dice-2');
const tradeModal = document.getElementById('trade-modal');
const closeModalButton = document.querySelector('.close');
const proposeTradeButton = document.getElementById('propose-trade');

// Cores dos jogadores
const playerColors = ['red', 'blue', 'green', 'yellow', 'purple', 'orange'];

// Inicialização
function init() {
    // Embaralhar as cartas
    shuffleArray(gameState.chanceCards);
    shuffleArray(gameState.communityChestCards);
    
    // Adicionar event listeners
    addPlayerButton.addEventListener('click', addPlayer);
    startGameButton.addEventListener('click', startGame);
    rollDiceButton.addEventListener('click', rollDice);
    endTurnButton.addEventListener('click', endTurn);
    buyPropertyButton.addEventListener('click', buyProperty);
    buildHouseButton.addEventListener('click', buildHouse);
    mortgageButton.addEventListener('click', toggleMortgage);
    tradeButton.addEventListener('click', openTradeModal);
    closeModalButton.addEventListener('click', closeTradeModal);
    proposeTradeButton.addEventListener('click', proposeTrade);
    
    // Desabilitar botões inicialmente
    rollDiceButton.disabled = true;
    endTurnButton.disabled = true;
}

// Função para embaralhar array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Adicionar jogador
function addPlayer() {
    if (gameState.gameStarted) return;
    if (gameState.players.length >= 6) {
        alert('Máximo de 6 jogadores atingido!');
        return;
    }
    
    const playerName = prompt('Nome do jogador:');
    if (!playerName) return;
    
    const playerColor = playerColors[gameState.players.length];
    const player = {
        name: playerName,
        money: STARTING_MONEY,
        position: 0,
        properties: [],
        inJail: false,
        jailTurns: 0,
        color: playerColor,
        getOutOfJailCards: 0
    };
    
    gameState.players.push(player);
    updatePlayersList();
    
    if (gameState.players.length >= 2) {
        startGameButton.disabled = false;
    }
}

// Atualizar lista de jogadores
function updatePlayersList() {
    playersListElement.innerHTML = '';
    
    gameState.players.forEach((player, index) => {
        const playerElement = document.createElement('div');
        playerElement.className = 'player';
        playerElement.style.borderLeft = `5px solid ${player.color}`;
        
        const isCurrentPlayer = index === gameState.currentPlayerIndex && gameState.gameStarted;
        if (isCurrentPlayer) {
            playerElement.classList.add('current-player');
            playerElement.style.backgroundColor = '#f0f0f0';
        }
        
        playerElement.innerHTML = `
            <h3>${player.name}</h3>
            <p>Dinheiro: $${player.money}</p>
            <p>Posição: ${getPositionName(player.position)}</p>
            <p>Propriedades: ${player.properties.length}</p>
            ${player.inJail ? '<p class="jail-status">Na prisão</p>' : ''}
        `;
        
        playersListElement.appendChild(playerElement);
    });
}

// Iniciar jogo
function startGame() {
    if (gameState.players.length < 2) {
        alert('São necessários pelo menos 2 jogadores!');
        return;
    }
    
    gameState.gameStarted = true;
    gameState.currentPlayerIndex = 0;
    
    // Posicionar peças dos jogadores no tabuleiro
    gameState.players.forEach(player => {
        createPlayerPiece(player);
    });
    
    // Atualizar UI
    addPlayerButton.disabled = true;
    startGameButton.disabled = true;
    rollDiceButton.disabled = false;
    tradeButton.disabled = false;
    
    updatePlayersList();
    updateCurrentPlayerInfo();
}

// Criar peça do jogador no tabuleiro
function createPlayerPiece(player) {
    const piece = document.createElement('div');
    piece.className = 'player-piece';
    piece.id = `player-${gameState.players.indexOf(player)}-piece`;
    piece.style.backgroundColor = player.color;
    
    document.querySelector('.board').appendChild(piece);
    updatePlayerPosition(player);
}

// Atualizar posição do jogador no tabuleiro
function updatePlayerPosition(player) {
    const playerIndex = gameState.players.indexOf(player);
    const piece = document.getElementById(`player-${playerIndex}-piece`);
    
    // Calcular posição no tabuleiro
    let position;
    const boardSize = 40; // Total de casas no tabuleiro
    
    // Determinar em qual lado do tabuleiro o jogador está
    if (player.position === 0) { // Início
        position = { left: '650px', top: '650px' };
    } else if (player.position > 0 && player.position < 10) { // Lado inferior
        const offset = (player.position - 0) * 60;
        position = { left: `${650 - offset}px`, top: '650px' };
    } else if (player.position === 10) { // Prisão
        position = { left: '50px', top: '650px' };
    } else if (player.position > 10 && player.position < 20) { // Lado esquerdo
        const offset = (player.position - 10) * 60;
        position = { left: '50px', top: `${650 - offset}px` };
    } else if (player.position === 20) { // Estacionamento
        position = { left: '50px', top: '50px' };
    } else if (player.position > 20 && player.position < 30) { // Lado superior
        const offset = (player.position - 20) * 60;
        position = { left: `${50 + offset}px`, top: '50px' };
    } else if (player.position === 30) { // Vá para a prisão
        position = { left: '650px', top: '50px' };
    } else { // Lado direito
        const offset = (player.position - 30) * 60;
        position = { left: '650px', top: `${50 + offset}px` };
    }
    
    // Adicionar pequeno deslocamento para cada jogador para evitar sobreposição
    position.left = `${parseInt(position.left) + (playerIndex * 5)}px`;
    position.top = `${parseInt(position.top) + (playerIndex * 5)}px`;
    
    // Aplicar posição
    piece.style.left = position.left;
    piece.style.top = position.top;
}

// Obter nome da posição no tabuleiro
function getPositionName(position) {
    // Verificar se é uma propriedade
    const property = properties.find(p => p.position === position);
    if (property) return property.name;
    
    // Verificar se é uma ferrovia
    const railroad = railroads.find(r => r.position === position);
    if (railroad) return railroad.name;
    
    // Verificar se é uma companhia de serviços
    const utility = utilities.find(u => u.position === position);
    if (utility) return utility.name;
    
    // Outros espaços do tabuleiro
    switch (position) {
        case 0: return 'Início';
        case 2: return 'Cofre';
        case 4: return 'Imposto de Renda';
        case 7: return 'Sorte';
        case 10: return 'Prisão';
        case 17: return 'Cofre';
        case 20: return 'Estacionamento';
        case 22: return 'Sorte';
        case 30: return 'Vá para a Prisão';
        case 33: return 'Cofre';
        case 36: return 'Sorte';
        case 38: return 'Taxa de Luxo';
        default: return `Posição ${position}`;
    }
}

// Atualizar informações do jogador atual
function updateCurrentPlayerInfo() {
    const currentPlayer = gameState.players[gameState.currentPlayerIndex];
    
    // Atualizar lista de jogadores para destacar o jogador atual
    updatePlayersList();
    
    // Verificar se o jogador está na prisão
    if (currentPlayer.inJail) {
        alert(`${currentPlayer.name}, você está na prisão! Você pode pagar $50, usar um cartão ou tentar tirar uma dupla.`);
    }
    
    // Verificar se o jogador está em uma propriedade
    const currentPosition = currentPlayer.position;
    let propertyInfo = '';
    
    // Verificar se é uma propriedade
    const property = [...properties, ...railroads, ...utilities].find(p => p.position === currentPosition);
    
    if (property) {
        const owner = findPropertyOwner(property);
        propertyInfo = `
            <h3>${property.name}</h3>
            <p>Preço: $${property.price}</p>
            ${owner ? `<p>Proprietário: ${owner.name}</p>` : '<p>Disponível para compra</p>'}
        `;
        
        // Habilitar botão de compra se a propriedade estiver disponível
        buyPropertyButton.disabled = owner !== null || currentPlayer.money < property.price || gameState.diceRolled === false;
        
        // Habilitar botão de construção se o jogador possuir todas as propriedades do grupo
        if (owner === currentPlayer && 'group' in property) {
            const group = property.group;
            const groupProperties = properties.filter(p => p.group === group);
            const ownsAllInGroup = groupProperties.every(p => currentPlayer.properties.includes(p.id));
            buildHouseButton.disabled = !ownsAllInGroup || currentPlayer.money < property.houseCost || gameState.diceRolled === false;
        } else {
            buildHouseButton.disabled = true;
        }
        
        // Habilitar botão de hipoteca se o jogador for o proprietário
        mortgageButton.disabled = owner !== currentPlayer || gameState.diceRolled === false;
    } else {
        // Não é uma propriedade
        propertyInfo = `
            <h3>${getPositionName(currentPosition)}</h3>
            <p>Espaço especial</p>
        `;
        
        buyPropertyButton.disabled = true;
        buildHouseButton.disabled = true;
        mortgageButton.disabled = true;
    }
    
    currentPropertyElement.innerHTML = propertyInfo;
    
    // Habilitar/desabilitar botões de acordo com o estado do jogo
    rollDiceButton.disabled = gameState.diceRolled;
    endTurnButton.disabled = !gameState.diceRolled;
}

// Encontrar proprietário de uma propriedade
function findPropertyOwner(property) {
    for (const player of gameState.players) {
        if (player.properties.includes(property.id)) {
            return player;
        }
    }
    return null;
}

// Jogar dados
function rollDice() {
    if (!gameState.gameStarted || gameState.diceRolled) return;
    
    const currentPlayer = gameState.players[gameState.currentPlayerIndex];
    
    // Verificar se o jogador está na prisão
    if (currentPlayer.inJail) {
        handleJailTurn(currentPlayer);
        return;
    }
    
    // Rolar os dados
    const dice1 = Math.floor(Math.random() * 6) + 1;
    const dice2 = Math.floor(Math.random() * 6) + 1;
    const isDouble = dice1 === dice2;
    
    // Atualizar UI dos dados
    dice1Element.textContent = dice1;
    dice2Element.textContent = dice2;
    
    // Verificar se é uma dupla
    if (isDouble) {
        gameState.doubleCount++;
        
        // Se tirar 3 duplas seguidas, vai para a prisão
        if (gameState.doubleCount === 3) {
            alert(`${currentPlayer.name} tirou 3 duplas seguidas! Vai para a prisão!`);
            sendToJail(currentPlayer);
            gameState.diceRolled = true;
            gameState.doubleCount = 0;
            updateCurrentPlayerInfo();
            return;
        }
        
        alert(`${currentPlayer.name} tirou uma dupla! Jogue novamente após este turno.`);
    } else {
        gameState.doubleCount = 0;
    }
    
    // Mover o jogador
    movePlayer(currentPlayer, dice1 + dice2);
    
    // Marcar que os dados foram rolados
    gameState.diceRolled = true;
    
    // Atualizar UI
    updateCurrentPlayerInfo();
}

// Lidar com turno na prisão
function handleJailTurn(player) {
    const payFine = confirm(`${player.name}, você está na prisão. Deseja pagar $50 para sair?`);
    
    if (payFine) {
        if (player.money >= 50) {
            player.money -= 50;
            player.inJail = false;
            player.jailTurns = 0;
            alert(`${player.name} pagou $50 e saiu da prisão.`);
            
            // Agora o jogador pode rolar os dados normalmente
            rollDice();
        } else {
            alert(`${player.name} não tem dinheiro suficiente para pagar a fiança.`);
            tryJailDiceRoll(player);
        }
    } else if (player.getOutOfJailCards > 0) {
        const useCard = confirm(`${player.name}, você tem um cartão para sair da prisão. Deseja usá-lo?`);
        
        if (useCard) {
            player.getOutOfJailCards--;
            player.inJail = false;
            player.jailTurns = 0;
            alert(`${player.name} usou um cartão e saiu da prisão.`);
            
            // Agora o jogador pode rolar os dados normalmente
            rollDice();
        } else {
            tryJailDiceRoll(player);
        }
    } else {
        tryJailDiceRoll(player);
    }
}

// Tentar sair da prisão com os dados
function tryJailDiceRoll(player) {
    const dice1 = Math.floor(Math.random() * 6) + 1;
    const dice2 = Math.floor(Math.random() * 6) + 1;
    const isDouble = dice1 === dice2;
    
    // Atualizar UI dos dados
    dice1Element.textContent = dice1;
    dice2Element.textContent = dice2;
    
    player.jailTurns++;
    
    if (isDouble) {
        player.inJail = false;
        player.jailTurns = 0;
        alert(`${player.name} tirou uma dupla e saiu da prisão!`);
        
        // Mover o jogador
        movePlayer(player, dice1 + dice2);
    } else if (player.jailTurns >= 3) {
        // Após 3 turnos, o jogador deve pagar e sair
        player.money -= 50;
        player.inJail = false;
        player.jailTurns = 0;
        alert(`${player.name} pagou $50 após 3 turnos e saiu da prisão.`);
        
        // Mover o jogador
        movePlayer(player, dice1 + dice2);
    } else {
        alert(`${player.name} não tirou uma dupla. Permanece na prisão.`);
    }
    
    // Marcar que os dados foram rolados
    gameState.diceRolled = true;
    
    // Atualizar UI
    updateCurrentPlayerInfo();
}

// Enviar jogador para a prisão
function sendToJail(player) {
    player.position = JAIL_POSITION;
    player.inJail = true;
    player.jailTurns = 0;
    updatePlayerPosition(player);
}

// Mover jogador no tabuleiro
function movePlayer(player, spaces) {
    const oldPosition = player.position;
    player.position = (player.position + spaces) % 40;
    
    // Verificar se passou pelo Início
    if (player.position < oldPosition && player.position !== 0) {
        player.money += GO_MONEY;
        alert(`${player.name} passou pelo Início e recebeu $${GO_MONEY}!`);
    }
    
    // Atualizar posição visual
    updatePlayerPosition(player);
    
    // Verificar ação da casa
    checkSquareAction(player);
}

// Verificar ação da casa onde o jogador caiu
function checkSquareAction(player) {
    const position = player.position;
    
    // Verificar se caiu no "Vá para a Prisão"
    if (position === GO_TO_JAIL_POSITION) {
        alert(`${player.name} caiu no "Vá para a Prisão"!`);
        sendToJail(player);
        return;
    }
    
    // Verificar se caiu em uma casa de Sorte ou Cofre
    if ([2, 17, 33].includes(position)) { // Cofre
        drawCommunityChestCard(player);
    } else if ([7, 22, 36].includes(position)) { // Sorte
        drawChanceCard(player);
    }
    
    // Verificar se caiu em um imposto
    if (position === 4) { // Imposto de Renda
        const tax = 200;
        player.money -= tax;
        alert(`${player.name} pagou $${tax} de Imposto de Renda.`);
    } else if (position === 38) { // Taxa de Luxo
        const tax = 100;
        player.money -= tax;
        alert(`${player.name} pagou $${tax} de Taxa de Luxo.`);
    }
    
    // Verificar se caiu em uma propriedade
    const property = [...properties, ...railroads, ...utilities].find(p => p.position === position);
    
    if (property) {
        const owner = findPropertyOwner(property);
        
        // Se a propriedade tem dono e não é o jogador atual
        if (owner && owner !== player) {
            payRent(player, owner, property);
        }
    }
}

// Pagar aluguel
function payRent(player, owner, property) {
    let rent = 0;
    
    // Calcular aluguel baseado no tipo de propriedade
    if (properties.find(p => p.id === property.id)) {
        // Propriedade normal
        const prop = properties.find(p => p.id === property.id);
        // Verificar se o proprietário possui todas as propriedades do grupo
        const group = prop.group;
        const groupProperties = properties.filter(p => p.group === group);
        const ownsAllInGroup = groupProperties.every(p => owner.properties.includes(p.id));
        
        // Aluguel base (sem casas)
        rent = prop.rent[0];
        
        // Dobrar aluguel se possuir todas do grupo e não tiver casas
        if (ownsAllInGroup) {
            rent *= 2;
        }
        
        // Adicionar lógica para casas e hotéis aqui quando implementado
    } else if (railroads.find(r => r.id === property.id)) {
        // Ferrovia - aluguel baseado no número de ferrovias que o proprietário possui
        const railroadCount = railroads.filter(r => owner.properties.includes(r.id)).length;
        rent = 25 * Math.pow(2, railroadCount - 1); // 25, 50, 100, 200
    } else if (utilities.find(u => u.id === property.id)) {
        // Companhia de serviços - aluguel baseado nos dados e no número de companhias
        const utilityCount = utilities.filter(u => owner.properties.includes(u.id)).length;
        const diceValue = parseInt(dice1Element.textContent) + parseInt(dice2Element.textContent);
        rent = utilityCount === 1 ? diceValue * 4 : diceValue * 10;
    }
    
    // Verificar se o jogador tem dinheiro suficiente
    if (player.money < rent) {
        alert(`${player.name} não tem dinheiro suficiente para pagar o aluguel de $${rent}!`);
        // Implementar lógica de falência aqui
        // Por enquanto, apenas paga o que tem
        owner.money += player.money;
        player.money = 0;
    } else {
        player.money -= rent;
        owner.money += rent;
        alert(`${player.name} pagou $${rent} de aluguel para ${owner.name}.`);
    }
    
    // Atualizar UI
    updatePlayersList();
}

// Comprar propriedade
function buyProperty() {
    const currentPlayer = gameState.players[gameState.currentPlayerIndex];
    const property = [...properties, ...railroads, ...utilities].find(p => p.position === currentPlayer.position);
    
    if (!property) return;
    
    const owner = findPropertyOwner(property);
    if (owner) {
        alert('Esta propriedade já tem dono!');
        return;
    }
    
    if (currentPlayer.money < property.price) {
        alert('Você não tem dinheiro suficiente para comprar esta propriedade!');
        return;
    }
    
    // Comprar a propriedade
    currentPlayer.money -= property.price;
    currentPlayer.properties.push(property.id);
    
    alert(`${currentPlayer.name} comprou ${property.name} por $${property.price}!`);
    
    // Atualizar UI
    updatePlayersList();
    updateCurrentPlayerInfo();
}

// Construir casa
function buildHouse() {
    const currentPlayer = gameState.players[gameState.currentPlayerIndex];
    const property = properties.find(p => p.position === currentPlayer.position);
    
    if (!property) return;
    
    // Verificar se o jogador é o dono
    if (!currentPlayer.properties.includes(property.id)) {
        alert('Você não é o dono desta propriedade!');
        return;
    }
    
    // Verificar se o jogador possui todas as propriedades do grupo
    const group = property.group;
    const groupProperties = properties.filter(p => p.group === group);
    const ownsAllInGroup = groupProperties.every(p => currentPlayer.properties.includes(p.id));
    
    if (!ownsAllInGroup) {
        alert('Você precisa possuir todas as propriedades do grupo para construir casas!');
        return;
    }
    
    // Verificar se o jogador tem dinheiro suficiente
    if (currentPlayer.money < property.houseCost) {
        alert('Você não tem dinheiro suficiente para construir uma casa!');
        return;
    }
    
    // Construir a casa (implementação simplificada)
    currentPlayer.money -= property.houseCost;
    alert(`${currentPlayer.name} construiu uma casa em ${property.name} por $${property.houseCost}!`);
    
    // Atualizar UI
    updatePlayersList();
    updateCurrentPlayerInfo();
}

// Hipotecar/Desipotecar propriedade
function toggleMortgage() {
    const currentPlayer = gameState.players[gameState.currentPlayerIndex];
    const property = [...properties, ...railroads, ...utilities].find(p => p.position === currentPlayer.position);
    
    if (!property) return;
    
    // Verificar se o jogador é o dono
    if (!currentPlayer.properties.includes(property.id)) {
        alert('Você não é o dono desta propriedade!');
        return;
    }
    
    // Implementação simplificada de hipoteca
    const mortgageValue = Math.floor(property.price / 2);
    
    // Hipotecar
    currentPlayer.money += mortgageValue;
    alert(`${currentPlayer.name} hipotecou ${property.name} e recebeu $${mortgageValue}!`);
    
    // Atualizar UI
    updatePlayersList();
    updateCurrentPlayerInfo();
}

// Abrir modal de negociação
function openTradeModal() {
    if (!gameState.gameStarted) return;
    
    const currentPlayer = gameState.players[gameState.currentPlayerIndex];
    const playerPropertiesSelect = document.getElementById('player-properties');
    const opponentSelect = document.getElementById('opponent-select');
    const opponentPropertiesSelect = document.getElementById('opponent-properties');
    
    // Limpar selects
    playerPropertiesSelect.innerHTML = '<option value="">Selecione uma propriedade</option>';
    opponentSelect.innerHTML = '<option value="">Selecione um jogador</option>';
    opponentPropertiesSelect.innerHTML = '<option value="">Selecione uma propriedade</option>';
    
    // Preencher propriedades do jogador atual
    currentPlayer.properties.forEach(propId => {
        const property = [...properties, ...railroads, ...utilities].find(p => p.id === propId);
        if (property) {
            const option = document.createElement('option');
            option.value = propId;
            option.textContent = property.name;
            playerPropertiesSelect.appendChild(option);
        }
    });
    
    // Preencher lista de oponentes
    gameState.players.forEach((player, index) => {
        if (player !== currentPlayer) {
            const option = document.createElement('option');
            option.value = index;
            option.textContent = player.name;
            opponentSelect.appendChild(option);
        }
    });
    
    // Event listener para atualizar propriedades do oponente quando selecionado
    opponentSelect.addEventListener('change', function() {
        const selectedIndex = parseInt(this.value);
        if (isNaN(selectedIndex)) return;
        
        const opponent = gameState.players[selectedIndex];
        opponentPropertiesSelect.innerHTML = '<option value="">Selecione uma propriedade</option>';
        
        opponent.properties.forEach(propId => {
            const property = [...properties, ...railroads, ...utilities].find(p => p.id === propId);
            if (property) {
                const option = document.createElement('option');
                option.value = propId;
                option.textContent = property.name;
                opponentPropertiesSelect.appendChild(option);
            }
        });
    });
    
    // Exibir modal
    tradeModal.style.display = 'block';
}

// Fechar modal de negociação
function closeTradeModal() {
    tradeModal.style.display = 'none';
}

// Propor negociação
function proposeTrade() {
    const currentPlayer = gameState.players[gameState.currentPlayerIndex];
    const playerPropertyId = document.getElementById('player-properties').value;
    const playerMoney = parseInt(document.getElementById('player-money').value) || 0;
    const opponentIndex = parseInt(document.getElementById('opponent-select').value);
    const opponentPropertyId = document.getElementById('opponent-properties').value;
    const opponentMoney = parseInt(document.getElementById('opponent-money').value) || 0;
    
    if (isNaN(opponentIndex)) {
        alert('Selecione um oponente!');
        return;
    }
    
    if (!playerPropertyId && playerMoney <= 0) {
        alert('Você precisa oferecer uma propriedade ou dinheiro!');
        return;
    }
    
    if (!opponentPropertyId && opponentMoney <= 0) {
        alert('Você precisa pedir uma propriedade ou dinheiro!');
        return;
    }
    
    const opponent = gameState.players[opponentIndex];
    
    // Verificar se os jogadores têm dinheiro suficiente
    if (playerMoney > currentPlayer.money) {
        alert('Você não tem dinheiro suficiente para esta negociação!');
        return;
    }
    
    if (opponentMoney > opponent.money) {
        alert(`${opponent.name} não tem dinheiro suficiente para esta negociação!`);
        return;
    }
    
    // Propor a negociação (simplificado - aceita automaticamente)
    if (confirm(`${opponent.name}, você aceita esta negociação?`)) {
        // Trocar propriedades
        if (playerPropertyId) {
            currentPlayer.properties = currentPlayer.properties.filter(id => id !== playerPropertyId);
            opponent.properties.push(playerPropertyId);
        }
        
        if (opponentPropertyId) {
            opponent.properties = opponent.properties.filter(id => id !== opponentPropertyId);
            currentPlayer.properties.push(opponentPropertyId);
        }
        
        // Trocar dinheiro
        currentPlayer.money -= playerMoney;
        currentPlayer.money += opponentMoney;
        opponent.money += playerMoney;
        opponent.money -= opponentMoney;
        
        alert('Negociação concluída com sucesso!');
        
        // Atualizar UI
        updatePlayersList();
        updateCurrentPlayerInfo();
        closeTradeModal();
    } else {
        alert('Negociação recusada.');
    }
}

// Sacar carta do baralho de Sorte
function drawChanceCard(player) {
    if (gameState.chanceCards.length === 0) {
        // Reembaralhar se o baralho estiver vazio
        gameState.chanceCards = [...chanceCards];
        shuffleArray(gameState.chanceCards);
    }
    
    const card = gameState.chanceCards.pop();
    alert(`Carta de Sorte: ${card.text}`);
    
    // Executar ação da carta
    executeCardAction(player, card);
}

// Sacar carta do baralho de Cofre
function drawCommunityChestCard(player) {
    if (gameState.communityChestCards.length === 0) {
        // Reembaralhar se o baralho estiver vazio
        gameState.communityChestCards = [...communityChestCards];
        shuffleArray(gameState.communityChestCards);
    }
    
    const card = gameState.communityChestCards.pop();
    alert(`Carta do Cofre: ${card.text}`);
    
    // Executar ação da carta
    executeCardAction(player, card);
}

// Executar ação da carta
function executeCardAction(player, card) {
    switch (card.action) {
        case 'move':
            // Mover para uma posição específica
            const oldPosition = player.position;
            player.position = card.destination;
            
            // Verificar se passou pelo Início
            if (player.position < oldPosition && card.destination !== 0) {
                player.money += GO_MONEY;
                alert(`${player.name} passou pelo Início e recebeu $${GO_MONEY}!`);
            }
            
            updatePlayerPosition(player);
            checkSquareAction(player);
            break;
            
        case 'jail':
            // Ir para a prisão
            sendToJail(player);
            break;
            
        case 'collect':
            // Receber dinheiro
            player.money += card.amount;
            alert(`${player.name} recebeu $${card.amount}!`);
            break;
            
        case 'pay':
            // Pagar dinheiro
            player.money -= card.amount;
            alert(`${player.name} pagou $${card.amount}!`);
            break;
            
        case 'payEach':
            // Pagar a cada jogador
            gameState.players.forEach(otherPlayer => {
                if (otherPlayer !== player) {
                    player.money -= card.amount;
                    otherPlayer.money += card.amount;
                }
            });
            alert(`${player.name} pagou $${card.amount} a cada jogador!`);
            break;
            
        case 'collectEach':
            // Receber de cada jogador
            gameState.players.forEach(otherPlayer => {
                if (otherPlayer !== player) {
                    otherPlayer.money -= card.amount;
                    player.money += card.amount;
                }
            });
            alert(`${player.name} recebeu $${card.amount} de cada jogador!`);
            break;
            
        case 'repairs':
            // Pagar por reparos em casas e hotéis
            // Implementação simplificada - sem casas/hotéis ainda
            alert(`${player.name} não tem casas ou hotéis para reparar.`);
            break;
    }
    
    // Atualizar UI
    updatePlayersList();
}

// Finalizar turno
function endTurn() {
    if (!gameState.gameStarted || !gameState.diceRolled) return;
    
    const currentPlayer = gameState.players[gameState.currentPlayerIndex];
    
    // Verificar se o jogador tirou uma dupla
    if (gameState.doubleCount > 0) {
        alert(`${currentPlayer.name} tirou uma dupla e joga novamente!`);
        gameState.diceRolled = false;
        updateCurrentPlayerInfo();
        return;
    }
    
    // Passar para o próximo jogador
    gameState.currentPlayerIndex = (gameState.currentPlayerIndex + 1) % gameState.players.length;
    gameState.diceRolled = false;
    
    // Atualizar UI
    updateCurrentPlayerInfo();
    alert(`Turno de ${gameState.players[gameState.currentPlayerIndex].name}!`);
}

// Inicializar o jogo
document.addEventListener('DOMContentLoaded', init);