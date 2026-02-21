// ===== QUIZ QUESTIONS DATA =====
const QUESTIONS = [
    {
        text: "When you wake up in the morning, how do you feel?",
        animal: "🐢",
        speech: "Let's start gently... How's your morning mood?",
        options: [
            { text: "🌟 Energized and ready!", mood: "Happy" },
            { text: "😌 Peaceful and relaxed", mood: "Calm" },
            { text: "😟 Worried about the day", mood: "Anxious" },
            { text: "😔 Tired and unmotivated", mood: "Sad" }
        ]
    },
    {
        text: "How do you handle stress at work or school?",
        animal: "🦁",
        speech: "Time to face the challenges! How brave are you?",
        options: [
            { text: "💪 I tackle it head-on!", mood: "Happy" },
            { text: "🧘 I take deep breaths", mood: "Calm" },
            { text: "😰 It overwhelms me", mood: "Anxious" },
            { text: "😞 I want to avoid it", mood: "Sad" }
        ]
    },
    {
        text: "What's your social mood right now?",
        animal: "🦋",
        speech: "Let's flutter through your social life!",
        options: [
            { text: "🎉 Super social and fun!", mood: "Happy" },
            { text: "👥 Comfortable in groups", mood: "Calm" },
            { text: "😬 Nervous around people", mood: "Anxious" },
            { text: "🏠 I prefer being alone", mood: "Sad" }
        ]
    },
    {
        text: "How often do you feel creative inspiration?",
        animal: "🦉",
        speech: "Wise owl here! How creative are you feeling?",
        options: [
            { text: "✨ Constantly! Ideas flow!", mood: "Happy" },
            { text: "🎨 Regularly, it's natural", mood: "Calm" },
            { text: "🤔 Rarely, I overthink", mood: "Anxious" },
            { text: "❌ Haven't felt inspired lately", mood: "Sad" }
        ]
    },
    {
        text: "When something goes wrong, what's your first reaction?",
        animal: "🦊",
        speech: "Tricky moments need clever thinking!",
        options: [
            { text: "😊 I laugh it off!", mood: "Happy" },
            { text: "📍 I analyze and solve it", mood: "Calm" },
            { text: "😨 I panic for a moment", mood: "Anxious" },
            { text: "😩 I feel defeated", mood: "Sad" }
        ]
    },
    {
        text: "How's your sleep quality lately?",
        animal: "🦝",
        speech: "Time to check on your rest!",
        options: [
            { text: "😴 Perfect, I sleep great!", mood: "Happy" },
            { text: "🌙 Consistently good", mood: "Calm" },
            { text: "😵 Racing thoughts at night", mood: "Anxious" },
            { text: "😴 Sleeping too much", mood: "Sad" }
        ]
    },
    {
        text: "How do you feel about the future?",
        animal: "🦅",
        speech: "Let's soar into your future outlook!",
        options: [
            { text: "🚀 Excited and optimistic!", mood: "Happy" },
            { text: "🌱 Hopeful and patient", mood: "Calm" },
            { text: "😟 Uncertain and worried", mood: "Anxious" },
            { text: "🌧️ Pessimistic and lost", mood: "Sad" }
        ]
    },
    {
        text: "What's your current energy level?",
        animal: "🐇",
        speech: "Hop along! What's your energy like?",
        options: [
            { text: "⚡ Through the roof!", mood: "Happy" },
            { text: "🔋 Balanced and steady", mood: "Calm" },
            { text: "😖 Restless and jittery", mood: "Anxious" },
            { text: "🪫 Completely drained", mood: "Sad" }
        ]
    },
    {
        text: "How satisfied are you with your life right now?",
        animal: "🦚",
        speech: "Strut proudly! How proud are you of your life?",
        options: [
            { text: "😄 Very satisfied!", mood: "Happy" },
            { text: "✌️ Content and grateful", mood: "Calm" },
            { text: "😕 It's complicated", mood: "Anxious" },
            { text: "😞 Quite unhappy", mood: "Sad" }
        ]
    },
    {
        text: "How do you treat yourself on bad days?",
        animal: "🐘",
        speech: "Remember, you're strong! How do you self-soothe?",
        options: [
            { text: "🎉 Turn it into an adventure!", mood: "Happy" },
            { text: "🛀 Self-care and reflection", mood: "Calm" },
            { text: "😢 I fall into worry loops", mood: "Anxious" },
            { text: "🚫 I isolate myself", mood: "Sad" }
        ]
    }
];

// ===== MOOD QUIZ CLASS =====
class MoodQuiz {
    constructor() {
        this.currentQuestion = 0;
        this.answers = {};
        this.userName = "";
        this.moodScores = { Happy: 0, Calm: 0, Anxious: 0, Sad: 0 };
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

        prevBtn.style.display = index > 0 ? 'inline-block' : 'none';
        nextBtn.style.display = index < QUESTIONS.length - 1 ? 'inline-block' : 'none';
        submitBtn.style.display = index === QUESTIONS.length - 1 ? 'inline-block' : 'none';

        // Scroll to content
        document.getElementById('quizScreen').scrollIntoView({ behavior: 'smooth' });
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
        this.moodScores = { Happy: 0, Calm: 0, Anxious: 0, Sad: 0 };
        Object.values(this.answers).forEach(mood => {
            this.moodScores[mood]++;
        });
    }

    displayResultsPopup() {
        const total = QUESTIONS.length;
        const percentages = {
            Happy: (this.moodScores.Happy / total) * 100,
            Calm: (this.moodScores.Calm / total) * 100,
            Anxious: (this.moodScores.Anxious / total) * 100,
            Sad: (this.moodScores.Sad / total) * 100
        };

        const primaryMood = Object.keys(this.moodScores).reduce((a, b) =>
            this.moodScores[a] > this.moodScores[b] ? a : b
        );

        const moodEmojis = { Happy: '😄', Calm: '😌', Anxious: '😰', Sad: '😔' };
        const moodDescriptions = {
            Happy: `Awesome, ${this.userName}! You're feeling optimistic and energized! Your positive vibes are infectious. Keep spreading that joy!`,
            Calm: `Great job, ${this.userName}! You're in a peaceful and balanced state. Your mindful approach shows great emotional stability!`,
            Anxious: `${this.userName}, you're experiencing some worries and stress. Remember to breathe and take things one step at a time. You've got this!`,
            Sad: `${this.userName}, you're going through a challenging time. It's okay to feel this way. Consider reaching out for support from friends or family.`
        };

        document.getElementById('moodEmojiLarge').textContent = moodEmojis[primaryMood];
        document.getElementById('moodTitleResult').textContent = `You're feeling ${primaryMood}`;
        document.getElementById('moodDescriptionResult').textContent = moodDescriptions[primaryMood];

        // Update bars
        setTimeout(() => {
            document.getElementById('statHappy').style.width = percentages.Happy + '%';
            document.getElementById('statCalm').style.width = percentages.Calm + '%';
            document.getElementById('statAnxious').style.width = percentages.Anxious + '%';
            document.getElementById('statSad').style.width = percentages.Sad + '%';

            document.getElementById('statHappyValue').textContent = Math.round(percentages.Happy) + '%';
            document.getElementById('statCalmValue').textContent = Math.round(percentages.Calm) + '%';
            document.getElementById('statAnxiousValue').textContent = Math.round(percentages.Anxious) + '%';
            document.getElementById('statSadValue').textContent = Math.round(percentages.Sad) + '%';
        }, 100);

        document.getElementById('resultsModal').classList.remove('hidden');
    }

    storeResult() {
        const result = {
            name: this.userName,
            timestamp: new Date().toLocaleString(),
            date: new Date(),
            mood: Object.keys(this.moodScores).reduce((a, b) =>
                this.moodScores[a] > this.moodScores[b] ? a : b
            ),
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
        const quizData = {
            name: this.userName,
            date: now.toLocaleDateString(),
            time: now.toLocaleTimeString(),
            mood: Object.keys(this.moodScores).reduce((a, b) =>
                this.moodScores[a] > this.moodScores[b] ? a : b
            ),
            happy: Math.round(this.moodScores['Happy']),
            calm: Math.round(this.moodScores['Calm']),
            anxious: Math.round(this.moodScores['Anxious']),
            sad: Math.round(this.moodScores['Sad']),
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

        let csv = 'Name,Date,Time,Mood,Happy%,Calm%,Anxious%,Sad%\n';

        history.forEach(result => {
            const date = new Date(result.date);
            const dateStr = date.toLocaleDateString();
            const timeStr = date.toLocaleTimeString();
            const row = [
                result.name,
                dateStr,
                timeStr,
                result.mood,
                Math.round((result.scores.Happy / 10) * 100),
                Math.round((result.scores.Calm / 10) * 100),
                Math.round((result.scores.Anxious / 10) * 100),
                Math.round((result.scores.Sad / 10) * 100)
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
                            <div class="score-badge">😄 ${item.scores.Happy}</div>
                            <div class="score-badge">😌 ${item.scores.Calm}</div>
                            <div class="score-badge">😰 ${item.scores.Anxious}</div>
                            <div class="score-badge">😔 ${item.scores.Sad}</div>
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
        this.moodScores = { Happy: 0, Calm: 0, Anxious: 0, Sad: 0 };

        document.getElementById('resultsModal').classList.add('hidden');
        document.getElementById('historyModal').classList.add('hidden');
        document.getElementById('quizScreen').classList.remove('active');
        document.getElementById('quizScreen').classList.add('hidden');
        document.getElementById('nameScreen').classList.add('active');
        document.getElementById('userNameInput').value = '';
        document.getElementById('userNameInput').focus();
    }

    getMoodEmoji(mood) {
        const emojis = { Happy: '😄', Calm: '😌', Anxious: '😰', Sad: '😔' };
        return emojis[mood] || '😐';
    }
}

// ===== INITIALIZE =====
document.addEventListener('DOMContentLoaded', () => {
    new MoodQuiz();
    console.log('🧠 Psychology Mood Quiz Ready!');
    console.log('Enter your name and answer questions one by one.');
});
