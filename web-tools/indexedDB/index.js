import { connectionIndexedDB } from "./createStructStore";

export async function save(exercicio) {
  const db = await connectionIndexedDB();
  const transaction = db.transaction(["exercicios"], "readwrite");
  const objectStore = transaction.objectStore("exercicios");
  const request = objectStore.add(exercicio);
}

export function load() {
  return new Promise(async (resolve) => {
    const db = await connectionIndexedDB();
    const transaction = db.transaction(["exercicios"], "readwrite");
    const request = transaction.objectStore("exercicios").getAll();
    request.onsuccess = (event) => {
      console.log(event);
      resolve(request.result);
    };
  });
}
