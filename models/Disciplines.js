
const mysql = require('mysql');
const config = require('../config/config_mysql.js');

const connection = mysql.createConnection(config);

class Disciplines {
    static addDisciplines(obj) {
        return new Promise((resolve) => {
            const queryPosts = 'INSERT INTO `disciplines` (`name_discipline`,`abbreviation`) VALUES (?,?)';
            const arr = [obj.discipline, obj.abbreviation]
            connection.query(queryPosts, arr,(error, results) => {
                if (error) throw error;
                resolve(results);
            });
        });
    }

    static getAllDisciplines(){
        return new Promise((resolve => {
            const queryPosts = 'SELECT * FROM disciplines';
            connection.query(queryPosts,(error, results) => {
                if (error) throw error;
                resolve(results);
            });
        }));
    }

    static deleteDisciplines(obj){
        return new Promise((resolve => {
            const queryPosts = 'delete from disciplines where id_discipline = ?';
            const arr = obj.id_discipline;
            connection.query(queryPosts,arr,(error, results) => {
                if (error) throw error;
                resolve(results);
            });
        }));
    }
}

module.exports = Disciplines;
