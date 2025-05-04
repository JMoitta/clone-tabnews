const dbName = "NotasMusicais";
const dbVersion = 1;

/** @type {IDBDatabase} */
export let db;
export async function createIndexedDB() {
  const request = window.indexedDB.open(dbName, dbVersion);

  request.onerror = (event) => {
    console.error("Why didn't you allow my web app to use IndexedDB?!");
  };

  request.onsuccess = (event) => {
    db = event.target.result;

    db.onerror = (event) => {
      // Generic error handler for all errors targeted at this database's
      // requests!
      console.error(`Database error: ${event.target.error?.message}`);
    };
  };

  request.onupgradeneeded = (event) => {
    /** @type {IDBDatabase} */
    const db = event.target.result;

    // Create an objectStore to hold information about our customers. We're
    // going to use "ssn" as our key path because it's guaranteed to be
    // unique - or at least that's what I was told during the kickoff meeting.
    const exercisesObjectStore = db.createObjectStore("exercicios", {
      keyPath: "id",
      autoIncrement: true,
    });

    // exercisesObjectStore.createIndex("date", "date", { unique: false });
    // exercisesObjectStore.createIndex("time", "time", { unique: false });
  };
}

if (typeof window !== "undefined") createIndexedDB();
