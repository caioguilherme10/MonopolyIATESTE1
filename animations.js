// Animations for Monopoly Game

// Function to animate dice rolling
function animateDiceRoll(dice1, dice2) {
    // Add rolling animation class
    dice1.classList.add('dice-rolling');
    dice2.classList.add('dice-rolling');
    
    // Remove the class after animation completes
    setTimeout(() => {
        dice1.classList.remove('dice-rolling');
        dice2.classList.remove('dice-rolling');
    }, 800); // Match the animation duration (0.8s)
}

// Function to animate player piece movement
function animatePlayerMovement(playerPiece, callback) {
    playerPiece.classList.add('moving-piece');
    
    // Remove the class after animation completes
    setTimeout(() => {
        playerPiece.classList.remove('moving-piece');
        if (callback && typeof callback === 'function') {
            callback();
        }
    }, 500); // Match the animation duration (0.5s)
}

// Function to highlight a property when landed on or purchased
function highlightProperty(propertyElement) {
    propertyElement.classList.add('property-highlight');
    
    // Remove the class after animation completes
    setTimeout(() => {
        propertyElement.classList.remove('property-highlight');
    }, 1000); // Match the animation duration (1s)
}

// Function to animate money transactions
function animateMoneyTransaction(amount, playerElement) {
    // Create money effect element
    const moneyEffect = document.createElement('div');
    moneyEffect.textContent = amount > 0 ? `+$${amount}` : `-$${Math.abs(amount)}`;
    moneyEffect.className = 'money-effect';
    if (amount < 0) {
        moneyEffect.classList.add('negative');
    }
    
    // Position the element near the player info
    const rect = playerElement.getBoundingClientRect();
    moneyEffect.style.left = `${rect.left + rect.width / 2}px`;
    moneyEffect.style.top = `${rect.top + rect.height / 2}px`;
    
    // Add to DOM
    document.body.appendChild(moneyEffect);
    
    // Remove after animation completes
    setTimeout(() => {
        document.body.removeChild(moneyEffect);
    }, 1500); // Match the animation duration (1.5s)
}

// Function to animate card flipping (for Chance and Community Chest)
function animateCardFlip(cardElement, callback) {
    cardElement.classList.add('card-flipping');
    
    // Remove the class after animation completes
    setTimeout(() => {
        cardElement.classList.remove('card-flipping');
        if (callback && typeof callback === 'function') {
            callback();
        }
    }, 1000); // Match the animation duration (1s)
}

// Function to animate going to jail
function animateGoToJail(playerPiece, jailElement) {
    // First move the piece up and make it shake
    playerPiece.classList.add('moving-piece');
    
    setTimeout(() => {
        playerPiece.classList.remove('moving-piece');
        playerPiece.classList.add('jail-shake');
        
        setTimeout(() => {
            playerPiece.classList.remove('jail-shake');
            // Now position the piece in jail
            const jailRect = jailElement.getBoundingClientRect();
            playerPiece.style.left = `${jailRect.left + jailRect.width / 4}px`;
            playerPiece.style.top = `${jailRect.top + jailRect.height / 4}px`;
        }, 500);
    }, 500);
}

// Function to mark a property as owned with glow effect
function markPropertyAsOwned(propertyElement, playerColor) {
    propertyElement.classList.add('owned');
    propertyElement.style.borderColor = playerColor;
}

// Function to animate the current player indicator
function animateCurrentPlayer(playerElement) {
    // Remove current-player class from all players
    document.querySelectorAll('.player').forEach(el => {
        el.classList.remove('current-player');
    });
    
    // Add to the current player
    playerElement.classList.add('current-player');
}

// Initialize animations by connecting to the main game script
document.addEventListener('DOMContentLoaded', () => {
    // Get dice elements
    const dice1 = document.getElementById('dice-1');
    const dice2 = document.getElementById('dice-2');
    const rollDiceButton = document.getElementById('roll-dice');
    
    // Override the original rollDice function if it exists
    if (window.rollDice) {
        const originalRollDice = window.rollDice;
        window.rollDice = function() {
            // Animate dice before executing original function
            animateDiceRoll(dice1, dice2);
            
            // Call original function after a delay to let animation play
            setTimeout(() => {
                originalRollDice();
            }, 800);
        };
    } else {
        // If rollDice doesn't exist yet, add event listener to the button
        rollDiceButton.addEventListener('click', () => {
            animateDiceRoll(dice1, dice2);
        });
    }
    
    // Expose animation functions globally
    window.gameAnimations = {
        animateDiceRoll,
        animatePlayerMovement,
        highlightProperty,
        animateMoneyTransaction,
        animateCardFlip,
        animateGoToJail,
        markPropertyAsOwned,
        animateCurrentPlayer
    };
});