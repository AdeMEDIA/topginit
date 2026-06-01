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
        { title: 'BIO 102', bankKey: 'BIO 102', icon: '🔬', file: 'bio102.js',  iconGradient: 'linear-gradient(135deg,#10b981,#059669)' },
        { title: 'BIO 108', bankKey: 'BIO 108', icon: '🧫', file: 'bio108.js',  iconGradient: 'linear-gradient(135deg,#14b8a6,#0d9488)' },
        { title: 'CHM 102', bankKey: 'CHM 102', icon: '🧪', file: 'chm102.js',  iconGradient: 'linear-gradient(135deg,#f59e0b,#d97706)' },
        { title: 'GST 112', bankKey: 'GST 112', icon: '🇳🇬', file: 'gst112.js', iconGradient: 'linear-gradient(135deg,#f97316,#ea580c)' },
        { title: 'PHY 102', bankKey: 'PHY 102', icon: '⚡', file: 'phy102.js',  iconGradient: 'linear-gradient(135deg,#ef4444,#dc2626)' },
        { title: 'COS 102', bankKey: 'COS 102', icon: '💻', file: 'cos102.js',  iconGradient: 'linear-gradient(135deg,#3b82f6,#1d4ed8)' },
        { title: 'MTH 102', bankKey: 'MTH 102', icon: '📐', file: 'mth102.js',  iconGradient: 'linear-gradient(135deg,#8b5cf6,#7c3aed)' },
        { title: 'MLS 102', bankKey: 'MLS 102', icon: '📜', file: 'mls102.js',  iconGradient: 'linear-gradient(135deg,#06b6d4,#0891b2)' },
        { title: 'MLS 104', bankKey: 'MLS 104', icon: '🦠', file: 'mls104.js',  iconGradient: 'linear-gradient(135deg,#84cc16,#65a30d)' }
    ];

    var TOPICS_MAP = {
        'BIO 102': [
            { id: 'viruses',                name: 'Viruses',                   startIdx: 0,  endIdx: 15  },
            { id: 'bacteria',               name: 'Bacteria',                  startIdx: 15, endIdx: 30  },
            { id: 'fungi',                  name: 'Fungi',                     startIdx: 30, endIdx: 45  },
            { id: 'plant_kingdom',          name: 'Plant Kingdom',             startIdx: 45, endIdx: 60  },
            { id: 'animal_kingdom',         name: 'Animal Kingdom',            startIdx: 60, endIdx: 75  },
            { id: 'ecological_adaptations', name: 'Ecological Adaptations',    startIdx: 75, endIdx: 85  },
            { id: 'physiology',             name: 'Physiology',                startIdx: 85, endIdx: 95  },
            { id: 'growth_reproduction',    name: 'Growth & Reproduction',     startIdx: 95, endIdx: 100 }
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
            { id: 'history_organic',        name: 'History of Organic Chemistry', startIdx: 0,  endIdx: 10  },
            { id: 'fullerenes',             name: 'Fullerenes & Nanochemistry',   startIdx: 10, endIdx: 20  },
            { id: 'electronic_theory',      name: 'Electronic Theory',            startIdx: 20, endIdx: 30  },
            { id: 'purification_analysis',  name: 'Isolation & Structure',        startIdx: 30, endIdx: 40  },
            { id: 'nomenclature',           name: 'Nomenclature & Functional',    startIdx: 40, endIdx: 55  },
            { id: 'hydrocarbons',           name: 'Alkanes, Alkenes, Alkynes',    startIdx: 55, endIdx: 65  },
            { id: 'mechanisms',             name: 'Reaction Mechanisms',          startIdx: 65, endIdx: 75  },
            { id: 'functional_group_chem',  name: 'Alcohols, Ethers, Amines',     startIdx: 75, endIdx: 85  },
            { id: 'inorganic_chemistry',    name: 'Groups & Transition Metals',   startIdx: 85, endIdx: 100 }
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
            { id: 'electrostatics',  name: 'Electrostatics',             startIdx: 0,  endIdx: 25  },
            { id: 'dc_circuits',     name: 'DC Circuits',                startIdx: 25, endIdx: 40  },
            { id: 'magnetic_fields', name: 'Magnetic Fields',            startIdx: 40, endIdx: 60  },
            { id: 'em_induction',    name: 'Electromagnetic Induction',  startIdx: 60, endIdx: 80  },
            { id: 'ac_circuits',     name: 'AC Circuits & EM Waves',     startIdx: 80, endIdx: 100 }
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
            { id: 'evolution',                  name: 'Evolution of MLS Practice',       startIdx: 0,  endIdx: 15 },
            { id: 'legislation',                name: 'Legislations Governing MLS',      startIdx: 15, endIdx: 30 },
            { id: 'nomenclature',               name: 'Nomenclature & Certification',    startIdx: 30, endIdx: 45 },
            { id: 'training_regulations',       name: 'Training Rules & Regulations',    startIdx: 45, endIdx: 60 },
            { id: 'accreditation',              name: 'Programme Approval',              startIdx: 60, endIdx: 75 },
            { id: 'professional_bodies',        name: 'Professional Bodies & Roles',     startIdx: 75, endIdx: 90 },
            { id: 'international_contributions',name: 'International Contributions',     startIdx: 90, endIdx: 100 }
        ],
        'MLS 104': [
            { id: 'disease_concepts',     name: 'Basic Concepts of Disease',  startIdx: 0,  endIdx: 15  },
            { id: 'cell_injury',          name: 'Cell Injury & Disorders',    startIdx: 15, endIdx: 30  },
            { id: 'infectious_diseases',  name: 'Infectious Diseases',        startIdx: 30, endIdx: 50  },
            { id: 'immune_system',        name: 'Immune System',              startIdx: 50, endIdx: 65  },
            { id: 'disease_mechanisms',   name: 'Pathophysiology',            startIdx: 65, endIdx: 75  },
            { id: 'laboratory_diagnosis', name: 'Laboratory Diagnosis',       startIdx: 75, endIdx: 90  },
            { id: 'prevention_control',   name: 'Prevention & Control',       startIdx: 90, endIdx: 100 }
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

    function showGamePage(pageId) {
        // showPage('games') hides main pages and activates the games tab
        if (window.showPage) window.showPage('games');
        hideAllGamePages();
        var page = document.getElementById(pageId);
        if (page) page.style.display = 'block';
        restoreBodyScroll();
    }

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

        _gameQuestions = shuffleArray(questions);
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

        if (scoreEl) scoreEl.innerHTML = fcLivesHTML() + ' &nbsp; ' + fc.score + ' / ' + fc.questions.length;
        if (qEl)     qEl.textContent   = q.question || '';
        if (explEl)  { explEl.style.display = 'none'; explEl.textContent = ''; }
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

        if (isRight) {
            fc.score++;
        } else {
            fc.fails++;
        }

        var explEl  = document.getElementById('fc-explanation');
        var scoreEl = document.getElementById('fc-score');

        if (explEl) {
            explEl.style.display = 'block';
            var ci = 'ABCD'.indexOf(correct);
            explEl.textContent = q.explanation
                ? '💡 ' + q.explanation
                : '✅ Answer: ' + correct + ' — ' + ((q.options && q.options[ci]) || '');
        }
        if (scoreEl) scoreEl.innerHTML = fcLivesHTML() + ' &nbsp; ' + fc.score + ' / ' + fc.questions.length;

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
        var btns    = optsEl ? optsEl.querySelectorAll('.game-option-btn') : [];

        letters.forEach(function (letter, i) {
            var opt = q.options && q.options[i] != null ? q.options[i] : '';
            var btn = btns[i];
            if (!btn) return;
            btn.textContent = letter + '. ' + opt;
            btn.className   = 'game-option-btn';
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
        var btns    = optsEl ? optsEl.querySelectorAll('.game-option-btn') : [];

        btns.forEach(function (btn, i) {
            btn.onclick = null;
            if (letters[i] === correct) btn.classList.add('gw-correct');
            else if (letters[i] === chosen && letters[i] !== correct) btn.classList.add('gw-wrong');
        });

        if (chosen === correct) gw.score++;

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
        var btns    = optsEl ? optsEl.querySelectorAll('.game-option-btn') : [];

        letters.forEach(function (letter, i) {
            var opt = q.options && q.options[i] != null ? q.options[i] : '';
            var btn = btns[i];
            if (!btn) return;
            btn.textContent = letter + '. ' + opt;
            btn.className   = 'game-option-btn';
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
        var btns    = optsEl ? optsEl.querySelectorAll('.game-option-btn') : [];

        btns.forEach(function (btn, i) {
            btn.onclick = null;
            if (letters[i] === correct)                              btn.classList.add('ta-correct');
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

        setTimeout(function () { if (ta.running) taRenderQuestion(); }, 600);
    };

    function taStartTimer() {
        var textEl   = document.getElementById('ta-timer-text');
        var circleEl = document.getElementById('ta-timer-circle');

        ta.timer = setInterval(function () {
            if (!ta.running) { clearInterval(ta.timer); return; }
            ta.timeLeft--;
            taUpdateSVG();

            if (textEl) {
                textEl.textContent = ta.timeLeft;
                textEl.setAttribute('fill', ta.timeLeft < 10 ? '#ef4444' : '#4f7011');
            }
            if (circleEl) {
                circleEl.style.stroke = ta.timeLeft < 10 ? '#ef4444' : '#4f7011';
            }

            if (ta.timeLeft <= 0) {
                ta.running = false;
                clearInterval(ta.timer);
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
                dc.questions = dcPickQuestions(dateStr);
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
        var btns    = optsEl ? optsEl.querySelectorAll('.game-option-btn') : [];

        letters.forEach(function (letter, i) {
            var opt = q.options && q.options[i] != null ? q.options[i] : '';
            var btn = btns[i];
            if (!btn) return;
            btn.textContent = letter + '. ' + opt;
            btn.className   = 'game-option-btn';
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
        var btns    = optsEl ? optsEl.querySelectorAll('.game-option-btn') : [];

        btns.forEach(function (btn, i) {
            btn.onclick = null;
            if (letters[i] === correct)                               btn.classList.add('dc-correct');
            else if (letters[i] === chosen && letters[i] !== correct) btn.classList.add('dc-wrong');
        });

        if (chosen === correct) dc.score++;

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

    // ==================== INJECT SUPPLEMENTAL CSS ====================

    function injectStyles() {
        if (document.getElementById('topgGamesStyles')) return;
        var style = document.createElement('style');
        style.id = 'topgGamesStyles';
        style.textContent = [
            /* Game page base — individual game pages dark, menu light */
            '.game-page { min-height: 100vh; }',
            '#gamesPage.game-page { background: #f8fafc; }',
            '#flashCardsPage.game-page, #guessWordPage.game-page, #millionairePage.game-page, #timeAttackPage.game-page, #dailyChallengePage.game-page, #weeklyChallengePage.game-page { background: #0f172a; }',

            /* Back button on game pages */
            '.game-back-btn { background: none; border: none; color: #22c55e; font-size: 14px; cursor: pointer; padding: 6px 10px; border-radius: 8px; }',

            /* Flash Cards grid */
            '.fc-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; padding: 16px; }',
            '.fc-card { background: #1e293b; border-radius: 14px; padding: 18px 12px; cursor: pointer; border: 2px solid transparent; display: flex; flex-direction: column; align-items: center; gap: 8px; text-align: center; transition: transform .12s; }',
            '.fc-card:active { transform: scale(.96); }',
            '.fc-letter { font-size: 22px; font-weight: 800; color: #22c55e; }',
            '.fc-option-text { color: #cbd5e1; font-size: 13px; line-height: 1.4; }',
            '.fc-correct { background: #065f46 !important; border-color: #22c55e !important; }',
            '.fc-wrong   { background: #7f1d1d !important; border-color: #ef4444 !important; }',

            /* Generic option buttons used across games */
            '.game-option-btn { display: block; width: calc(100% - 32px); margin: 0 16px; background: #1e293b; border: 2px solid #334155; color: #f1f5f9; padding: 14px 16px; border-radius: 12px; text-align: left; font-size: 15px; cursor: pointer; transition: background .15s; margin-bottom: 10px; }',
            '.game-option-btn:active { opacity: .8; }',
            '.gw-correct, .ta-correct, .dc-correct { background: #065f46 !important; border-color: #22c55e !important; }',
            '.gw-wrong,   .ta-wrong,   .dc-wrong   { background: #7f1d1d !important; border-color: #ef4444 !important; }',

            /* Millionaire option chosen state */
            '.mil-chosen  { background: #1d4ed8 !important; border-color: #3b82f6 !important; }',
            '.mil-correct { background: #065f46 !important; border-color: #22c55e !important; }',
            '.mil-wrong   { background: #7f1d1d !important; border-color: #ef4444 !important; }',

            /* Time Attack SVG pulse */
            '@keyframes taPulse { from { opacity:1; } to { opacity:.35; } }',

            /* Game end overlay */
            '.game-end-overlay { position: fixed; inset: 0; background: rgba(0,0,0,.9); display: flex; align-items: center; justify-content: center; z-index: 200; }',
            '.game-end-card { background: #1e293b; border-radius: 20px; padding: 32px 24px; text-align: center; width: 90%; max-width: 380px; }',
            '.game-end-icon { font-size: 56px; margin-bottom: 12px; }',
            '.game-end-title { color: #f1f5f9; margin: 0 0 16px; font-size: 22px; }',
            '.game-end-stats { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 12px; margin-bottom: 20px; }',
            '.game-end-stat { background: #0f172a; border-radius: 10px; padding: 12px 8px; }',
            '.game-end-val { display: block; font-size: 26px; font-weight: 800; color: #22c55e; margin-bottom: 4px; }',
            '.game-end-lbl { font-size: 11px; color: #64748b; }',

            /* Audience overlay */
            '.mil-audience-bars { margin-bottom: 16px; }',
            '.mil-audience-bar-row { display: flex; align-items: center; gap: 8px; margin-bottom: 8px; }',
            '.mil-bar-label { color: #f1f5f9; font-weight: 700; width: 16px; }',
            '.mil-bar-track { flex: 1; background: #334155; border-radius: 4px; height: 18px; overflow: hidden; }',
            '.mil-bar-fill  { background: #22c55e; height: 100%; border-radius: 4px; transition: width .6s ease; }',
            '.mil-bar-pct   { color: #94a3b8; font-size: 12px; width: 36px; text-align: right; }',

            /* Hint overlays */
            '.mil-hint-overlay { position: fixed; inset: 0; background: rgba(0,0,0,.85); display: flex; align-items: center; justify-content: center; z-index: 300; }',
            '.mil-hint-card { background: #1e293b; border-radius: 16px; padding: 24px; width: 90%; max-width: 360px; text-align: center; }',
            '.mil-hint-card h3 { color: #f1f5f9; margin: 0 0 16px; }',
            '.mil-hint-text { color: #cbd5e1; font-size: 15px; line-height: 1.5; margin-bottom: 20px; }',
            '.mil-hint-close { background: #22c55e; border: none; color: #fff; padding: 10px 24px; border-radius: 8px; font-size: 15px; cursor: pointer; }',

            /* Game question card */
            '.game-question-card { background: #1e293b; border-radius: 14px; margin: 16px; padding: 20px; color: #f1f5f9; font-size: 16px; line-height: 1.55; min-height: 80px; }',
            '.game-explanation-box { background: #1e293b; border-left: 4px solid #22c55e; padding: 14px 16px; margin: 0 16px 16px; border-radius: 0 8px 8px 0; color: #94a3b8; font-size: 14px; line-height: 1.5; }',

            /* Next buttons */
            '.game-next-btn { display: block; width: calc(100% - 32px); margin: 0 16px; background: linear-gradient(135deg,#22c55e,#16a34a); color: #fff; border: none; border-radius: 10px; padding: 14px; font-size: 16px; font-weight: 700; cursor: pointer; }',

            /* TA stats bar */
            '.ta-stats-row { display: flex; gap: 12px; justify-content: center; margin: 8px 0; }',
            '.ta-stat-chip { padding: 6px 14px; border-radius: 20px; font-size: 14px; font-weight: 600; }',
            '.ta-stat-chip--correct { background: #065f46; color: #6ee7b7; }',
            '.ta-stat-chip--wrong   { background: #7f1d1d; color: #fca5a5; }',
            '.ta-stat-chip--total   { background: #1e293b; color: #94a3b8; }',

            /* DC header */
            '.dc-header { display: flex; justify-content: space-between; align-items: center; padding: 14px 16px; }',
            '.dc-streak-badge { background: #7f1d1d; color: #fca5a5; padding: 4px 12px; border-radius: 20px; font-size: 13px; font-weight: 700; }',
            '.dc-date-label { color: #64748b; font-size: 13px; }',
            '.dc-progress-label { text-align: center; color: #22c55e; font-size: 14px; font-weight: 700; padding: 4px 16px; }',
            '.dc-options-list { padding: 0; }',

            /* Already-played card */
            '.dc-already-card { background: #1e293b; border-radius: 16px; padding: 28px 20px; text-align: center; max-width: 360px; width: 90%; }',
            '.dc-already-icon { font-size: 48px; margin-bottom: 12px; }',
            '.dc-already-card h3 { color: #f1f5f9; margin: 0 0 10px; }',
            '.dc-already-card p { color: #94a3b8; margin: 0 0 8px; }',
            '.dc-countdown-label { font-size: 13px; }',

            /* Game course grid inside panel */
            '.game-course-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; }',
            '.game-topic-grid  { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 16px; }',

            /* Weekly coming soon */
            '.weekly-coming-soon { display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 60vh; text-align: center; padding: 30px 20px; }',
            '.weekly-cs-icon { font-size: 64px; margin-bottom: 16px; }',
            '.weekly-cs-title { color: #f1f5f9; font-size: 24px; margin: 0 0 8px; }',
            '.weekly-cs-desc  { color: #94a3b8; font-size: 15px; margin: 0 0 24px; max-width: 280px; }',

            /* Leaderboard table rows */
            '#leaderboard-table-body tr { border-bottom: 1px solid #1e293b; }',
            '#leaderboard-table-body td { padding: 10px 6px; color: #f1f5f9; font-size: 14px; }',
            '#leaderboard-table-body tr:first-child td { color: #f59e0b; font-weight: 700; }'
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
