import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged, signInAnonymously } from "firebase/auth";
import { getDatabase, onValue, push, ref, remove } from "firebase/database";
import { reactive } from "vue";

const firebaseConfig = {
  apiKey: "AIzaSyAsXHXd9Spu67AO6DV06x2E_EnVOIAu9UU",
  authDomain: "quick-retro.firebaseapp.com",
  projectId: "quick-retro",
  storageBucket: "quick-retro.appspot.com",
  messagingSenderId: "293134428599",
  appId: "1:293134428599:web:bad71d4fedbda8080ce032",
  databaseURL:
    "https://quick-retro-default-rtdb.europe-west1.firebasedatabase.app",
};

const app = initializeApp(firebaseConfig);

const database = getDatabase(app);

export function useBoard(id: string) {
  const board = reactive<{ [key: string]: any }>({});

  onValue(ref(database, id), (snapshot) => {
    Object.entries(snapshot.val()).forEach(([key, value]) => {
      board[key] = value;
    });
  });

  return board;
}

interface CardDb {
  text: string;
  author: string;
}

export function addCard(boardId: string, columnId: string, card: CardDb) {
  const cards = ref(database, `${boardId}/columns/${columnId}/cards`);
  push(cards, card);
}

export function removeCard(boardId: string, columnId: string, cardId: string) {
  remove(ref(database, `${boardId}/columns/${columnId}/cards/${cardId}`));
}

export function useUser() {
  const user = reactive<{ [key: string]: any }>({});

  const auth = getAuth();

  signInAnonymously(auth).catch((error) => {
    console.error(error);
  });

  onAuthStateChanged(auth, (firebaseUser) => {
    console.log("auth status", firebaseUser);
    if (firebaseUser) {
      Object.entries(firebaseUser).forEach(([key, value]) => {
        user[key] = value;
      });
    }
  });

  return user;
}
