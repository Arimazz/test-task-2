import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/firebase-firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBLzeB6jH16_VZHfF3vd19Kf6hHiwfuwkA',
  authDomain: 'test-task-1-b1266.firebaseapp.com',
  databaseURL: 'https://test-task-1-b1266.firebaseio.com',
  projectId: 'test-task-1-b1266',
  storageBucket: 'test-task-1-b1266.appspot.com',
  messagingSenderId: '434956869687',
  appId: '1:434956869687:web:c84a25e43c830b178f9fb2',
};

class Firebase {
  constructor() {
    app.initializeApp(firebaseConfig);
    this.auth = app.auth();
    this.db = app.firestore();
  }

  login (email, password) {
    return this.auth.signInWithEmailAndPassword(email, password)
  }

  logOut () {
    return this.auth.signOut();
  }

  async register (name, email, password) {
    await this.auth.createUserWithEmailAndPassword(email, password);
    return this.auth.currentUser.updateProfile({
      displayName: name,
    })
  }

  isInitialized() {
    return new Promise(resolve => {
      this.auth.onAuthStateChanged(resolve)
    })
  }

  getCurrentUserName() {
    return this.auth.currentUser.displayName
  }
}

export default new Firebase();