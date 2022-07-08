import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from '@firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBW-ELtx-DxTMQmDsY2UNtq8wwFHN117DE',
  authDomain: 'mindful-audio-337108.firebaseapp.com',
  databaseURL :'https://console.firebase.google.com/project/mindful-audio-337108/database/mindful-audio-337108-default-rtdb/data/~2F',
  projectId: 'mindful-audio-337108',
  storageBucket: 'mindful-audio-337108.appspot.com',
  messagingSenderId: '390828417450',
  appId: '1:390828417450:web:141c61e9866b44ae8b8bd3',
  measurementId: 'G-D1TRH3Q3VW',
};

const app = initializeApp(firebaseConfig);
export default app;
export const db = getFirestore(app);
const analytics = getAnalytics(app);
