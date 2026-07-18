// ============================================================
// FIREBASE CONFIGURATION — TopG INIT
// ============================================================
// To enable live leaderboard & cloud saves:
//  1. Go to https://console.firebase.google.com
//  2. Create a new project (free Spark plan is fine)
//  3. Add a Web App → copy the config object below
//  4. Enable Firestore Database (start in test mode)
//  5. Replace the placeholder values here with your real config
//
// Without a real config the app still works — scores save to
// localStorage only, and leaderboard shows local scores.
// ============================================================

window.firebaseConfig = {
    apiKey:            "YOUR_API_KEY",
    authDomain:        "YOUR_PROJECT_ID.firebaseapp.com",
    projectId:         "YOUR_PROJECT_ID",
    storageBucket:     "YOUR_PROJECT_ID.appspot.com",
    messagingSenderId: "YOUR_SENDER_ID",
    appId:             "YOUR_APP_ID"
};
