import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged, signInAnonymously } from "firebase/auth";
import {
  connectDatabaseEmulator,
  getDatabase,
  onValue,
  push,
  ref,
  remove,
  update,
} from "firebase/database";
import { reactive } from "vue";
import { Template } from "./templates";

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
if (import.meta.env.MODE === "test") {
  connectDatabaseEmulator(database, "localhost", 9000);
}

export function useBoards() {
  const boards = reactive<any>({});

  onValue(ref(database, `boards`), (snapshot) => {
    Object.entries(snapshot.val()).forEach(([key, value]) => {
      boards[key] = value;
    });
  });

  return boards;
}

export function useBoard(id: string) {
  const board = reactive<{ [key: string]: any }>({ loading: true });

  onValue(ref(database, `boards/${id}`), (snapshot) => {
    board.exists = snapshot.exists();
    board.loading = false;

    if (!board.exists) return;

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

export function setCardsHidden(boardId: string, hidden: boolean) {
  const board = ref(database, `boards/${boardId}`);
  update(board, { cardsHidden: hidden });
}

export function changeBoardTitle(boardId: string, title: string) {
  const board = ref(database, `boards/${boardId}`);
  update(board, { title });
}

export function addCard(boardId: string, columnId: string, card: CardDb) {
  const cards = ref(database, `boards/${boardId}/columns/${columnId}/cards`);
  push(cards, card);
}

export function removeCard(boardId: string, columnId: string, cardId: string) {
  remove(
    ref(database, `boards/${boardId}/columns/${columnId}/cards/${cardId}`)
  );
}

export async function addNewBoard(author: string, template: Template) {
  const boards = ref(database, "boards");
  const newBoard = await push(boards, {
    author,
    cardsHidden: true,
    title: "",
    columns: template.columns.map((column) => ({ ...column, cards: {} })),
  });
  return newBoard.key;
}

export function useUser() {
  const user = reactive<{ [key: string]: any }>({});

  const auth = getAuth();

  signInAnonymously(auth).catch((error) => {
    console.error(error);
  });

  onAuthStateChanged(auth, (firebaseUser) => {
    if (firebaseUser) {
      Object.entries(firebaseUser).forEach(([key, value]) => {
        user[key] = value;
      });
    }
  });

  return user;
}
