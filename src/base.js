import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDbFPslWohAhNSfORugd5ZpmIIIjB-gCj4",
  authDomain: "homeplan-ar.firebaseapp.com",
  databaseURL: "https://homeplan-ar.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

// Named export
export { firebaseApp };

export default base;