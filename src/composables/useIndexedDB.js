import { ref } from 'vue';

export function useIndexDb() {
    const db = ref(null);

    async function openDb(name, version) {
        return new Promise((resolve, reject) => {
            const request = indexedDB.open(name, version);

            request.onupgradeneeded = (event) => {
                const database = event.target.result;

                if(!database.objectStoreNames.contains("transactions")) {
                    const store = database.createObjectStore("transactions", {
                        keyPath: "id",
                        autoIncrement: true
                    });
                    store.createIndex("id", "id", {unique: true});
                } 
            };

            request.onsuccess = (event) => {
                db.value = event.target.result;
                resolve(db.value);
            };

            request.onerror = (event) => reject(event.target.error)
        })
    }

    async function addTransaction(newTransaction) {
        if(!db.value) throw new Error("Database not yet open");
        
        return new Promise((resolve, reject) => {
            const trasaction = db.value.transaction(["trasactions"], "readwrite");
            const store = trasaction.objectStore("transactions");

            const request = store.add(newTransaction);

            request.onsuccess = () => resolve(true);
            request.onerror = (event) => reject(event.target.error);
        });
    };

    async function listTransactions() {
        if(!db.value) throw new Error("Database not yet open");

        return new Promise((resolve, reject) => {
            const trasaction = db.value.transaction(["trasactions"], "readonly");
            const store = trasaction.objectStore("transactions");

            const request = store.getAll();

            request.onsuccess = () => resolve(true);
            request.onerror = (event) => reject(event.target.error);
        });
    };

    return { db, openDb, addTransaction, listTransactions };

}