import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('houserentals.db'); //estate

export const createTable = () => {
    db.transaction(tx => {
        tx.executeSql("CREATE TABLE IF NOT EXISTS houses (id INTEGER PRIMARY KEY AUTOINCREMENT, sahip TEXT, kategori TEXT, baslik TEXT, aciklama TEXT, fiyat TEXT, konum TEXT, metrekare TEXT)", [], (tx, result) => { })
        tx.executeSql("CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, pass TEXT)", [], (tx, result) => { })
    });
};

export const query = (sql) => {
    return new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(
                sql,
                [],
                (_, { rows }) => {
                    resolve(rows._array)
                },
                (_, error) => reject(error)
            );
        });
    });
};