// ==================== TOPG INIT — GAMES MODULE ====================
// Vanilla JS, no frameworks.
// Depends on window.showPage (from main.js) and window.questionBank.
// Firebase compat SDK (v8) must be loaded before this file.

(function () {
    'use strict';

    // ==================== CONSTANTS ====================

    var PRIZE_LADDER = [
        '₦1,000', '₦2,000', '₦5,000', '₦10,000', '₦25,000',
        '₦50,000', '₦100,000', '₦250,000', '₦500,000', '₦1,000,000',
        '₦2,500,000', '₦5,000,000', '₦10,000,000', '₦25,000,000', '₦50,000,000'
    ];

    // Safe haven level indices (0-based)
    var SAFE_LEVELS = [3, 9];

    var COURSES_LIST = [
        { title: 'GST 102', bankKey: 'GST 102', icon: '📝', file: 'gst102.js',  iconGradient: 'linear-gradient(135deg,#667eea,#764ba2)' },
        { title: 'GST 104', bankKey: 'GST 112', icon: '🇳🇬', file: 'gst112.js', iconGradient: 'linear-gradient(135deg,#f97316,#ea580c)' },
        { title: 'MTH 102', bankKey: 'MTH 102', icon: '📐', file: 'mth102.js',  iconGradient: 'linear-gradient(135deg,#8b5cf6,#7c3aed)' },
        { title: 'CHM 102', bankKey: 'CHM 102', icon: '🧪', file: 'chm102.js',  iconGradient: 'linear-gradient(135deg,#f59e0b,#d97706)' },
        { title: 'MLS 102', bankKey: 'MLS 102', icon: '📜', file: 'mls102.js',  iconGradient: 'linear-gradient(135deg,#06b6d4,#0891b2)' },
        { title: 'BIO 102', bankKey: 'BIO 102', icon: '🔬', file: 'bio102.js',  iconGradient: 'linear-gradient(135deg,#10b981,#059669)' },
        { title: 'BIO 108', bankKey: 'BIO 108', icon: '🧫', file: 'bio108.js',  iconGradient: 'linear-gradient(135deg,#14b8a6,#0d9488)' },
        { title: 'PHY 102', bankKey: 'PHY 102', icon: '⚡', file: 'phy102.js',  iconGradient: 'linear-gradient(135deg,#ef4444,#dc2626)' },
        { title: 'COS 102', bankKey: 'COS 102', icon: '💻', file: 'cos102.js',  iconGradient: 'linear-gradient(135deg,#3b82f6,#1d4ed8)' },
        { title: 'MLS 104', bankKey: 'MLS 104', icon: '🦠', file: 'mls104.js',  iconGradient: 'linear-gradient(135deg,#84cc16,#65a30d)' }
    ];

    var TOPICS_MAP = {
        'GST 102': [
            { id: 'communication',   name: 'Communication Theory',              startIdx: 0,   endIdx: 56  },
            { id: 'ict',             name: 'Computer & ICT Basics',             startIdx: 56,  endIdx: 82  },
            { id: 'subject_verb',    name: 'Subject-Verb Agreement',            startIdx: 82,  endIdx: 94  },
            { id: 'essay',           name: 'Essay Writing',                     startIdx: 94,  endIdx: 116 },
            { id: 'language_skills', name: 'Language Skills',                   startIdx: 116, endIdx: 146 },
            { id: 'note_taking',     name: 'Note Taking & Outlining',           startIdx: 146, endIdx: 164 },
            { id: 'vocabulary',      name: 'Vocabulary & Word Formation',       startIdx: 164, endIdx: 176 },
            { id: 'code_switching',  name: 'Language Contact & Code Switching', startIdx: 176, endIdx: 179 },
            { id: 'pronunciation',   name: 'Pronunciation & Fluency',           startIdx: 179, endIdx: 188 },
            { id: 'grammar',         name: 'Grammar & Parts of Speech',         startIdx: 188, endIdx: 318 }
        ],
        'GST 104': [
            { id: 'pre_colonial',              name: 'Pre-Colonial Nigeria',        startIdx: 0,  endIdx: 15 },
            { id: 'colonial_nigeria',          name: 'Colonial Nigeria',            startIdx: 15, endIdx: 30 },
            { id: 'nationalism_independence',  name: 'Nationalism & Independence',  startIdx: 30, endIdx: 45 },
            { id: 'civil_war_military',        name: 'Civil War & Military Rule',   startIdx: 45, endIdx: 60 },
            { id: 'trade_economy',             name: 'Trade & Self-Reliance',       startIdx: 60, endIdx: 70 },
            { id: 'norms_values',              name: 'Norms, Values & Vices',       startIdx: 70, endIdx: 80 },
            { id: 'judiciary_rights',          name: 'Judiciary & Rights',          startIdx: 80, endIdx: 90 }
        ],
        'BIO 102': [
            { id: 'arthropoda',        name: 'Arthropoda & Arachnida',   startIdx: 0,   endIdx: 34  },
            { id: 'protozoa',          name: 'Protozoa',                  startIdx: 34,  endIdx: 49  },
            { id: 'porifera_mollusca', name: 'Porifera & Mollusca',       startIdx: 49,  endIdx: 58  },
            { id: 'aves',              name: 'Aves (Birds)',               startIdx: 58,  endIdx: 73  },
            { id: 'pisces',            name: 'Pisces (Fish)',              startIdx: 73,  endIdx: 85  },
            { id: 'taxonomy',          name: 'Taxonomy & Classification',  startIdx: 85,  endIdx: 100 },
            { id: 'last_mins',         name: 'Last Mins Must Know',        startIdx: 100, endIdx: 111 }
        ],
        'BIO 108': [
            { id: 'plant_anatomy',    name: 'Anatomy of Flowering Plants', startIdx: 0,  endIdx: 30  },
            { id: 'fruits_seeds',     name: 'Fruits and Seeds',            startIdx: 30, endIdx: 45  },
            { id: 'biological_wares', name: 'Handling Biological Wares',   startIdx: 45, endIdx: 55  },
            { id: 'animal_tissues',   name: 'Animal Tissues',              startIdx: 55, endIdx: 75  },
            { id: 'invertebrates',    name: 'Lower Invertebrates',         startIdx: 75, endIdx: 90  },
            { id: 'dissection',       name: 'Dissection & Practical',      startIdx: 90, endIdx: 100 }
        ],
        'CHM 102': [
            { id: 'amines_chemistry',   name: 'Amine Chemistry',           startIdx: 0,  endIdx: 31  },
            { id: 'proteins_amino_ii',  name: 'Proteins & Amino Acids',    startIdx: 31, endIdx: 56  },
            { id: 'stereo_isomerism',   name: 'Isomerism & Stereochem',    startIdx: 56, endIdx: 80  },
            { id: 'alcohols_carbonyls', name: 'Alcohols & Carbonyls',      startIdx: 80, endIdx: 100 }
        ],
        'GST 112': [
            { id: 'pre_colonial',              name: 'Pre-Colonial Nigeria',        startIdx: 0,  endIdx: 15 },
            { id: 'colonial_nigeria',          name: 'Colonial Nigeria',            startIdx: 15, endIdx: 30 },
            { id: 'nationalism_independence',  name: 'Nationalism & Independence',  startIdx: 30, endIdx: 45 },
            { id: 'civil_war_military',        name: 'Civil War & Military Rule',   startIdx: 45, endIdx: 60 },
            { id: 'trade_economy',             name: 'Trade & Self-Reliance',       startIdx: 60, endIdx: 70 },
            { id: 'norms_values',              name: 'Norms, Values & Vices',       startIdx: 70, endIdx: 80 },
            { id: 'judiciary_rights',          name: 'Judiciary & Rights',          startIdx: 80, endIdx: 90 }
        ],
        'PHY 102': [
            { id: 'electrostatics',  name: 'Electrostatics',            startIdx: 0,  endIdx: 18 },
            { id: 'dc_circuits',     name: 'DC Circuits',               startIdx: 18, endIdx: 27 },
            { id: 'magnetic_fields', name: 'Magnetic Fields',           startIdx: 27, endIdx: 34 },
            { id: 'em_induction',    name: 'EM Induction',              startIdx: 34, endIdx: 49 },
            { id: 'ac_circuits',     name: 'AC Circuits',               startIdx: 49, endIdx: 58 },
            { id: 'last_mins_calc',   name: 'Last Mins — Calculations',  startIdx: 58, endIdx: 69 },
            { id: 'last_mins_normal', name: 'Last Mins — Normal',         startIdx: 69, endIdx: 83 }
        ],
        'COS 102': [
            { id: 'intro_computing',     name: 'Intro to Computing',          startIdx: 0,  endIdx: 15  },
            { id: 'solvability',         name: 'Solvable & Unsolvable',       startIdx: 15, endIdx: 25  },
            { id: 'problem_techniques',  name: 'Problem Solving Techniques',  startIdx: 25, endIdx: 45  },
            { id: 'solution_design',     name: 'Solution Formulation',        startIdx: 45, endIdx: 65  },
            { id: 'implementation',      name: 'Implementation & Evaluation', startIdx: 65, endIdx: 80  },
            { id: 'programming_basics',  name: 'Programming Concepts',        startIdx: 80, endIdx: 100 }
        ],
        'MTH 102': [
            { id: 'functions',                name: 'Functions & Graphs',          startIdx: 0,  endIdx: 15  },
            { id: 'limits',                   name: 'Limits & Continuity',         startIdx: 15, endIdx: 25  },
            { id: 'differentiation',          name: 'Differentiation',             startIdx: 25, endIdx: 45  },
            { id: 'applications_derivatives', name: 'Applications of Derivatives', startIdx: 45, endIdx: 55  },
            { id: 'integration',              name: 'Integration',                 startIdx: 55, endIdx: 75  },
            { id: 'definite_integrals',       name: 'Definite Integrals',          startIdx: 75, endIdx: 90  },
            { id: 'advanced_topics',          name: 'Advanced Topics',             startIdx: 90, endIdx: 100 }
        ],
        'MLS 102': [
            { id: 'evolution',            name: 'Evolution of MLS',         startIdx: 0,  endIdx: 10 },
            { id: 'legislation',          name: 'MLS Legislation',           startIdx: 10, endIdx: 18 },
            { id: 'nomenclature',         name: 'Nomenclature & Certs',      startIdx: 18, endIdx: 25 },
            { id: 'training_regulations', name: 'Training Regulations',      startIdx: 25, endIdx: 32 },
            { id: 'accreditation',        name: 'Accreditation',             startIdx: 32, endIdx: 40 },
            { id: 'professional_bodies',  name: 'Professional Bodies',       startIdx: 40, endIdx: 60 },
            { id: 'timeline',             name: 'Historical Timeline',       startIdx: 60, endIdx: 65 }
        ],
        'MLS 104': [
            { id: 'disease_concepts', name: 'Concept & Classification',           startIdx: 0,  endIdx: 20 },
            { id: 'radiation',        name: 'Effects of Radiation',               startIdx: 20, endIdx: 30 },
            { id: 'morphological',    name: 'Morphological Changes (LM & EM)',    startIdx: 30, endIdx: 35 },
            { id: 'cellular_changes', name: 'Pathological Cellular Changes',      startIdx: 35, endIdx: 45 },
            { id: 'normal_flora',     name: 'Normal Flora',                       startIdx: 45, endIdx: 50 },
            { id: 'defense_path',     name: 'Defense, Pathogenicity & Transmission', startIdx: 50, endIdx: 65 }
        ]
    };

    // Expose as window globals per spec
    window.COURSES       = COURSES_LIST;
    window.COURSE_TOPICS = TOPICS_MAP;

    // ==================== HELPERS ====================

    function shuffleArray(arr) {
        var a = arr.slice();
        for (var i = a.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var tmp = a[i]; a[i] = a[j]; a[j] = tmp;
        }
        return a;
    }

    // Shuffle a question's options and update the answer letter to match
    function shuffleOptions(q) {
        var letters = ['A', 'B', 'C', 'D'];
        var correctIdx = letters.indexOf(q.answer);
        if (correctIdx < 0 || !q.options || q.options.length < 2) return q;

        var indexed = q.options.map(function (opt, i) {
            return { text: opt, isCorrect: i === correctIdx };
        });

        for (var i = indexed.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var tmp = indexed[i]; indexed[i] = indexed[j]; indexed[j] = tmp;
        }

        var newCorrectIdx = 0;
        for (var k = 0; k < indexed.length; k++) {
            if (indexed[k].isCorrect) { newCorrectIdx = k; break; }
        }

        return {
            question:    q.question,
            options:     indexed.map(function (o) { return o.text; }),
            answer:      letters[newCorrectIdx],
            explanation: q.explanation
        };
    }

    function esc(str) {
        return String(str || '')
            .replace(/&/g, '&amp;').replace(/</g, '&lt;')
            .replace(/>/g, '&gt;').replace(/"/g, '&quot;');
    }

    function restoreBodyScroll() {
        document.body.style.overflow = '';
        document.documentElement.style.overflow = '';
        window.scrollTo(0, 0);
    }

    var GAME_PAGE_IDS = [
        'flashCardsPage', 'guessWordPage', 'millionairePage',
        'timeAttackPage', 'dailyChallengePage', 'weeklyChallengePage'
    ];

    function hideAllGamePages() {
        GAME_PAGE_IDS.forEach(function (id) {
            var el = document.getElementById(id);
            if (el) el.style.display = 'none';
        });
    }

    function showGamePage(pageId) {
        // Game sub-pages are position:fixed full-screen overlays — just show the right one
        hideAllGamePages();
        var page = document.getElementById(pageId);
        if (page) {
            page.style.display = 'block';
            page.scrollTop = 0;
        }
        // Lock body scroll while a game is open (game page scrolls internally)
        document.body.style.overflow = 'hidden';
        document.documentElement.style.overflow = 'hidden';
    }

    function closeGame() {
        // Stop Time Attack timer if running
        if (ta && ta.timer) { clearInterval(ta.timer); ta.timer = null; ta.running = false; }
        hideAllGamePages();
        document.body.style.overflow = '';
        document.documentElement.style.overflow = '';
        if (window.showPage) window.showPage('games');
    }
    window.closeGame = closeGame;

    // ==================== FIREBASE INIT ====================

    function initFirebase() {
        try {
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
        } catch (e) {}
    }

    // ==================== USERNAME SYSTEM ====================

    function getUsername() {
        return localStorage.getItem('topg_username') || '';
    }

    function setUsername(name) {
        localStorage.setItem('topg_username', (name || '').trim());
    }

    function promptUsername(callback) {
        var existing = getUsername();
        if (existing) { callback(existing); return; }

        var modal = document.getElementById('usernameModal');
        if (!modal) {
            var name = (window.prompt('Enter your username to appear on the leaderboard:') || '').trim();
            if (name) setUsername(name);
            callback(name || 'Anonymous');
            return;
        }

        modal.style.display = 'flex';
        var input   = document.getElementById('usernameInput');
        var confirm = document.getElementById('usernameConfirmBtn');
        if (input) input.value = '';

        function submit() {
            var name = input ? input.value.trim() : '';
            if (!name) return;
            setUsername(name);
            modal.style.display = 'none';
            if (confirm) confirm.removeEventListener('click', submit);
            callback(name);
        }

        if (confirm) confirm.addEventListener('click', submit);
        if (input) {
            input.addEventListener('keydown', function handler(e) {
                if (e.key === 'Enter') { input.removeEventListener('keydown', handler); submit(); }
            });
        }
    }

    window.getUsername  = getUsername;
    window.setUsername  = setUsername;
    window.promptUsername = promptUsername;

    // ==================== QUESTION BANK LOADER ====================

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

    // ==================== SCORE / LEADERBOARD PERSISTENCE ====================

    function updateStats(gameId, score) {
        var key = 'topg_stats_' + gameId;
        var stats = { gamesPlayed: 0, totalScore: 0, bestScore: 0, lastPlayed: '' };
        try { stats = JSON.parse(localStorage.getItem(key) || JSON.stringify(stats)); } catch (e) {}
        stats.gamesPlayed = (stats.gamesPlayed || 0) + 1;
        stats.totalScore  = (stats.totalScore  || 0) + score;
        stats.bestScore   = Math.max(stats.bestScore || 0, score);
        stats.lastPlayed  = new Date().toISOString().slice(0, 10);
        localStorage.setItem(key, JSON.stringify(stats));
    }

    window.saveScore = function (gameId, score, details) {
        var username = getUsername() || 'Anonymous';
        var entry = {
            username:  username,
            score:     score,
            details:   details || '',
            timestamp: Date.now(),
            date:      new Date().toISOString().slice(0, 10)
        };

        // localStorage
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

        updateStats(gameId, score);
    };

    // ==================== LEADERBOARD MODAL ====================

    window.showLeaderboard = function (gameId) {
        var modal = document.getElementById('leaderboardModal');
        if (!modal) return;
        modal.style.display = 'flex';

        // Update tab active state if tabs exist
        document.querySelectorAll('.lb-tab').forEach(function (tab) {
            tab.classList.toggle('active', tab.getAttribute('data-game') === gameId);
        });

        var titleEl = document.getElementById('lb-game-title');
        if (titleEl) {
            var labels = {
                'global':      'Global All-Time',
                'flashcards':  'Flash Cards',
                'guessword':   'Guess the Word',
                'millionaire': 'Millionaire',
                'timeattack':  'Time Attack',
                'daily':       'Daily Challenge'
            };
            titleEl.textContent = labels[gameId] || gameId;
        }

        var tbody  = document.getElementById('leaderboard-table-body');
        var loadEl = document.getElementById('lb-loading');
        var emptyEl= document.getElementById('lb-empty');
        var tableEl= document.getElementById('lb-table');

        if (loadEl)  loadEl.style.display  = 'block';
        if (emptyEl) emptyEl.style.display = 'none';
        if (tableEl) tableEl.style.display = 'none';
        if (tbody)   tbody.innerHTML = '';

        function renderRows(entries) {
            if (loadEl)  loadEl.style.display  = 'none';
            if (!entries.length) {
                if (emptyEl) emptyEl.style.display = 'block';
                if (tableEl) tableEl.style.display = 'none';
                return;
            }
            if (tableEl) tableEl.style.display = 'table';
            if (!tbody) return;
            tbody.innerHTML = entries.slice(0, 10).map(function (e, i) {
                var medal = i === 0 ? '🥇' : i === 1 ? '🥈' : i === 2 ? '🥉' : (i + 1);
                return '<tr><td>' + medal + '</td><td>' + esc(e.username) + '</td>' +
                    '<td>' + e.score + '</td><td>' + (e.date || '') + '</td></tr>';
            }).join('');
        }

        if (window.db && gameId !== 'global') {
            if (window._lbUnsubscribe) { window._lbUnsubscribe(); window._lbUnsubscribe = null; }
            window._lbUnsubscribe = window.db
                .collection('leaderboard').doc(gameId).collection('scores')
                .orderBy('score', 'desc').limit(10)
                .onSnapshot(function (snap) {
                    var entries = [];
                    snap.forEach(function (doc) { entries.push(doc.data()); });
                    renderRows(entries);
                }, function () { renderLocalLeaderboard(gameId, renderRows); });
        } else {
            renderLocalLeaderboard(gameId, renderRows);
        }
    };

    window.closeLeaderboard = function () {
        var modal = document.getElementById('leaderboardModal');
        if (modal) modal.style.display = 'none';
        if (window._lbUnsubscribe) { window._lbUnsubscribe(); window._lbUnsubscribe = null; }
    };

    // Called from leaderboard modal tab buttons
    window.switchLeaderboardTab = function (gameId) {
        window.showLeaderboard(gameId);
    };

    // Called from leaderboard modal close button (also in HTML)
    window.openLeaderboard = function (gameId) {
        window.showLeaderboard(gameId);
    };

    function renderLocalLeaderboard(gameId, renderFn) {
        if (gameId === 'global') {
            // Merge all game leaderboards
            var allGames = ['flashcards', 'guessword', 'millionaire', 'timeattack', 'daily'];
            var merged = [];
            allGames.forEach(function (g) {
                var key = 'topg_lb_' + g;
                try {
                    var arr = JSON.parse(localStorage.getItem(key) || '[]');
                    merged = merged.concat(arr);
                } catch (e) {}
            });
            merged.sort(function (a, b) { return b.score - a.score; });
            renderFn(merged);
        } else {
            var key2 = 'topg_lb_' + gameId;
            var arr2 = [];
            try { arr2 = JSON.parse(localStorage.getItem(key2) || '[]'); } catch (e) {}
            arr2.sort(function (a, b) { return b.score - a.score; });
            renderFn(arr2);
        }
    }

    // ==================== GAME COURSE / TOPIC SELECTOR ====================

    var _selectedGameId     = '';
    var _selectedCourseTitle = '';
    var _selectedBankKey    = '';
    var _selectedTopicId    = null;
    var _gameQuestions      = [];

    // Expose for HTML onclick references in the existing panel back button
    window._getSelectedGameId = function () { return _selectedGameId; };

    window.openGameCourseSelector = function (gameId) {
        _selectedGameId      = gameId;
        _selectedCourseTitle = '';
        _selectedBankKey     = '';
        _selectedTopicId     = null;
        _gameQuestions       = [];

        // Reset panel to course step
        var panel      = document.getElementById('gameCoursePanel');
        var courseStep = document.getElementById('gameCourseStep');
        var topicStep  = document.getElementById('gameTopicStep');
        var loadEl     = document.getElementById('gameCourseLoading');

        if (!panel) return;
        if (courseStep) courseStep.style.display = 'block';
        if (topicStep)  topicStep.style.display  = 'none';
        if (loadEl)     loadEl.style.display     = 'none';

        // Render course grid
        var grid = document.getElementById('gameCourseGrid');
        if (grid) {
            grid.innerHTML = COURSES_LIST.map(function (c) {
                return '<div class="game-course-card" ' +
                    'style="background:' + c.iconGradient + ';border-radius:12px;padding:12px 8px;' +
                    'text-align:center;cursor:pointer;transition:transform .12s;" ' +
                    'onclick="window.selectGameCourse(\'' + esc(c.title) + '\',\'' + esc(c.bankKey) + '\')">' +
                    '<div style="font-size:28px;">' + c.icon + '</div>' +
                    '<div style="color:#fff;font-size:12px;font-weight:700;margin-top:6px;">' + esc(c.title) + '</div>' +
                    '</div>';
            }).join('');
        }

        panel.style.display = 'flex';
    };

    window.selectGameCourse = function (courseTitle, bankKey) {
        _selectedCourseTitle = courseTitle;
        _selectedBankKey     = bankKey;
        _selectedTopicId     = 'all';

        var courseStep = document.getElementById('gameCourseStep');
        var topicStep  = document.getElementById('gameTopicStep');
        var loadEl     = document.getElementById('gameCourseLoading');

        if (courseStep) courseStep.style.display = 'none';
        if (loadEl)     loadEl.style.display     = 'block';

        window.loadQuestionBank(courseTitle).then(function () {
            if (loadEl)    loadEl.style.display    = 'none';
            if (topicStep) topicStep.style.display = 'block';

            var grid   = document.getElementById('gameTopicGrid');
            var topics = TOPICS_MAP[courseTitle] || [];
            var bank   = (window.questionBank && window.questionBank[bankKey]) || [];

            if (grid) {
                var allCount = bank.length;
                var allChip = '<div class="game-topic-chip active" id="gtc-all" ' +
                    'onclick="window.setGameTopic(\'all\')" ' +
                    'style="background:#22c55e;color:#fff;border:2px solid #22c55e;padding:8px 14px;border-radius:20px;font-size:13px;cursor:pointer;margin:4px;">' +
                    'All Topics (' + allCount + ')</div>';

                var chips = topics.map(function (t) {
                    var count = bank.slice(t.startIdx, t.endIdx).length;
                    return '<div class="game-topic-chip" id="gtc-' + t.id + '" ' +
                        'onclick="window.setGameTopic(\'' + t.id + '\')" ' +
                        'style="background:#1e293b;color:#94a3b8;border:2px solid #334155;padding:8px 14px;border-radius:20px;font-size:13px;cursor:pointer;margin:4px;">' +
                        esc(t.name) + ' (' + count + ')</div>';
                }).join('');

                grid.innerHTML = '<div style="display:flex;flex-wrap:wrap;gap:6px;">' + allChip + chips + '</div>';
            }
        });
    };

    window.setGameTopic = function (topicId) {
        _selectedTopicId = topicId;
        document.querySelectorAll('.game-topic-chip').forEach(function (el) {
            var isActive = el.id === 'gtc-' + topicId;
            el.style.background   = isActive ? '#22c55e' : '#1e293b';
            el.style.color        = isActive ? '#fff'    : '#94a3b8';
            el.style.borderColor  = isActive ? '#22c55e' : '#334155';
        });
    };

    window.startSelectedGame = window.startSelectedGame || function () {
        var bank  = (window.questionBank && window.questionBank[_selectedBankKey]) || [];
        var questions = bank.slice();

        if (_selectedTopicId && _selectedTopicId !== 'all') {
            var topics = TOPICS_MAP[_selectedCourseTitle] || [];
            var topic  = topics.find(function (t) { return t.id === _selectedTopicId; });
            if (topic) questions = bank.slice(topic.startIdx, topic.endIdx);
        }

        _gameQuestions = shuffleArray(questions).map(shuffleOptions);
        window.closeGameCoursePanel();

        // Map HTML onclick gameId strings to game functions
        switch (_selectedGameId) {
            case 'flashcards':   startFlashCards(_gameQuestions);  break;
            case 'guessword':    startGuessWord(_gameQuestions);    break;
            case 'millionaire':  startMillionaire(_gameQuestions);  break;
            case 'timeattack':   startTimeAttack(_gameQuestions);   break;
            case 'daily':        startDailyChallenge();             break;
            default: break;
        }
    };

    window.closeGameCoursePanel = function () {
        var panel = document.getElementById('gameCoursePanel');
        if (panel) panel.style.display = 'none';
    };

    // ==================== GAME 1 — FLASH CARDS ====================

    var fc = { questions: [], index: 0, score: 0, answered: false };

    var FC_MAX_LIVES = 3;

    function startFlashCards(questions) {
        if (!questions || !questions.length) {
            alert('No questions available. Please select a course.');
            return;
        }
        fc.questions = questions.slice(0, 20);
        fc.index     = 0;
        fc.score     = 0;
        fc.fails     = 0;
        fc.answered  = false;

        // Hide Next button — we auto-advance
        var nextBtn = document.getElementById('fc-next-btn');
        if (nextBtn) nextBtn.style.display = 'none';

        showGamePage('flashCardsPage');
        fcRender();
        registerKeyHandler('flashcards');
    }

    function fcLivesHTML() {
        var html = '';
        for (var i = 0; i < FC_MAX_LIVES; i++) {
            html += i < (FC_MAX_LIVES - fc.fails) ? '❤️' : '🖤';
        }
        return html;
    }

    function fcRender() {
        if (!fc.questions.length || fc.index >= fc.questions.length) {
            fcShowEnd(); return;
        }

        fc.answered = false;
        var q = fc.questions[fc.index];

        var scoreEl = document.getElementById('fc-score');
        var qEl     = document.getElementById('fc-question');
        var grid    = document.getElementById('fc-options-grid');
        var explEl  = document.getElementById('fc-explanation');
        var nextBtn = document.getElementById('fc-next-btn');

        if (scoreEl) scoreEl.innerHTML = fcLivesHTML() + '&nbsp;' + fc.score + '/' + fc.questions.length;
        if (qEl)     { qEl.textContent = q.question || ''; qEl.className = 'gp-question'; }
        if (explEl)  { explEl.style.display = 'none'; explEl.textContent = ''; explEl.className = 'gp-explanation'; }
        if (nextBtn) nextBtn.style.display = 'none';

        var letters = ['A', 'B', 'C', 'D'];
        if (grid) {
            grid.innerHTML = '';
            letters.forEach(function (letter, i) {
                var opt  = q.options && q.options[i] != null ? q.options[i] : '';
                var card = document.createElement('div');
                card.className = 'fc-card';
                card.id = 'fc-card-' + i;
                card.innerHTML = '<div class="fc-letter">' + letter + '</div>' +
                    '<div class="fc-option-text">' + esc(opt) + '</div>';
                card.addEventListener('click', (function (l) {
                    return function () { window.fcAnswer(l); };
                })(letter));
                grid.appendChild(card);
            });
        }
    }

    window.fcAnswer = function (chosen) {
        if (fc.answered) return;
        fc.answered = true;

        var q       = fc.questions[fc.index];
        var correct = q.answer;
        var letters = ['A', 'B', 'C', 'D'];
        var isRight = chosen === correct;

        letters.forEach(function (letter, i) {
            var card = document.getElementById('fc-card-' + i);
            if (!card) return;
            card.onclick = null;
            if (letter === correct)                                card.classList.add('fc-correct');
            else if (letter === chosen && letter !== correct)      card.classList.add('fc-wrong');
        });

        if (isRight) { fc.score++; soundCorrect(); } else { fc.fails++; soundWrong(); }

        var explEl  = document.getElementById('fc-explanation');
        var scoreEl = document.getElementById('fc-score');

        if (explEl) {
            var ci = 'ABCD'.indexOf(correct);
            explEl.textContent = q.explanation
                ? '💡 ' + q.explanation
                : '✅ Answer: ' + correct + ' — ' + ((q.options && q.options[ci]) || '');
            explEl.style.display = 'block';
        }
        if (scoreEl) scoreEl.innerHTML = fcLivesHTML() + '&nbsp;' + fc.score + '/' + fc.questions.length;

        // Auto-advance after 2s; end immediately if 3 lives gone
        var delay = fc.fails >= FC_MAX_LIVES ? 1200 : 2000;
        setTimeout(function () { window.fcNext(); }, delay);
    };

    window.fcNext = function () {
        if (fc.fails >= FC_MAX_LIVES) {
            fcShowEnd(); return;
        }
        fc.index++;
        fcRender();
    };

    function fcShowEnd() {
        var total = fc.questions.length;
        var pct   = total > 0 ? Math.round((fc.score / total) * 100) : 0;
        var page  = document.getElementById('flashCardsPage');
        if (!page) return;

        var existing = page.querySelector('.game-end-overlay');
        if (existing) existing.remove();

        promptUsername(function (username) {
            var overlay = document.createElement('div');
            overlay.className = 'game-end-overlay';
            overlay.innerHTML =
                '<div class="game-end-card">' +
                '<div class="game-end-icon">' + (pct >= 70 ? '🏆' : pct >= 50 ? '👍' : '💪') + '</div>' +
                '<h2 class="game-end-title">Flash Cards Done!</h2>' +
                '<div class="game-end-stats">' +
                '<div class="game-end-stat"><span class="game-end-val">' + fc.score + '</span><span class="game-end-lbl">Correct</span></div>' +
                '<div class="game-end-stat"><span class="game-end-val">' + fc.fails + ' / ' + FC_MAX_LIVES + '</span><span class="game-end-lbl">Lives Lost</span></div>' +
                '<div class="game-end-stat"><span class="game-end-val">' + pct + '%</span><span class="game-end-lbl">Score</span></div>' +
                '</div>' +
                '<button class="game-play-btn" onclick="window.saveScore(\'flashcards\',' + fc.score + ',\'' + fc.score + '/' + total + '\');this.textContent=\'Saved! ✓\';this.disabled=true;">Save Score</button>' +
                '<button class="game-play-btn" onclick="window.openGameCourseSelector(\'flashcards\')" style="background:#334155;margin-top:8px;">Play Again</button>' +
                '<button class="game-lb-tag" onclick="window.showLeaderboard(\'flashcards\')" style="display:block;margin-top:8px;width:100%;text-align:center;padding:12px;">🏆 Leaderboard</button>' +
                '<button class="game-lb-tag" onclick="window.showPage(\'games\')" style="display:block;margin-top:8px;width:100%;text-align:center;padding:12px;">← Back to Games</button>' +
                '</div>';
            page.appendChild(overlay);
        });
    }

    window.startFlashCards = startFlashCards;

    // ==================== GAME 2 — GUESS THE WORD ====================

    var gw = { questions: [], index: 0, score: 0, answered: false };

    function startGuessWord(questions) {
        if (!questions || !questions.length) {
            alert('No questions available. Please select a course.');
            return;
        }
        gw.questions = questions.slice(0, 20);
        gw.index     = 0;
        gw.score     = 0;
        gw.answered  = false;

        showGamePage('guessWordPage');

        // Wire next button (no onclick in HTML)
        var nextBtn = document.getElementById('gw-next-btn');
        if (nextBtn) nextBtn.onclick = window.gwNext;

        gwRender();
        registerKeyHandler('guessword');
    }

    function gwRender() {
        if (!gw.questions.length || gw.index >= gw.questions.length) {
            gwShowEnd(); return;
        }

        gw.answered = false;
        var q = gw.questions[gw.index];

        var scoreEl   = document.getElementById('gw-score');
        var sentenceEl= document.getElementById('gw-sentence');
        var optsEl    = document.getElementById('gw-options');
        var explEl    = document.getElementById('gw-explanation');
        var nextBtn   = document.getElementById('gw-next-btn');

        if (scoreEl) scoreEl.textContent = gw.score + ' / ' + gw.questions.length;

        // Build fill-in-the-blank display
        var text = q.question || '';
        // Replace the last word (3+ chars) before a question mark or at end
        var display = text.replace(/\b(\w{3,})(\s*\??\s*)$/, '____$2') || text + ' ____?';
        if (sentenceEl) sentenceEl.textContent = display;

        if (explEl)  { explEl.style.display = 'none'; explEl.textContent = ''; }
        if (nextBtn) nextBtn.style.display   = 'none';

        var letters = ['A', 'B', 'C', 'D'];
        var btns    = optsEl ? optsEl.querySelectorAll('.gp-opt') : [];

        letters.forEach(function (letter, i) {
            var opt = q.options && q.options[i] != null ? q.options[i] : '';
            var btn = btns[i];
            if (!btn) return;
            btn.textContent = letter + '. ' + opt;
            btn.className   = 'gp-opt'; btn.innerHTML = '<span class="gp-opt-letter">' + letter + '</span><span>' + esc(opt) + '</span>';
            btn.onclick     = (function (l) { return function () { window.gwAnswer(l); }; })(letter);
        });
    }

    window.gwAnswer = function (chosen) {
        if (gw.answered) return;
        gw.answered = true;

        var q       = gw.questions[gw.index];
        var correct = q.answer;
        var letters = ['A', 'B', 'C', 'D'];
        var optsEl  = document.getElementById('gw-options');
        var btns    = optsEl ? optsEl.querySelectorAll('.gp-opt') : [];

        btns.forEach(function (btn, i) {
            btn.onclick = null;
            if (letters[i] === correct) btn.classList.add('correct');
            else if (letters[i] === chosen && letters[i] !== correct) btn.classList.add('wrong');
        });

        if (chosen === correct) { gw.score++; soundCorrect(); } else { soundWrong(); }

        var explEl  = document.getElementById('gw-explanation');
        var nextBtn = document.getElementById('gw-next-btn');
        var scoreEl = document.getElementById('gw-score');

        if (explEl) {
            explEl.style.display = 'block';
            var ci = 'ABCD'.indexOf(correct);
            explEl.textContent = q.explanation
                ? 'Explanation: ' + q.explanation
                : 'Answer: ' + correct + ' — ' + ((q.options && q.options[ci]) || '');
        }
        if (nextBtn) nextBtn.style.display = 'inline-block';
        if (scoreEl) scoreEl.textContent   = gw.score + ' / ' + gw.questions.length;
    };

    window.gwNext = function () {
        gw.index++;
        gwRender();
    };

    function gwShowEnd() {
        var total = gw.questions.length;
        var pct   = total > 0 ? Math.round((gw.score / total) * 100) : 0;
        var page  = document.getElementById('guessWordPage');
        if (!page) return;

        var existing = page.querySelector('.game-end-overlay');
        if (existing) existing.remove();

        promptUsername(function () {
            var overlay = document.createElement('div');
            overlay.className = 'game-end-overlay';
            overlay.innerHTML =
                '<div class="game-end-card">' +
                '<div class="game-end-icon">' + (pct >= 70 ? '🏆' : '💪') + '</div>' +
                '<h2 class="game-end-title">Guess the Word Done!</h2>' +
                '<div class="game-end-stats">' +
                '<div class="game-end-stat"><span class="game-end-val">' + gw.score + '</span><span class="game-end-lbl">Correct</span></div>' +
                '<div class="game-end-stat"><span class="game-end-val">' + (total - gw.score) + '</span><span class="game-end-lbl">Wrong</span></div>' +
                '<div class="game-end-stat"><span class="game-end-val">' + pct + '%</span><span class="game-end-lbl">Score</span></div>' +
                '</div>' +
                '<button class="game-play-btn" onclick="window.saveScore(\'guessword\',' + gw.score + ',\'' + gw.score + '/' + total + '\');this.textContent=\'Saved! ✓\';this.disabled=true;">Save Score</button>' +
                '<button class="game-play-btn" onclick="window.openGameCourseSelector(\'guessword\')" style="background:#334155;margin-top:8px;">Play Again</button>' +
                '<button class="game-lb-tag" onclick="window.showLeaderboard(\'guessword\')" style="display:block;margin-top:8px;width:100%;text-align:center;padding:12px;">🏆 Leaderboard</button>' +
                '<button class="game-lb-tag" onclick="window.showPage(\'games\')" style="display:block;margin-top:8px;width:100%;text-align:center;padding:12px;">← Back to Games</button>' +
                '</div>';
            page.appendChild(overlay);
        });
    }

    window.startGuessWord = startGuessWord;

    // ==================== GAME 3 — WHO WANTS TO BE A MILLIONAIRE ====================

    var mil = {
        questions:    [],
        index:        0,
        safePrize:    '₦0',
        lifelinesUsed:{ ff: false, audience: false, friend: false },
        gameOver:     false
    };

    function startMillionaire(questions) {
        if (!questions || !questions.length) {
            alert('No questions available. Please select a course.');
            return;
        }
        mil.questions     = shuffleArray(questions).slice(0, 15);
        mil.index         = 0;
        mil.safePrize     = '₦0';
        mil.lifelinesUsed = { ff: false, audience: false, friend: false };
        mil.gameOver      = false;

        showGamePage('millionairePage');

        var resultEl   = document.getElementById('mil-result');
        var friendEl   = document.getElementById('mil-friend-overlay');
        var audienceEl = document.getElementById('mil-audience-overlay');
        if (resultEl)   resultEl.style.display   = 'none';
        if (friendEl)   friendEl.style.display   = 'none';
        if (audienceEl) audienceEl.style.display = 'none';

        // Wire lifeline buttons (no onclick in HTML)
        var ff  = document.getElementById('mil-lifeline-5050');
        var aud = document.getElementById('mil-lifeline-audience');
        var frn = document.getElementById('mil-lifeline-friend');
        var wlk = document.getElementById('mil-walkaway-btn');
        if (ff)  ff.onclick  = window.milLifeline5050;
        if (aud) aud.onclick = window.milLifelineAudience;
        if (frn) frn.onclick = window.milLifelineFriend;
        if (wlk) wlk.onclick = window.milWalkAway;

        // Clean up any previously dynamically added save buttons
        var oldSave = resultEl && resultEl.querySelector('.mil-save-btn');
        if (oldSave) oldSave.remove();

        milRender();
        milRenderLadder();
        registerKeyHandler('millionaire');
    }

    function milRender() {
        if (mil.index >= mil.questions.length || mil.index >= PRIZE_LADDER.length) {
            milWin(); return;
        }

        var q       = mil.questions[mil.index];
        var qEl     = document.getElementById('mil-question');
        var prizeEl = document.getElementById('mil-prize-current');
        var letters = ['A', 'B', 'C', 'D'];

        if (qEl)     qEl.textContent     = q.question || '';
        if (prizeEl) prizeEl.textContent = PRIZE_LADDER[mil.index];

        // Restore lifeline buttons
        var ff  = document.getElementById('mil-lifeline-5050');
        var aud = document.getElementById('mil-lifeline-audience');
        var frn = document.getElementById('mil-lifeline-friend');
        if (ff)  { ff.disabled  = mil.lifelinesUsed.ff;       ff.style.opacity  = mil.lifelinesUsed.ff       ? '0.4' : '1'; }
        if (aud) { aud.disabled = mil.lifelinesUsed.audience; aud.style.opacity = mil.lifelinesUsed.audience ? '0.4' : '1'; }
        if (frn) { frn.disabled = mil.lifelinesUsed.friend;   frn.style.opacity = mil.lifelinesUsed.friend   ? '0.4' : '1'; }

        // Use the existing button structure (data-letter + text span inside)
        var grid = document.getElementById('mil-options-grid');
        var btns = grid ? grid.querySelectorAll('.mil-option-btn') : [];
        btns.forEach(function (btn) {
            var letter   = btn.getAttribute('data-letter');
            var idx      = 'ABCD'.indexOf(letter);
            var opt      = q.options && q.options[idx] != null ? q.options[idx] : '';
            var textSpan = btn.querySelector('.mil-option-text') || btn;
            textSpan.textContent = opt;
            btn.style.visibility = 'visible';
            btn.className  = 'mil-option-btn';
            btn.onclick    = (function (l) { return function () { window.milAnswer(l); }; })(letter);
        });

        milRenderLadder();
    }

    function milRenderLadder() {
        var ladderInner = document.querySelector('#mil-ladder .mil-ladder-inner');
        if (!ladderInner) {
            // Fallback: use the ladder div directly
            ladderInner = document.getElementById('mil-ladder');
        }
        if (!ladderInner) return;

        ladderInner.innerHTML = PRIZE_LADDER.slice().reverse().map(function (p, i) {
            var realIdx  = PRIZE_LADDER.length - 1 - i;
            var isSafe   = SAFE_LEVELS.indexOf(realIdx) !== -1;
            var isCurrent= realIdx === mil.index;
            var style    = isCurrent ? 'background:#22c55e;color:#fff;font-weight:700;'
                : isSafe  ? 'border-left:3px solid #f59e0b;color:#f59e0b;'
                : '';
            return '<div style="display:flex;justify-content:space-between;padding:4px 8px;border-radius:6px;font-size:12px;' + style + '">' +
                '<span style="opacity:.6;">' + (realIdx + 1) + '</span>' +
                '<span>' + p + '</span>' +
                '</div>';
        }).join('');
    }

    window.milAnswer = function (chosen) {
        if (mil.gameOver) return;

        var q       = mil.questions[mil.index];
        var correct = q.answer;
        var grid    = document.getElementById('mil-options-grid');
        var btns    = grid ? grid.querySelectorAll('.mil-option-btn') : [];

        // Disable all
        btns.forEach(function (btn) { btn.onclick = null; });

        // Highlight chosen first
        btns.forEach(function (btn) {
            if (btn.getAttribute('data-letter') === chosen) btn.classList.add('mil-chosen');
        });

        setTimeout(function () {
            btns.forEach(function (btn) {
                var letter = btn.getAttribute('data-letter');
                btn.classList.remove('mil-chosen');
                if (letter === correct)                        btn.classList.add('mil-correct');
                else if (letter === chosen && letter !== correct) btn.classList.add('mil-wrong');
            });

            if (chosen === correct) {
                soundLevelUp();
                if (SAFE_LEVELS.indexOf(mil.index) !== -1) mil.safePrize = PRIZE_LADDER[mil.index];
                setTimeout(function () {
                    mil.index++;
                    if (mil.index >= Math.min(mil.questions.length, PRIZE_LADDER.length)) {
                        milWin();
                    } else {
                        milRender();
                    }
                }, 1200);
            } else {
                mil.gameOver = true;
                soundGameOver();
                setTimeout(function () { milGameOver(false); }, 1500);
            }
        }, 800);
    };

    window.milLifeline5050 = function () {
        if (mil.lifelinesUsed.ff || mil.gameOver) return;
        mil.lifelinesUsed.ff = true;
        var btn = document.getElementById('mil-lifeline-5050');
        if (btn) { btn.disabled = true; btn.style.opacity = '0.4'; }

        var q       = mil.questions[mil.index];
        var correct = q.answer;
        var wrong   = ['A','B','C','D'].filter(function (l) { return l !== correct; });
        wrong = shuffleArray(wrong).slice(0, 2);

        var grid = document.getElementById('mil-options-grid');
        var btns = grid ? grid.querySelectorAll('.mil-option-btn') : [];
        btns.forEach(function (btn2) {
            if (wrong.indexOf(btn2.getAttribute('data-letter')) !== -1) {
                btn2.style.visibility = 'hidden';
                btn2.onclick = null;
            }
        });
    };

    window.milLifelineAudience = function () {
        if (mil.lifelinesUsed.audience || mil.gameOver) return;
        mil.lifelinesUsed.audience = true;
        var btn = document.getElementById('mil-lifeline-audience');
        if (btn) { btn.disabled = true; btn.style.opacity = '0.4'; }

        var q       = mil.questions[mil.index];
        var correct = q.answer;
        var letters = ['A', 'B', 'C', 'D'];

        var correctPct = 40 + Math.floor(Math.random() * 31);
        var remaining  = 100 - correctPct;
        var others     = letters.filter(function (l) { return l !== correct; });
        var splits     = []; var rem = remaining;
        for (var i = 0; i < others.length - 1; i++) {
            var v = Math.floor(Math.random() * (rem + 1));
            splits.push(v); rem -= v;
        }
        splits.push(rem);
        splits = shuffleArray(splits);

        var pcts = {};
        pcts[correct] = correctPct;
        others.forEach(function (l, i) { pcts[l] = splits[i]; });

        // Populate existing audience bars in HTML
        var overlayEl = document.getElementById('mil-audience-overlay');
        if (overlayEl) {
            letters.forEach(function (l) {
                var bar = document.getElementById('mil-bar-' + l);
                var pct = document.getElementById('mil-pct-' + l);
                if (bar) bar.style.width = pcts[l] + '%';
                if (pct) pct.textContent = pcts[l] + '%';
            });
            overlayEl.style.display = 'flex';
        }
    };

    window.milLifelineFriend = function () {
        if (mil.lifelinesUsed.friend || mil.gameOver) return;
        mil.lifelinesUsed.friend = true;
        var btn = document.getElementById('mil-lifeline-friend');
        if (btn) { btn.disabled = true; btn.style.opacity = '0.4'; }

        var q       = mil.questions[mil.index];
        var correct = q.answer;

        var textEl   = document.getElementById('mil-friend-text');
        var overlayEl= document.getElementById('mil-friend-overlay');
        if (textEl)   textEl.textContent = '"Hmm, I think the answer is ' + correct + '… probably."';
        if (overlayEl) overlayEl.style.display = 'flex';
    };

    window.milWalkAway = function () {
        if (mil.gameOver) return;
        mil.gameOver = true;
        milGameOver(true);
    };

    function milGameOver(walkedAway) {
        var prize    = mil.safePrize || '₦0';
        var resultEl = document.getElementById('mil-result');
        if (!resultEl) return;

        var emojiEl = document.getElementById('mil-result-emoji');
        var titleEl = document.getElementById('mil-result-title');
        var prizeEl = document.getElementById('mil-result-prize');

        if (emojiEl) emojiEl.textContent = walkedAway ? '🚶' : '❌';
        if (titleEl) titleEl.textContent  = walkedAway ? 'You Walked Away!' : 'Wrong Answer!';
        if (prizeEl) prizeEl.textContent  = 'You take home: ' + prize;

        // Replace static play-again button's onclick if needed
        var playBtn = resultEl.querySelector('.game-play-btn');
        if (playBtn) playBtn.onclick = function () { window.openGameCourseSelector('millionaire'); };

        // Add save score button dynamically
        var existing = resultEl.querySelector('.mil-save-btn');
        if (!existing) {
            var saveBtn = document.createElement('button');
            saveBtn.className = 'game-lb-tag mil-save-btn';
            saveBtn.style.cssText = 'display:block;margin-top:10px;width:100%;text-align:center;padding:12px;';
            saveBtn.textContent = '💾 Save Score';
            saveBtn.onclick = function () {
                window.saveScore('millionaire', milPrizeToNum(prize), prize);
                saveBtn.textContent = 'Saved! ✓';
                saveBtn.disabled = true;
            };
            if (prizeEl && prizeEl.parentNode) {
                prizeEl.parentNode.insertBefore(saveBtn, playBtn || prizeEl.nextSibling);
            }
        }

        resultEl.style.display = 'flex';
    }

    function milWin() {
        var resultEl = document.getElementById('mil-result');
        if (!resultEl) return;

        var emojiEl = document.getElementById('mil-result-emoji');
        var titleEl = document.getElementById('mil-result-title');
        var prizeEl = document.getElementById('mil-result-prize');

        if (emojiEl) emojiEl.textContent = '🏆';
        if (titleEl) titleEl.textContent  = 'YOU WON!';
        if (prizeEl) prizeEl.textContent  = 'You take home: ₦50,000,000!';

        var playBtn = resultEl.querySelector('.game-play-btn');
        if (playBtn) playBtn.onclick = function () { window.openGameCourseSelector('millionaire'); };

        var existing = resultEl.querySelector('.mil-save-btn');
        if (!existing) {
            var saveBtn = document.createElement('button');
            saveBtn.className = 'game-lb-tag mil-save-btn';
            saveBtn.style.cssText = 'display:block;margin-top:10px;width:100%;text-align:center;padding:12px;';
            saveBtn.textContent = '💾 Save Score';
            saveBtn.onclick = function () {
                window.saveScore('millionaire', 50000000, '₦50M');
                saveBtn.textContent = 'Saved! ✓';
                saveBtn.disabled = true;
            };
            if (prizeEl && prizeEl.parentNode) {
                prizeEl.parentNode.insertBefore(saveBtn, playBtn || prizeEl.nextSibling);
            }
        }

        resultEl.style.display = 'flex';
    }

    function milPrizeToNum(prizeStr) {
        return parseInt((prizeStr || '0').replace(/[^0-9]/g, ''), 10) || 0;
    }

    window.startMillionaire = startMillionaire;

    // ==================== GAME 4 — TIME ATTACK ====================

    var TA_RADIUS = 54;
    var TA_CIRC   = 2 * Math.PI * TA_RADIUS; // ≈339.3

    var ta = {
        pool:      [],
        poolIdx:   0,
        timeLeft:  60,
        correct:   0,
        wrong:     0,
        total:     0,
        answered:  false,
        timer:     null,
        running:   false,
        currentQ:  null
    };

    function startTimeAttack(questions) {
        if (!questions || !questions.length) {
            alert('No questions available. Please select a course.');
            return;
        }
        if (ta.timer) clearInterval(ta.timer);

        ta.pool     = shuffleArray(questions);
        ta.poolIdx  = 0;
        ta.timeLeft = 60;
        ta.correct  = 0;
        ta.wrong    = 0;
        ta.total    = 0;
        ta.answered = false;
        ta.running  = true;
        ta.currentQ = null;

        showGamePage('timeAttackPage');

        var resultEl = document.getElementById('ta-result');
        if (resultEl) resultEl.style.display = 'none';

        taUpdateStats();
        taUpdateSVG();
        taRenderQuestion();
        taStartTimer();
        registerKeyHandler('timeattack');
    }

    function taRenderQuestion() {
        ta.answered = false;
        var q = ta.pool[ta.poolIdx % ta.pool.length];
        ta.poolIdx++;
        ta.currentQ = q;

        var qEl    = document.getElementById('ta-question');
        var optsEl = document.getElementById('ta-options');
        if (qEl) qEl.textContent = q.question || '';

        var letters = ['A', 'B', 'C', 'D'];
        var btns    = optsEl ? optsEl.querySelectorAll('.gp-opt') : [];

        letters.forEach(function (letter, i) {
            var opt = q.options && q.options[i] != null ? q.options[i] : '';
            var btn = btns[i];
            if (!btn) return;
            btn.textContent = letter + '. ' + opt;
            btn.className   = 'gp-opt'; btn.innerHTML = '<span class="gp-opt-letter">' + letter + '</span><span>' + esc(opt) + '</span>';
            btn.onclick     = (function (l) { return function () { window.taAnswer(l); }; })(letter);
        });
    }

    window.taAnswer = function (chosen) {
        if (ta.answered || !ta.running) return;
        ta.answered = true;
        ta.total++;

        var q       = ta.currentQ;
        var correct = q.answer;
        var letters = ['A', 'B', 'C', 'D'];
        var optsEl  = document.getElementById('ta-options');
        var btns    = optsEl ? optsEl.querySelectorAll('.gp-opt') : [];

        btns.forEach(function (btn, i) {
            btn.onclick = null;
            if (letters[i] === correct)                              btn.classList.add('correct');
            else if (letters[i] === chosen && letters[i] !== correct) btn.classList.add('wrong');
        });

        if (chosen === correct) {
            ta.correct++;
            ta.timeLeft = Math.min(ta.timeLeft + 2, 120);
            soundCorrect();
        } else {
            ta.wrong++;
            ta.timeLeft = Math.max(ta.timeLeft - 3, 1);
            soundWrong();
        }

        taUpdateStats();
        taUpdateSVG();

        setTimeout(function () { if (ta.running) taRenderQuestion(); }, 600);
    };

    function taStartTimer() {
        var textEl   = document.getElementById('ta-timer-text');
        var circleEl = document.getElementById('ta-timer-circle');

        ta.timer = setInterval(function () {
            if (!ta.running) { clearInterval(ta.timer); return; }
            ta.timeLeft--;
            taUpdateSVG();

            if (ta.timeLeft <= 10) { soundDanger(); } else if (ta.timeLeft % 5 === 0) { soundTick(); }

            if (textEl) {
                textEl.textContent = ta.timeLeft;
                textEl.setAttribute('fill', ta.timeLeft < 10 ? '#ef4444' : ta.timeLeft < 20 ? '#f59e0b' : '#f1f5f9');
            }
            if (circleEl) {
                circleEl.className = 'ta-timer-circle' + (ta.timeLeft < 10 ? ' danger' : ta.timeLeft < 20 ? ' warning' : '');
            }

            if (ta.timeLeft <= 0) {
                ta.running = false;
                clearInterval(ta.timer);
                soundGameOver();
                taShowEnd();
            }
        }, 1000);
    }

    function taUpdateSVG() {
        var circleEl = document.getElementById('ta-timer-circle');
        if (!circleEl) return;
        var fraction = Math.max(0, ta.timeLeft / 60);
        var offset   = TA_CIRC * (1 - fraction);
        circleEl.style.strokeDashoffset = offset;
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
        var pct = ta.total > 0 ? Math.round((ta.correct / ta.total) * 100) : 0;

        // Populate the existing result section elements
        var cEl   = document.getElementById('ta-result-correct');
        var wEl   = document.getElementById('ta-result-wrong');
        var accEl = document.getElementById('ta-result-acc');
        if (cEl)   cEl.textContent  = ta.correct;
        if (wEl)   wEl.textContent  = ta.wrong;
        if (accEl) accEl.textContent = pct + '%';

        // Wire up the static save button
        var saveBtn = document.querySelector('#ta-result .game-lb-save-btn');
        if (saveBtn) {
            saveBtn.onclick = function () {
                window.saveScore('timeattack', ta.correct, ta.correct + '/' + ta.total);
                saveBtn.textContent = 'Saved! ✓';
                saveBtn.disabled = true;
            };
        }

        // Wire up play-again button
        var playBtn = document.querySelector('#ta-result .game-play-btn');
        if (playBtn) playBtn.onclick = function () { window.openGameCourseSelector('timeattack'); };

        var resultEl = document.getElementById('ta-result');
        if (resultEl) resultEl.style.display = 'block';
    }

    // Called from HTML onclick
    window.saveTimeAttackScore = function () {
        window.saveScore('timeattack', ta.correct, ta.correct + '/' + ta.total);
        var btn = document.querySelector('.game-lb-save-btn');
        if (btn) { btn.textContent = 'Saved! ✓'; btn.disabled = true; }
    };

    window.startTimeAttack = startTimeAttack;

    // ==================== GAME 5 — DAILY CHALLENGE ====================

    var dc = { questions: [], index: 0, score: 0, answered: false, date: '' };

    function dcSeededRNG(seed) {
        var s = seed;
        return function () {
            s = (s * 1664525 + 1013904223) & 0xffffffff;
            return (s >>> 0) / 4294967296;
        };
    }

    function dcPickQuestions(dateStr) {
        window.questionBank = window.questionBank || {};
        var pool = [];
        Object.keys(window.questionBank).forEach(function (key) {
            var bank = window.questionBank[key];
            if (Array.isArray(bank)) pool = pool.concat(bank);
        });
        if (!pool.length) return [];

        var seed = 0;
        for (var i = 0; i < dateStr.length; i++) seed += dateStr.charCodeAt(i);
        var rng = dcSeededRNG(seed);

        var shuffled = pool.slice();
        for (var j = shuffled.length - 1; j > 0; j--) {
            var k = Math.floor(rng() * (j + 1));
            var tmp = shuffled[j]; shuffled[j] = shuffled[k]; shuffled[k] = tmp;
        }
        return shuffled.slice(0, 10);
    }

    function dcGetStreak() {
        var streak     = parseInt(localStorage.getItem('topg_dc_streak')      || '0', 10);
        var lastPlayed = localStorage.getItem('topg_dc_last_played') || '';
        var yesterday  = new Date(Date.now() - 86400000).toISOString().slice(0, 10);
        var today      = new Date().toISOString().slice(0, 10);
        if (lastPlayed === yesterday || lastPlayed === today) return streak;
        return 0;
    }

    function dcUpdateStreak(dateStr) {
        var streak     = parseInt(localStorage.getItem('topg_dc_streak')      || '0', 10);
        var lastPlayed = localStorage.getItem('topg_dc_last_played') || '';
        var yesterday  = new Date(Date.now() - 86400000).toISOString().slice(0, 10);
        if (lastPlayed === yesterday) streak++;
        else if (lastPlayed !== dateStr) streak = 1;
        localStorage.setItem('topg_dc_streak',      String(streak));
        localStorage.setItem('topg_dc_last_played', dateStr);
        return streak;
    }

    function dcMsUntilMidnight() {
        var now       = new Date();
        var midnight  = new Date(now);
        midnight.setHours(24, 0, 0, 0);
        return midnight - now;
    }

    function dcCountdownStr(ms) {
        var h = Math.floor(ms / 3600000);
        var m = Math.floor((ms % 3600000) / 60000);
        return h + 'h ' + m + 'm';
    }

    function startDailyChallenge() {
        var dateStr  = new Date().toISOString().slice(0, 10);
        dc.date      = dateStr;

        showGamePage('dailyChallengePage');

        var dateEl   = document.getElementById('dc-date');
        var streakEl = document.getElementById('dc-streak');
        if (dateEl)   dateEl.textContent   = dateStr;
        if (streakEl) streakEl.textContent = '🔥 ' + dcGetStreak() + ' day streak';

        var playedKey = 'topg_dc_played_' + dateStr;
        if (localStorage.getItem(playedKey)) {
            dcShowAlreadyPlayed(playedKey);
            return;
        }

        window.questionBank = window.questionBank || {};
        var hasBank = Object.keys(window.questionBank).some(function (k) {
            return window.questionBank[k] && window.questionBank[k].length > 0;
        });

        // Wire next button (no onclick in HTML)
        var nextBtn = document.getElementById('dc-next-btn');
        if (nextBtn) nextBtn.onclick = window.dcNext;

        if (!hasBank) {
            window.loadQuestionBank('BIO 102').then(function () {
                dc.questions = dcPickQuestions(dateStr).map(shuffleOptions);
                dcStart();
            });
        } else {
            dc.questions = dcPickQuestions(dateStr);
            dcStart();
        }
    }

    function dcStart() {
        dc.index    = 0;
        dc.score    = 0;
        dc.answered = false;

        var resultEl  = document.getElementById('dc-result');
        var alreadyEl = document.getElementById('dc-already-played');
        if (resultEl)  resultEl.style.display  = 'none';
        if (alreadyEl) alreadyEl.style.display = 'none';

        dcRender();
        registerKeyHandler('daily');
    }

    function dcRender() {
        if (!dc.questions.length || dc.index >= dc.questions.length) {
            dcShowEnd(); return;
        }

        dc.answered = false;
        var q = dc.questions[dc.index];

        var qEl       = document.getElementById('dc-question');
        var optsEl    = document.getElementById('dc-options');
        var explEl    = document.getElementById('dc-explanation');
        var progressEl= document.getElementById('dc-progress');
        var nextBtn   = document.getElementById('dc-next-btn');

        if (qEl)        qEl.textContent        = q.question || '';
        if (explEl)     { explEl.style.display = 'none'; explEl.textContent = ''; }
        if (nextBtn)    nextBtn.style.display   = 'none';
        if (progressEl) progressEl.textContent  = 'Q ' + (dc.index + 1) + ' / ' + dc.questions.length;

        var letters = ['A', 'B', 'C', 'D'];
        var btns    = optsEl ? optsEl.querySelectorAll('.gp-opt') : [];

        letters.forEach(function (letter, i) {
            var opt = q.options && q.options[i] != null ? q.options[i] : '';
            var btn = btns[i];
            if (!btn) return;
            btn.textContent = letter + '. ' + opt;
            btn.className   = 'gp-opt'; btn.innerHTML = '<span class="gp-opt-letter">' + letter + '</span><span>' + esc(opt) + '</span>';
            btn.onclick     = (function (l) { return function () { window.dcAnswer(l); }; })(letter);
        });
    }

    window.dcAnswer = function (chosen) {
        if (dc.answered) return;
        dc.answered = true;

        var q       = dc.questions[dc.index];
        var correct = q.answer;
        var letters = ['A', 'B', 'C', 'D'];
        var optsEl  = document.getElementById('dc-options');
        var btns    = optsEl ? optsEl.querySelectorAll('.gp-opt') : [];

        btns.forEach(function (btn, i) {
            btn.onclick = null;
            if (letters[i] === correct)                               btn.classList.add('correct');
            else if (letters[i] === chosen && letters[i] !== correct) btn.classList.add('wrong');
        });

        if (chosen === correct) { dc.score++; soundCorrect(); } else { soundWrong(); }

        var explEl  = document.getElementById('dc-explanation');
        var nextBtn = document.getElementById('dc-next-btn');

        if (explEl) {
            explEl.style.display = 'block';
            var ci = 'ABCD'.indexOf(correct);
            explEl.textContent = q.explanation
                ? 'Explanation: ' + q.explanation
                : 'Answer: ' + correct + ' — ' + ((q.options && q.options[ci]) || '');
        }
        if (nextBtn) nextBtn.style.display = 'inline-block';
    };

    window.dcNext = function () {
        dc.index++;
        dcRender();
    };

    function dcShowEnd() {
        var dateStr   = dc.date;
        var playedKey = 'topg_dc_played_' + dateStr;
        localStorage.setItem(playedKey, JSON.stringify({ score: dc.score, total: dc.questions.length }));

        var newStreak = dcUpdateStreak(dateStr);
        var streakEl  = document.getElementById('dc-streak');
        if (streakEl) streakEl.textContent = '🔥 ' + newStreak + ' day streak';

        // Save to Firestore
        if (window.db) {
            var username = getUsername() || 'Anonymous';
            var update   = {};
            update[username] = dc.score;
            window.db.collection('dailyChallenge').doc(dateStr)
                .set(update, { merge: true }).catch(function () {});
        }

        window.saveScore('daily', dc.score, dc.score + '/' + dc.questions.length);

        // Populate existing result section
        var scoreEl  = document.getElementById('dc-result-score');
        var strkEl   = document.getElementById('dc-result-streak');
        var shareEl  = document.getElementById('dc-result-share');

        if (scoreEl) scoreEl.textContent = dc.score + '/' + dc.questions.length;
        if (strkEl)  strkEl.textContent  = newStreak;
        if (shareEl) shareEl.textContent = '🔥 ' + newStreak + ' day streak! Keep it up!';

        // Wire leaderboard button
        var lbBtn = document.querySelector('#dc-result .game-lb-tag');
        if (lbBtn) lbBtn.onclick = function () { window.showLeaderboard('daily'); };

        var resultEl = document.getElementById('dc-result');
        if (resultEl) resultEl.style.display = 'block';
    }

    function dcShowAlreadyPlayed(playedKey) {
        var data = {};
        try { data = JSON.parse(localStorage.getItem(playedKey) || '{}'); } catch (e) {}

        var scoreEl     = document.getElementById('dc-today-score');
        var countdownEl = document.getElementById('dc-countdown');
        var alreadyEl   = document.getElementById('dc-already-played');

        if (scoreEl)     scoreEl.textContent     = (data.score || 0) + ' / ' + (data.total || 10);
        if (countdownEl) countdownEl.textContent  = dcCountdownStr(dcMsUntilMidnight());
        if (alreadyEl)   alreadyEl.style.display = 'block';

        // Wire leaderboard button inside already-played section
        var lbBtn = document.querySelector('#dc-already-played .game-lb-tag');
        if (lbBtn) lbBtn.onclick = function () { window.showLeaderboard('daily'); };
    }

    window.startDailyChallenge = startDailyChallenge;

    // ==================== GAME 6 — WEEKLY CHALLENGE (PLACEHOLDER) ====================

    window.startWeeklyChallenge = function () {
        showGamePage('weeklyChallengePage');
        // The HTML already has the coming-soon content; nothing extra to do.
    };

    // ==================== GAMES TAB BAR INIT ====================

    function initGamesTabBar() {
        // Add Games tab to bottom bar if not already present
        var tabBar = document.querySelector('.bottom-tab-bar');
        if (tabBar && !tabBar.querySelector('[data-page="games"]')) {
            var gamesTab = document.createElement('div');
            gamesTab.className = 'tab-item';
            gamesTab.setAttribute('data-page', 'games');
            gamesTab.innerHTML = '<i class="fas fa-gamepad"></i><span>Games</span>';
            tabBar.appendChild(gamesTab);
        }

        // Patch window.showPage to handle the 'games' route
        var origShowPage = window.showPage;
        window.showPage = function (page) {
            hideAllGamePages();

            var gPage     = document.getElementById('gamesPage');
            var panelEl   = document.getElementById('gameCoursePanel');
            var lbModal   = document.getElementById('leaderboardModal');
            var unameModal= document.getElementById('usernameModal');

            // Close overlays that should not persist across page changes
            if (panelEl    && page !== 'games') panelEl.style.display    = 'none';
            if (lbModal    && page !== 'games') lbModal.style.display    = 'none';
            if (unameModal)                     unameModal.style.display = 'none';

            if (page === 'games') {
                // Hide main app pages by calling original with a page that hides everything
                // (origShowPage will handle hiding coursePage, topicPage, etc.)
                // Use 'games' — origShowPage's else branch just hides all main pages; gamesPage is separate
                origShowPage('games');
                if (gPage) gPage.style.display = 'block';
                restoreBodyScroll();

                // Set tab active state
                document.querySelectorAll('.tab-item').forEach(function (t) {
                    t.classList.toggle('active', t.getAttribute('data-page') === 'games');
                });

                // Update username display if element exists
                var unameDisplay = document.getElementById('games-username-display');
                if (unameDisplay) {
                    var name = getUsername();
                    unameDisplay.textContent = name ? '👤 ' + name : '';
                }
            } else {
                if (gPage) gPage.style.display = 'none';
                origShowPage(page);
            }
        };

        // Wire up the tab click
        var tab = tabBar && tabBar.querySelector('[data-page="games"]');
        if (tab) {
            tab.addEventListener('click', function () {
                window.showPage('games');
            });
        }
    }

    // ==================== KEYBOARD SHORTCUTS ====================

    var _activeGame        = '';
    var _activeKeyHandler  = null;

    function registerKeyHandler(gameId) {
        _activeGame = gameId;
        if (_activeKeyHandler) document.removeEventListener('keydown', _activeKeyHandler);

        var keyMap = { '1': 'A', '2': 'B', '3': 'C', '4': 'D' };

        _activeKeyHandler = function (e) {
            var key = e.key;

            if (key === 'Escape') {
                if (confirm('Leave game and go back to Games menu?')) {
                    if (ta.timer)    clearInterval(ta.timer);
                    if (ta.running)  ta.running = false;
                    window.showPage('games');
                }
                return;
            }

            if (keyMap[key]) {
                var letter = keyMap[key];
                switch (_activeGame) {
                    case 'flashcards':   window.fcAnswer(letter);  break;
                    case 'guessword':    window.gwAnswer(letter);  break;
                    case 'millionaire':  window.milAnswer(letter); break;
                    case 'timeattack':   window.taAnswer(letter);  break;
                    case 'daily':        window.dcAnswer(letter);  break;
                }
                return;
            }

            if (key === 'Enter') {
                var fcNext  = document.getElementById('fc-next-btn');
                var gwNext  = document.getElementById('gw-next-btn');
                var dcNext  = document.getElementById('dc-next-btn');
                switch (_activeGame) {
                    case 'flashcards': if (fcNext && fcNext.style.display !== 'none') window.fcNext(); break;
                    case 'guessword':  if (gwNext && gwNext.style.display !== 'none') window.gwNext(); break;
                    case 'daily':      if (dcNext && dcNext.style.display !== 'none') window.dcNext(); break;
                }
            }
        };

        document.addEventListener('keydown', _activeKeyHandler);
    }

    // ==================== SOUND SYSTEM ====================

    var _audioCtx = null;
    function _getCtx() {
        if (!_audioCtx) {
            try { _audioCtx = new (window.AudioContext || window.webkitAudioContext)(); } catch(e) {}
        }
        return _audioCtx;
    }
    function _tone(freq, dur, type, vol, delay) {
        try {
            var ctx = _getCtx(); if (!ctx) return;
            var osc = ctx.createOscillator();
            var gain = ctx.createGain();
            osc.connect(gain); gain.connect(ctx.destination);
            osc.type = type || 'sine';
            osc.frequency.setValueAtTime(freq, ctx.currentTime + (delay||0));
            gain.gain.setValueAtTime(vol || 0.25, ctx.currentTime + (delay||0));
            gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + (delay||0) + dur);
            osc.start(ctx.currentTime + (delay||0));
            osc.stop(ctx.currentTime + (delay||0) + dur);
        } catch(e) {}
    }
    function soundCorrect() {
        _tone(523, 0.08); _tone(659, 0.08, 'sine', 0.25, 0.08); _tone(784, 0.18, 'sine', 0.25, 0.16);
    }
    function soundWrong() {
        _tone(300, 0.08, 'sawtooth', 0.2); _tone(220, 0.22, 'sawtooth', 0.2, 0.09);
    }
    function soundClick() {
        _tone(900, 0.04, 'square', 0.12);
    }
    function soundTick() {
        _tone(1200, 0.03, 'square', 0.08);
    }
    function soundWin() {
        [523,659,784,1047].forEach(function(f,i){ _tone(f, 0.18, 'sine', 0.28, i*0.1); });
    }
    function soundGameOver() {
        [494,440,392,349,294].forEach(function(f,i){ _tone(f, 0.22, 'sawtooth', 0.18, i*0.13); });
    }
    function soundLevelUp() {
        [392,494,587,740,988].forEach(function(f,i){ _tone(f, 0.14, 'sine', 0.22, i*0.07); });
    }
    function soundDanger() {
        _tone(220, 0.06, 'sawtooth', 0.15); _tone(220, 0.06, 'sawtooth', 0.15, 0.12);
    }

    // ==================== INJECT SUPPLEMENTAL CSS ====================

    function injectStyles() {
        if (document.getElementById('topgGamesStyles')) return;
        var style = document.createElement('style');
        style.id = 'topgGamesStyles';
        style.textContent = [

            /* ─── GAMES MENU: gradient cards ─── */
            '#gamesPage.game-page { background: #f0f4f8; min-height: 100vh; }',
            '.game-card { border-radius: 20px; overflow: hidden; cursor: pointer; transition: transform .2s, box-shadow .2s; box-shadow: 0 6px 24px rgba(0,0,0,.13); display: flex; flex-direction: column; min-height: 160px; border: none; }',
            '.game-card:active { transform: scale(.97); }',
            '.game-card--blue   { background: linear-gradient(145deg,#3b82f6,#1d4ed8); }',
            '.game-card--purple { background: linear-gradient(145deg,#8b5cf6,#6d28d9); }',
            '.game-card--gold   { background: linear-gradient(145deg,#f59e0b,#b45309); }',
            '.game-card--red    { background: linear-gradient(145deg,#ef4444,#b91c1c); }',
            '.game-card--green  { background: linear-gradient(145deg,#22c55e,#15803d); }',
            '.game-card--grey   { background: linear-gradient(145deg,#94a3b8,#475569); opacity:.7; }',
            '.game-card-accent  { display: none; }',
            '.game-card-body    { padding: 20px 16px 10px; flex: 1; }',
            '.game-card-icon    { font-size: 36px; margin-bottom: 8px; }',
            '.game-card-title   { font-size: 17px; font-weight: 700; color: #fff; margin: 0 0 4px; }',
            '.game-card-desc    { font-size: 12px; color: rgba(255,255,255,.8); margin: 0; }',
            '.game-card-footer  { padding: 10px 14px; display: flex; align-items: center; justify-content: space-between; background: rgba(0,0,0,.18); }',
            '.game-play-tag     { color: #fff; font-size: 13px; font-weight: 700; letter-spacing: .3px; }',
            '.game-lb-tag       { background: rgba(255,255,255,.18); border: 1px solid rgba(255,255,255,.3); color: #fff; padding: 4px 10px; border-radius: 20px; font-size: 11px; cursor: pointer; transition: background .15s; }',
            '.game-lb-tag:active { background: rgba(255,255,255,.35); }',
            '.game-cards-grid   { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }',

            /* ─── INDIVIDUAL GAME PAGES: fixed full-screen overlays ─── */
            '#flashCardsPage, #guessWordPage, #millionairePage, #timeAttackPage, #dailyChallengePage, #weeklyChallengePage { position: fixed !important; inset: 0 !important; z-index: 400 !important; overflow-y: auto; -webkit-overflow-scrolling: touch; background: #0d1117; display: none; }',
            '@keyframes gameSlideIn { from { opacity:0; transform: translateY(30px); } to { opacity:1; transform: translateY(0); } }',
            '#flashCardsPage[style*="block"], #guessWordPage[style*="block"], #millionairePage[style*="block"], #timeAttackPage[style*="block"], #dailyChallengePage[style*="block"], #weeklyChallengePage[style*="block"] { animation: gameSlideIn .28s ease; }',

            /* ─── SHARED GAME HEADER ─── */
            '.gp-header { display: flex; align-items: center; gap: 12px; padding: 14px 16px 10px; border-bottom: 1px solid rgba(255,255,255,.07); }',
            '.gp-back { background: rgba(255,255,255,.1); border: none; color: #fff; width: 36px; height: 36px; border-radius: 50%; font-size: 18px; cursor: pointer; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }',
            '.gp-title { font-size: 18px; font-weight: 700; color: #fff; flex: 1; }',
            '.gp-score { font-size: 14px; font-weight: 600; color: #22c55e; background: rgba(34,197,94,.12); padding: 4px 12px; border-radius: 20px; white-space: nowrap; }',

            /* ─── QUESTION CARD ─── */
            '.gp-question { background: rgba(255,255,255,.06); border-radius: 16px; margin: 14px 16px; padding: 20px; color: #f1f5f9; font-size: 17px; font-weight: 500; line-height: 1.6; border: 1px solid rgba(255,255,255,.08); }',

            /* ─── OPTION BUTTONS ─── */
            '.gp-options { padding: 0 16px; display: flex; flex-direction: column; gap: 10px; }',
            '.gp-opt { display: flex; align-items: center; gap: 14px; background: rgba(255,255,255,.06); border: 1.5px solid rgba(255,255,255,.1); color: #e2e8f0; padding: 14px 16px; border-radius: 14px; text-align: left; font-size: 15px; cursor: pointer; transition: background .12s, border-color .12s; width: 100%; }',
            '.gp-opt:active { transform: scale(.98); }',
            '.gp-opt-letter { font-size: 15px; font-weight: 800; color: #94a3b8; background: rgba(255,255,255,.08); width: 32px; height: 32px; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }',
            '.gp-opt.correct { background: rgba(34,197,94,.2) !important; border-color: #22c55e !important; color: #fff; }',
            '.gp-opt.correct .gp-opt-letter { background: #22c55e; color: #fff; }',
            '.gp-opt.wrong   { background: rgba(239,68,68,.2) !important; border-color: #ef4444 !important; color: #fff; }',
            '.gp-opt.wrong   .gp-opt-letter { background: #ef4444; color: #fff; }',

            /* ─── EXPLANATION ─── */
            '.gp-explanation { margin: 12px 16px; padding: 14px 16px; background: rgba(250,204,21,.08); border-left: 3px solid #facc15; border-radius: 0 12px 12px 0; color: #fde68a; font-size: 14px; line-height: 1.55; }',

            /* ─── FLASH CARDS ─── */
            '.fc-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; padding: 14px 16px; }',
            '.fc-card { border-radius: 18px; padding: 22px 14px; cursor: pointer; display: flex; flex-direction: column; align-items: center; gap: 10px; text-align: center; transition: transform .12s; border: 2px solid transparent; min-height: 120px; justify-content: center; }',
            '.fc-card:nth-child(1) { background: linear-gradient(145deg,#1e3a5f,#1e4080); }',
            '.fc-card:nth-child(2) { background: linear-gradient(145deg,#1e4d2b,#1a5c1a); }',
            '.fc-card:nth-child(3) { background: linear-gradient(145deg,#4a1e6e,#5b1e8a); }',
            '.fc-card:nth-child(4) { background: linear-gradient(145deg,#5c2a0a,#7a3010); }',
            '.fc-card:active { transform: scale(.96); }',
            '.fc-letter { font-size: 20px; font-weight: 800; color: rgba(255,255,255,.5); }',
            '.fc-option-text { color: #e2e8f0; font-size: 14px; line-height: 1.4; font-weight: 500; }',
            '.fc-card.fc-correct { background: linear-gradient(145deg,#065f46,#047857) !important; border-color: #22c55e !important; }',
            '.fc-card.fc-correct .fc-letter { color: #6ee7b7; }',
            '.fc-card.fc-wrong   { background: linear-gradient(145deg,#7f1d1d,#991b1b) !important; border-color: #ef4444 !important; }',
            '.fc-card.fc-wrong   .fc-letter { color: #fca5a5; }',
            '@keyframes fcShake { 0%,100%{transform:translateX(0)} 25%{transform:translateX(-6px)} 75%{transform:translateX(6px)} }',
            '.fc-card.fc-wrong { animation: fcShake .3s ease; }',

            /* ─── GAME END OVERLAY ─── */
            '.game-end-overlay { position: fixed; inset: 0; background: rgba(0,0,0,.88); display: flex; align-items: center; justify-content: center; z-index: 500; padding: 20px; }',
            '.game-end-card { background: #161b27; border-radius: 24px; padding: 36px 24px; text-align: center; width: 100%; max-width: 360px; border: 1px solid rgba(255,255,255,.08); }',
            '.game-end-icon { font-size: 64px; margin-bottom: 14px; }',
            '.game-end-title { color: #f1f5f9; margin: 0 0 20px; font-size: 24px; font-weight: 700; }',
            '.game-end-stats { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 10px; margin-bottom: 24px; }',
            '.game-end-stat { background: rgba(255,255,255,.05); border-radius: 12px; padding: 14px 8px; }',
            '.game-end-val  { display: block; font-size: 28px; font-weight: 800; color: #22c55e; margin-bottom: 4px; }',
            '.game-end-lbl  { font-size: 11px; color: #64748b; text-transform: uppercase; letter-spacing: .5px; }',
            '.game-play-btn { display: block; width: 100%; padding: 14px; border: none; border-radius: 12px; font-size: 16px; font-weight: 700; cursor: pointer; margin-bottom: 10px; transition: opacity .15s; }',
            '.game-play-btn:active { opacity: .8; }',
            '.game-play-btn--primary { background: linear-gradient(135deg,#22c55e,#16a34a); color: #fff; }',
            '.game-play-btn--secondary { background: rgba(255,255,255,.08); color: #e2e8f0; border: 1px solid rgba(255,255,255,.12) !important; }',

            /* ─── MILLIONAIRE ─── */
            '#millionairePage { background: linear-gradient(180deg,#0a0a2e 0%,#1a1a4e 100%) !important; }',
            '.mil-header { background: rgba(0,0,0,.3); border-bottom: 1px solid rgba(255,215,0,.15); padding: 12px 16px; display: flex; align-items: center; gap: 10px; }',
            '.mil-prize-badge { background: linear-gradient(135deg,#b45309,#d97706); color: #fff; padding: 6px 16px; border-radius: 20px; font-weight: 700; font-size: 16px; flex: 1; text-align: center; }',
            '.mil-question { background: rgba(255,255,255,.06); border: 1px solid rgba(255,215,0,.15); border-radius: 16px; margin: 14px 16px; padding: 22px 18px; color: #f1f5f9; font-size: 17px; line-height: 1.6; font-weight: 500; }',
            '.mil-options-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; padding: 0 16px; }',
            '.mil-opt { background: rgba(255,255,255,.06); border: 1.5px solid rgba(255,215,0,.2); color: #f1f5f9; padding: 14px 12px; border-radius: 14px; cursor: pointer; font-size: 14px; display: flex; align-items: center; gap: 10px; transition: background .12s; }',
            '.mil-opt-letter { font-weight: 800; color: #fbbf24; font-size: 15px; flex-shrink: 0; }',
            '.mil-opt.mil-chosen  { background: rgba(29,78,216,.4)  !important; border-color: #3b82f6 !important; }',
            '.mil-opt.mil-correct { background: rgba(6,95,70,.5)    !important; border-color: #22c55e !important; }',
            '.mil-opt.mil-wrong   { background: rgba(127,29,29,.5)  !important; border-color: #ef4444 !important; }',
            '.mil-lifelines { display: flex; gap: 8px; padding: 10px 16px; flex-wrap: wrap; }',
            '.mil-lifeline-btn { background: rgba(255,255,255,.08); border: 1px solid rgba(255,255,255,.18); color: #e2e8f0; padding: 8px 14px; border-radius: 20px; font-size: 13px; cursor: pointer; transition: background .15s; }',
            '.mil-lifeline-btn:disabled { opacity: .3; cursor: not-allowed; }',
            '.mil-walk { background: rgba(239,68,68,.15) !important; border-color: rgba(239,68,68,.4) !important; color: #fca5a5 !important; }',
            '.mil-ladder-strip { display: flex; gap: 6px; overflow-x: auto; padding: 8px 16px 12px; scrollbar-width: none; }',
            '.mil-ladder-strip::-webkit-scrollbar { display:none; }',
            '.mil-rung { background: rgba(255,255,255,.06); border: 1px solid rgba(255,255,255,.1); color: #94a3b8; padding: 6px 12px; border-radius: 20px; font-size: 12px; white-space: nowrap; }',
            '.mil-rung.active { background: linear-gradient(135deg,#b45309,#d97706); border-color: #d97706; color: #fff; font-weight: 700; }',
            '.mil-rung.safe   { border-color: rgba(34,197,94,.4); color: #86efac; }',

            /* ─── TIME ATTACK ─── */
            '.ta-timer-wrap { display: flex; justify-content: center; padding: 20px 0 10px; }',
            '.ta-timer-circle { stroke: #22c55e; transition: stroke-dashoffset .9s linear, stroke .3s; }',
            '.ta-timer-circle.warning { stroke: #f59e0b; }',
            '.ta-timer-circle.danger  { stroke: #ef4444; }',
            '@keyframes taPulse { from{opacity:1} to{opacity:.4} }',
            '.ta-timer-text { fill: #f1f5f9; font-family: inherit; }',
            '.ta-stats-row { display: flex; gap: 10px; justify-content: center; padding: 0 16px 10px; }',
            '.ta-stat-chip { padding: 6px 16px; border-radius: 20px; font-size: 14px; font-weight: 600; }',
            '.ta-stat-chip--correct { background: rgba(34,197,94,.15); color: #6ee7b7; }',
            '.ta-stat-chip--wrong   { background: rgba(239,68,68,.15); color: #fca5a5; }',
            '.ta-stat-chip--total   { background: rgba(255,255,255,.06); color: #94a3b8; }',

            /* ─── DAILY CHALLENGE ─── */
            '#dailyChallengePage { background: linear-gradient(180deg,#0d1b2a 0%,#1a2a3a 100%) !important; }',
            '.dc-header { display: flex; justify-content: space-between; align-items: center; padding: 12px 16px; }',
            '.dc-streak-badge { background: linear-gradient(135deg,#dc2626,#ea580c); color: #fff; padding: 6px 14px; border-radius: 20px; font-size: 14px; font-weight: 700; }',
            '.dc-progress-label { color: #38bdf8; font-size: 14px; font-weight: 700; }',

            /* ─── GAME COURSE SELECTOR PANEL (bottom sheet) ─── */
            '#gameCoursePanel { background: #161b27; border: 1px solid rgba(255,255,255,.08); }',
            '.panel-title { color: #f1f5f9 !important; }',
            '.panel-step-subtitle { color: #94a3b8 !important; }',
            '.game-course-card { background: rgba(255,255,255,.06); border: 1px solid rgba(255,255,255,.1); border-radius: 12px; padding: 12px 10px; text-align: center; cursor: pointer; color: #e2e8f0; font-size: 13px; font-weight: 600; transition: background .15s; }',
            '.game-course-card:active { background: rgba(255,255,255,.14); }',
            '.game-topic-chip { background: rgba(255,255,255,.07); border: 1px solid rgba(255,255,255,.12); color: #cbd5e1; padding: 8px 16px; border-radius: 20px; font-size: 13px; cursor: pointer; transition: background .15s; }',
            '.game-topic-chip.active { background: rgba(34,197,94,.2); border-color: #22c55e; color: #6ee7b7; }',
            '.panel-back-link { background: none; border: none; color: #22c55e; font-size: 14px; cursor: pointer; padding: 0 0 10px; display: block; }',
            '.panel-close-btn { background: rgba(255,255,255,.1); border: none; color: #94a3b8; width: 32px; height: 32px; border-radius: 50%; font-size: 16px; cursor: pointer; position: absolute; top: 16px; right: 16px; }',

            /* ─── LEADERBOARD ─── */
            '#leaderboard-table-body tr { border-bottom: 1px solid rgba(255,255,255,.06); }',
            '#leaderboard-table-body td { padding: 11px 8px; color: #e2e8f0; font-size: 14px; }',
            '#leaderboard-table-body tr:nth-child(1) td { color: #fbbf24; font-weight: 700; }',
            '#leaderboard-table-body tr:nth-child(2) td { color: #d1d5db; font-weight: 600; }',
            '#leaderboard-table-body tr:nth-child(3) td { color: #cd7c2f; font-weight: 600; }',

            /* ─── MISC ─── */
            '.game-course-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; }',
            '.game-topic-grid  { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 16px; }',
            '.weekly-coming-soon { display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 70vh; text-align: center; padding: 30px 20px; }',
            '.weekly-cs-icon  { font-size: 72px; margin-bottom: 16px; }',
            '.weekly-cs-title { color: #f1f5f9; font-size: 26px; font-weight: 700; margin: 0 0 10px; }',
            '.weekly-cs-desc  { color: #64748b; font-size: 15px; margin: 0 0 28px; max-width: 280px; line-height: 1.6; }',
            '.mil-hint-overlay { position: fixed; inset: 0; background: rgba(0,0,0,.85); display: flex; align-items: center; justify-content: center; z-index: 600; }',
            '.mil-hint-card { background: #1e293b; border-radius: 20px; padding: 28px 24px; width: 90%; max-width: 360px; text-align: center; border: 1px solid rgba(255,255,255,.1); }',
            '.mil-hint-card h3 { color: #f1f5f9; margin: 0 0 16px; font-size: 18px; }',
            '.mil-hint-text { color: #cbd5e1; font-size: 15px; line-height: 1.6; margin-bottom: 22px; }',
            '.mil-hint-close { background: #22c55e; border: none; color: #fff; padding: 12px 28px; border-radius: 10px; font-size: 15px; font-weight: 700; cursor: pointer; }',
            '.mil-audience-bars { margin-bottom: 16px; }',
            '.mil-audience-bar-row { display: flex; align-items: center; gap: 8px; margin-bottom: 10px; }',
            '.mil-bar-label { color: #fbbf24; font-weight: 700; width: 16px; }',
            '.mil-bar-track { flex: 1; background: rgba(255,255,255,.08); border-radius: 4px; height: 20px; overflow: hidden; }',
            '.mil-bar-fill  { background: linear-gradient(90deg,#22c55e,#16a34a); height: 100%; border-radius: 4px; transition: width .7s ease; }',
            '.mil-bar-pct   { color: #94a3b8; font-size: 12px; width: 36px; text-align: right; }'

        ].join('\n');
        document.head.appendChild(style);
    }

    // ==================== DOMContentLoaded INIT ====================

    document.addEventListener('DOMContentLoaded', function () {
        initFirebase();
        injectStyles();
        initGamesTabBar();
    });

})();
