// ===== QUESTION CARD INTERACTION =====
document.querySelectorAll('.reveal-btn').forEach(button => {
    button.addEventListener('click', function(e) {
        e.stopPropagation();
        const answer = this.nextElementSibling;
        const isHidden = answer.classList.contains('hidden');
        
        if (isHidden) {
            answer.classList.remove('hidden');
            this.textContent = 'Hide Answer';
            this.style.background = 'linear-gradient(135deg, #f093fb, #f5576c)';
            updateBrainPower();
        } else {
            answer.classList.add('hidden');
            this.textContent = 'Reveal Answer';
            this.style.background = 'linear-gradient(135deg, #667eea, #764ba2)';
        }
    });
});

// ===== SHUFFLE QUESTIONS =====
const shuffleBtn = document.getElementById('shuffle-btn');
shuffleBtn.addEventListener('click', function() {
    const grid = document.querySelector('.questions-grid');
    const cards = Array.from(grid.children);
    
    // Add rotation animation
    this.style.animation = 'spin 0.6s ease';
    setTimeout(() => {
        this.style.animation = '';
    }, 600);
    
    // Fisher-Yates shuffle algorithm
    for (let i = cards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        grid.appendChild(cards[j]);
        cards.splice(j, 1);
    }
});

// ===== RESET ALL =====
const resetBtn = document.getElementById('reset-btn');
resetBtn.addEventListener('click', function() {
    // Hide all answers
    document.querySelectorAll('.answer').forEach(answer => {
        answer.classList.add('hidden');
    });
    
    // Reset button text
    document.querySelectorAll('.reveal-btn').forEach(btn => {
        btn.textContent = 'Reveal Answer';
        btn.style.background = 'linear-gradient(135deg, #667eea, #764ba2)';
    });
    
    // Reset stats
    document.getElementById('questionsCount').textContent = '0';
    document.getElementById('brainPower').textContent = '0';
    
    // Add rotation animation
    this.style.animation = 'spin 0.6s ease';
    setTimeout(() => {
        this.style.animation = '';
    }, 600);
});

// ===== UPDATE BRAIN POWER =====
function updateBrainPower() {
    const totalQuestions = document.querySelectorAll('.question-card').length;
    const revealedAnswers = document.querySelectorAll('.answer:not(.hidden)').length;
    
    document.getElementById('questionsCount').textContent = revealedAnswers;
    
    const percentage = Math.round((revealedAnswers / totalQuestions) * 100);
    const brainPowerElement = document.getElementById('brainPower');
    
    // Animate the number increase
    let currentValue = parseInt(brainPowerElement.textContent) || 0;
    const step = Math.ceil((percentage - currentValue) / 10);
    
    if (currentValue < percentage) {
        const interval = setInterval(() => {
            currentValue += step;
            if (currentValue >= percentage) {
                currentValue = percentage;
                clearInterval(interval);
            }
            brainPowerElement.textContent = currentValue;
        }, 50);
    }
}

// ===== CARD CLICK ANIMATION =====
document.querySelectorAll('.question-card').forEach(card => {
    card.addEventListener('click', function() {
        this.style.animation = 'none';
        setTimeout(() => {
            this.style.animation = 'slideInLeft 0.3s ease';
        }, 10);
    });
});

// ===== HOVER EFFECTS ON BUTTONS =====
document.querySelectorAll('.btn-large').forEach(btn => {
    btn.addEventListener('mouseenter', function() {
        this.style.animation = 'pulse 0.6s ease 2';
    });
});

// ===== KEYBOARD SHORTCUTS =====
document.addEventListener('keydown', function(e) {
    if (e.key === 'r' || e.key === 'R') {
        resetBtn.click();
    }
    if (e.key === 's' || e.key === 'S') {
        shuffleBtn.click();
    }
});

// ===== PAGE LOAD ANIMATION =====
window.addEventListener('load', function() {
    console.log('🧠 Psychology Mind Bender Loaded!');
    console.log('🎯 Keyboard Shortcuts:');
    console.log('   Press "S" to Shuffle Questions');
    console.log('   Press "R" to Reset All');
});

// ===== RANDOM BRAIN POWER ON SCROLL =====
let lastScrollTime = 0;
window.addEventListener('scroll', function() {
    const now = Date.now();
    if (now - lastScrollTime > 3000) {
        lastScrollTime = now;
        const randomEmoji = ['🧠', '💡', '🎯', '✨', '🎪', '🌟'][Math.floor(Math.random() * 6)];
        console.log(`${randomEmoji} Keep scrolling for more mind-bending questions!`);
    }
});
