// ===== MOOD QUIZ APPLICATION =====
class MoodQuiz {
    constructor() {
        this.answers = {};
        this.currentQuestionCount = 0;
        this.totalQuestions = 10;
        this.moodScores = { Happy: 0, Calm: 0, Anxious: 0, Sad: 0 };
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.loadHistory();
    }

    setupEventListeners() {
        // Option buttons
        document.querySelectorAll('.option-btn').forEach(btn => {
            btn.addEventListener('click', (e) => this.handleAnswerClick(e));
        });

        // Submit button
        const submitBtn = document.getElementById('submitBtn');
        if (submitBtn) {
            submitBtn.addEventListener('click', () => this.submitAnswers());
        }

        // New quiz button
        const newBtn = document.getElementById('newBtn');
        if (newBtn) {
            newBtn.addEventListener('click', () => this.resetQuiz());
        }

        // History button
        const historyBtn = document.getElementById('viewHistoryBtn');
        if (historyBtn) {
            historyBtn.addEventListener('click', () => this.showHistory());
        }

        // Close modal
        const closeBtn = document.querySelector('.close-btn');
        if (closeBtn) {
            closeBtn.addEventListener('click', () => this.hideHistory());
        }

        // Close modal on background click
        const modal = document.getElementById('historyModal');
        if (modal) {
            modal.addEventListener('click', (e) => {
                if (e.target === modal) this.hideHistory();
            });
        }
    }

    handleAnswerClick(e) {
        const btn = e.target;
        const card = btn.closest('.question-card');
        const questionIndex = card.dataset.index;
        const mood = btn.dataset.mood;

        // Remove previous selection from this card
        card.querySelectorAll('.option-btn').forEach(b => {
            b.classList.remove('selected');
        });

        // Mark new selection
        btn.classList.add('selected');
        this.answers[questionIndex] = mood;

        // Update counter
        this.currentQuestionCount = Object.keys(this.answers).length;
        this.updateQuestionCount();

        // Show submit button when all questions answered
        if (this.currentQuestionCount === this.totalQuestions) {
            document.getElementById('submitBtn').style.display = 'inline-block';
            document.getElementById('submitBtn').scrollIntoView({ behavior: 'smooth' });
        }
    }

    updateQuestionCount() {
        document.getElementById('questionsCount').textContent = 
            `${this.currentQuestionCount}/${this.totalQuestions}`;
    }

    submitAnswers() {
        if (this.currentQuestionCount !== this.totalQuestions) {
            alert('Please answer all questions first!');
            return;
        }

        // Calculate mood scores
        this.calculateMoodScores();

        // Display mood profile
        this.displayMoodProfile();

        // Store result
        this.storeResult();

        // Update UI
        document.getElementById('submitBtn').style.display = 'none';
        document.getElementById('newBtn').style.display = 'inline-block';
    }

    calculateMoodScores() {
        this.moodScores = { Happy: 0, Calm: 0, Anxious: 0, Sad: 0 };

        Object.values(this.answers).forEach(mood => {
            this.moodScores[mood]++;
        });
    }

    displayMoodProfile() {
        const total = this.totalQuestions;
        const moodProfile = document.getElementById('moodProfile');
        
        // Calculate percentages
        const percentages = {
            Happy: (this.moodScores.Happy / total) * 100,
            Calm: (this.moodScores.Calm / total) * 100,
            Anxious: (this.moodScores.Anxious / total) * 100,
            Sad: (this.moodScores.Sad / total) * 100
        };

        // Determine primary mood
        const primaryMood = Object.keys(this.moodScores).reduce((a, b) =>
            this.moodScores[a] > this.moodScores[b] ? a : b
        );

        // Update mood emoji and title
        const moodEmojis = {
            Happy: '😄',
            Calm: '😌',
            Anxious: '😰',
            Sad: '😔'
        };

        const moodDescriptions = {
            Happy: "You're feeling optimistic and energized! Your positive vibes are reflected in your choices. Keep spreading that joy!",
            Calm: "You're in a peaceful and balanced state. Your mindful approach shows great emotional stability. Great!",
            Anxious: "You're experiencing some worries and stress. Remember to breathe and take things one step at a time.",
            Sad: "You're going through a challenging time. It's okay to feel this way - consider reaching out for support."
        };

        document.getElementById('moodEmoji').textContent = moodEmojis[primaryMood];
        document.getElementById('moodTitle').textContent = `You're feeling ${primaryMood}`;
        document.getElementById('moodDescription').textContent = moodDescriptions[primaryMood];

        // Update mood bars
        this.updateMoodBars(percentages);

        // Show profile
        moodProfile.classList.remove('hidden');
    }

    updateMoodBars(percentages) {
        const moods = ['Happy', 'Calm', 'Anxious', 'Sad'];
        const bars = [
            { fill: 'happyBar', percent: 'happyPercent' },
            { fill: 'calmBar', percent: 'calmPercent' },
            { fill: 'anxiousBar', percent: 'anxiousPercent' },
            { fill: 'sadBar', percent: 'sadPercent' }
        ];

        moods.forEach((mood, index) => {
            const percentage = percentages[mood];
            const fillEl = document.getElementById(bars[index].fill);
            const percentEl = document.getElementById(bars[index].percent);

            // Animate the bar
            setTimeout(() => {
                fillEl.style.width = percentage + '%';
            }, 100);

            percentEl.textContent = Math.round(percentage) + '%';
        });
    }

    storeResult() {
        const result = {
            timestamp: new Date().toLocaleString(),
            mood: Object.keys(this.moodScores).reduce((a, b) =>
                this.moodScores[a] > this.moodScores[b] ? a : b
            ),
            scores: { ...this.moodScores },
            date: new Date().getTime()
        };

        let history = JSON.parse(localStorage.getItem('moodHistory')) || [];
        history.unshift(result); // Add to beginning
        
        // Keep only last 20 results
        if (history.length > 20) {
            history = history.slice(0, 20);
        }

        localStorage.setItem('moodHistory', JSON.stringify(history));
    }

    resetQuiz() {
        // Reset answers and UI
        this.answers = {};
        this.currentQuestionCount = 0;
        this.moodScores = { Happy: 0, Calm: 0, Anxious: 0, Sad: 0 };

        // Remove selections
        document.querySelectorAll('.option-btn').forEach(btn => {
            btn.classList.remove('selected');
        });

        // Hide profile
        document.getElementById('moodProfile').classList.add('hidden');

        // Update UI
        this.updateQuestionCount();
        document.getElementById('submitBtn').style.display = 'none';
        document.getElementById('newBtn').style.display = 'none';
        document.getElementById('moodEmoji').textContent = '😐';

        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    showHistory() {
        const modal = document.getElementById('historyModal');
        const historyList = document.getElementById('historyList');

        let history = JSON.parse(localStorage.getItem('moodHistory')) || [];

        if (history.length === 0) {
            historyList.innerHTML = '<p style="text-align: center; color: #999;">No mood history yet. Take the quiz to start tracking!</p>';
        } else {
            historyList.innerHTML = history.map((item, index) => `
                <div class="history-item">
                    <div class="history-item-header">
                        <div class="history-item-mood">${this.getMoodEmoji(item.mood)} ${item.mood}</div>
                        <div class="history-item-time">${item.timestamp}</div>
                    </div>
                    <div class="history-item-scores">
                        <div class="score-badge">😄 ${item.scores.Happy}</div>
                        <div class="score-badge">😌 ${item.scores.Calm}</div>
                        <div class="score-badge">😰 ${item.scores.Anxious}</div>
                        <div class="score-badge">😔 ${item.scores.Sad}</div>
                    </div>
                </div>
            `).join('');
        }

        modal.classList.remove('hidden');
    }

    hideHistory() {
        document.getElementById('historyModal').classList.add('hidden');
    }

    getMoodEmoji(mood) {
        const emojis = { Happy: '😄', Calm: '😌', Anxious: '😰', Sad: '😔' };
        return emojis[mood] || '😐';
    }

    loadHistory() {
        // History loads on demand via button click
        console.log('🧠 Mood Quiz Ready! Answer all questions to discover your mood.');
    }
}

// ===== INITIALIZE APP =====
document.addEventListener('DOMContentLoaded', () => {
    const quiz = new MoodQuiz();
    console.log('📊 Psychology Mood Quiz Started');
    console.log('Complete all 10 questions to analyze your mood!');
});
