// ==================== TOPG INIT — GAMES MODULE ====================
// Vanilla JS, no frameworks. Depends on main.js globals:
//   window.showPage, window.questionBank
// Firebase compat SDK (v8) loaded via CDN in index.html.

(function () {
    'use strict';

    // ==================== CONSTANTS ====================

    var PRIZE_LADDER = [
        '₦1,000', '₦2,000', '₦5,000', '₦10,000', '₦25,000',
        '₦50,000', '₦100,000', '₦250,000', '₦500,000', '₦1,000,000',
        '₦2,500,000', '₦5,000,000', '₦10,000,000', '₦25,000,000', '₦50,000,000'
    ];

    var SAFE_LEVELS = [3, 9]; // index positions (₦10k, ₦1M)

    var COURSES_LIST = [
        { title: 'BIO 102', bankKey: 'BIO 102', icon: '🔬', file: 'bio102.js', iconGradient: 'linear-gradient(135deg,#10b981,#059669)' },
        { title: 'BIO 108', bankKey: 'BIO 108', icon: '🧫', file: 'bio108.js', iconGradient: 'linear-gradient(135deg,#14b8a6,#0d9488)' },
        { title: 'CHM 102', bankKey: 'CHM 102', icon: '🧪', file: 'chm102.js', iconGradient: 'linear-gradient(135deg,#f59e0b,#d97706)' },
        { title: 'GST 112', bankKey: 'GST 112', icon: '🇳🇬', file: 'gst112.js', iconGradient: 'linear-gradient(135deg,#f97316,#ea580c)' },
        { title: 'PHY 102', bankKey: 'PHY 102', icon: '⚡', file: 'phy102.js', iconGradient: 'linear-gradient(135deg,#ef4444,#dc2626)' },
        { title: 'COS 102', bankKey: 'COS 102', icon: '💻', file: 'cos102.js', iconGradient: 'linear-gradient(135deg,#3b82f6,#1d4ed8)' },
        { title: 'MTH 102', bankKey: 'MTH 102', icon: '📐', file: 'mth102.js', iconGradient: 'linear-gradient(135deg,#8b5cf6,#7c3aed)' },
        { title: 'MLS 102', bankKey: 'MLS 102', icon: '📜', file: 'mls102.js', iconGradient: 'linear-gradient(135deg,#06b6d4,#0891b2)' },
        { title: 'MLS 104', bankKey: 'MLS 104', icon: '🦠', file: 'mls104.js', iconGradient: 'linear-gradient(135deg,#84cc16,#65a30d)' }
    ];

    var TOPICS_MAP = {
        'BIO 102': [
            { id: 'viruses',               name: 'Viruses',                  startIdx: 0,  endIdx: 15  },
            { id: 'bacteria',              name: 'Bacteria',                 startIdx: 15, endIdx: 30  },
            { id: 'fungi',                 name: 'Fungi',                    startIdx: 30, endIdx: 45  },
            { id: 'plant_kingdom',         name: 'Plant Kingdom',            startIdx: 45, endIdx: 60  },
            { id: 'animal_kingdom',        name: 'Animal Kingdom',           startIdx: 60, endIdx: 75  },
            { id: 'ecological_adaptations',name: 'Ecological Adaptations',   startIdx: 75, endIdx: 85  },
            { id: 'physiology',            name: 'Physiology',               startIdx: 85, endIdx: 95  },
            { id: 'growth_reproduction',   name: 'Growth & Reproduction',    startIdx: 95, endIdx: 100 }
        ],
        'BIO 108': [
            { id: 'plant_anatomy',   name: 'Anatomy of Flowering Plants', startIdx: 0,  endIdx: 30 },
            { id: 'fruits_seeds',    name: 'Fruits and Seeds',            startIdx: 30, endIdx: 45 },
            { id: 'biological_wares',name: 'Handling Biological Wares',   startIdx: 45, endIdx: 55 },
            { id: 'animal_tissues',  name: 'Animal Tissues',              startIdx: 55, endIdx: 75 },
            { id: 'invertebrates',   name: 'Lower Invertebrates',         startIdx: 75, endIdx: 90 },
            { id: 'dissection',      name: 'Dissection & Practical',      startIdx: 90, endIdx: 100 }
        ],
        'CHM 102': [
            { id: 'history_organic',       name: 'History of Organic Chemistry', startIdx: 0,  endIdx: 10  },
            { id: 'fullerenes',            name: 'Fullerenes & Nanochemistry',   startIdx: 10, endIdx: 20  },
            { id: 'electronic_theory',     name: 'Electronic Theory',            startIdx: 20, endIdx: 30  },
            { id: 'purification_analysis', name: 'Isolation & Structure',        startIdx: 30, endIdx: 40  },
            { id: 'nomenclature',          name: 'Nomenclature & Functional',    startIdx: 40, endIdx: 55  },
            { id: 'hydrocarbons',          name: 'Alkanes, Alkenes, Alkynes',    startIdx: 55, endIdx: 65  },
            { id: 'mechanisms',            name: 'Reaction Mechanisms',          startIdx: 65, endIdx: 75  },
            { id: 'functional_group_chem', name: 'Alcohols, Ethers, Amines',     startIdx: 75, endIdx: 85  },
            { id: 'inorganic_chemistry',   name: 'Groups & Transition Metals',   startIdx: 85, endIdx: 100 }
        ],
        'GST 112': [
            { id: 'pre_colonial',          name: 'Pre-Colonial Nigeria',     startIdx: 0,  endIdx: 15 },
            { id: 'colonial_nigeria',      name: 'Colonial Nigeria',         startIdx: 15, endIdx: 30 },
            { id: 'nationalism_independence', name: 'Nationalism & Independence', startIdx: 30, endIdx: 45 },
            { id: 'civil_war_military',    name: 'Civil War & Military Rule',startIdx: 45, endIdx: 60 },
            { id: 'trade_economy',         name: 'Trade & Self-Reliance',    startIdx: 60, endIdx: 70 },
            { id: 'norms_values',          name: 'Norms, Values & Vices',    startIdx: 70, endIdx: 80 },
            { id: 'judiciary_rights',      name: 'Judiciary & Rights',       startIdx: 80, endIdx: 90 }
        ],
        'PHY 102': [
            { id: 'electrostatics', name: 'Electrostatics',            startIdx: 0,  endIdx: 25  },
            { id: 'dc_circuits',    name: 'DC Circuits',               startIdx: 25, endIdx: 40  },
            { id: 'magnetic_fields',name: 'Magnetic Fields',           startIdx: 40, endIdx: 60  },
            { id: 'em_induction',   name: 'Electromagnetic Induction', startIdx: 60, endIdx: 80  },
            { id: 'ac_circuits',    name: 'AC Circuits & EM Waves',    startIdx: 80, endIdx: 100 }
        ],
        'COS 102': [
            { id: 'intro_computing',    name: 'Intro to Computing',         startIdx: 0,  endIdx: 15  },
            { id: 'solvability',        name: 'Solvable & Unsolvable',      startIdx: 15, endIdx: 25  },
            { id: 'problem_techniques', name: 'Problem Solving Techniques', startIdx: 25, endIdx: 45  },
            { id: 'solution_design',    name: 'Solution Formulation',       startIdx: 45, endIdx: 65  },
            { id: 'implementation',     name: 'Implementation & Evaluation',startIdx: 65, endIdx: 80  },
            { id: 'programming_basics', name: 'Programming Concepts',       startIdx: 80, endIdx: 100 }
        ],
        'MTH 102': [
            { id: 'functions',            name: 'Functions & Graphs',        startIdx: 0,  endIdx: 15  },
            { id: 'limits',               name: 'Limits & Continuity',       startIdx: 15, endIdx: 25  },
            { id: 'differentiation',      name: 'Differentiation',           startIdx: 25, endIdx: 45  },
            { id: 'applications_derivatives', name: 'Applications of Derivatives', startIdx: 45, endIdx: 55 },
            { id: 'integration',          name: 'Integration',               startIdx: 55, endIdx: 75  },
            { id: 'definite_integrals',   name: 'Definite Integrals',        startIdx: 75, endIdx: 90  },
            { id: 'advanced_topics',      name: 'Advanced Topics',           startIdx: 90, endIdx: 100 }
        ],
        'MLS 102': [
            { id: 'evolution',             name: 'Evolution of MLS Practice',       startIdx: 0,  endIdx: 15 },
            { id: 'legislation',           name: 'Legislations Governing MLS',      startIdx: 15, endIdx: 30 },
            { id: 'nomenclature',          name: 'Nomenclature & Certification',    startIdx: 30, endIdx: 45 },
            { id: 'training_regulations',  name: 'Training Rules & Regulations',    startIdx: 45, endIdx: 60 },
            { id: 'accreditation',         name: 'Programme Approval',              startIdx: 60, endIdx: 75 },
            { id: 'professional_bodies',   name: 'Professional Bodies & Roles',     startIdx: 75, endIdx: 90 },
            { id: 'international_contributions', name: 'International Contributions', startIdx: 90, endIdx: 100 }
        ],
        'MLS 104': [
            { id: 'disease_concepts',    name: 'Basic Concepts of Disease',   startIdx: 0,  endIdx: 15  },
            { id: 'cell_injury',         name: 'Cell Injury & Disorders',     startIdx: 15, endIdx: 30  },
            { id: 'infectious_diseases', name: 'Infectious Diseases',         startIdx: 30, endIdx: 50  },
            { id: 'immune_system',       name: 'Immune System',               startIdx: 50, endIdx: 65  },
            { id: 'disease_mechanisms',  name: 'Pathophysiology',             startIdx: 65, endIdx: 75  },
            { id: 'laboratory_diagnosis',name: 'Laboratory Diagnosis',        startIdx: 75, endIdx: 90  },
            { id: 'prevention_control',  name: 'Prevention & Control',        startIdx: 90, endIdx: 100 }
        ]
    };

    // Expose globals for HTML onclick attributes and other scripts
    window.COURSES = COURSES_LIST;
    window.COURSE_TOPICS = TOPICS_MAP;

    // ==================== FIREBASE INIT ====================

    function initFirebase() {
        if (
            window.firebaseConfig &&
            window.firebaseConfig.apiKey &&
            window.firebaseConfig.apiKey !== 'YOUR_API_KEY' &&
            typeof firebase !== 'undefined'
        ) {
            if (!firebase.apps.length) {
                firebase.initializeApp(window.firebaseConfig);
            }
            window.db = firebase.firestore();
        }
    }

    // ==================== USERNAME SYSTEM ====================

    function getUsername() {
        return localStorage.getItem('topg_username') || '';
    }

    function setUsername(name) {
        localStorage.setItem('topg_username', name.trim());
    }

    function promptUsername(callback) {
        var existing = getUsername();
        if (existing) {
            callback(existing);
            return;
        }
        var modal = document.getElementById('usernameModal');
        if (!modal) {
            // Fallback: use browser prompt
            var name = (window.prompt('Enter your username to save scores:') || '').trim();
            if (name) setUsername(name);
            callback(name || 'Anonymous');
            return;
        }
        modal.style.display = 'flex';
        var input = document.getElementById('usernameInput');
        var btn = document.getElementById('usernameSubmitBtn');
        if (input) input.value = '';

        function handleSubmit() {
            var name = (input ? input.value : '').trim();
            if (!name) return;
            setUsername(name);
            modal.style.display = 'none';
            if (btn) btn.removeEventListener('click', handleSubmit);
            callback(name);
        }

        if (btn) btn.addEventListener('click', handleSubmit);
        if (input) {
            input.addEventListener('keydown', function onKey(e) {
                if (e.key === 'Enter') {
                    input.removeEventListener('keydown', onKey);
                    handleSubmit();
                }
            });
        }
    }

    window.getUsername = getUsername;
    window.setUsername = setUsername;
    window.promptUsername = promptUsername;

    // ==================== LEADERBOARD / SCORE PERSISTENCE ====================

    function saveScore(gameId, score, details) {
        var username = getUsername() || 'Anonymous';
        var entry = {
            username: username,
            score: score,
            details: details || '',
            timestamp: Date.now(),
            date: new Date().toISOString().slice(0, 10)
        };

        // LocalStorage
        var key = 'topg_lb_' + gameId;
        var arr = [];
        try { arr = JSON.parse(localStorage.getItem(key) || '[]'); } catch (e) { arr = []; }
        arr.push(entry);
        arr.sort(function (a, b) { return b.score - a.score; });
        if (arr.length > 100) arr = arr.slice(0, 100);
        localStorage.setItem(key, JSON.stringify(arr));

        // Firestore
        if (window.db) {
            window.db.collection('leaderboard').doc(gameId)
                .collection('scores').add(entry).catch(function () {});
        }

        // Update stats
        updateStats(gameId, score);
    }

    function updateStats(gameId, score) {
        var key = 'topg_stats_' + gameId;
        var stats = { gamesPlayed: 0, totalScore: 0, bestScore: 0, lastPlayed: '' };
        try { stats = JSON.parse(localStorage.getItem(key) || JSON.stringify(stats)); } catch (e) {}
        stats.gamesPlayed = (stats.gamesPlayed || 0) + 1;
        stats.totalScore = (stats.totalScore || 0) + score;
        stats.bestScore = Math.max(stats.bestScore || 0, score);
        stats.lastPlayed = new Date().toISOString().slice(0, 10);
        localStorage.setItem(key, JSON.stringify(stats));
    }

    window.saveScore = saveScore;

    // ==================== LEADERBOARD MODAL ====================

    function showLeaderboard(gameId) {
        var modal = document.getElementById('leaderboardModal');
        if (!modal) return;
        modal.style.display = 'flex';

        var titleEl = document.getElementById('leaderboard-game-title');
        if (titleEl) titleEl.textContent = gameId.replace(/-/g, ' ').replace(/\b\w/g, function (c) { return c.toUpperCase(); });

        var tbody = document.getElementById('leaderboard-table-body');
        if (!tbody) return;
        tbody.innerHTML = '<tr><td colspan="3">Loading…</td></tr>';

        function renderRows(entries) {
            if (!entries.length) {
                tbody.innerHTML = '<tr><td colspan="3">No scores yet. Be the first!</td></tr>';
                return;
            }
            tbody.innerHTML = entries.slice(0, 10).map(function (e, i) {
                var medal = i === 0 ? '🥇' : i === 1 ? '🥈' : i === 2 ? '🥉' : (i + 1) + '.';
                return '<tr><td>' + medal + '</td><td>' + esc(e.username) + '</td><td>' + e.score + '</td></tr>';
            }).join('');
        }

        if (window.db) {
            // Real-time listener
            if (window._lbUnsubscribe) window._lbUnsubscribe();
            window._lbUnsubscribe = window.db
                .collection('leaderboard').doc(gameId).collection('scores')
                .orderBy('score', 'desc').limit(10)
                .onSnapshot(function (snap) {
                    var entries = [];
                    snap.forEach(function (doc) { entries.push(doc.data()); });
                    renderRows(entries);
                }, function () {
                    // Fallback on error
                    renderLocalLeaderboard(gameId, renderRows);
                });
        } else {
            renderLocalLeaderboard(gameId, renderRows);
        }
    }

    function renderLocalLeaderboard(gameId, renderFn) {
        var key = 'topg_lb_' + gameId;
        var arr = [];
        try { arr = JSON.parse(localStorage.getItem(key) || '[]'); } catch (e) {}
        arr.sort(function (a, b) { return b.score - a.score; });
        renderFn(arr);
    }

    function closeLeaderboard() {
        var modal = document.getElementById('leaderboardModal');
        if (modal) modal.style.display = 'none';
        if (window._lbUnsubscribe) { window._lbUnsubscribe(); window._lbUnsubscribe = null; }
    }

    window.showLeaderboard = showLeaderboard;
    window.closeLeaderboard = closeLeaderboard;

    // ==================== LOAD QUESTION BANK ====================

    window.loadQuestionBank = function (courseTitle) {
        window.questionBank = window.questionBank || {};
        var course = COURSES_LIST.find(function (c) { return c.title === courseTitle; });
        if (!course) return Promise.resolve(false);
        if (window.questionBank[course.bankKey] && window.questionBank[course.bankKey].length > 0) {
            return Promise.resolve(true);
        }
        return new Promise(function (resolve) {
            var script = document.createElement('script');
            script.src = course.file;
            script.onload = function () {
                setTimeout(function () {
                    resolve(!!(window.questionBank && window.questionBank[course.bankKey]));
                }, 300);
            };
            script.onerror = function () { resolve(false); };
            document.head.appendChild(script);
        });
    };

    // ==================== HELPERS ====================

    function shuffleArray(arr) {
        var a = arr.slice();
        for (var i = a.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var tmp = a[i]; a[i] = a[j]; a[j] = tmp;
        }
        return a;
    }

    function esc(str) {
        return String(str)
            .replace(/&/g, '&amp;').replace(/</g, '&lt;')
            .replace(/>/g, '&gt;').replace(/"/g, '&quot;');
    }

    function showGamePage(pageId) {
        // showPage('games') hides main pages and activates games tab
        if (window.showPage) window.showPage('games');
        // Then show the specific game page
        document.getElementById(pageId).style.display = 'block';
        // Restore body scroll for game pages
        document.body.style.overflow = '';
        document.documentElement.style.overflow = '';
    }

    function hideAllGamePages() {
        var ids = [
            'flashCardsPage', 'guessWordPage', 'millionairePage',
            'timeAttackPage', 'dailyChallengePage', 'weeklyChallengePage'
        ];
        ids.forEach(function (id) {
            var el = document.getElementById(id);
            if (el) el.style.display = 'none';
        });
    }

    // ==================== GAME COURSE / TOPIC SELECTOR ====================

    var _selectedGameId = '';
    var _selectedCourseTitle = '';
    var _selectedBankKey = '';
    var _selectedTopicId = null;
    var _gameQuestions = [];

    window.openGameCourseSelector = function (gameId) {
        _selectedGameId = gameId;
        _selectedCourseTitle = '';
        _selectedBankKey = '';
        _selectedTopicId = null;
        _gameQuestions = [];

        var panel = document.getElementById('gameCoursePanel');
        if (!panel) return;

        // Reset to course step
        var courseStep = document.getElementById('gameCourseStep');
        var topicStep = document.getElementById('gameTopicStep');
        if (courseStep) courseStep.style.display = 'block';
        if (topicStep) topicStep.style.display = 'none';

        // Render courses
        var grid = document.getElementById('gameCourseGrid');
        if (grid) {
            grid.innerHTML = COURSES_LIST.map(function (c) {
                return '<div class="game-course-card" onclick="window.selectGameCourse(\'' + c.title + '\',\'' + c.bankKey + '\')"' +
                    ' style="background:' + c.iconGradient + '">' +
                    '<span class="game-course-icon">' + c.icon + '</span>' +
                    '<span class="game-course-name">' + esc(c.title) + '</span>' +
                    '</div>';
            }).join('');
        }

        panel.style.display = 'flex';
    };

    window.selectGameCourse = async function (courseTitle, bankKey) {
        _selectedCourseTitle = courseTitle;
        _selectedBankKey = bankKey;
        _selectedTopicId = null;

        var loading = document.getElementById('gameCourseLoading');
        var courseStep = document.getElementById('gameCourseStep');
        var topicStep = document.getElementById('gameTopicStep');

        if (loading) loading.style.display = 'block';
        if (courseStep) courseStep.style.display = 'none';

        await window.loadQuestionBank(courseTitle);

        if (loading) loading.style.display = 'none';
        if (topicStep) topicStep.style.display = 'block';

        // Render topic chips
        var grid = document.getElementById('gameTopicGrid');
        if (grid) {
            var topics = TOPICS_MAP[courseTitle] || [];
            var allCount = (window.questionBank && window.questionBank[bankKey] || []).length;
            var allChip = '<div class="game-topic-chip active" id="gtc-all" onclick="window.setGameTopic(\'all\')">' +
                'All Topics <span class="gtc-count">(' + allCount + ')</span></div>';
            var chips = topics.map(function (t) {
                var bank = window.questionBank && window.questionBank[bankKey] || [];
                var count = bank.slice(t.startIdx, t.endIdx).length;
                return '<div class="game-topic-chip" id="gtc-' + t.id + '" onclick="window.setGameTopic(\'' + t.id + '\')">' +
                    esc(t.name) + ' <span class="gtc-count">(' + count + ')</span></div>';
            }).join('');
            grid.innerHTML = allChip + chips;
        }
        _selectedTopicId = 'all';
    };

    window.setGameTopic = function (topicId) {
        _selectedTopicId = topicId;
        document.querySelectorAll('.game-topic-chip').forEach(function (el) {
            el.classList.remove('active');
        });
        var chip = document.getElementById('gtc-' + topicId);
        if (chip) chip.classList.add('active');
    };

    window.startSelectedGame = function () {
        var bank = window.questionBank && window.questionBank[_selectedBankKey] || [];
        var questions = bank;

        if (_selectedTopicId && _selectedTopicId !== 'all') {
            var topics = TOPICS_MAP[_selectedCourseTitle] || [];
            var topic = topics.find(function (t) { return t.id === _selectedTopicId; });
            if (topic) questions = bank.slice(topic.startIdx, topic.endIdx);
        }

        _gameQuestions = shuffleArray(questions);

        window.closeGameCoursePanel();

        // Route to correct game
        switch (_selectedGameId) {
            case 'flash-cards':   startFlashCards(_gameQuestions);  break;
            case 'guess-word':    startGuessWord(_gameQuestions);    break;
            case 'millionaire':   startMillionaire(_gameQuestions);  break;
            case 'time-attack':   startTimeAttack(_gameQuestions);   break;
            default: break;
        }
    };

    window.closeGameCoursePanel = function () {
        var panel = document.getElementById('gameCoursePanel');
        if (panel) panel.style.display = 'none';
    };

    // ==================== GAME 1 — FLASH CARDS ====================

    var fc = {
        questions: [],
        index: 0,
        score: 0,
        answered: false
    };

    function startFlashCards(questions) {
        fc.questions = questions && questions.length ? questions.slice(0, 20) : [];
        fc.index = 0;
        fc.score = 0;
        fc.answered = false;

        hideAllGamePages();
        showGamePage('flashCardsPage');
        fcRenderQuestion();
        registerKeyHandler('flash-cards');
    }

    function fcRenderQuestion() {
        if (!fc.questions.length) {
            fcShowEnd();
            return;
        }
        if (fc.index >= fc.questions.length) {
            fcShowEnd();
            return;
        }

        fc.answered = false;
        var q = fc.questions[fc.index];
        var scoreEl = document.getElementById('fc-score');
        var questionEl = document.getElementById('fc-question');
        var grid = document.getElementById('fc-options-grid');
        var explEl = document.getElementById('fc-explanation');
        var nextBtn = document.getElementById('fc-next-btn');

        if (scoreEl) scoreEl.textContent = (fc.score) + ' / ' + fc.questions.length;
        if (questionEl) questionEl.textContent = q.question || '';
        if (explEl) { explEl.style.display = 'none'; explEl.textContent = ''; }
        if (nextBtn) nextBtn.style.display = 'none';

        var letters = ['A', 'B', 'C', 'D'];
        if (grid) {
            grid.innerHTML = letters.map(function (letter, i) {
                var opt = q.options && q.options[i] !== undefined ? q.options[i] : '';
                return '<div class="fc-card" onclick="window.fcAnswer(\'' + letter + '\')">' +
                    '<span class="fc-letter">' + letter + '</span>' +
                    '<span class="fc-text">' + esc(opt) + '</span>' +
                    '</div>';
            }).join('');
        }
    }

    window.fcAnswer = function (chosen) {
        if (fc.answered) return;
        fc.answered = true;

        var q = fc.questions[fc.index];
        var correct = q.answer;
        var letters = ['A', 'B', 'C', 'D'];
        var grid = document.getElementById('fc-options-grid');
        var cards = grid ? grid.querySelectorAll('.fc-card') : [];

        cards.forEach(function (card, i) {
            card.onclick = null;
            var letter = letters[i];
            if (letter === correct) {
                card.classList.add('fc-correct');
            } else if (letter === chosen) {
                card.classList.add('fc-wrong');
            }
        });

        if (chosen === correct) fc.score++;

        var explEl = document.getElementById('fc-explanation');
        if (explEl) {
            explEl.style.display = 'block';
            explEl.textContent = q.explanation
                ? 'Explanation: ' + q.explanation
                : 'Correct Answer: ' + correct + '. ' + (q.options && q.options['ABCD'.indexOf(correct)] || '');
        }

        var nextBtn = document.getElementById('fc-next-btn');
        if (nextBtn) nextBtn.style.display = 'inline-block';

        var scoreEl = document.getElementById('fc-score');
        if (scoreEl) scoreEl.textContent = fc.score + ' / ' + fc.questions.length;
    };

    window.fcNext = function () {
        fc.index++;
        fcRenderQuestion();
    };

    function fcShowEnd() {
        var page = document.getElementById('flashCardsPage');
        if (!page) return;
        var pct = fc.questions.length > 0 ? Math.round((fc.score / fc.questions.length) * 100) : 0;
        var endHtml = '<div class="game-end-screen">' +
            '<div class="game-end-trophy">' + (pct >= 70 ? '🏆' : pct >= 50 ? '👍' : '💪') + '</div>' +
            '<h2>Flash Cards Complete!</h2>' +
            '<div class="game-end-score">' + fc.score + '<span>/' + fc.questions.length + '</span></div>' +
            '<div class="game-end-pct">' + pct + '%</div>' +
            '<button class="game-btn game-btn-primary" onclick="window.saveScore(\'flash-cards\',' + fc.score + ',\'' + fc.score + '/' + fc.questions.length + '\');this.disabled=true;this.textContent=\'Saved!\'">Save Score</button>' +
            '<button class="game-btn game-btn-secondary" onclick="window.openGameCourseSelector(\'flash-cards\')">Play Again</button>' +
            '<button class="game-btn game-btn-ghost" onclick="window.showLeaderboard(\'flash-cards\')">Leaderboard</button>' +
            '<button class="game-btn game-btn-ghost" onclick="window.showPage(\'games\')">Back to Games</button>' +
            '</div>';

        // Replace content but keep page structure
        var existing = page.querySelector('.game-end-screen');
        if (existing) existing.remove();
        var content = page.querySelector('.fc-content') || page;
        if (content !== page) content.innerHTML = endHtml;
        else {
            var overlay = document.createElement('div');
            overlay.className = 'game-end-overlay';
            overlay.innerHTML = endHtml;
            page.appendChild(overlay);
        }
    }

    window.startFlashCards = startFlashCards;

    // ==================== GAME 2 — GUESS THE WORD ====================

    var gw = {
        questions: [],
        index: 0,
        score: 0,
        answered: false
    };

    function startGuessWord(questions) {
        gw.questions = questions && questions.length ? questions.slice(0, 20) : [];
        gw.index = 0;
        gw.score = 0;
        gw.answered = false;

        hideAllGamePages();
        showGamePage('guessWordPage');
        gwRenderQuestion();
        registerKeyHandler('guess-word');
    }

    function gwRenderQuestion() {
        if (!gw.questions.length || gw.index >= gw.questions.length) {
            gwShowEnd();
            return;
        }

        gw.answered = false;
        var q = gw.questions[gw.index];
        var scoreEl = document.getElementById('gw-score');
        var sentenceEl = document.getElementById('gw-sentence');
        var optionsEl = document.getElementById('gw-options');
        var explEl = document.getElementById('gw-explanation');
        var nextBtn = document.getElementById('gw-next-btn');

        if (scoreEl) scoreEl.textContent = gw.score + ' / ' + gw.questions.length;

        // Show question with blank hint
        var text = q.question || '';
        // Replace last word of first sentence with blank for fill-in effect
        var displayText = text.replace(/\b(\w{3,})\s*\??\s*$/, '____?') || text + ' ____?';
        if (sentenceEl) sentenceEl.textContent = displayText;

        if (explEl) { explEl.style.display = 'none'; explEl.textContent = ''; }
        if (nextBtn) nextBtn.style.display = 'none';

        var letters = ['A', 'B', 'C', 'D'];
        if (optionsEl) {
            optionsEl.innerHTML = letters.map(function (letter, i) {
                var opt = q.options && q.options[i] !== undefined ? q.options[i] : '';
                return '<button class="gw-option-btn" onclick="window.gwAnswer(\'' + letter + '\')">' +
                    '<span class="gw-letter">' + letter + '.</span> ' + esc(opt) +
                    '</button>';
            }).join('');
        }
    }

    window.gwAnswer = function (chosen) {
        if (gw.answered) return;
        gw.answered = true;

        var q = gw.questions[gw.index];
        var correct = q.answer;
        var letters = ['A', 'B', 'C', 'D'];
        var btns = document.querySelectorAll('.gw-option-btn');

        btns.forEach(function (btn, i) {
            btn.onclick = null;
            var letter = letters[i];
            if (letter === correct) {
                btn.classList.add('gw-correct');
            } else if (letter === chosen) {
                btn.classList.add('gw-wrong');
            }
        });

        if (chosen === correct) gw.score++;

        var explEl = document.getElementById('gw-explanation');
        if (explEl) {
            explEl.style.display = 'block';
            var correctIdx = 'ABCD'.indexOf(correct);
            explEl.textContent = q.explanation
                ? 'Explanation: ' + q.explanation
                : 'Answer: ' + correct + ' — ' + (q.options && q.options[correctIdx] || '');
        }

        var nextBtn = document.getElementById('gw-next-btn');
        if (nextBtn) nextBtn.style.display = 'inline-block';

        var scoreEl = document.getElementById('gw-score');
        if (scoreEl) scoreEl.textContent = gw.score + ' / ' + gw.questions.length;
    };

    window.gwNext = function () {
        gw.index++;
        gwRenderQuestion();
    };

    function gwShowEnd() {
        var page = document.getElementById('guessWordPage');
        if (!page) return;
        var pct = gw.questions.length > 0 ? Math.round((gw.score / gw.questions.length) * 100) : 0;
        appendEndScreen(page, 'Guess the Word Complete!', gw.score, gw.questions.length, pct, 'guess-word');
    }

    window.startGuessWord = startGuessWord;

    // ==================== GAME 3 — WHO WANTS TO BE A MILLIONAIRE ====================

    var mil = {
        questions: [],
        index: 0,
        prize: '',
        safePrize: '',
        lifelinesUsed: { ff: false, audience: false, friend: false },
        gameOver: false
    };

    function startMillionaire(questions) {
        mil.questions = questions && questions.length ? shuffleArray(questions).slice(0, 15) : [];
        mil.index = 0;
        mil.prize = PRIZE_LADDER[0];
        mil.safePrize = '₦0';
        mil.lifelinesUsed = { ff: false, audience: false, friend: false };
        mil.gameOver = false;

        hideAllGamePages();
        showGamePage('millionairePage');
        milRenderQuestion();
        milRenderLadder();
        registerKeyHandler('millionaire');
    }

    function milRenderLadder() {
        var ladder = document.getElementById('mil-ladder');
        if (!ladder) return;
        ladder.innerHTML = PRIZE_LADDER.slice().reverse().map(function (p, i) {
            var realIdx = PRIZE_LADDER.length - 1 - i;
            var isSafe = SAFE_LEVELS.indexOf(realIdx) !== -1;
            var isCurrent = realIdx === mil.index;
            return '<div class="mil-rung' + (isSafe ? ' mil-safe' : '') + (isCurrent ? ' mil-current' : '') + '">' +
                '<span class="mil-rung-num">' + (realIdx + 1) + '</span>' +
                '<span class="mil-rung-prize">' + p + '</span>' +
                '</div>';
        }).join('');
    }

    function milRenderQuestion() {
        if (mil.index >= mil.questions.length || mil.index >= PRIZE_LADDER.length) {
            milWin();
            return;
        }

        var q = mil.questions[mil.index];
        var qEl = document.getElementById('mil-question');
        var prizeEl = document.getElementById('mil-prize-current');
        var grid = document.getElementById('mil-options-grid');
        var resultEl = document.getElementById('mil-result');

        if (resultEl) resultEl.style.display = 'none';
        if (qEl) qEl.textContent = q.question || '';
        if (prizeEl) prizeEl.textContent = 'For: ' + PRIZE_LADDER[mil.index];

        // Restore lifeline buttons visibility
        var ff = document.getElementById('mil-lifeline-5050');
        var aud = document.getElementById('mil-lifeline-audience');
        var frnd = document.getElementById('mil-lifeline-friend');
        if (ff) { ff.disabled = mil.lifelinesUsed.ff; ff.style.opacity = mil.lifelinesUsed.ff ? '0.4' : '1'; }
        if (aud) { aud.disabled = mil.lifelinesUsed.audience; aud.style.opacity = mil.lifelinesUsed.audience ? '0.4' : '1'; }
        if (frnd) { frnd.disabled = mil.lifelinesUsed.friend; frnd.style.opacity = mil.lifelinesUsed.friend ? '0.4' : '1'; }

        var letters = ['A', 'B', 'C', 'D'];
        if (grid) {
            grid.innerHTML = letters.map(function (letter, i) {
                var opt = q.options && q.options[i] !== undefined ? q.options[i] : '';
                return '<button class="mil-option-btn" id="mil-opt-' + letter + '" onclick="window.milAnswer(\'' + letter + '\')">' +
                    '<span class="mil-opt-letter">' + letter + '</span> ' + esc(opt) +
                    '</button>';
            }).join('');
        }

        milRenderLadder();
    }

    window.milAnswer = function (chosen) {
        if (mil.gameOver) return;
        var q = mil.questions[mil.index];
        var correct = q.answer;
        var letters = ['A', 'B', 'C', 'D'];

        // Disable all buttons
        letters.forEach(function (l) {
            var btn = document.getElementById('mil-opt-' + l);
            if (btn) btn.onclick = null;
        });

        // Flash: show chosen then reveal
        var chosenBtn = document.getElementById('mil-opt-' + chosen);
        if (chosenBtn) chosenBtn.classList.add('mil-chosen');

        setTimeout(function () {
            letters.forEach(function (l) {
                var btn = document.getElementById('mil-opt-' + l);
                if (!btn) return;
                if (l === correct) btn.classList.add('mil-correct');
                else if (l === chosen && l !== correct) btn.classList.add('mil-wrong');
            });

            if (chosen === correct) {
                // Update safe prize at safe levels
                if (SAFE_LEVELS.indexOf(mil.index) !== -1) {
                    mil.safePrize = PRIZE_LADDER[mil.index];
                }
                mil.prize = PRIZE_LADDER[mil.index];
                setTimeout(function () {
                    mil.index++;
                    if (mil.index >= Math.min(mil.questions.length, PRIZE_LADDER.length)) {
                        milWin();
                    } else {
                        milRenderQuestion();
                    }
                }, 1200);
            } else {
                mil.gameOver = true;
                setTimeout(function () {
                    milGameOver(false);
                }, 1500);
            }
        }, 800);
    };

    window.milLifeline5050 = function () {
        if (mil.lifelinesUsed.ff || mil.gameOver) return;
        mil.lifelinesUsed.ff = true;
        var btn = document.getElementById('mil-lifeline-5050');
        if (btn) { btn.disabled = true; btn.style.opacity = '0.4'; }

        var q = mil.questions[mil.index];
        var correct = q.answer;
        var letters = ['A', 'B', 'C', 'D'];
        var wrong = letters.filter(function (l) { return l !== correct; });
        // Remove 2 random wrong options
        wrong = shuffleArray(wrong).slice(0, 2);
        wrong.forEach(function (l) {
            var optBtn = document.getElementById('mil-opt-' + l);
            if (optBtn) { optBtn.style.visibility = 'hidden'; optBtn.onclick = null; }
        });
    };

    window.milLifelineAudience = function () {
        if (mil.lifelinesUsed.audience || mil.gameOver) return;
        mil.lifelinesUsed.audience = true;
        var btn = document.getElementById('mil-lifeline-audience');
        if (btn) { btn.disabled = true; btn.style.opacity = '0.4'; }

        var q = mil.questions[mil.index];
        var correct = q.answer;
        var letters = ['A', 'B', 'C', 'D'];

        // Generate fake percentages: correct gets 40-70%
        var correctPct = 40 + Math.floor(Math.random() * 31);
        var remaining = 100 - correctPct;
        var others = letters.filter(function (l) { return l !== correct; });
        var split = [];
        var rem2 = remaining;
        for (var i = 0; i < others.length - 1; i++) {
            var v = Math.floor(Math.random() * (rem2));
            split.push(v);
            rem2 -= v;
        }
        split.push(rem2);
        split = shuffleArray(split);

        var pctMap = {};
        pctMap[correct] = correctPct;
        others.forEach(function (l, i) { pctMap[l] = split[i]; });

        var bars = letters.map(function (l) {
            return '<div class="aud-bar-wrap"><span class="aud-label">' + l + '</span>' +
                '<div class="aud-bar"><div class="aud-fill" style="width:' + pctMap[l] + '%"></div></div>' +
                '<span class="aud-pct">' + pctMap[l] + '%</span></div>';
        }).join('');

        milShowOverlay('<div class="lifeline-overlay-inner">' +
            '<h3>📊 Ask the Audience</h3>' +
            '<div class="aud-bars">' + bars + '</div>' +
            '<button class="game-btn game-btn-primary" onclick="window.milCloseOverlay()">Continue</button>' +
            '</div>');
    };

    window.milLifelineFriend = function () {
        if (mil.lifelinesUsed.friend || mil.gameOver) return;
        mil.lifelinesUsed.friend = true;
        var btn = document.getElementById('mil-lifeline-friend');
        if (btn) { btn.disabled = true; btn.style.opacity = '0.4'; }

        var q = mil.questions[mil.index];
        var correct = q.answer;

        milShowOverlay('<div class="lifeline-overlay-inner">' +
            '<h3>📞 Phone a Friend</h3>' +
            '<p class="friend-msg">"Hmm, I'm not 100% sure but I think the answer is <strong>' + correct + '</strong>… probably."</p>' +
            '<button class="game-btn game-btn-primary" onclick="window.milCloseOverlay()">Thanks!</button>' +
            '</div>');
    };

    window.milWalkAway = function () {
        if (mil.gameOver) return;
        mil.gameOver = true;
        // Give safe prize or current if at safe level
        var walkPrize = mil.safePrize || '₦0';
        milGameOver(true, walkPrize);
    };

    function milShowOverlay(html) {
        var page = document.getElementById('millionairePage');
        if (!page) return;
        var overlay = document.createElement('div');
        overlay.id = 'milOverlay';
        overlay.className = 'mil-overlay';
        overlay.innerHTML = html;
        page.appendChild(overlay);
    }

    window.milCloseOverlay = function () {
        var o = document.getElementById('milOverlay');
        if (o) o.remove();
    };

    function milGameOver(walkedAway, overridePrize) {
        var prize = overridePrize || mil.safePrize || '₦0';
        var resultEl = document.getElementById('mil-result');
        if (resultEl) {
            resultEl.style.display = 'flex';
            resultEl.innerHTML = '<div class="mil-result-inner">' +
                '<div class="mil-result-icon">' + (walkedAway ? '🚶' : '❌') + '</div>' +
                '<h2>' + (walkedAway ? 'You Walked Away!' : 'Wrong Answer!') + '</h2>' +
                '<p>You take home: <strong>' + prize + '</strong></p>' +
                '<div class="mil-result-actions">' +
                '<button class="game-btn game-btn-primary" onclick="window.saveScore(\'millionaire\',' + milPrizeToNumber(prize) + ',\'' + prize + '\');this.disabled=true;this.textContent=\'Saved!\'">Save Score</button>' +
                '<button class="game-btn game-btn-secondary" onclick="window.openGameCourseSelector(\'millionaire\')">Play Again</button>' +
                '<button class="game-btn game-btn-ghost" onclick="window.showPage(\'games\')">Back to Games</button>' +
                '</div></div>';
        }
    }

    function milWin() {
        var resultEl = document.getElementById('mil-result');
        if (resultEl) {
            resultEl.style.display = 'flex';
            resultEl.innerHTML = '<div class="mil-result-inner">' +
                '<div class="mil-result-icon">🏆</div>' +
                '<h2>You Won!</h2>' +
                '<p>Congratulations! You take home: <strong>₦50,000,000</strong></p>' +
                '<div class="mil-result-actions">' +
                '<button class="game-btn game-btn-primary" onclick="window.saveScore(\'millionaire\',50000000,\'₦50M\');this.disabled=true;this.textContent=\'Saved!\'">Save Score</button>' +
                '<button class="game-btn game-btn-secondary" onclick="window.openGameCourseSelector(\'millionaire\')">Play Again</button>' +
                '<button class="game-btn game-btn-ghost" onclick="window.showPage(\'games\')">Back to Games</button>' +
                '</div></div>';
        }
    }

    function milPrizeToNumber(prizeStr) {
        if (!prizeStr) return 0;
        return parseInt(prizeStr.replace(/[^0-9]/g, ''), 10) || 0;
    }

    window.startMillionaire = startMillionaire;

    // ==================== GAME 4 — TIME ATTACK ====================

    var ta = {
        questions: [],
        pool: [],
        poolIndex: 0,
        timeLeft: 60,
        correct: 0,
        wrong: 0,
        total: 0,
        answered: false,
        timer: null,
        running: false
    };

    var TA_RADIUS = 54;
    var TA_CIRC = 2 * Math.PI * TA_RADIUS; // ≈339.3

    function startTimeAttack(questions) {
        if (ta.timer) clearInterval(ta.timer);

        ta.pool = questions && questions.length ? shuffleArray(questions) : [];
        ta.poolIndex = 0;
        ta.timeLeft = 60;
        ta.correct = 0;
        ta.wrong = 0;
        ta.total = 0;
        ta.answered = false;
        ta.running = true;

        hideAllGamePages();
        showGamePage('timeAttackPage');

        var resultEl = document.getElementById('ta-result');
        if (resultEl) resultEl.style.display = 'none';

        taUpdateStats();
        taRenderQuestion();
        taStartTimer();
        registerKeyHandler('time-attack');
    }

    function taGetQuestion() {
        if (!ta.pool.length) return null;
        var q = ta.pool[ta.poolIndex % ta.pool.length];
        ta.poolIndex++;
        return q;
    }

    function taRenderQuestion() {
        ta.answered = false;
        var q = taGetQuestion();
        if (!q) return;
        ta.currentQ = q;

        var qEl = document.getElementById('ta-question');
        var optsEl = document.getElementById('ta-options');
        if (qEl) qEl.textContent = q.question || '';

        var letters = ['A', 'B', 'C', 'D'];
        if (optsEl) {
            optsEl.innerHTML = letters.map(function (letter, i) {
                var opt = q.options && q.options[i] !== undefined ? q.options[i] : '';
                return '<button class="ta-option-btn" onclick="window.taAnswer(\'' + letter + '\')">' +
                    '<span class="ta-letter">' + letter + '.</span> ' + esc(opt) +
                    '</button>';
            }).join('');
        }
    }

    window.taAnswer = function (chosen) {
        if (ta.answered || !ta.running) return;
        ta.answered = true;
        ta.total++;

        var q = ta.currentQ;
        var correct = q.answer;
        var letters = ['A', 'B', 'C', 'D'];
        var btns = document.querySelectorAll('.ta-option-btn');

        btns.forEach(function (btn, i) {
            btn.onclick = null;
            if (letters[i] === correct) btn.classList.add('ta-correct');
            else if (letters[i] === chosen && letters[i] !== correct) btn.classList.add('ta-wrong');
        });

        if (chosen === correct) {
            ta.correct++;
            ta.timeLeft = Math.min(ta.timeLeft + 2, 120);
        } else {
            ta.wrong++;
            ta.timeLeft = Math.max(ta.timeLeft - 3, 1);
        }

        taUpdateStats();
        taUpdateSVG();

        setTimeout(function () {
            if (ta.running) taRenderQuestion();
        }, 600);
    };

    function taStartTimer() {
        taUpdateSVG();
        ta.timer = setInterval(function () {
            if (!ta.running) { clearInterval(ta.timer); return; }
            ta.timeLeft--;
            taUpdateSVG();

            var textEl = document.getElementById('ta-timer-text');
            if (textEl) {
                textEl.textContent = ta.timeLeft;
                textEl.style.fill = ta.timeLeft < 10 ? '#ef4444' : '#22c55e';
            }

            // Pulse circle red when < 10s
            var circle = document.getElementById('ta-timer-circle');
            if (circle) {
                circle.style.stroke = ta.timeLeft < 10 ? '#ef4444' : '#22c55e';
                if (ta.timeLeft < 10) {
                    circle.style.animation = 'taPulse 0.5s ease-in-out infinite alternate';
                } else {
                    circle.style.animation = '';
                }
            }

            if (ta.timeLeft <= 0) {
                ta.running = false;
                clearInterval(ta.timer);
                taShowEnd();
            }
        }, 1000);
    }

    function taUpdateSVG() {
        var circle = document.getElementById('ta-timer-circle');
        var maxTime = 60;
        if (circle) {
            var fraction = Math.max(0, ta.timeLeft / maxTime);
            var offset = TA_CIRC * (1 - fraction);
            circle.style.strokeDashoffset = offset;
        }
    }

    function taUpdateStats() {
        var cEl = document.getElementById('ta-stat-correct');
        var wEl = document.getElementById('ta-stat-wrong');
        var tEl = document.getElementById('ta-stat-total');
        if (cEl) cEl.textContent = ta.correct;
        if (wEl) wEl.textContent = ta.wrong;
        if (tEl) tEl.textContent = ta.total;
    }

    function taShowEnd() {
        var resultEl = document.getElementById('ta-result');
        if (!resultEl) return;
        var pct = ta.total > 0 ? Math.round((ta.correct / ta.total) * 100) : 0;
        resultEl.style.display = 'flex';
        resultEl.innerHTML = '<div class="ta-result-inner">' +
            '<div class="ta-result-icon">⏱</div>' +
            '<h2>Time\'s Up!</h2>' +
            '<div class="ta-result-stats">' +
            '<div class="ta-rs"><span>' + ta.correct + '</span> Correct</div>' +
            '<div class="ta-rs"><span>' + ta.wrong + '</span> Wrong</div>' +
            '<div class="ta-rs"><span>' + ta.total + '</span> Total</div>' +
            '<div class="ta-rs"><span>' + pct + '%</span> Accuracy</div>' +
            '</div>' +
            '<button class="game-btn game-btn-primary" onclick="window.saveScore(\'time-attack\',' + ta.correct + ',\'' + ta.correct + '/' + ta.total + '\');this.disabled=true;this.textContent=\'Saved!\'">Save Score</button>' +
            '<button class="game-btn game-btn-secondary" onclick="window.openGameCourseSelector(\'time-attack\')">Play Again</button>' +
            '<button class="game-btn game-btn-ghost" onclick="window.showPage(\'games\')">Back to Games</button>' +
            '</div>';
    }

    window.startTimeAttack = startTimeAttack;

    // ==================== GAME 5 — DAILY CHALLENGE ====================

    var dc = {
        questions: [],
        index: 0,
        score: 0,
        answered: false,
        date: ''
    };

    function dcSeededRandom(seed) {
        // Simple LCG
        var s = seed;
        return function () {
            s = (s * 1664525 + 1013904223) & 0xffffffff;
            return (s >>> 0) / 4294967296;
        };
    }

    function dcPickQuestions(dateStr) {
        // Build flat pool from all loaded banks
        window.questionBank = window.questionBank || {};
        var pool = [];
        Object.keys(window.questionBank).forEach(function (key) {
            var bank = window.questionBank[key];
            if (Array.isArray(bank)) pool = pool.concat(bank);
        });

        if (pool.length === 0) return [];

        // Seed from date string
        var seed = 0;
        for (var i = 0; i < dateStr.length; i++) seed += dateStr.charCodeAt(i);
        var rng = dcSeededRandom(seed);

        // Shuffle using seeded RNG
        var shuffled = pool.slice();
        for (var j = shuffled.length - 1; j > 0; j--) {
            var k = Math.floor(rng() * (j + 1));
            var tmp = shuffled[j]; shuffled[j] = shuffled[k]; shuffled[k] = tmp;
        }

        return shuffled.slice(0, 10);
    }

    function dcGetStreak() {
        var streak = parseInt(localStorage.getItem('topg_dc_streak') || '0', 10);
        var lastPlayed = localStorage.getItem('topg_dc_last_played') || '';
        var today = new Date().toISOString().slice(0, 10);
        var yesterday = new Date(Date.now() - 86400000).toISOString().slice(0, 10);
        if (lastPlayed === yesterday) return streak;
        if (lastPlayed === today) return streak;
        return 0; // streak broken
    }

    function dcUpdateStreak(dateStr) {
        var streak = parseInt(localStorage.getItem('topg_dc_streak') || '0', 10);
        var lastPlayed = localStorage.getItem('topg_dc_last_played') || '';
        var yesterday = new Date(Date.now() - 86400000).toISOString().slice(0, 10);
        if (lastPlayed === yesterday) {
            streak++;
        } else if (lastPlayed !== dateStr) {
            streak = 1;
        }
        localStorage.setItem('topg_dc_streak', String(streak));
        localStorage.setItem('topg_dc_last_played', dateStr);
        return streak;
    }

    function startDailyChallenge() {
        var dateStr = new Date().toISOString().slice(0, 10);
        dc.date = dateStr;

        hideAllGamePages();
        showGamePage('dailyChallengePage');

        var playedKey = 'topg_dc_played_' + dateStr;
        var alreadyPlayed = !!localStorage.getItem(playedKey);

        var dateEl = document.getElementById('dc-date');
        if (dateEl) dateEl.textContent = dateStr;

        var streakEl = document.getElementById('dc-streak');
        var streakCount = dcGetStreak();
        if (streakEl) streakEl.textContent = '🔥 ' + streakCount + ' day streak';

        if (alreadyPlayed) {
            dcShowAlreadyPlayed(playedKey);
            return;
        }

        // Load at least one bank if pool is empty
        window.questionBank = window.questionBank || {};
        var allBanks = Object.keys(window.questionBank).filter(function (k) {
            return window.questionBank[k] && window.questionBank[k].length > 0;
        });

        if (allBanks.length === 0) {
            // Try loading a default course
            window.loadQuestionBank('BIO 102').then(function () {
                dc.questions = dcPickQuestions(dateStr);
                dcStart();
            });
        } else {
            dc.questions = dcPickQuestions(dateStr);
            dcStart();
        }
    }

    function dcStart() {
        dc.index = 0;
        dc.score = 0;
        dc.answered = false;

        var alreadyEl = document.getElementById('dc-already-played');
        var resultEl = document.getElementById('dc-result');
        if (alreadyEl) alreadyEl.style.display = 'none';
        if (resultEl) resultEl.style.display = 'none';

        dcRenderQuestion();
        registerKeyHandler('daily-challenge');
    }

    function dcRenderQuestion() {
        if (!dc.questions.length || dc.index >= dc.questions.length) {
            dcShowEnd();
            return;
        }

        dc.answered = false;
        var q = dc.questions[dc.index];

        var qEl = document.getElementById('dc-question');
        var optsEl = document.getElementById('dc-options');
        var explEl = document.getElementById('dc-explanation');
        var progressEl = document.getElementById('dc-progress');
        var nextBtn = document.getElementById('dc-next-btn');

        if (qEl) qEl.textContent = q.question || '';
        if (explEl) { explEl.style.display = 'none'; explEl.textContent = ''; }
        if (nextBtn) nextBtn.style.display = 'none';
        if (progressEl) progressEl.textContent = 'Q ' + (dc.index + 1) + '/' + dc.questions.length;

        var letters = ['A', 'B', 'C', 'D'];
        if (optsEl) {
            optsEl.innerHTML = letters.map(function (letter, i) {
                var opt = q.options && q.options[i] !== undefined ? q.options[i] : '';
                return '<button class="dc-option-btn" onclick="window.dcAnswer(\'' + letter + '\')">' +
                    '<span class="dc-letter">' + letter + '.</span> ' + esc(opt) +
                    '</button>';
            }).join('');
        }
    }

    window.dcAnswer = function (chosen) {
        if (dc.answered) return;
        dc.answered = true;

        var q = dc.questions[dc.index];
        var correct = q.answer;
        var letters = ['A', 'B', 'C', 'D'];
        var btns = document.querySelectorAll('.dc-option-btn');

        btns.forEach(function (btn, i) {
            btn.onclick = null;
            if (letters[i] === correct) btn.classList.add('dc-correct');
            else if (letters[i] === chosen && letters[i] !== correct) btn.classList.add('dc-wrong');
        });

        if (chosen === correct) dc.score++;

        var explEl = document.getElementById('dc-explanation');
        if (explEl) {
            var correctIdx = 'ABCD'.indexOf(correct);
            explEl.style.display = 'block';
            explEl.textContent = q.explanation
                ? 'Explanation: ' + q.explanation
                : 'Answer: ' + correct + ' — ' + (q.options && q.options[correctIdx] || '');
        }

        var nextBtn = document.getElementById('dc-next-btn');
        if (nextBtn) nextBtn.style.display = 'inline-block';
    };

    window.dcNext = function () {
        dc.index++;
        dcRenderQuestion();
    };

    function dcShowEnd() {
        var playedKey = 'topg_dc_played_' + dc.date;
        localStorage.setItem(playedKey, JSON.stringify({ score: dc.score, total: dc.questions.length }));

        var newStreak = dcUpdateStreak(dc.date);
        var streakEl = document.getElementById('dc-streak');
        if (streakEl) streakEl.textContent = '🔥 ' + newStreak + ' day streak';

        // Submit to Firestore
        if (window.db) {
            var username = getUsername() || 'Anonymous';
            var update = {};
            update[username] = dc.score;
            window.db.collection('dailyChallenge').doc(dc.date)
                .set(update, { merge: true }).catch(function () {});
        }

        saveScore('daily-challenge', dc.score, dc.score + '/' + dc.questions.length);

        var resultEl = document.getElementById('dc-result');
        if (!resultEl) return;
        var pct = dc.questions.length > 0 ? Math.round((dc.score / dc.questions.length) * 100) : 0;
        resultEl.style.display = 'flex';
        resultEl.innerHTML = '<div class="dc-result-inner">' +
            '<div class="dc-result-icon">' + (pct >= 70 ? '🌟' : '📅') + '</div>' +
            '<h2>Daily Challenge Done!</h2>' +
            '<p>' + dc.score + ' / ' + dc.questions.length + ' correct (' + pct + '%)</p>' +
            '<p>🔥 Streak: ' + newStreak + ' day' + (newStreak !== 1 ? 's' : '') + '</p>' +
            '<button class="game-btn game-btn-ghost" onclick="window.showLeaderboard(\'daily-challenge\')">Leaderboard</button>' +
            '<button class="game-btn game-btn-ghost" onclick="window.showPage(\'games\')">Back to Games</button>' +
            '</div>';
    }

    function dcShowAlreadyPlayed(playedKey) {
        var data = {};
        try { data = JSON.parse(localStorage.getItem(playedKey) || '{}'); } catch (e) {}

        var alreadyEl = document.getElementById('dc-already-played');
        if (!alreadyEl) return;
        alreadyEl.style.display = 'flex';
        alreadyEl.innerHTML = '<div class="dc-already-inner">' +
            '<div class="dc-already-icon">✅</div>' +
            '<h2>Already Played Today!</h2>' +
            '<p>Your score: <strong>' + (data.score || 0) + ' / ' + (data.total || 10) + '</strong></p>' +
            '<p>Come back tomorrow for a new challenge.</p>' +
            '<button class="game-btn game-btn-ghost" onclick="window.showLeaderboard(\'daily-challenge\')">Today\'s Leaderboard</button>' +
            '<button class="game-btn game-btn-ghost" onclick="window.showPage(\'games\')">Back to Games</button>' +
            '</div>';
    }

    window.startDailyChallenge = startDailyChallenge;

    // ==================== GAME 6 — WEEKLY CHALLENGE (PLACEHOLDER) ====================

    function startWeeklyChallenge() {
        hideAllGamePages();
        showGamePage('weeklyChallengePage');

        var page = document.getElementById('weeklyChallengePage');
        if (!page) return;
        page.innerHTML = '<div class="weekly-coming-soon">' +
            '<div class="wcs-icon">🏟️</div>' +
            '<h2>Weekly Challenge</h2>' +
            '<p class="wcs-sub">Compete with students all week long for the top spot.</p>' +
            '<div class="wcs-badge">Coming Soon</div>' +
            '<p class="wcs-note">Weekly challenges will feature timed battles, bonus multipliers, and exclusive badges.</p>' +
            '<button class="game-btn game-btn-primary" onclick="window.showPage(\'games\')">Back to Games</button>' +
            '</div>';
    }

    window.startWeeklyChallenge = startWeeklyChallenge;

    // ==================== GAMES PAGE RENDERING ====================

    function renderGamesPage() {
        var container = document.getElementById('gamesPageContent');
        if (!container) return;

        var games = [
            {
                id: 'flash-cards',
                icon: '🃏',
                title: 'Flash Cards',
                desc: 'Flip through questions and test your recall speed.',
                color: 'linear-gradient(135deg,#10b981,#059669)',
                action: "window.openGameCourseSelector('flash-cards')"
            },
            {
                id: 'guess-word',
                icon: '🔤',
                title: 'Guess the Word',
                desc: 'Fill in the blank and pick the correct option.',
                color: 'linear-gradient(135deg,#3b82f6,#1d4ed8)',
                action: "window.openGameCourseSelector('guess-word')"
            },
            {
                id: 'millionaire',
                icon: '💰',
                title: 'Millionaire',
                desc: 'Answer 15 questions and climb to ₦50M!',
                color: 'linear-gradient(135deg,#f59e0b,#d97706)',
                action: "window.openGameCourseSelector('millionaire')"
            },
            {
                id: 'time-attack',
                icon: '⏱',
                title: 'Time Attack',
                desc: 'Answer as many as you can before time runs out.',
                color: 'linear-gradient(135deg,#ef4444,#dc2626)',
                action: "window.openGameCourseSelector('time-attack')"
            },
            {
                id: 'daily-challenge',
                icon: '📅',
                title: 'Daily Challenge',
                desc: 'One attempt per day. Build your streak!',
                color: 'linear-gradient(135deg,#8b5cf6,#7c3aed)',
                action: 'window.startDailyChallenge()'
            },
            {
                id: 'weekly-challenge',
                icon: '🏆',
                title: 'Weekly Challenge',
                desc: 'Coming soon — weekly leaderboard battles.',
                color: 'linear-gradient(135deg,#06b6d4,#0891b2)',
                action: 'window.startWeeklyChallenge()',
                badge: 'Soon'
            }
        ];

        container.innerHTML = games.map(function (g) {
            return '<div class="game-card" onclick="' + g.action + '" style="background:' + g.color + '">' +
                '<div class="game-card-icon">' + g.icon + '</div>' +
                '<div class="game-card-info">' +
                '<h3 class="game-card-title">' + g.title + (g.badge ? ' <span class="game-badge">' + g.badge + '</span>' : '') + '</h3>' +
                '<p class="game-card-desc">' + g.desc + '</p>' +
                '</div>' +
                '<button class="game-card-lb-btn" onclick="event.stopPropagation();window.showLeaderboard(\'' + g.id + '\')" title="Leaderboard">🏅</button>' +
                '</div>';
        }).join('');
    }

    // ==================== USERNAME MODAL ====================

    function ensureUsernameModal() {
        if (document.getElementById('usernameModal')) return;
        var modal = document.createElement('div');
        modal.id = 'usernameModal';
        modal.style.cssText = 'display:none;position:fixed;inset:0;background:rgba(0,0,0,.7);z-index:9999;align-items:center;justify-content:center;';
        modal.innerHTML = '<div style="background:#1e293b;border-radius:16px;padding:32px;width:90%;max-width:380px;text-align:center;">' +
            '<h2 style="color:#22c55e;margin:0 0 8px">Enter Username</h2>' +
            '<p style="color:#94a3b8;margin:0 0 20px;font-size:14px">Your name will appear on the leaderboard.</p>' +
            '<input id="usernameInput" type="text" maxlength="20" placeholder="Your name…"' +
            ' style="width:100%;padding:12px;border-radius:8px;border:2px solid #334155;background:#0f172a;color:#f1f5f9;font-size:16px;box-sizing:border-box;margin-bottom:16px">' +
            '<button id="usernameSubmitBtn"' +
            ' style="width:100%;padding:12px;background:linear-gradient(135deg,#22c55e,#16a34a);color:#fff;border:none;border-radius:8px;font-size:16px;font-weight:700;cursor:pointer;">' +
            'Set Username</button>' +
            '</div>';
        document.body.appendChild(modal);
    }

    // ==================== LEADERBOARD MODAL ====================

    function ensureLeaderboardModal() {
        if (document.getElementById('leaderboardModal')) return;
        var modal = document.createElement('div');
        modal.id = 'leaderboardModal';
        modal.style.cssText = 'display:none;position:fixed;inset:0;background:rgba(0,0,0,.8);z-index:9998;align-items:center;justify-content:center;';
        modal.innerHTML = '<div style="background:#1e293b;border-radius:16px;padding:24px;width:90%;max-width:420px;max-height:80vh;overflow-y:auto;">' +
            '<div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:16px;">' +
            '<h2 style="color:#f1f5f9;margin:0;font-size:18px">🏅 <span id="leaderboard-game-title">Leaderboard</span></h2>' +
            '<button onclick="window.closeLeaderboard()" style="background:none;border:none;color:#94a3b8;font-size:22px;cursor:pointer;">✕</button>' +
            '</div>' +
            '<table style="width:100%;border-collapse:collapse;">' +
            '<thead><tr style="color:#64748b;font-size:12px;">' +
            '<th style="text-align:left;padding:6px">#</th>' +
            '<th style="text-align:left;padding:6px">Name</th>' +
            '<th style="text-align:right;padding:6px">Score</th>' +
            '</tr></thead>' +
            '<tbody id="leaderboard-table-body"><tr><td colspan="3" style="color:#94a3b8;text-align:center;padding:20px">Loading…</td></tr></tbody>' +
            '</table>' +
            '</div>';
        document.body.appendChild(modal);
    }

    // ==================== GAME COURSE PANEL ====================

    function ensureGameCoursePanel() {
        if (document.getElementById('gameCoursePanel')) return;
        var panel = document.createElement('div');
        panel.id = 'gameCoursePanel';
        panel.style.cssText = 'display:none;position:fixed;inset:0;background:rgba(0,0,0,.85);z-index:9990;align-items:flex-start;justify-content:center;overflow-y:auto;padding:20px 0;';
        panel.innerHTML = '<div style="background:#1e293b;border-radius:16px;width:90%;max-width:480px;padding:24px;margin:auto;">' +
            '<div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:16px;">' +
            '<h2 style="color:#f1f5f9;margin:0;font-size:18px">Select Course</h2>' +
            '<button onclick="window.closeGameCoursePanel()" style="background:none;border:none;color:#94a3b8;font-size:22px;cursor:pointer;">✕</button>' +
            '</div>' +

            '<!-- Loading -->' +
            '<div id="gameCourseLoading" style="display:none;text-align:center;padding:20px;">' +
            '<div class="spinner" style="margin:0 auto 10px;"></div><p style="color:#94a3b8">Loading questions…</p>' +
            '</div>' +

            '<!-- Course step -->' +
            '<div id="gameCourseStep">' +
            '<p style="color:#94a3b8;margin:0 0 12px;font-size:14px">Pick a course to play from:</p>' +
            '<div id="gameCourseGrid" style="display:grid;grid-template-columns:repeat(3,1fr);gap:10px;"></div>' +
            '</div>' +

            '<!-- Topic step -->' +
            '<div id="gameTopicStep" style="display:none;">' +
            '<button onclick="window.closeGameCoursePanel();window.openGameCourseSelector(window._selectedGameId||\'\')" ' +
            'style="background:none;border:none;color:#22c55e;cursor:pointer;font-size:14px;margin-bottom:12px;">← Change Course</button>' +
            '<p style="color:#94a3b8;margin:0 0 10px;font-size:14px">Select a topic (or play all):</p>' +
            '<div id="gameTopicGrid" style="display:flex;flex-wrap:wrap;gap:8px;margin-bottom:16px;"></div>' +
            '<button onclick="window.startSelectedGame()" style="width:100%;padding:14px;background:linear-gradient(135deg,#22c55e,#16a34a);color:#fff;border:none;border-radius:10px;font-size:16px;font-weight:700;cursor:pointer;">▶ Play!</button>' +
            '</div>' +
            '</div>';
        document.body.appendChild(panel);
    }

    // ==================== GAMES PAGE (gamesPage) ====================

    function ensureGamesPage() {
        if (document.getElementById('gamesPage')) return;
        var page = document.createElement('div');
        page.id = 'gamesPage';
        page.style.display = 'none';

        page.innerHTML = '<div class="games-page-inner">' +
            '<div class="games-hero">' +
            '<h1 class="games-hero-title">TopG Games</h1>' +
            '<p class="games-hero-sub">Play. Learn. Win.</p>' +
            '<div id="games-username-bar">' +
            '<span id="games-username-display"></span>' +
            '<button class="game-btn-sm" onclick="window.promptUsername(function(n){document.getElementById(\'games-username-display\').textContent=\'👤 \'+n;})">Change Name</button>' +
            '</div>' +
            '</div>' +
            '<div id="gamesPageContent" class="games-grid"></div>' +

            // Flash Cards Page
            '<div id="flashCardsPage" style="display:none;" class="game-page-wrapper">' +
            '<div class="game-page-header">' +
            '<button class="game-back-btn" id="fc-back-btn" onclick="window.showPage(\'games\')">← Games</button>' +
            '<span class="game-page-label">Flash Cards</span>' +
            '<span id="fc-score" class="game-score-badge">0 / 0</span>' +
            '</div>' +
            '<div class="fc-content">' +
            '<p id="fc-question" class="game-question-text">Loading…</p>' +
            '<div id="fc-options-grid" class="fc-grid"></div>' +
            '<div id="fc-explanation" class="game-explanation" style="display:none;"></div>' +
            '<button id="fc-next-btn" class="game-btn game-btn-primary" onclick="window.fcNext()" style="display:none;">Next →</button>' +
            '</div>' +
            '</div>' +

            // Guess the Word Page
            '<div id="guessWordPage" style="display:none;" class="game-page-wrapper">' +
            '<div class="game-page-header">' +
            '<button class="game-back-btn" id="gw-back-btn" onclick="window.showPage(\'games\')">← Games</button>' +
            '<span class="game-page-label">Guess the Word</span>' +
            '<span id="gw-score" class="game-score-badge">0 / 0</span>' +
            '</div>' +
            '<div class="gw-content">' +
            '<p id="gw-sentence" class="game-question-text gw-sentence">Loading…</p>' +
            '<div id="gw-options" class="gw-options-list"></div>' +
            '<div id="gw-explanation" class="game-explanation" style="display:none;"></div>' +
            '<button id="gw-next-btn" class="game-btn game-btn-primary" onclick="window.gwNext()" style="display:none;">Next →</button>' +
            '</div>' +
            '</div>' +

            // Millionaire Page
            '<div id="millionairePage" style="display:none;" class="game-page-wrapper mil-page">' +
            '<div class="game-page-header">' +
            '<button class="game-back-btn" onclick="window.showPage(\'games\')">← Games</button>' +
            '<span class="game-page-label">Millionaire</span>' +
            '</div>' +
            '<div class="mil-layout">' +
            '<div class="mil-main">' +
            '<div class="mil-lifelines">' +
            '<button id="mil-lifeline-5050" class="mil-lifeline-btn" onclick="window.milLifeline5050()">50:50</button>' +
            '<button id="mil-lifeline-audience" class="mil-lifeline-btn" onclick="window.milLifelineAudience()">👥 Ask</button>' +
            '<button id="mil-lifeline-friend" class="mil-lifeline-btn" onclick="window.milLifelineFriend()">📞 Friend</button>' +
            '<button id="mil-walkaway-btn" class="mil-lifeline-btn mil-walk" onclick="window.milWalkAway()">🚶 Walk</button>' +
            '</div>' +
            '<p id="mil-prize-current" class="mil-prize-current">For: ₦1,000</p>' +
            '<p id="mil-question" class="game-question-text mil-question">Loading…</p>' +
            '<div id="mil-options-grid" class="mil-options-grid"></div>' +
            '</div>' +
            '<div class="mil-sidebar">' +
            '<div id="mil-ladder" class="mil-ladder"></div>' +
            '</div>' +
            '</div>' +
            '<div id="mil-result" class="mil-result-overlay" style="display:none;"></div>' +
            '</div>' +

            // Time Attack Page
            '<div id="timeAttackPage" style="display:none;" class="game-page-wrapper">' +
            '<div class="game-page-header">' +
            '<button class="game-back-btn" onclick="if(ta&&ta.timer)clearInterval(ta.timer);if(ta)ta.running=false;window.showPage(\'games\')">← Games</button>' +
            '<span class="game-page-label">Time Attack</span>' +
            '<div class="ta-stats-bar">' +
            '<span>✅ <b id="ta-stat-correct">0</b></span>' +
            '<span>❌ <b id="ta-stat-wrong">0</b></span>' +
            '<span>📋 <b id="ta-stat-total">0</b></span>' +
            '</div>' +
            '</div>' +
            '<div class="ta-content">' +
            '<div class="ta-timer-wrap">' +
            '<svg id="ta-timer-svg" width="120" height="120" viewBox="0 0 120 120">' +
            '<circle cx="60" cy="60" r="54" fill="none" stroke="#1e293b" stroke-width="10"/>' +
            '<circle id="ta-timer-circle" cx="60" cy="60" r="54" fill="none" stroke="#22c55e" stroke-width="10"' +
            ' stroke-dasharray="' + TA_CIRC.toFixed(1) + '" stroke-dashoffset="0"' +
            ' stroke-linecap="round" transform="rotate(-90 60 60)" style="transition:stroke-dashoffset 1s linear;"/>' +
            '<text id="ta-timer-text" x="60" y="65" text-anchor="middle" font-size="28" font-weight="700" fill="#22c55e">60</text>' +
            '</svg>' +
            '</div>' +
            '<p id="ta-question" class="game-question-text">Loading…</p>' +
            '<div id="ta-options" class="ta-options-list"></div>' +
            '</div>' +
            '<div id="ta-result" class="ta-result-overlay" style="display:none;"></div>' +
            '</div>' +

            // Daily Challenge Page
            '<div id="dailyChallengePage" style="display:none;" class="game-page-wrapper">' +
            '<div class="game-page-header">' +
            '<button class="game-back-btn" onclick="window.showPage(\'games\')">← Games</button>' +
            '<span class="game-page-label">Daily Challenge</span>' +
            '<span id="dc-streak" class="game-score-badge">🔥 0 day streak</span>' +
            '</div>' +
            '<div class="dc-content">' +
            '<div class="dc-meta">' +
            '<span id="dc-date" class="dc-date-label"></span>' +
            '<span id="dc-progress" class="dc-progress-label">Q 1/10</span>' +
            '</div>' +
            '<p id="dc-question" class="game-question-text">Loading…</p>' +
            '<div id="dc-options" class="dc-options-list"></div>' +
            '<div id="dc-explanation" class="game-explanation" style="display:none;"></div>' +
            '<button id="dc-next-btn" class="game-btn game-btn-primary" onclick="window.dcNext()" style="display:none;">Next →</button>' +
            '</div>' +
            '<div id="dc-result" class="dc-result-overlay" style="display:none;"></div>' +
            '<div id="dc-already-played" class="dc-already-overlay" style="display:none;"></div>' +
            '</div>' +

            // Weekly Challenge Page
            '<div id="weeklyChallengePage" style="display:none;" class="game-page-wrapper"></div>' +

            '</div>'; // games-page-inner

        // Inject into container
        var container = document.querySelector('.container');
        if (container) {
            container.appendChild(page);
        } else {
            document.body.appendChild(page);
        }
    }

    // ==================== GAMES TAB & PAGE ROUTING ====================

    function initGamesTabBar() {
        // Check if games tab already exists
        var tabBar = document.querySelector('.bottom-tab-bar');
        if (!tabBar) return;

        var existingGamesTab = tabBar.querySelector('[data-page="games"]');
        if (!existingGamesTab) {
            var gamesTab = document.createElement('div');
            gamesTab.className = 'tab-item';
            gamesTab.setAttribute('data-page', 'games');
            gamesTab.innerHTML = '<i class="fas fa-gamepad"></i><span>Games</span>';
            tabBar.appendChild(gamesTab);

            gamesTab.addEventListener('click', function () {
                window.showPage('games');
            });
        }

        // Patch showPage to handle games
        var origShowPage = window.showPage;
        window.showPage = function (page) {
            // Hide all game sub-pages first
            hideAllGamePages();
            var gPage = document.getElementById('gamesPage');

            if (page === 'games') {
                // Call original to hide main pages + set tab active
                origShowPage('games'); // will hit else branch — just hides main pages
                if (gPage) gPage.style.display = 'block';
                renderGamesPage();
                updateGamesUsernameBar();
                document.body.style.overflow = '';
                document.documentElement.style.overflow = '';
                window.scrollTo(0, 0);
                // Set tab active state
                document.querySelectorAll('.tab-item').forEach(function (t) {
                    t.classList.toggle('active', t.getAttribute('data-page') === 'games');
                });
            } else {
                if (gPage) gPage.style.display = 'none';
                origShowPage(page);
            }
        };
    }

    function updateGamesUsernameBar() {
        var el = document.getElementById('games-username-display');
        if (el) {
            var name = getUsername();
            el.textContent = name ? '👤 ' + name : '';
        }
    }

    // ==================== GAMES CSS INJECTION ====================

    function injectGameStyles() {
        if (document.getElementById('gamesStyles')) return;
        var style = document.createElement('style');
        style.id = 'gamesStyles';
        style.textContent = [
            /* ---- Layout ---- */
            '.games-page-inner{padding:0 0 80px;}',
            '.games-hero{background:linear-gradient(135deg,#0f172a,#1e293b);padding:28px 20px 20px;text-align:center;}',
            '.games-hero-title{font-size:28px;font-weight:800;color:#22c55e;margin:0 0 4px;}',
            '.games-hero-sub{color:#94a3b8;margin:0 0 12px;font-size:14px;}',
            '#games-username-bar{display:flex;align-items:center;justify-content:center;gap:10px;flex-wrap:wrap;}',
            '#games-username-display{color:#f1f5f9;font-size:14px;}',
            '.game-btn-sm{background:#1e293b;border:1px solid #334155;color:#94a3b8;padding:5px 12px;border-radius:20px;cursor:pointer;font-size:12px;}',
            '.games-grid{display:grid;grid-template-columns:1fr;gap:14px;padding:18px;}',
            '@media(min-width:500px){.games-grid{grid-template-columns:1fr 1fr;}}',

            /* ---- Game Cards ---- */
            '.game-card{display:flex;align-items:center;gap:14px;padding:18px;border-radius:16px;cursor:pointer;position:relative;transition:transform .15s,box-shadow .15s;}',
            '.game-card:active{transform:scale(.97);}',
            '.game-card-icon{font-size:32px;flex-shrink:0;}',
            '.game-card-info{flex:1;min-width:0;}',
            '.game-card-title{color:#fff;font-size:16px;font-weight:700;margin:0 0 4px;}',
            '.game-card-desc{color:rgba(255,255,255,.8);font-size:12px;margin:0;line-height:1.4;}',
            '.game-card-lb-btn{background:rgba(0,0,0,.25);border:none;color:#fff;border-radius:50%;width:34px;height:34px;font-size:16px;cursor:pointer;flex-shrink:0;}',
            '.game-badge{background:rgba(0,0,0,.3);color:#fff;font-size:10px;padding:2px 7px;border-radius:10px;vertical-align:middle;margin-left:6px;}',

            /* ---- Game Page Wrapper ---- */
            '.game-page-wrapper{display:none;min-height:100vh;background:#0f172a;padding-bottom:80px;}',
            '.game-page-header{display:flex;align-items:center;gap:10px;padding:14px 16px;background:#1e293b;border-bottom:1px solid #334155;position:sticky;top:0;z-index:10;}',
            '.game-back-btn{background:none;border:none;color:#22c55e;font-size:14px;cursor:pointer;padding:6px 10px;border-radius:8px;}',
            '.game-back-btn:hover{background:#1e293b;}',
            '.game-page-label{flex:1;color:#f1f5f9;font-weight:700;font-size:15px;}',
            '.game-score-badge{background:#22c55e;color:#fff;padding:4px 12px;border-radius:20px;font-size:13px;font-weight:700;}',
            '.game-question-text{color:#f1f5f9;font-size:17px;line-height:1.55;padding:20px 16px;margin:0;}',
            '.game-explanation{background:#1e293b;border-left:4px solid #22c55e;padding:14px 16px;margin:0 16px 16px;border-radius:0 8px 8px 0;color:#94a3b8;font-size:14px;line-height:1.5;}',
            '.game-btn{display:inline-block;padding:13px 24px;border-radius:10px;border:none;font-size:15px;font-weight:700;cursor:pointer;margin:6px 4px;transition:opacity .15s;}',
            '.game-btn:active{opacity:.8;}',
            '.game-btn-primary{background:linear-gradient(135deg,#22c55e,#16a34a);color:#fff;}',
            '.game-btn-secondary{background:#334155;color:#f1f5f9;}',
            '.game-btn-ghost{background:transparent;border:1px solid #334155;color:#94a3b8;}',
            '.game-end-overlay{position:fixed;inset:0;background:rgba(0,0,0,.9);display:flex;align-items:center;justify-content:center;z-index:200;}',
            '.game-end-screen{background:#1e293b;border-radius:20px;padding:32px 24px;text-align:center;width:90%;max-width:380px;}',
            '.game-end-trophy{font-size:56px;margin-bottom:12px;}',
            '.game-end-screen h2{color:#f1f5f9;margin:0 0 10px;}',
            '.game-end-score{font-size:52px;font-weight:800;color:#22c55e;line-height:1;}',
            '.game-end-score span{font-size:22px;color:#64748b;}',
            '.game-end-pct{color:#94a3b8;font-size:18px;margin:4px 0 20px;}',

            /* ---- Flash Cards ---- */
            '.fc-content{padding:0 0 20px;}',
            '.fc-grid{display:grid;grid-template-columns:1fr 1fr;gap:12px;padding:0 16px;}',
            '.fc-card{background:#1e293b;border-radius:14px;padding:18px 12px;cursor:pointer;transition:transform .12s,background .15s;border:2px solid transparent;display:flex;flex-direction:column;align-items:center;gap:8px;text-align:center;}',
            '.fc-card:active{transform:scale(.96);}',
            '.fc-letter{font-size:20px;font-weight:800;color:#22c55e;}',
            '.fc-text{color:#cbd5e1;font-size:13px;line-height:1.4;}',
            '.fc-correct{background:#065f46 !important;border-color:#22c55e !important;}',
            '.fc-wrong{background:#7f1d1d !important;border-color:#ef4444 !important;}',

            /* ---- Guess the Word ---- */
            '.gw-content{padding:0 0 20px;}',
            '.gw-sentence{background:#1e293b;margin:16px;border-radius:12px;padding:18px !important;}',
            '.gw-options-list{display:flex;flex-direction:column;gap:10px;padding:0 16px;}',
            '.gw-option-btn{background:#1e293b;border:2px solid #334155;color:#f1f5f9;padding:14px 16px;border-radius:12px;text-align:left;font-size:15px;cursor:pointer;transition:background .15s;}',
            '.gw-option-btn:active{opacity:.8;}',
            '.gw-letter{color:#22c55e;font-weight:700;margin-right:6px;}',
            '.gw-correct{background:#065f46 !important;border-color:#22c55e !important;}',
            '.gw-wrong{background:#7f1d1d !important;border-color:#ef4444 !important;}',
            '#gw-next-btn{margin:16px;}',

            /* ---- Millionaire ---- */
            '.mil-page{}',
            '.mil-layout{display:flex;gap:0;flex-direction:column;}',
            '@media(min-width:640px){.mil-layout{flex-direction:row;}}',
            '.mil-main{flex:1;padding:0 0 20px;}',
            '.mil-sidebar{width:100%;padding:10px 16px;}',
            '@media(min-width:640px){.mil-sidebar{width:180px;}}',
            '.mil-lifelines{display:flex;gap:8px;padding:12px 16px;flex-wrap:wrap;}',
            '.mil-lifeline-btn{background:#334155;border:none;color:#f1f5f9;padding:8px 12px;border-radius:20px;font-size:13px;cursor:pointer;font-weight:600;}',
            '.mil-walk{background:#7f1d1d;color:#fca5a5;}',
            '.mil-prize-current{text-align:center;color:#f59e0b;font-size:18px;font-weight:700;margin:0;padding:8px;}',
            '.mil-question{background:#1e293b;margin:8px 16px;border-radius:12px;font-size:16px !important;}',
            '.mil-options-grid{display:grid;grid-template-columns:1fr 1fr;gap:10px;padding:0 16px;}',
            '.mil-option-btn{background:#1e293b;border:2px solid #334155;color:#f1f5f9;padding:14px 12px;border-radius:12px;text-align:left;font-size:14px;cursor:pointer;transition:background .15s;}',
            '.mil-option-btn:active{opacity:.8;}',
            '.mil-opt-letter{color:#f59e0b;font-weight:700;margin-right:6px;}',
            '.mil-chosen{background:#1d4ed8 !important;border-color:#3b82f6 !important;}',
            '.mil-correct{background:#065f46 !important;border-color:#22c55e !important;}',
            '.mil-wrong{background:#7f1d1d !important;border-color:#ef4444 !important;}',
            '.mil-ladder{display:flex;flex-direction:column;gap:4px;}',
            '.mil-rung{display:flex;justify-content:space-between;padding:6px 10px;border-radius:8px;background:#1e293b;font-size:13px;color:#94a3b8;}',
            '.mil-rung.mil-safe{border-left:3px solid #f59e0b;color:#f59e0b;}',
            '.mil-rung.mil-current{background:#22c55e;color:#fff;font-weight:700;}',
            '.mil-rung-num{font-size:11px;opacity:.6;}',
            '.mil-overlay{position:absolute;inset:0;background:rgba(0,0,0,.85);display:flex;align-items:center;justify-content:center;border-radius:0;z-index:50;}',
            '.mil-result-overlay{position:fixed;inset:0;background:rgba(0,0,0,.9);z-index:100;align-items:center;justify-content:center;}',
            '.mil-result-inner{background:#1e293b;border-radius:20px;padding:32px 24px;text-align:center;width:90%;max-width:380px;}',
            '.mil-result-icon{font-size:56px;margin-bottom:12px;}',
            '.mil-result-inner h2{color:#f1f5f9;margin:0 0 10px;}',
            '.mil-result-inner p{color:#94a3b8;margin:0 0 20px;}',
            '.mil-result-actions{display:flex;flex-direction:column;gap:8px;}',
            '.lifeline-overlay-inner{background:#1e293b;border-radius:16px;padding:24px;width:90%;max-width:360px;text-align:center;}',
            '.lifeline-overlay-inner h3{color:#f1f5f9;margin:0 0 16px;}',
            '.aud-bars{display:flex;flex-direction:column;gap:10px;margin-bottom:16px;}',
            '.aud-bar-wrap{display:flex;align-items:center;gap:8px;}',
            '.aud-label{color:#f1f5f9;font-weight:700;width:16px;}',
            '.aud-bar{flex:1;background:#334155;border-radius:4px;height:18px;overflow:hidden;}',
            '.aud-fill{background:#22c55e;height:100%;border-radius:4px;transition:width .6s ease;}',
            '.aud-pct{color:#94a3b8;font-size:12px;width:36px;text-align:right;}',
            '.friend-msg{color:#cbd5e1;font-size:15px;line-height:1.5;margin-bottom:20px;}',

            /* ---- Time Attack ---- */
            '.ta-content{display:flex;flex-direction:column;align-items:center;padding:20px 0;}',
            '.ta-timer-wrap{margin-bottom:16px;}',
            '#ta-timer-svg{filter:drop-shadow(0 0 12px #22c55e44);}',
            '.ta-stats-bar{display:flex;gap:14px;font-size:13px;color:#94a3b8;}',
            '.ta-options-list{display:flex;flex-direction:column;gap:10px;padding:0 16px;width:100%;box-sizing:border-box;}',
            '.ta-option-btn{background:#1e293b;border:2px solid #334155;color:#f1f5f9;padding:14px 16px;border-radius:12px;text-align:left;font-size:15px;cursor:pointer;transition:background .15s;}',
            '.ta-letter{color:#22c55e;font-weight:700;margin-right:6px;}',
            '.ta-correct{background:#065f46 !important;border-color:#22c55e !important;}',
            '.ta-wrong{background:#7f1d1d !important;border-color:#ef4444 !important;}',
            '.ta-result-overlay{position:fixed;inset:0;background:rgba(0,0,0,.9);z-index:100;align-items:center;justify-content:center;}',
            '.ta-result-inner{background:#1e293b;border-radius:20px;padding:32px 24px;text-align:center;width:90%;max-width:380px;}',
            '.ta-result-icon{font-size:56px;margin-bottom:12px;}',
            '.ta-result-inner h2{color:#f1f5f9;margin:0 0 16px;}',
            '.ta-result-stats{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:20px;}',
            '.ta-rs{background:#0f172a;border-radius:10px;padding:14px;color:#94a3b8;font-size:14px;}',
            '.ta-rs span{display:block;font-size:28px;font-weight:800;color:#22c55e;margin-bottom:4px;}',
            '@keyframes taPulse{from{opacity:1;}to{opacity:.4;}}',

            /* ---- Daily Challenge ---- */
            '.dc-content{padding:0 0 20px;}',
            '.dc-meta{display:flex;justify-content:space-between;align-items:center;padding:12px 16px;}',
            '.dc-date-label{color:#64748b;font-size:13px;}',
            '.dc-progress-label{color:#22c55e;font-size:13px;font-weight:700;}',
            '.dc-options-list{display:flex;flex-direction:column;gap:10px;padding:0 16px;}',
            '.dc-option-btn{background:#1e293b;border:2px solid #334155;color:#f1f5f9;padding:14px 16px;border-radius:12px;text-align:left;font-size:15px;cursor:pointer;transition:background .15s;}',
            '.dc-letter{color:#8b5cf6;font-weight:700;margin-right:6px;}',
            '.dc-correct{background:#065f46 !important;border-color:#22c55e !important;}',
            '.dc-wrong{background:#7f1d1d !important;border-color:#ef4444 !important;}',
            '#dc-next-btn{margin:16px;}',
            '.dc-result-overlay,.dc-already-overlay{position:fixed;inset:0;background:rgba(0,0,0,.9);z-index:100;align-items:center;justify-content:center;}',
            '.dc-result-inner,.dc-already-inner{background:#1e293b;border-radius:20px;padding:32px 24px;text-align:center;width:90%;max-width:380px;}',
            '.dc-result-icon,.dc-already-icon{font-size:56px;margin-bottom:12px;}',
            '.dc-result-inner h2,.dc-already-inner h2{color:#f1f5f9;margin:0 0 10px;}',
            '.dc-result-inner p,.dc-already-inner p{color:#94a3b8;margin:0 0 12px;}',

            /* ---- Weekly Coming Soon ---- */
            '.weekly-coming-soon{display:flex;flex-direction:column;align-items:center;justify-content:center;min-height:60vh;text-align:center;padding:30px 20px;}',
            '.wcs-icon{font-size:64px;margin-bottom:16px;}',
            '.weekly-coming-soon h2{color:#f1f5f9;font-size:24px;margin:0 0 8px;}',
            '.wcs-sub{color:#94a3b8;font-size:15px;margin:0 0 20px;}',
            '.wcs-badge{background:linear-gradient(135deg,#f59e0b,#d97706);color:#fff;padding:8px 24px;border-radius:20px;font-size:14px;font-weight:700;margin-bottom:16px;}',
            '.wcs-note{color:#64748b;font-size:13px;max-width:280px;line-height:1.5;margin:0 0 24px;}',

            /* ---- Course Selector Panel ---- */
            '.game-course-card{border-radius:12px;padding:14px 8px;text-align:center;cursor:pointer;transition:transform .12s;display:flex;flex-direction:column;align-items:center;gap:6px;}',
            '.game-course-card:active{transform:scale(.95);}',
            '.game-course-icon{font-size:28px;}',
            '.game-course-name{color:#fff;font-size:12px;font-weight:700;}',
            '.game-topic-chip{background:#1e293b;border:2px solid #334155;color:#94a3b8;padding:8px 14px;border-radius:20px;font-size:13px;cursor:pointer;transition:all .15s;}',
            '.game-topic-chip.active{background:#22c55e;border-color:#22c55e;color:#fff;}',
            '.gtc-count{opacity:.6;font-size:11px;}',

            /* ---- Leaderboard ---- */
            '#leaderboard-table-body tr{border-bottom:1px solid #1e293b;}',
            '#leaderboard-table-body td{padding:10px 6px;color:#f1f5f9;font-size:14px;}',
            '#leaderboard-table-body tr:first-child td{color:#f59e0b;font-weight:700;font-size:15px;}',

            /* ---- Shared ---- */
            '.spinner{width:36px;height:36px;border:4px solid #334155;border-top-color:#22c55e;border-radius:50%;animation:spin .7s linear infinite;}',
            '@keyframes spin{to{transform:rotate(360deg);}}'
        ].join('\n');
        document.head.appendChild(style);
    }

    // ==================== KEYBOARD SHORTCUTS ====================

    var _activeGameKeyHandler = null;
    var _activeGame = '';

    function registerKeyHandler(gameId) {
        _activeGame = gameId;
        if (_activeGameKeyHandler) {
            document.removeEventListener('keydown', _activeGameKeyHandler);
        }

        var keyMap = { '1': 'A', '2': 'B', '3': 'C', '4': 'D' };

        _activeGameKeyHandler = function (e) {
            var key = e.key;

            // Escape → back to games (with confirm if mid-game)
            if (key === 'Escape') {
                if (confirm('Back to Games menu?')) {
                    if (ta && ta.timer) clearInterval(ta.timer);
                    if (ta) ta.running = false;
                    window.showPage('games');
                }
                return;
            }

            // 1-4 → answer options
            if (keyMap[key]) {
                var letter = keyMap[key];
                switch (_activeGame) {
                    case 'flash-cards':     window.fcAnswer(letter);  break;
                    case 'guess-word':      window.gwAnswer(letter);  break;
                    case 'millionaire':     window.milAnswer(letter); break;
                    case 'time-attack':     window.taAnswer(letter);  break;
                    case 'daily-challenge': window.dcAnswer(letter);  break;
                    default: break;
                }
                return;
            }

            // Enter → next question
            if (key === 'Enter') {
                switch (_activeGame) {
                    case 'flash-cards':     { var nb = document.getElementById('fc-next-btn'); if (nb && nb.style.display !== 'none') window.fcNext(); break; }
                    case 'guess-word':      { var nb2 = document.getElementById('gw-next-btn'); if (nb2 && nb2.style.display !== 'none') window.gwNext(); break; }
                    case 'daily-challenge': { var nb3 = document.getElementById('dc-next-btn'); if (nb3 && nb3.style.display !== 'none') window.dcNext(); break; }
                    default: break;
                }
            }
        };

        document.addEventListener('keydown', _activeGameKeyHandler);
    }

    // ==================== HELPER: APPEND END SCREEN ====================

    function appendEndScreen(page, title, score, total, pct, gameId) {
        var existing = page.querySelector('.game-end-overlay');
        if (existing) existing.remove();

        var overlay = document.createElement('div');
        overlay.className = 'game-end-overlay';
        overlay.innerHTML = '<div class="game-end-screen">' +
            '<div class="game-end-trophy">' + (pct >= 70 ? '🏆' : pct >= 50 ? '👍' : '💪') + '</div>' +
            '<h2>' + esc(title) + '</h2>' +
            '<div class="game-end-score">' + score + '<span>/' + total + '</span></div>' +
            '<div class="game-end-pct">' + pct + '%</div>' +
            '<button class="game-btn game-btn-primary" onclick="window.saveScore(\'' + gameId + '\',' + score + ',\'' + score + '/' + total + '\');this.disabled=true;this.textContent=\'Saved!\'">Save Score</button>' +
            '<button class="game-btn game-btn-secondary" onclick="window.openGameCourseSelector(\'' + gameId + '\')">Play Again</button>' +
            '<button class="game-btn game-btn-ghost" onclick="window.showLeaderboard(\'' + gameId + '\')">Leaderboard</button>' +
            '<button class="game-btn game-btn-ghost" onclick="window.showPage(\'games\')">Back to Games</button>' +
            '</div>';
        page.appendChild(overlay);
    }

    // ==================== EXPOSE _selectedGameId FOR PANEL ---- ====================

    Object.defineProperty(window, '_selectedGameId', {
        get: function () { return _selectedGameId; },
        configurable: true
    });

    // ==================== INIT ====================

    document.addEventListener('DOMContentLoaded', function () {
        initFirebase();
        injectGameStyles();
        ensureUsernameModal();
        ensureLeaderboardModal();
        ensureGameCoursePanel();
        ensureGamesPage();
        initGamesTabBar();
    });

})();
