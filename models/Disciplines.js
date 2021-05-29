const mysql = require('mysql2');
const config = require('../config/config_mysql.js');

const pool = mysql.createPool(config);

class Cadets {
    static addCadets(obj) {
        return new Promise((resolve) => {
            const queryPosts = 'INSERT INTO `cadets` (`name`,`surname`,`group_id`) VALUES (?,?,?)';
            const arr = [obj.name, obj.surname,]
            pool.query(queryPosts, arr,(error, results) => {
                if (error) throw error;
                resolve(results);
            });
        });
    }

    static getAllCadets(){
        return new Promise((resolve => {
            const queryPosts = 'SELECT * FROM cadets';
            pool.query(queryPosts,(error, results) => {
                if (error) throw error;
                resolve(results);
            });
        }));
    }

    static deleteCadets(obj){
        return new Promise((resolve => {
            const queryPosts = 'delete from cadets where id_cadet = ?';
            const arr = obj.id_cadet;
            pool.query(queryPosts,arr,(error, results) => {
                if (error) throw error;
                resolve(results);
            });
        }));
    }

    static getDisciplinesById(id){
        return new Promise((resolve => {
            const queryPosts = 'select * from disciplines where id_discipline = ?';
            const arr = id
            pool.query(queryPosts,arr,(error, results) => {
                if (error) throw error;
                resolve(results);
            });
        }));
    }
}

module.exports = Cadets;
