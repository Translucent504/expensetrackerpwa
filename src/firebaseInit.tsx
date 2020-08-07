import firebase from 'firebase/app';
import 'firebase/messaging'

const firebaseConfig = {
  apiKey: "AIzaSyAO9lerY00uvy_R325oEM6Ap6vF9lCoHJc",
  authDomain: "bootcamp-push-e1107.firebaseapp.com",
  databaseURL: "https://bootcamp-push-e1107.firebaseio.com",
  projectId: "bootcamp-push-e1107",
  storageBucket: "bootcamp-push-e1107.appspot.com",
  messagingSenderId: "710824012143",
  appId: "1:710824012143:web:2dd42437f61f6e4933a09a"
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

messaging.requestPermission()
  .then(() => messaging.getToken())
  .then((token) => {
    console.log('Your Token is :\n', token, '\nThis token can be used to send notifications from firebase cloud messaging.')
  })