// ✅ Step 1: Define config
const firebaseConfig = {
    apiKey: "AIzaSyDcEbw0VmWAVv9ubxzkuOMH-YYVJnrAeYI",
    authDomain: "school-688d2.firebaseapp.com",
    projectId: "school-688d2",
    storageBucket: "school-688d2.appspot.com",
    messagingSenderId: "295157795041",
    appId: "1:295157795041:web:5bd1097394ac216a3a8fa0",
    measurementId: "G-WE9G8NPD9X"
};

// ✅ Step 2: Initialize Firebase
firebase.initializeApp(firebaseConfig);

// ✅ Step 3: Use functions
window.getFirebaseIdToken = async function () {
    const user = firebase.auth().currentUser;
    if (user) {
        try {
            const idToken = await user.getIdToken();
            console.log("ID Token: " + idToken); // ✅ Use JS syntax
            return idToken;
        } catch (error) {
            console.error("Error getting Firebase ID token:", error);
            return null;
        }
    } else {
        console.warn("⚠️ No user signed in.");
        return null;
    }
};

function storeFirebaseIdToken() {
    const user = firebase.auth().currentUser;
    if (user) {
        user.getIdToken(true).then(function (idToken) {
            localStorage.setItem("firebase_id_token", idToken);
        });
    }
}

// ✅ Monitor login status
// ✅ TEMP: Sign in with test credentials when page loads
window.syncFirebaseLogin = function (email, password) {
    return firebase.auth().signInWithEmailAndPassword(email, password)
        .then(userCredential => {
            console.log("✅ JS Firebase user signed in");
            return true;
        })
        .catch(error => {
            console.error("❌ JS Firebase login error:", error.message);
            return false;
        });
};

