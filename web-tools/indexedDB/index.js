import { db } from "./createStructStore";

async function initDB() {
  if (typeof window != "undefined") {
    createIndexedDB();
    // /** @type {IDBDatabase} */
    // let db;
    // const request = window.indexedDB.open("MyTestDatabase", 3);

    // const customerData = [
    //   { ssn: "444-44-4444", name: "Bill", age: 35, email: "bill@company.com" },
    //   { ssn: "555-55-5555", name: "Donna", age: 32, email: "donna@home.org" },
    // ];
    // request.onerror = (event) => {
    //   console.error("Why didn't you allow my web app to use IndexedDB?!");
    // };
    // request.onsuccess = (event) => {
    //   db = event.target.result;

    //   db.onerror = (event) => {
    //     // Generic error handler for all errors targeted at this database's
    //     // requests!
    //     console.error(`Database error: ${event.target.error?.message}`);
    //   };
    // };

    // /**
    //  *
    //  * @param {IDBVersionChangeEvent} event
    //  */
    // request.onupgradeneeded = (event) => {
    //   /** @type {IDBDatabase} */
    //   const db = event.target.result;

    //   // Create an objectStore to hold information about our customers. We're
    //   // going to use "ssn" as our key path because it's guaranteed to be
    //   // unique - or at least that's what I was told during the kickoff meeting.
    //   const objectStore = db.createObjectStore("customers", { keyPath: "ssn" });

    //   // Create an index to search customers by name. We may have duplicates
    //   // so we can't use a unique index.
    //   objectStore.createIndex("name", "name", { unique: false });

    //   // Create an index to search customers by email. We want to ensure that
    //   // no two customers have the same email, so use a unique index.
    //   objectStore.createIndex("email", "email", { unique: true });
    //   objectStore.createIndex("tempo", "age", { unique: false });

    //   // Use transaction oncomplete to make sure the objectStore creation is
    //   // finished before adding data into it.
    //   objectStore.transaction.oncomplete = (event) => {
    //     // Store values in the newly created objectStore.
    //     const customerObjectStore = db
    //       .transaction("customers", "readwrite")
    //       .objectStore("customers");
    //     customerData.forEach((customer) => {
    //       customerObjectStore.add(customer);
    //     });
    //   };
    // };

    function save(exercise) {
      const transaction = db.transaction(["exercises"], "readwrite");
      const objectStore = transaction.objectStore("exercises");
      const request = objectStore.add(exercise);
    }

    save({ date: "20/04/2025", time: "18:33:12", question: [] });
  }
}

export function save(exercicio) {
  const transaction = db.transaction(["exercicios"], "readwrite");
  const objectStore = transaction.objectStore("exercicios");
  const request = objectStore.add(exercicio);
}

export function load() {
  return new Promise((resolve) => {
    const transaction = db.transaction(["exercicios"], "readwrite");
    const request = transaction.objectStore("exercicios").getAll();
    request.onsuccess = (event) => {
      console.log(event);
      resolve(request.result);
    };
  });
}
