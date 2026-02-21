// ===== QUIZ QUESTIONS DATA =====
const QUESTIONS = [
    {
        text: "When you wake up in the morning, how do you feel?",
        animal: "🐢",
        speech: "Let's start gently... How's your morning mood?",
        options: [
            { text: "⚡ Energized and pumped!", mood: "Energized" },
            { text: "😌 Peaceful and calm", mood: "Peaceful" },
            { text: "💡 Creative and inspired", mood: "Creative" },
            { text: "😟 Worried about the day", mood: "Anxious" },
            { text: "😔 Tired and unmotivated", mood: "Melancholic" },
            { text: "💪 Ready to conquer", mood: "Confident" },
            { text: "🤔 Reflective and thoughtful", mood: "Reflective" }
        ]
    },
    {
        text: "How do you handle stress at work or school?",
        animal: "🦁",
        speech: "Time to face the challenges! How brave are you?",
        options: [
            { text: "🔥 I attack it with passion!", mood: "Energized" },
            { text: "🧘 I take deep breaths", mood: "Peaceful" },
            { text: "💭 I think creatively", mood: "Creative" },
            { text: "😰 It overwhelms me", mood: "Anxious" },
            { text: "😞 I want to avoid it", mood: "Melancholic" },
            { text: "🦾 I'm strong enough", mood: "Confident" },
            { text: "🔍 I analyze it deeply", mood: "Reflective" }
        ]
    },
    {
        text: "What's your social mood right now?",
        animal: "🦋",
        speech: "Let's flutter through your social life!",
        options: [
            { text: "🎉 Super social and fun!", mood: "Energized" },
            { text: "👥 Comfortable in groups", mood: "Peaceful" },
            { text: "✨ Inspiring conversations", mood: "Creative" },
            { text: "😬 Nervous around people", mood: "Anxious" },
            { text: "🏠 I prefer being alone", mood: "Melancholic" },
            { text: "🎤 I love being in charge", mood: "Confident" },
            { text: "👂 I listen deeply", mood: "Reflective" }
        ]
    },
    {
        text: "How often do you feel creative inspiration?",
        animal: "🦉",
        speech: "Wise owl here! How creative are you feeling?",
        options: [
            { text: "⚡ Ideas everywhere!", mood: "Energized" },
            { text: "🎨 Steady and natural", mood: "Peaceful" },
            { text: "🌈 Very creative currently", mood: "Creative" },
            { text: "🤔 Rarely, I overthink", mood: "Anxious" },
            { text: "❌ Haven't felt inspired", mood: "Melancholic" },
            { text: "🎯 I'm brilliant today", mood: "Confident" },
            { text: "💭 I'm exploring ideas", mood: "Reflective" }
        ]
    },
    {
        text: "When something goes wrong, what's your first reaction?",
        animal: "🦊",
        speech: "Tricky moments need clever thinking!",
        options: [
            { text: "💥 I spring into action!", mood: "Energized" },
            { text: "🧘 I stay calm and centered", mood: "Peaceful" },
            { text: "💡 I find a creative solution", mood: "Creative" },
            { text: "😨 I panic for a moment", mood: "Anxious" },
            { text: "😩 I feel defeated", mood: "Melancholic" },
            { text: "🦾 I can handle this", mood: "Confident" },
            { text: "🔍 I learn from it", mood: "Reflective" }
        ]
    },
    {
        text: "How's your sleep quality lately?",
        animal: "🦝",
        speech: "Time to check on your rest!",
        options: [
            { text: "⚡ Energized all day", mood: "Energized" },
            { text: "🌙 Deep and restful", mood: "Peaceful" },
            { text: "💭 Dreams are vivid", mood: "Creative" },
            { text: "😵 Racing thoughts at night", mood: "Anxious" },
            { text: "😴 Sleeping too much", mood: "Melancholic" },
            { text: "💪 Waking up strong", mood: "Confident" },
            { text: "🌙 Peaceful slumber", mood: "Reflective" }
        ]
    },
    {
        text: "How do you feel about the future?",
        animal: "🦅",
        speech: "Let's soar into your future outlook!",
        options: [
            { text: "🚀 Excited and optimistic!", mood: "Energized" },
            { text: "🌱 Hopeful and patient", mood: "Peaceful" },
            { text: "✨ Full of possibilities", mood: "Creative" },
            { text: "😟 Uncertain and worried", mood: "Anxious" },
            { text: "🌧️ Pessimistic and lost", mood: "Melancholic" },
            { text: "💎 I'll achieve my goals", mood: "Confident" },
            { text: "🤔 I'm considering paths", mood: "Reflective" }
        ]
    },
    {
        text: "What's your current energy level?",
        animal: "🐇",
        speech: "Hop along! What's your energy like?",
        options: [
            { text: "⚡ Through the roof!", mood: "Energized" },
            { text: "🔋 Balanced and steady", mood: "Peaceful" },
            { text: "🔥 Creative fire burning", mood: "Creative" },
            { text: "😖 Restless and jittery", mood: "Anxious" },
            { text: "🪫 Completely drained", mood: "Melancholic" },
            { text: "💪 Strong and capable", mood: "Confident" },
            { text: "⚖️ Centered and grounded", mood: "Reflective" }
        ]
    },
    {
        text: "How satisfied are you with your life right now?",
        animal: "🦚",
        speech: "Strut proudly! How proud are you of your life?",
        options: [
            { text: "😄 Very satisfied!", mood: "Energized" },
            { text: "✌️ Content and grateful", mood: "Peaceful" },
            { text: "🌈 Inspired by my life", mood: "Creative" },
            { text: "😕 It's complicated", mood: "Anxious" },
            { text: "😞 Quite unhappy", mood: "Melancholic" },
            { text: "👑 I'm proud of myself", mood: "Confident" },
            { text: "🪞 I'm working on myself", mood: "Reflective" }
        ]
    },
    {
        text: "How do you treat yourself on bad days?",
        animal: "🐘",
        speech: "Remember, you're strong! How do you self-soothe?",
        options: [
            { text: "🎉 Turn it into adventure", mood: "Energized" },
            { text: "🛀 Self-care and peace", mood: "Peaceful" },
            { text: "🎨 Express creatively", mood: "Creative" },
            { text: "😢 I worry loops", mood: "Anxious" },
            { text: "🚫 I isolate myself", mood: "Melancholic" },
            { text: "🦾 I push through tough", mood: "Confident" },
            { text: "📖 I journal and reflect", mood: "Reflective" }
        ]
    }
];

// ===== MOOD QUIZ CLASS =====
class MoodQuiz {
    constructor() {
        this.currentQuestion = 0;
        this.answers = {};
        this.userName = "";
        this.moodScores = { 
            Energized: 0, 
            Peaceful: 0, 
            Creative: 0, 
            Anxious: 0, 
            Melancholic: 0,
            Confident: 0,
            Reflective: 0
        };
        this.init();
    }

    init() {
        this.setupEventListeners();
    }

    setupEventListeners() {
        // Name form
        document.getElementById('nameForm').addEventListener('submit', (e) => {
            e.preventDefault();
            this.startQuiz();
        });

        // Navigation buttons
        document.getElementById('prevBtn').addEventListener('click', () => this.previousQuestion());
        document.getElementById('nextBtn').addEventListener('click', () => this.nextQuestion());
        document.getElementById('submitBtn').addEventListener('click', () => this.showResults());

        // Results modal
        document.getElementById('downloadBtn').addEventListener('click', () => this.downloadResults());
        document.getElementById('viewHistoryBtn').addEventListener('click', () => this.showHistory());
        document.getElementById('newQuizBtn').addEventListener('click', () => this.resetQuiz());

        // Close modals
        document.querySelectorAll('.close-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.target.closest('.modal').classList.add('hidden');
            });
        });

        // Close modals on background click
        document.querySelectorAll('.modal').forEach(modal => {
            modal.addEventListener('click', (e) => {
                if (e.target === modal) modal.classList.add('hidden');
            });
        });
    }

    startQuiz() {
        this.userName = document.getElementById('userNameInput').value.trim();
        if (!this.userName) {
            alert('Please enter your name!');
            return;
        }

        document.getElementById('nameScreen').classList.remove('active');
        document.getElementById('quizScreen').classList.remove('hidden');
        document.getElementById('quizScreen').classList.add('active');

        this.showQuestion(0);
    }

    showQuestion(index) {
        this.currentQuestion = index;
        const question = QUESTIONS[index];

        // Update progress
        document.getElementById('questionProgress').textContent = `${index + 1}/${QUESTIONS.length}`;
        const progress = ((index + 1) / QUESTIONS.length) * 100;
        document.getElementById('progressFill').style.width = progress + '%';

        // Update greeting
        document.getElementById('userName').textContent = `Hello, ${this.userName}! 👋`;

        // Update animal and speech
        const animalEl = document.getElementById('animalDisplay');
        animalEl.textContent = question.animal;
        animalEl.style.animation = 'none';
        setTimeout(() => {
            animalEl.style.animation = 'animalWalk 2s ease-in-out infinite';
        }, 10);

        document.getElementById('speechBubble').textContent = question.speech;

        // Update question
        document.getElementById('questionText').textContent = question.text;

        // Update options
        this.renderOptions(question.options);

        // Update navigation buttons
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');
        const submitBtn = document.getElementById('submitBtn');

        prevBtn.style.display = index > 0 ? 'block' : 'none';
        nextBtn.style.display = index < QUESTIONS.length - 1 ? 'block' : 'none';
        submitBtn.style.display = index === QUESTIONS.length - 1 ? 'block' : 'none';
    }

    renderOptions(options) {
        const container = document.getElementById('optionsContainer');
        container.innerHTML = options.map((option, idx) => `
            <button class="option-btn ${this.answers[this.currentQuestion] === option.mood ? 'selected' : ''}" 
                    data-mood="${option.mood}">
                ${option.text}
            </button>
        `).join('');

        container.querySelectorAll('.option-btn').forEach(btn => {
            btn.disabled = false;
            btn.style.pointerEvents = 'auto';
            btn.addEventListener('click', (e) => this.selectAnswer(e));
        });
    }

    selectAnswer(e) {
        const btn = e.target;
        const mood = btn.dataset.mood;

        // Remove previous selection
        document.querySelectorAll('.option-btn').forEach(b => b.classList.remove('selected'));

        // Mark new selection
        btn.classList.add('selected');
        this.answers[this.currentQuestion] = mood;

        // Create particle burst effect
        this.createParticleBurst(btn);

        // Auto-advance to next question after particle animation
        setTimeout(() => {
            if (this.currentQuestion < QUESTIONS.length - 1) {
                this.nextQuestion();
            }
        }, 1300);
    }

    createParticleBurst(btn) {
        const rect = btn.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        // Rock particle colors
        const colors = [
            'linear-gradient(135deg, #667eea, #764ba2)',
            'linear-gradient(135deg, #f093fb, #f5576c)',
            'linear-gradient(135deg, #4facfe, #00f2fe)',
            'linear-gradient(135deg, #667eea, #764ba2)',
            'linear-gradient(135deg, #f093fb, #4facfe)',
            'linear-gradient(135deg, #764ba2, #f5576c)',
            'linear-gradient(135deg, #667eea, #f093fb)',
            'linear-gradient(135deg, #4facfe, #764ba2)',
            'linear-gradient(135deg, #f5576c, #667eea)',
            'linear-gradient(135deg, #764ba2, #4facfe)',
            'linear-gradient(135deg, #667eea, #f5576c)',
            'linear-gradient(135deg, #4facfe, #f093fb)'
        ];

        // Create 12 rock particles with varying sizes
        for (let i = 0; i < 12; i++) {
            const particle = document.createElement('div');
            particle.className = 'rock-particle';
            
            // Random size between 20px and 40px (larger, more visible)
            const size = Math.random() * 20 + 20;
            particle.style.width = size + 'px';
            particle.style.height = size + 'px';
            particle.style.background = colors[i];
            particle.style.left = centerX + 'px';
            particle.style.top = centerY + 'px';
            particle.style.transform = 'translate(-50%, -50%)';
            particle.style.animation = `rockBreak${(i % 12) + 1} 1.2s cubic-bezier(0.34, 1.56, 0.64, 1) forwards`;
            
            document.body.appendChild(particle);

            // Remove particle after animation
            setTimeout(() => {
                particle.remove();
            }, 1200);
        }

        // Disable all option buttons during animation
        document.querySelectorAll('.option-btn').forEach(b => {
            b.disabled = true;
            b.style.pointerEvents = 'none';
        });
    }

    previousQuestion() {
        if (this.currentQuestion > 0) {
            this.showQuestion(this.currentQuestion - 1);
        }
    }

    nextQuestion() {
        if (this.currentQuestion < QUESTIONS.length - 1) {
            this.showQuestion(this.currentQuestion + 1);
        }
    }

    showResults() {
        // Check if all questions answered
        if (Object.keys(this.answers).length !== QUESTIONS.length) {
            alert('Please answer all questions before submitting!');
            return;
        }

        // Calculate mood scores
        this.calculateMoodScores();

        // Show results popup
        this.displayResultsPopup();

        // Store result in localStorage
        this.storeResult();

        // Send to Google Sheets
        this.sendToGoogleSheet();
    }

    calculateMoodScores() {
        this.moodScores = { 
            Energized: 0, 
            Peaceful: 0, 
            Creative: 0, 
            Anxious: 0, 
            Melancholic: 0,
            Confident: 0,
            Reflective: 0
        };
        Object.values(this.answers).forEach(mood => {
            if (this.moodScores.hasOwnProperty(mood)) {
                this.moodScores[mood]++;
            }
        });
    }

    displayResultsPopup() {
        const total = QUESTIONS.length;
        
        const primaryMood = Object.keys(this.moodScores).reduce((a, b) =>
            this.moodScores[a] > this.moodScores[b] ? a : b
        );

        const moodEmojis = { 
            Energized: '⚡', 
            Peaceful: '😌', 
            Creative: '✨', 
            Anxious: '😰', 
            Melancholic: '😔',
            Confident: '💪',
            Reflective: '🤔'
        };
        
        const moodDescriptions = {
            Energized: `${this.userName}, you're absolutely vibrant! You're bursting with energy and enthusiasm. Your dynamic spirit is magnetic - keep channeling this powerful energy into everything you do. You're unstoppable!`,
            Peaceful: `${this.userName}, you embody serenity. You have a calm, balanced nature that brings tranquility to those around you. Your mindful presence is a gift. Keep nurturing this inner peace.`,
            Creative: `${this.userName}, your imagination is on fire! You're in a state of pure creative flow. Your innovative mind is full of brilliant ideas. Trust your intuition and let your creativity flourish!`,
            Anxious: `${this.userName}, you're carrying some worries right now. It's completely normal to feel this way. Remember: you're stronger than your concerns. Take things one step at a time, breathe deeply, and reach out for support when needed.`,
            Melancholic: `${this.userName}, you're experiencing deeper emotions right now. It's okay to feel down sometimes - this is part of being human. Consider self-care, talk to loved ones, and remember that this phase will pass.`,
            Confident: `${this.userName}, you're feeling like a champion! Your self-assurance is inspiring. You trust in your abilities and that's your superpower. Keep believing in yourself - you've got what it takes!`,
            Reflective: `${this.userName}, you're in a thoughtful, introspective state. You're processing life deeply and wisely. This reflective nature is beautiful - keep exploring your thoughts and gaining wisdom from your experiences.`
        };

        document.getElementById('moodEmojiLarge').textContent = moodEmojis[primaryMood];
        document.getElementById('moodTitleResult').textContent = `You're ${primaryMood}`;
        document.getElementById('moodDescriptionResult').textContent = moodDescriptions[primaryMood];

        // Update primary stat bar only
        setTimeout(() => {
            const moodScore = this.moodScores[primaryMood];
            const percentages = Object.keys(this.moodScores).reduce((obj, mood) => {
                obj[mood] = (this.moodScores[mood] / total) * 100;
                return obj;
            }, {});

            // Populate all mood stats but highlight primary
            const moodKeys = ['Energized', 'Peaceful', 'Creative', 'Anxious', 'Melancholic', 'Confident', 'Reflective'];
            const moodEmojisDisplay = { 
                Energized: '⚡', 
                Peaceful: '😌', 
                Creative: '✨', 
                Anxious: '😰', 
                Melancholic: '😔',
                Confident: '💪',
                Reflective: '🤔'
            };
            
            let statsHTML = '';
            moodKeys.forEach(mood => {
                statsHTML += `
                    <div class="stat-card ${mood === primaryMood ? 'primary-mood' : ''}">
                        <span class="stat-emoji">${moodEmojisDisplay[mood]}</span>
                        <span class="stat-label">${mood}</span>
                        <div class="stat-bar"><div class="stat-fill" style="width: ${percentages[mood]}%; transition: width 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);"></div></div>
                        <span class="stat-value">${Math.round(percentages[mood])}%</span>
                    </div>
                `;
            });
            
            document.querySelector('.stats-grid').innerHTML = statsHTML;
        }, 100);

        document.getElementById('resultsModal').classList.remove('hidden');
    }

    storeResult() {
        const primaryMood = Object.keys(this.moodScores).reduce((a, b) =>
            this.moodScores[a] > this.moodScores[b] ? a : b
        );
        
        const result = {
            name: this.userName,
            timestamp: new Date().toLocaleString(),
            date: new Date(),
            mood: primaryMood,
            scores: { ...this.moodScores },
            answers: { ...this.answers }
        };

        let history = JSON.parse(localStorage.getItem('moodHistory')) || [];
        history.unshift(result);

        if (history.length > 20) {
            history = history.slice(0, 20);
        }

        localStorage.setItem('moodHistory', JSON.stringify(history));
    }

    sendToGoogleSheet() {
        // Prepare data for Google Sheet
        const now = new Date();
        const primaryMood = Object.keys(this.moodScores).reduce((a, b) =>
            this.moodScores[a] > this.moodScores[b] ? a : b
        );
        
        const quizData = {
            name: this.userName,
            date: now.toLocaleDateString(),
            time: now.toLocaleTimeString(),
            mood: primaryMood,
            energized: this.moodScores['Energized'] || 0,
            peaceful: this.moodScores['Peaceful'] || 0,
            creative: this.moodScores['Creative'] || 0,
            anxious: this.moodScores['Anxious'] || 0,
            melancholic: this.moodScores['Melancholic'] || 0,
            confident: this.moodScores['Confident'] || 0,
            reflective: this.moodScores['Reflective'] || 0,
            answers: JSON.stringify(this.answers),
            timestamp: now.toISOString()
        };

        // Send to Google Sheet using the config function
        if (typeof sendToGoogleSheet === 'function') {
            sendToGoogleSheet(quizData);
        }
    }

    downloadResults() {
        const history = JSON.parse(localStorage.getItem('moodHistory')) || [];

        if (history.length === 0) {
            alert('No results to download yet!');
            return;
        }

        let csv = 'Name,Date,Time,Mood,Energized%,Peaceful%,Creative%,Anxious%,Melancholic%,Confident%,Reflective%\n';

        history.forEach(result => {
            const date = new Date(result.date);
            const dateStr = date.toLocaleDateString();
            const timeStr = date.toLocaleTimeString();
            const row = [
                result.name,
                dateStr,
                timeStr,
                result.mood,
                Math.round((result.scores.Energized / 10) * 100),
                Math.round((result.scores.Peaceful / 10) * 100),
                Math.round((result.scores.Creative / 10) * 100),
                Math.round((result.scores.Anxious / 10) * 100),
                Math.round((result.scores.Melancholic / 10) * 100),
                Math.round((result.scores.Confident / 10) * 100),
                Math.round((result.scores.Reflective / 10) * 100)
            ];
            csv += row.join(',') + '\n';
        });

        // Trigger download
        const blob = new Blob([csv], { type: 'text/csv' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'mood_results.csv';
        a.click();
        window.URL.revokeObjectURL(url);
    }

    showHistory() {
        const history = JSON.parse(localStorage.getItem('moodHistory')) || [];
        const historyList = document.getElementById('historyList');

        if (history.length === 0) {
            historyList.innerHTML = '<p style="text-align: center; color: #999; padding: 20px;">No history yet. Take the quiz to start tracking!</p>';
        } else {
            historyList.innerHTML = history.map((item, idx) => {
                const date = new Date(item.date);
                return `
                    <div class="history-item">
                        <div class="history-item-header">
                            <div>
                                <strong>${item.name}</strong><br>
                                <small>${date.toLocaleDateString()} ${date.toLocaleTimeString()}</small>
                            </div>
                            <div class="history-item-mood">${this.getMoodEmoji(item.mood)} ${item.mood}</div>
                        </div>
                        <div class="history-item-scores">
                            <div class="score-badge">⚡ ${item.scores.Energized || 0}</div>
                            <div class="score-badge">😌 ${item.scores.Peaceful || 0}</div>
                            <div class="score-badge">✨ ${item.scores.Creative || 0}</div>
                            <div class="score-badge">😰 ${item.scores.Anxious || 0}</div>
                            <div class="score-badge">😔 ${item.scores.Melancholic || 0}</div>
                            <div class="score-badge">💪 ${item.scores.Confident || 0}</div>
                            <div class="score-badge">🤔 ${item.scores.Reflective || 0}</div>
                        </div>
                    </div>
                `;
            }).join('');
        }

        document.getElementById('historyModal').classList.remove('hidden');
    }

    resetQuiz() {
        this.currentQuestion = 0;
        this.answers = {};
        this.userName = "";
        this.moodScores = { 
            Energized: 0, 
            Peaceful: 0, 
            Creative: 0, 
            Anxious: 0, 
            Melancholic: 0,
            Confident: 0,
            Reflective: 0
        };

        document.getElementById('resultsModal').classList.add('hidden');
        document.getElementById('historyModal').classList.add('hidden');
        document.getElementById('quizScreen').classList.remove('active');
        document.getElementById('quizScreen').classList.add('hidden');
        document.getElementById('nameScreen').classList.add('active');
        document.getElementById('userNameInput').value = '';
        document.getElementById('userNameInput').focus();
    }

    getMoodEmoji(mood) {
        const emojis = { 
            Energized: '⚡', 
            Peaceful: '😌', 
            Creative: '✨', 
            Anxious: '😰', 
            Melancholic: '😔',
            Confident: '💪',
            Reflective: '🤔'
        };
        return emojis[mood] || '😐';
    }
}

// ===== INITIALIZE =====
document.addEventListener('DOMContentLoaded', () => {
    new MoodQuiz();
    console.log('🧠 Psychology Mood Quiz Ready!');
    console.log('Enter your name and answer questions one by one.');
});
