import mysql from 'mysql';

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'alfred',
    password: '05Alex08Isa@',
    database: 'buy-and-sale'
});

export const db = {
    connect: () => connection.connect(),
    query: (queryString, escapedValues) =>
        new Promise((resolve,reject) => {
            connection.query(queryString, escapedValues, (error,results,fields)=>{
                if(error) reject(error);
                resolve({results,fields});
            })
        }),
        end: () => connection.end(),
}